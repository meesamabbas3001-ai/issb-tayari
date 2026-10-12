import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, Play, RotateCcw, Flame, Info, CheckCircle2, MessageSquareText } from 'lucide-react';
import { opiItems } from '../data/opiItems';
import { shuffled } from '../data/sentenceCompletion';

const ITEM_TIME = 20;

type Phase = 'idle' | 'running' | 'done';

export const OpiPractice: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [queue, setQueue] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(ITEM_TIME);
  const [input, setInput] = useState('');
  const [attempted, setAttempted] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [log, setLog] = useState<{ item: string; answer: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const nextItem = useCallback(
    (answer: string) => {
      const item = queue[current];
      if (answer.trim()) {
        setLog((l) => [...l, { item, answer: answer.trim() }]);
        setAttempted((a) => a + 1);
        setStreak((s) => {
          const ns = s + 1;
          setBestStreak((b) => Math.max(b, ns));
          return ns;
        });
      } else {
        setStreak(0);
      }
      setInput('');
      if (current + 1 >= queue.length) {
        stopTimer();
        setPhase('done');
      } else {
        setCurrent((c) => c + 1);
        setSecondsLeft(ITEM_TIME);
      }
    },
    [queue, current],
  );

  useEffect(() => {
    if (phase !== 'running') return;
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          nextItem(inputRef.current?.value ?? '');
          return ITEM_TIME;
        }
        return s - 1;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, current]);

  useEffect(() => {
    if (phase === 'running') inputRef.current?.focus();
  }, [phase, current]);

  const start = () => {
    setQueue(shuffled(opiItems));
    setCurrent(0);
    setSecondsLeft(ITEM_TIME);
    setInput('');
    setAttempted(0);
    setStreak(0);
    setBestStreak(0);
    setLog([]);
    setPhase('running');
  };

  const item = queue[current] ?? '';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Situation Practice (OPI Style)
      </h1>
      <p className="text-army-700 font-medium mb-6">Mushkil halaat me fori aur durust faisla</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">How to use:</strong> ek situation aayegi —{' '}
          <strong>20 second</strong> me likho ke tum kya karoge. Jawab me <strong>imandari, himmat aur
          zimmedari</strong> dikhao. Ye sample situations hain — asal test ki nahi.
        </p>
      </div>

      {phase === 'idle' && (
        <div className="text-center bg-paper border-2 border-army-900 rounded-sm p-10">
          <MessageSquareText className="w-12 h-12 text-army-800 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-xl text-army-950 mb-2">12 situations. 20 seconds each.</h2>
          <p className="text-ink-soft mb-6">Sochna nahi — fori, natural jawab do!</p>
          <button
            onClick={start}
            className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
          >
            <Play className="w-5 h-5" /> Start Practice
          </button>
        </div>
      )}

      {phase === 'running' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-bold text-khaki-600">
              Situation {current + 1} / {queue.length}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-army-900">
              <Flame className="w-4 h-4 text-gold-600" /> Streak: {streak}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 font-black text-2xl tabular-nums ${
                secondsLeft <= 5 ? 'text-red-700' : 'text-army-900'
              }`}
            >
              <Timer className="w-5 h-5" /> {secondsLeft}s
            </span>
          </div>

          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-khaki-600 font-bold mb-2">Situation</p>
            <p className="font-serif font-bold text-2xl sm:text-3xl text-army-950 leading-snug">{item}</p>
          </div>

          <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${secondsLeft <= 5 ? 'bg-red-700' : 'bg-army-700'}`}
              style={{ width: `${(secondsLeft / ITEM_TIME) * 100}%` }}
            />
          </div>

          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && nextItem(input)}
              placeholder="Mei ___ karunga/karungi..."
              className="flex-1 border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white"
              maxLength={140}
            />
            <button
              onClick={() => nextItem(input)}
              className="bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
            >
              Submit
            </button>
          </div>
          <p className="text-xs text-khaki-600 mt-3 text-center">
            Attempted: {attempted} &bull; Best streak: {bestStreak}
          </p>
        </div>
      )}

      {phase === 'done' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="text-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-army-700 mx-auto mb-3" />
            <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Session Complete!</h2>
            <p className="text-ink-soft">
              Attempted <strong className="text-army-900">{attempted}/{queue.length}</strong> &bull;
              Best streak <strong className="text-army-900">{bestStreak}</strong>
            </p>
            <p className="text-sm text-ink-soft mt-2 max-w-md mx-auto">
              {attempted >= 10
                ? 'Zabardast faisla-sazi! Ab in jawabat me officer jaisi soch check karo.'
                : 'Roz practice karo — mushkil halaat me fori faisla aadat banta hai.'}
            </p>
          </div>

          {log.length > 0 && (
            <div className="mb-6">
              <h3 className="font-serif font-bold text-army-900 mb-3">Tumharay jawab (review karo):</h3>
              <div className="max-h-64 overflow-y-auto space-y-2">
                {log.map((l, i) => (
                  <div key={i} className="bg-paper-dark border border-khaki-300 rounded-sm px-4 py-2.5 text-sm">
                    <p className="font-bold text-army-800 text-xs mb-1">{l.item}</p>
                    <p className="text-ink-soft">{l.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-khaki-600 mt-3">
                Khud check karo: kya jawab me imandari + himmat + zimmedari hai? "Bhaag jaunga" jaisa jawab to nahi?
              </p>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={start}
              className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Practice Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
