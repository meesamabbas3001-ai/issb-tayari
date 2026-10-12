import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, Play, RotateCcw, Info, CheckCircle2, ChevronLeft, ChevronRight, ClipboardList } from 'lucide-react';
import { srtSituations, SRT_FULL_MINUTES } from '../data/srtSituations';

type Phase = 'idle' | 'running' | 'done';
type Mode = 'full' | 'practice';

const STORAGE_KEY = 'srt-answers-v1';
const FULL_SECONDS = SRT_FULL_MINUTES * 60;

function loadAnswers(): Record<number, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, string>;
    const out: Record<number, string> = {};
    for (const k of Object.keys(parsed)) {
      const n = Number(k);
      if (!Number.isNaN(n) && typeof parsed[k] === 'string') out[n] = parsed[k];
    }
    return out;
  } catch {
    return {};
  }
}

function formatTime(total: number): string {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export const SrtSimulator: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [mode, setMode] = useState<Mode>('full');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(FULL_SECONDS);
  const timerRef = useRef<number | null>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const finish = useCallback(() => {
    stopTimer();
    setPhase('done');
  }, []);

  // Countdown only in full mode
  useEffect(() => {
    if (phase !== 'running' || mode !== 'full') return;
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          finish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, mode]);

  useEffect(() => {
    if (phase === 'running') textRef.current?.focus();
  }, [phase, current]);

  const start = (m: Mode) => {
    setMode(m);
    setAnswers(loadAnswers());
    setCurrent(0);
    setSecondsLeft(FULL_SECONDS);
    setPhase('running');
  };

  const saveAnswer = (idx: number, text: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [idx]: text };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — practice continues */
      }
      return next;
    });
  };

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= srtSituations.length) return;
    setCurrent(idx);
  };

  const answeredCount = Object.values(answers).filter((a) => a.trim().length > 0).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        SRT Practice
      </h1>
      <p className="text-army-700 font-medium mb-6">Situation Reaction Test — faisla karne ki raftar</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Ye kya hai:</strong> 60 chhoti situations — har ek me
          koi mushkil halaat hai. Tumhe <strong>ek wazeh action</strong> likhna hai: "He..." ke
          baad <strong>wo kya karega</strong>. Ye sirf practice hai — asal test ki situations nahi.
        </p>
      </div>

      {phase === 'idle' && (
        <div>
          <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 mb-6">
            <h2 className="font-serif font-bold text-xl text-army-950 mb-4">Kaise attempt karo — 4 tips</h2>
            <ul className="space-y-3 text-sm text-ink-soft leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-army-700 shrink-0" />
                <span><strong className="text-army-900">Positive action likho</strong> — bhagna, rona ya "pata nahi" nahi. Kuch karo, kisi ki madad karo.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-army-700 shrink-0" />
                <span><strong className="text-army-900">Ek wazeh solution</strong> — 1-2 line me seedha jawab. Lambi kahani nahi.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-army-700 shrink-0" />
                <span><strong className="text-army-900">~30 second per situation</strong> — asal test me 60 situations, 30 minute. Rukna mana hai.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-army-700 shrink-0" />
                <span><strong className="text-army-900">Skip mat karo</strong> — har situation ka jawab likho, chahe chhota ho.</span>
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="text-center bg-paper border-2 border-army-900 rounded-sm p-8">
              <Timer className="w-10 h-10 text-army-800 mx-auto mb-3" />
              <h2 className="font-serif font-bold text-lg text-army-950 mb-1">Full Test</h2>
              <p className="text-sm text-ink-soft mb-5">60 situations • 30 minute timer — asal jaisa pressure</p>
              <button
                onClick={() => start('full')}
                className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <Play className="w-5 h-5" /> Start Full Test
              </button>
            </div>
            <div className="text-center bg-paper border-2 border-khaki-400 rounded-sm p-8">
              <ClipboardList className="w-10 h-10 text-army-800 mx-auto mb-3" />
              <h2 className="font-serif font-bold text-lg text-army-950 mb-1">Practice Mode</h2>
              <p className="text-sm text-ink-soft mb-5">60 situations • koi timer nahi — araam se seekho</p>
              <button
                onClick={() => start('practice')}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <Play className="w-5 h-5" /> Start Practice
              </button>
            </div>
          </div>
        </div>
      )}

      {phase === 'running' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-khaki-600">
              Situation {current + 1} / {srtSituations.length}
            </span>
            {mode === 'full' ? (
              <span
                className={`inline-flex items-center gap-1.5 font-black text-xl tabular-nums ${
                  secondsLeft <= 120 ? 'text-red-700' : 'text-army-900'
                }`}
              >
                <Timer className="w-5 h-5" /> {formatTime(secondsLeft)}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800">
                <ClipboardList className="w-4 h-4" /> Practice mode — no timer
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-army-700 transition-all"
              style={{ width: `${((current + 1) / srtSituations.length) * 100}%` }}
            />
          </div>

          <div className="bg-paper-dark border border-khaki-300 rounded-sm p-5 mb-5">
            <p className="text-lg text-ink leading-relaxed font-medium">{srtSituations[current]}</p>
          </div>

          <textarea
            ref={textRef}
            value={answers[current] ?? ''}
            onChange={(e) => saveAnswer(current, e.target.value)}
            placeholder="He... (yahan uska action likho — 1-2 line)"
            rows={3}
            maxLength={300}
            className="w-full border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white mb-5"
          />

          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="inline-flex items-center gap-1 bg-khaki-200 hover:bg-khaki-300 disabled:opacity-40 disabled:cursor-not-allowed text-army-950 font-bold px-5 py-2.5 rounded-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" /> Pichli
            </button>
            <span className="text-xs font-bold text-khaki-600">
              {answeredCount}/{srtSituations.length} answered
            </span>
            {current + 1 < srtSituations.length ? (
              <button
                onClick={() => goTo(current + 1)}
                className="inline-flex items-center gap-1 bg-army-900 hover:bg-army-800 text-white font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                Agli <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={finish}
                className="inline-flex items-center gap-1 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                <CheckCircle2 className="w-5 h-5" /> Finish
              </button>
            )}
          </div>
          <p className="text-xs text-khaki-600 mt-4 text-center">
            Jawab auto-save ho rahe hain — page band bhi ho jaye to wapas aa kar jari rakh sakte ho.
          </p>
        </div>
      )}

      {phase === 'done' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="text-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-army-700 mx-auto mb-3" />
            <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Test Complete!</h2>
            <p className="text-ink-soft">
              Attempted <strong className="text-army-900">{answeredCount}/{srtSituations.length}</strong> situations
              {mode === 'full' && secondsLeft === 0 && ' (time khatam ho gaya tha)'}
            </p>
            <p className="text-sm text-ink-soft mt-2 max-w-md mx-auto">
              {answeredCount >= 55
                ? 'Zabardast! Poora test attempt kiya — yehi asal kamyabi hai. Ab neeche apne jawab review karo.'
                : answeredCount >= 35
                  ? 'Achi koshish! Agli baar tezz likho — har situation par 30 second se zyada mat lagao.'
                  : 'Shuruaat ho gayi! SRT me sab se bara usool: koi situation khaali mat chhoro. Phir try karo.'}
            </p>
          </div>

          {answeredCount > 0 && (
            <div className="mb-6">
              <h3 className="font-serif font-bold text-army-900 mb-3">Tumharay jawab (review karo):</h3>
              <div className="max-h-72 overflow-y-auto space-y-3">
                {srtSituations.map((sit, i) =>
                  answers[i]?.trim() ? (
                    <div key={i} className="bg-paper-dark border border-khaki-300 rounded-sm px-4 py-3 text-sm">
                      <p className="text-khaki-600 text-xs font-bold mb-1">Situation {i + 1}</p>
                      <p className="text-ink-soft mb-1.5">{sit}</p>
                      <p className="text-ink font-medium">→ {answers[i].trim()}</p>
                    </div>
                  ) : null,
                )}
              </div>
              <p className="text-xs text-khaki-600 mt-3">
                Khud check karo: kya har jawab me <strong>action</strong> hai? "Madad karunga" se behtar hai "use hospital le jaunga".
              </p>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => start(mode)}
              className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Dobara Practice
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
