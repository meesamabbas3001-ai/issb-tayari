import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, Play, RotateCcw, Flame, Info, CheckCircle2 } from 'lucide-react';
import { watWords, shuffled } from '../data/watWords';

const WORD_TIME = 10;

type Phase = 'idle' | 'running' | 'done';

export const WatSimulator: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [queue, setQueue] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(WORD_TIME);
  const [input, setInput] = useState('');
  const [attempted, setAttempted] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [log, setLog] = useState<{ word: string; sentence: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const nextWord = useCallback(
    (sentence: string) => {
      const word = queue[current];
      if (sentence.trim()) {
        setLog((l) => [...l, { word, sentence: sentence.trim() }]);
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
        setSecondsLeft(WORD_TIME);
      }
    },
    [queue, current],
  );

  useEffect(() => {
    if (phase !== 'running') return;
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          nextWord(inputRef.current?.value ?? '');
          return WORD_TIME;
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
    const words = shuffled(watWords).slice(0, 20);
    setQueue(words);
    setCurrent(0);
    setSecondsLeft(WORD_TIME);
    setInput('');
    setAttempted(0);
    setStreak(0);
    setBestStreak(0);
    setLog([]);
    setPhase('running');
  };

  const word = queue[current] ?? '';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        WAT Simulator
      </h1>
      <p className="text-army-700 font-medium mb-6">Word Association Test — asal pressure, ghar baithe</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">How to use:</strong> ek lafz screen par aayega —{' '}
          <strong>10 second</strong> me ek chhota <strong>positive</strong> jumla likho aur Submit
          dabao (ya Enter). Time khatam = agla lafz. Maqsad: tezz, natural, positive soch ki
          practice. Ye sirf practice hai — asal test ke alfaaz nahi.
        </p>
      </div>

      {phase === 'idle' && (
        <div className="text-center bg-paper border-2 border-army-900 rounded-sm p-10">
          <Timer className="w-12 h-12 text-army-800 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-xl text-army-950 mb-2">20 words. 10 seconds each.</h2>
          <p className="text-ink-soft mb-6">Ready ho? Timer shuru hote hi pehla lafz aayega!</p>
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
              Word {current + 1} / {queue.length}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-army-900">
              <Flame className="w-4 h-4 text-gold-600" /> Streak: {streak}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 font-black text-2xl tabular-nums ${
                secondsLeft <= 3 ? 'text-red-700' : 'text-army-900'
              }`}
            >
              <Timer className="w-5 h-5" /> {secondsLeft}s
            </span>
          </div>

          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-khaki-600 font-bold mb-2">Your word</p>
            <p className="font-serif font-black text-5xl text-army-950">{word}</p>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${secondsLeft <= 3 ? 'bg-red-700' : 'bg-army-700'}`}
              style={{ width: `${(secondsLeft / WORD_TIME) * 100}%` }}
            />
          </div>

          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && nextWord(input)}
              placeholder="Ek chhota positive jumla likho..."
              className="flex-1 border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white"
              maxLength={120}
            />
            <button
              onClick={() => nextWord(input)}
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
              Attempted <strong className="text-army-900">{attempted}/20</strong> &bull; Best streak{' '}
              <strong className="text-army-900">{bestStreak}</strong>
            </p>
            <p className="text-sm text-ink-soft mt-2 max-w-md mx-auto">
              {attempted >= 17
                ? 'Zabardast! Speed aur positivity dono solid hain. Roz practice jari rakho.'
                : attempted >= 10
                  ? 'Achi shuruaat! Roz 15 minute practice se speed barhegi.'
                  : 'Koi baat nahi — shuruaat mushkil hoti hai. Kal phir try karo, behtar hoga!'}
            </p>
          </div>

          {log.length > 0 && (
            <div className="mb-6">
              <h3 className="font-serif font-bold text-army-900 mb-3">Tumharay jumlay (review karo):</h3>
              <div className="max-h-64 overflow-y-auto space-y-2">
                {log.map((l, i) => (
                  <div key={i} className="bg-paper-dark border border-khaki-300 rounded-sm px-4 py-2.5 text-sm">
                    <span className="font-bold text-army-800 uppercase text-xs tracking-wide">{l.word}:</span>{' '}
                    <span className="text-ink-soft">{l.sentence}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-khaki-600 mt-3">
                Khud check karo: kya jumlay positive aur natural hain? Koi rata hua to nahi lag raha?
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
