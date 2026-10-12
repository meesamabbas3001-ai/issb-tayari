import React, { useState, useEffect, useRef } from 'react';
import {
  ListChecks, Play, RotateCcw, Timer, CheckCircle2, XCircle, Info,
  Calculator, Brain, Globe2, MoonStar, BookOpen,
} from 'lucide-react';
import { initialMcqs, Mcq, McqSubject } from '../data/initialMcqs';

type Phase = 'idle' | 'running' | 'done';
const QUESTIONS_PER_TEST = 20;
const SECONDS_PER_QUESTION = 45;

const SUBJECTS: { key: McqSubject; title: string; urdu: string; icon: React.ReactNode }[] = [
  { key: 'math', title: 'Mathematics', urdu: 'Riyazi', icon: <Calculator className="w-5 h-5" /> },
  { key: 'verbal', title: 'Verbal Intelligence', urdu: 'Zahni Istedad', icon: <Brain className="w-5 h-5" /> },
  { key: 'gk', title: 'General Knowledge', urdu: 'Maloomat-e-Aama', icon: <Globe2 className="w-5 h-5" /> },
  { key: 'islamiat', title: 'Islamiat', urdu: 'Islami Taleemat', icon: <MoonStar className="w-5 h-5" /> },
  { key: 'english', title: 'English', urdu: 'Angrezi', icon: <BookOpen className="w-5 h-5" /> },
];

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

export default function InitialMcqs() {
  const [subject, setSubject] = useState<McqSubject>('gk');
  const [phase, setPhase] = useState<Phase>('idle');
  const [questions, setQuestions] = useState<Mcq[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_QUESTION);
  const [score, setScore] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const counts = React.useMemo(() => {
    const c: Record<McqSubject, number> = { math: 0, verbal: 0, gk: 0, islamiat: 0, english: 0 };
    for (const m of initialMcqs) c[m.subject]++;
    return c;
  }, []);

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
    const pool = initialMcqs.filter((m) => m.subject === subject);
    if (pool.length === 0) return;
    setQuestions(pickRandom(pool, QUESTIONS_PER_TEST));
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
    }, 900);
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
              <ListChecks className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-army-900">Initial Test MCQs</h1>
              <p className="text-sm text-gray-500">PMA initial test pattern par practice sawalat</p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-khaki-100 border border-khaki-300 rounded-sm p-3 mb-6 mt-4">
            <Info className="w-5 h-5 text-army-700 shrink-0 mt-0.5" />
            <p className="text-sm text-army-900">
              Practice MCQs based on PMA initial test pattern — <strong>ye asal papers NAHI hain</strong>,
              sirf tayari ke liye hain.
            </p>
          </div>

          <p className="font-semibold text-army-900 mb-3">Subject choose karo:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {SUBJECTS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSubject(s.key)}
                disabled={counts[s.key] === 0}
                className={`flex items-center gap-3 p-4 rounded-sm border-2 text-left transition-colors ${
                  subject === s.key
                    ? 'border-army-700 bg-army-50'
                    : 'border-khaki-200 bg-white hover:border-army-400'
                } ${counts[s.key] === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    subject === s.key ? 'bg-army-700 text-gold-400' : 'bg-khaki-100 text-army-700'
                  }`}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-army-900">{s.title}</div>
                  <div className="text-xs text-gray-500">
                    {s.urdu} • {counts[s.key]} questions
                  </div>
                </div>
                {subject === s.key && <CheckCircle2 className="w-5 h-5 text-army-700" />}
              </button>
            ))}
          </div>

          <div className="bg-army-900 rounded-sm p-5 text-center">
            <p className="text-khaki-200 text-sm mb-1">
              {SUBJECTS.find((s) => s.key === subject)?.title} — {Math.min(QUESTIONS_PER_TEST, counts[subject])} random
              questions • {SECONDS_PER_QUESTION} seconds each
            </p>
            <button
              onClick={startTest}
              disabled={counts[subject] === 0}
              className="mt-3 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed text-army-950 font-bold px-8 py-3 rounded-sm transition-colors"
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
        <div className="bg-white rounded-sm shadow-md border-t-4 border-army-700 p-6 sm:p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-army-900 mb-2">Test Complete</h2>
          <p className="text-sm text-gray-500 mb-6">
            {SUBJECTS.find((s) => s.key === subject)?.title}
          </p>
          <div className="w-32 h-32 mx-auto rounded-full bg-army-900 flex items-center justify-center mb-4">
            <span className="font-serif text-4xl font-bold text-gold-400">{percentage}%</span>
          </div>
          <p className="text-lg text-army-900 mb-1">
            <strong>{score}</strong> / {questions.length} correct
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {percentage >= 80
              ? 'Zabardast! Initial test ke liye ready ho.'
              : percentage >= 50
              ? 'Theek hai — thori aur practice karo.'
              : 'Himmat na haro — dobara try karo aur behtar karo.'}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={startTest}
              className="inline-flex items-center gap-2 bg-army-700 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Practice Again
            </button>
            <button
              onClick={() => setPhase('idle')}
              className="inline-flex items-center gap-2 bg-khaki-200 hover:bg-khaki-300 text-army-900 font-bold px-6 py-3 rounded-sm transition-colors"
            >
              Change Subject
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
          <p className={`mt-4 text-sm font-semibold ${selected === q.answer ? 'text-green-700' : 'text-red-600'}`}>
            {selected === q.answer ? '✓ Correct!' : '✗ Wrong — correct answer highlighted in green.'}
          </p>
        )}
      </div>
    </div>
  );
}
