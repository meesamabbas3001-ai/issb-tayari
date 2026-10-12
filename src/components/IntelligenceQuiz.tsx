import React, { useState, useEffect, useRef } from 'react';
import { Brain, Play, RotateCcw, Timer, CheckCircle2, XCircle, Info } from 'lucide-react';
import { quizQuestions, SECONDS_PER_QUESTION } from '../data/quizQuestions';

type Phase = 'idle' | 'running' | 'done';

export const IntelligenceQuiz: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_QUESTION);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const timerRef = useRef<number | null>(null);
  const lockedRef = useRef(false);

  const q = quizQuestions[current];

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goNext = (wasCorrect: boolean) => {
    setAnswers((a) => [...a, wasCorrect]);
    if (wasCorrect) setScore((s) => s + 1);
    if (current + 1 >= quizQuestions.length) {
      stopTimer();
      setPhase('done');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      lockedRef.current = false;
      setSecondsLeft(SECONDS_PER_QUESTION);
    }
  };

  const answer = (idx: number) => {
    if (lockedRef.current || phase !== 'running') return;
    lockedRef.current = true;
    stopTimer();
    setSelected(idx);
    const correct = idx === q.answerIndex;
    window.setTimeout(() => goNext(correct), 2200);
  };

  useEffect(() => {
    if (phase !== 'running') return;
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (!lockedRef.current) {
            lockedRef.current = true;
            setSelected(-1);
            window.setTimeout(() => goNext(false), 2200);
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, current]);

  const start = () => {
    setCurrent(0);
    setSecondsLeft(SECONDS_PER_QUESTION);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    lockedRef.current = false;
    setPhase('running');
  };

  const pct = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Intelligence Quiz
      </h1>
      <p className="text-army-700 font-medium mb-6">10 sample verbal questions &bull; 30 seconds each</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Note:</strong> ye 10 sawal <strong>hum ne khud</strong>{' '}
          practice ke liye likhay hain — asal test ke <strong>nahi</strong> hain. Koi bhi website
          asal papers nahi de sakti. Har sawal ke liye 30 second, jawab ke baad wazahat milegi.
        </p>
      </div>

      {phase === 'idle' && (
        <div className="text-center bg-paper border-2 border-army-900 rounded-sm p-10">
          <Brain className="w-12 h-12 text-army-800 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-xl text-army-950 mb-2">
            10 questions. 30 seconds each.
          </h2>
          <p className="text-ink-soft mb-6">Day-1 screening jaisa pressure — tayyar ho?</p>
          <button
            onClick={start}
            className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
          >
            <Play className="w-5 h-5" /> Start Quiz
          </button>
        </div>
      )}

      {phase === 'running' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-khaki-600">
              Question {current + 1} / {quizQuestions.length}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 font-black text-xl tabular-nums ${
                secondsLeft <= 5 ? 'text-red-700' : 'text-army-900'
              }`}
            >
              <Timer className="w-5 h-5" /> {secondsLeft}s
            </span>
          </div>
          <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${secondsLeft <= 5 ? 'bg-red-700' : 'bg-army-700'}`}
              style={{ width: `${(secondsLeft / SECONDS_PER_QUESTION) * 100}%` }}
            />
          </div>

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-army-950 mb-6 leading-snug">
            {q.question}
          </h2>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answerIndex;
              const isSelected = i === selected;
              let cls = 'border-khaki-300 bg-white hover:border-army-700 hover:bg-khaki-100';
              if (selected !== null) {
                if (isAnswer) cls = 'border-army-700 bg-army-900 text-white';
                else if (isSelected) cls = 'border-red-700 bg-red-50 text-red-900';
                else cls = 'border-khaki-300 bg-white opacity-60';
              }
              return (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  disabled={selected !== null}
                  className={`w-full text-left border-2 rounded-sm px-4 py-3.5 font-medium transition-all flex items-center justify-between gap-3 ${cls}`}
                >
                  <span>{opt}</span>
                  {selected !== null && isAnswer && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                  {selected !== null && isSelected && !isAnswer && (
                    <XCircle className="w-5 h-5 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 bg-khaki-100 border-l-4 border-gold-500 rounded-sm p-4">
              <p className="text-sm font-bold text-army-900 mb-1">
                {selected === q.answerIndex ? 'Sahi jawab! ✓' : selected === -1 ? 'Time khatam!' : 'Ghalat — koi baat nahi!'}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">{q.explanation}</p>
            </div>
          )}
        </div>
      )}

      {phase === 'done' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 text-center">
          <Brain className="w-12 h-12 text-army-800 mx-auto mb-3" />
          <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Quiz Complete!</h2>
          <p className="font-serif font-black text-5xl text-army-900 my-4">
            {score}<span className="text-2xl text-khaki-600">/{quizQuestions.length}</span>
          </p>
          <p className="text-ink-soft max-w-md mx-auto mb-6">
            {pct >= 80
              ? 'Outstanding! Screening-day speed tumharay paas hai. Isay barqarar rakho!'
              : pct >= 50
                ? 'Achi koshish! Jin sawalon me time laga, unki type ki roz practice karo.'
                : 'Shuruaat hai — ghabrao mat! Roz 10 sawal timed practice karo, 2 haftay me farq nazar aayega.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {answers.map((a, i) => (
              <span
                key={i}
                className={`w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold ${
                  a ? 'bg-army-800 text-white' : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <button
            onClick={start}
            className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
          >
            <RotateCcw className="w-5 h-5" /> Practice Again
          </button>
        </div>
      )}
    </div>
  );
};
