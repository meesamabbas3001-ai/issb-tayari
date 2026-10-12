import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Eye, PenLine, CheckCircle2, RotateCcw, Info, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { pointerPrompts, type PointerPrompt } from '../data/pointerStories';

const WRITE_TIME = 180; // 3 minutes per story
const STORAGE_KEY = 'pointer-story-v1';

type Phase = 'pick' | 'write' | 'done';

const checklistItems = [
  'Kahani me ek wazeh HERO (markazi kirdaar) hai',
  'Pointer wali situation se kahani shuru hoti hai',
  'Hero ne AMAL kiya (sirf socha nahi)',
  'Ending POSITIVE hai (ummid, kamyabi, madad)',
  'Kahani 100-150 alfaaz ki hai',
];

function loadStories(): Record<number, string> {
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

export const PointerStory: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('pick');
  const [prompt, setPrompt] = useState<PointerPrompt>(pointerPrompts[0]);
  const [secondsLeft, setSecondsLeft] = useState(WRITE_TIME);
  const [stories, setStories] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<boolean[]>(new Array(checklistItems.length).fill(false));
  const timerRef = useRef<number | null>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const story = stories[prompt.id] ?? '';
  const wordCount = story.trim() ? story.trim().split(/\s+/).length : 0;
  const answeredCount = Object.values(stories).filter((s) => s.trim().length > 0).length;

  useEffect(() => {
    stopTimer();
    if (phase === 'write') {
      setSecondsLeft(WRITE_TIME);
      areaRef.current?.focus();
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setPhase('done');
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, prompt.id]);

  const saveStory = (id: number, text: string) => {
    setStories((prev) => {
      const next = { ...prev, [id]: text };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — practice continues */
      }
      return next;
    });
  };

  const startWrite = (p: PointerPrompt) => {
    setPrompt(p);
    setStories(loadStories());
    setChecked(new Array(checklistItems.length).fill(false));
    setPhase('write');
  };

  const goTo = (id: number) => {
    const p = pointerPrompts.find((x) => x.id === id);
    if (p) setPrompt(p);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const toggleCheck = (i: number) => {
    setChecked((c) => c.map((v, j) => (j === i ? !v : v)));
  };

  const score = checked.filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Pointer Story Practice
      </h1>
      <p className="text-army-700 font-medium mb-6">Tasveer nahi — sirf ek line ka ishara (pointer), kahani tum banao</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Asal pattern:</strong> tumhe sirf <strong>ek pointer</strong> (1-2
          line ka scenario) milta hai — koi tasveer nahi. <strong>3 minute</strong> me poori kahani
          likho: Hero + masla + amal + positive ending. Ye practice pointers hain — asal test ke nahi.
        </p>
      </div>

      {phase === 'pick' && (
        <div>
          <h2 className="font-serif font-bold text-xl text-army-950 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Pointer chuno ({pointerPrompts.length}):
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pointerPrompts.map((p) => (
              <button
                key={p.id}
                onClick={() => startWrite(p)}
                className="bg-paper border-2 border-army-900 rounded-sm p-5 hover:border-gold-500 transition-colors text-left group"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-khaki-600 mb-1">
                  Pointer {p.id}
                </p>
                <p className="font-serif font-bold text-army-950 group-hover:text-gold-600 mb-2">{p.title}</p>
                <p className="text-sm text-ink-soft line-clamp-2 italic">{p.pointer}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 mt-3">
                  <Play className="w-4 h-4" /> Start
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === 'write' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-khaki-600">
              Pointer {prompt.id} / {pointerPrompts.length}
            </span>
            <span className={`inline-flex items-center gap-1.5 font-black text-2xl tabular-nums ${secondsLeft <= 30 ? 'text-red-700' : 'text-army-900'}`}>
              <Timer className="w-5 h-5" /> {fmt(secondsLeft)}
            </span>
          </div>
          <div className="h-2 bg-khaki-200 rounded-full mb-5 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${secondsLeft <= 30 ? 'bg-red-700' : 'bg-gold-500'}`}
              style={{ width: `${(secondsLeft / WRITE_TIME) * 100}%` }}
            />
          </div>

          <div className="bg-paper-dark border border-khaki-300 rounded-sm p-5 mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-khaki-600 mb-2">{prompt.title}</p>
            <p className="text-lg text-ink leading-relaxed font-medium">{prompt.pointer}</p>
          </div>

          <textarea
            ref={areaRef}
            value={story}
            onChange={(e) => saveStory(prompt.id, e.target.value)}
            placeholder="Apni kahani yahan likho... (Hero kaun? Masla kya? Us ne kya kiya? Ending kaisi?)"
            className="w-full h-56 border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white leading-relaxed"
          />
          <div className="flex items-center justify-between mt-3 mb-5">
            <span className="text-sm font-bold text-army-800">Alfaaz: {wordCount}</span>
            <span className="text-xs font-bold text-khaki-600">{answeredCount}/{pointerPrompts.length} stories likhi</span>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo(prompt.id - 1)}
              disabled={prompt.id === 1}
              className="inline-flex items-center gap-1 bg-khaki-200 hover:bg-khaki-300 disabled:opacity-40 disabled:cursor-not-allowed text-army-950 font-bold px-5 py-2.5 rounded-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" /> Pichla
            </button>
            {prompt.id < pointerPrompts.length ? (
              <button
                onClick={() => goTo(prompt.id + 1)}
                className="inline-flex items-center gap-1 bg-army-900 hover:bg-army-800 text-white font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                Agla <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => { stopTimer(); setPhase('done'); }}
                className="inline-flex items-center gap-1 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                <PenLine className="w-5 h-5" /> Finish
              </button>
            )}
          </div>
          <p className="text-xs text-khaki-600 mt-4 text-center">
            <Eye className="w-3.5 h-3.5 inline mr-1" />
            Kahani auto-save ho rahi hai — beech me pointer badalne par timer dobara 3 minute se shuru hoga.
          </p>
        </div>
      )}

      {phase === 'done' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="text-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-army-700 mx-auto mb-3" />
            <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Practice Complete!</h2>
            <p className="text-ink-soft">
              <strong className="text-army-900">{answeredCount}/{pointerPrompts.length}</strong> kahaniyan likhi
            </p>
          </div>

          {answeredCount > 0 && (
            <div className="mb-6">
              <h3 className="font-serif font-bold text-army-900 mb-3">Tumhari kahaniyan (review karo):</h3>
              <div className="max-h-72 overflow-y-auto space-y-3">
                {pointerPrompts.map((p) =>
                  stories[p.id]?.trim() ? (
                    <div key={p.id} className="bg-paper-dark border border-khaki-300 rounded-sm px-4 py-3 text-sm">
                      <p className="text-khaki-600 text-xs font-bold mb-1">Pointer {p.id} — {p.title}</p>
                      <p className="text-ink-soft italic mb-1.5">{p.pointer}</p>
                      <p className="text-ink font-medium whitespace-pre-wrap">→ {stories[p.id].trim()}</p>
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          )}

          <h3 className="font-serif font-bold text-army-900 mb-3">Aakhri kahani khud check karo (tick lagao):</h3>
          <div className="space-y-2 mb-6">
            {checklistItems.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleCheck(i)}
                className={`w-full flex items-start gap-3 text-left border-2 rounded-sm px-4 py-3 text-sm transition-colors ${
                  checked[i] ? 'border-army-700 bg-army-900/5' : 'border-khaki-300 bg-white'
                }`}
              >
                <span className={`w-5 h-5 shrink-0 rounded-sm border-2 flex items-center justify-center mt-0.5 ${checked[i] ? 'bg-army-700 border-army-700 text-white' : 'border-khaki-400'}`}>
                  {checked[i] && <CheckCircle2 className="w-4 h-4" />}
                </span>
                <span className={checked[i] ? 'text-army-900 font-semibold' : 'text-ink-soft'}>{item}</span>
              </button>
            ))}
          </div>

          <p className="text-sm text-ink-soft mb-6 bg-khaki-100 border border-khaki-400 rounded-sm p-4">
            <strong className="text-army-900">Tip:</strong>{' '}
            {score >= 4 ? 'Zabardast structure! Ab 3 minute me poori kahani likhne ki raftar banao.' : 'Structure yaad rakho: POINTER → HERO → MASLA → AMAL → POSITIVE ENDING. Phir se try karo!'}
          </p>

          <div className="text-center">
            <button
              onClick={() => setPhase('pick')}
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
