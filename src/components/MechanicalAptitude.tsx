import React, { useState, useEffect, useRef } from 'react';
import {
  Cog, Play, RotateCcw, Timer, CheckCircle2, XCircle, Info,
} from 'lucide-react';
import { matQuestions, type MatQ } from '../data/matQuestions';

type Phase = 'idle' | 'running' | 'done';
const QUESTIONS_PER_TEST = 20;
const SECONDS_PER_QUESTION = 30;

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

export const MechanicalAptitude: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [questions, setQuestions] = useState<MatQ[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_QUESTION);
  const [score, setScore] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase !== 'running') return;
    setSecondsLeft(SECONDS_PER_QUESTION);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, phase]);

  const startTest = () => {
    setQuestions(pickRandom(matQuestions, QUESTIONS_PER_TEST));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setPhase('running');
  };

  const nextQuestion = (wasCorrect: boolean) => {
    if (wasCorrect) setScore((s) => s + 1);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setPhase('done');
      }
    }, 1400);
  };

  const handleTimeout = () => {
    if (selected !== null) return;
    nextQuestion(false);
  };

  const handleSelect = (idx: number) => {
    if (selected !== null || phase !== 'running') return;
    if (timerRef.current) clearInterval(timerRef.current);
    setSelected(idx);
    nextQuestion(idx === questions[current].answer);
  };

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  // ---------------- idle ----------------
  if (phase === 'idle') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-sm shadow-md border-t-4 border-army-700 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-army-700 rounded-sm flex items-center justify-center text-gold-400">
              <Cog className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-army-900">Mechanical Aptitude Test</h1>
              <p className="text-sm text-gray-500">Technical branches ke liye — gears, pulleys, levers, circuits</p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-khaki-100 border border-khaki-300 rounded-sm p-3 mb-6 mt-4">
            <Info className="w-5 h-5 text-army-700 shrink-0 mt-0.5" />
            <p className="text-sm text-army-900">
              <strong>Ye kya hai:</strong> gears, pulley, lever, ramp, screw, bijli ke circuits,
              auzaar aur units — roz ke mechanical sawalat. <strong>{matQuestions.length} practice
              questions</strong> ka pool, har test me <strong>20 random</strong>, har sawal par{' '}
              <strong>{SECONDS_PER_QUESTION} second</strong>. Har jawab ke baad wazahat (explanation) bhi milegi.
              Ye practice questions hain — asal test ke nahi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
            {['Gears', 'Pulleys', 'Levers', 'Circuits'].map((t) => (
              <div key={t} className="bg-khaki-100 border border-khaki-300 rounded-sm px-2 py-3 text-sm font-bold text-army-800">
                {t}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
            {['Ramps', 'Screws', 'Tools', 'Units'].map((t) => (
              <div key={t} className="bg-khaki-100 border border-khaki-300 rounded-sm px-2 py-3 text-sm font-bold text-army-800">
                {t}
              </div>
            ))}
          </div>

          <div className="bg-army-900 rounded-sm p-5 text-center">
            <p className="text-khaki-200 text-sm mb-1">
              {QUESTIONS_PER_TEST} random questions • {SECONDS_PER_QUESTION} seconds each • instant feedback + explanation
            </p>
            <button
              onClick={startTest}
              className="mt-3 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-8 py-3 rounded-sm transition-colors"
            >
              <Play className="w-5 h-5" /> Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- done ----------------
  if (phase === 'done') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-sm shadow-md border-t-4 border-army-700 p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl font-bold text-army-900 mb-2">Test Complete</h2>
            <p className="text-sm text-gray-500 mb-6">Mechanical Aptitude — {questions.length} questions</p>
            <div className="w-32 h-32 mx-auto rounded-full bg-army-900 flex items-center justify-center mb-4">
              <span className="font-serif text-4xl font-bold text-gold-400">{percentage}%</span>
            </div>
            <p className="text-lg text-army-900 mb-1">
              <strong>{score}</strong> / {questions.length} correct
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {percentage >= 80
                ? 'Zabardast! Technical branch ke liye achi tayari.'
                : percentage >= 50
                  ? 'Theek hai — gears aur circuits par aur practice karo.'
                  : 'Himmat na haro — neeche explanations parho, phir dobara try karo.'}
            </p>
          </div>

          <h3 className="font-serif font-bold text-army-900 mb-3">Jawabat aur wazahat (review karo):</h3>
          <div className="max-h-96 overflow-y-auto space-y-3 mb-6">
            {questions.map((q, i) => (
              <div key={i} className="bg-khaki-100 border border-khaki-300 rounded-sm px-4 py-3 text-sm">
                <p className="font-bold text-army-950 mb-1">Q{i + 1}. {q.q}</p>
                <p className="text-green-700 font-semibold mb-1">✓ {q.options[q.answer]}</p>
                <p className="text-ink-soft">{q.explain}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={startTest}
              className="inline-flex items-center gap-2 bg-army-700 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- running ----------------
  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const timerDanger = secondsLeft <= 10;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-sm shadow-md border-t-4 border-army-700 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-army-900">
            Question {current + 1} / {questions.length}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-sm ${
              timerDanger ? 'bg-red-100 text-red-700' : 'bg-khaki-100 text-army-800'
            }`}
          >
            <Timer className="w-4 h-4" /> {secondsLeft}s
          </span>
        </div>
        <div className="h-2 bg-khaki-100 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-army-700 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <h2 className="font-serif text-lg sm:text-xl font-bold text-army-950 mb-5">{q.q}</h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let cls = 'border-khaki-200 bg-white hover:border-army-500 hover:bg-army-50';
            if (selected !== null) {
              if (idx === q.answer) cls = 'border-green-600 bg-green-50';
              else if (idx === selected) cls = 'border-red-500 bg-red-50';
              else cls = 'border-khaki-200 bg-white opacity-60';
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
                className={`w-full flex items-center gap-3 text-left p-4 rounded-sm border-2 transition-colors ${cls} ${
                  selected === null ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <span className="w-8 h-8 shrink-0 rounded-sm bg-army-100 text-army-800 font-bold flex items-center justify-center text-sm">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 text-army-950">{opt}</span>
                {selected !== null && idx === q.answer && <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />}
                {selected !== null && idx === selected && idx !== q.answer && (
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`mt-4 rounded-sm border-2 p-4 ${selected === q.answer ? 'border-green-600 bg-green-50' : 'border-red-400 bg-red-50'}`}>
            <p className={`text-sm font-bold mb-1 ${selected === q.answer ? 'text-green-700' : 'text-red-600'}`}>
              {selected === q.answer ? '✓ Correct!' : '✗ Wrong — correct answer highlighted in green.'}
            </p>
            <p className="text-sm text-ink-soft">
              <strong className="text-army-900">Wazahat:</strong> {q.explain}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
