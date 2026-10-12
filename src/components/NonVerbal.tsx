import React, { useState, useEffect, useRef } from 'react';
import { Shapes, Timer, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import type { Navigate } from '../types';

// ---------- SVG shape helpers ----------
const C = '#1E2B1E'; // army
const G = '#B8962E'; // gold

function Shape({ kind, color = C }: { kind: string; color?: string }) {
  const p = { fill: color };
  switch (kind) {
    case 'circle': return <svg viewBox="0 0 40 40" className="w-10 h-10"><circle cx="20" cy="20" r="14" {...p} /></svg>;
    case 'square': return <svg viewBox="0 0 40 40" className="w-10 h-10"><rect x="7" y="7" width="26" height="26" {...p} /></svg>;
    case 'triangle': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,6 34,32 6,32" {...p} /></svg>;
    case 'diamond': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,5 35,20 20,35 5,20" {...p} /></svg>;
    case 'pentagon': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,5 35,16 29,33 11,33 5,16" {...p} /></svg>;
    case 'hexagon': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,4 34,12 34,28 20,36 6,28 6,12" {...p} /></svg>;
    case 'star': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,4 24,15 36,15 26,22 30,34 20,26 10,34 14,22 4,15 16,15" {...p} /></svg>;
    case 'arrow-up': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,5 32,22 24,22 24,35 16,35 16,22 8,22" {...p} /></svg>;
    case 'arrow-right': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="5,20 22,8 22,16 35,16 35,24 22,24 22,32" {...p} /></svg>;
    case 'arrow-down': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,35 8,18 16,18 16,5 24,5 24,18 32,18" {...p} /></svg>;
    case 'arrow-left': return <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="35,20 18,32 18,24 5,24 5,16 18,16 18,8" {...p} /></svg>;
    case 'hollow-circle': return <svg viewBox="0 0 40 40" className="w-10 h-10"><circle cx="20" cy="20" r="13" fill="none" stroke={color} strokeWidth="5" /></svg>;
    case 'hollow-square': return <svg viewBox="0 0 40 40" className="w-10 h-10"><rect x="8" y="8" width="24" height="24" fill="none" stroke={color} strokeWidth="5" /></svg>;
    default: return <svg viewBox="0 0 40 40" className="w-10 h-10"><circle cx="20" cy="20" r="14" {...p} /></svg>;
  }
}

interface NVQ {
  id: number;
  instruction: string;
  // for sequence/odd/count types we render custom JSX
  render: () => React.ReactNode;
  options: string[]; // shape kinds for options
  answer: number;
}

const questions: NVQ[] = [
  {
    id: 1, instruction: 'Odd one out — kaunsi shape sab se alag hai?',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="circle" /><Shape kind="circle" /><Shape kind="square" /><Shape kind="circle" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 2,
  },
  {
    id: 2, instruction: 'Series poori karo: triangle → square → pentagon → ?',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="triangle" /><span className="text-2xl">→</span><Shape kind="square" /><span className="text-2xl">→</span><Shape kind="pentagon" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['hexagon', 'circle', 'triangle', 'star'], answer: 0,
  },
  {
    id: 3, instruction: 'Odd one out:',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="arrow-up" /><Shape kind="arrow-up" /><Shape kind="arrow-down" /><Shape kind="arrow-up" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 2,
  },
  {
    id: 4, instruction: 'Arrow ghoom raha hai: up → right → down → ?',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="arrow-up" /><span className="text-2xl">→</span><Shape kind="arrow-right" /><span className="text-2xl">→</span><Shape kind="arrow-down" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['arrow-left', 'arrow-up', 'arrow-right', 'arrow-down'], answer: 0,
  },
  {
    id: 5, instruction: 'Kitne triangles hain? (gino!)',
    render: () => (<div className="flex gap-3 justify-center flex-wrap max-w-xs mx-auto"><Shape kind="triangle" /><Shape kind="circle" /><Shape kind="triangle" /><Shape kind="square" /><Shape kind="circle" /><Shape kind="triangle" /><Shape kind="diamond" /><Shape kind="triangle" /></div>),
    options: ['3', '4', '5', '2'], answer: 1,
  },
  {
    id: 6, instruction: 'Odd one out:',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="hollow-circle" /><Shape kind="hollow-square" /><Shape kind="hollow-circle" /><Shape kind="circle" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 3,
  },
  {
    id: 7, instruction: 'Series: circle → 2 circles → 3 circles → ? (kitne circles?)',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="circle" /><span className="text-2xl">→</span><div className="flex"><Shape kind="circle" /><Shape kind="circle" /></div><span className="text-2xl">→</span><div className="flex"><Shape kind="circle" /><Shape kind="circle" /><Shape kind="circle" /></div><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['4 circles', '5 circles', '3 circles', '6 circles'], answer: 0,
  },
  {
    id: 8, instruction: 'Odd one out:',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="star" color={G} /><Shape kind="star" /><Shape kind="star" /><Shape kind="star" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 0,
  },
  {
    id: 9, instruction: 'Kitne squares hain?',
    render: () => (<div className="flex gap-3 justify-center flex-wrap max-w-xs mx-auto"><Shape kind="square" /><Shape kind="triangle" /><Shape kind="square" /><Shape kind="circle" /><Shape kind="diamond" /><Shape kind="square" /></div>),
    options: ['2', '3', '4', '1'], answer: 1,
  },
  {
    id: 10, instruction: 'Series: square → diamond (square ghooma) → ? (diamond ghoomay to?)',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="square" /><span className="text-2xl">→</span><Shape kind="diamond" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['square', 'triangle', 'circle', 'hexagon'], answer: 0,
  },
  {
    id: 11, instruction: 'Odd one out:',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="triangle" /><Shape kind="triangle" /><Shape kind="triangle" color={G} /><Shape kind="triangle" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 2,
  },
  {
    id: 12, instruction: 'Arrow ulta ho raha hai: up → down → up → ?',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="arrow-up" /><span className="text-2xl">→</span><Shape kind="arrow-down" /><span className="text-2xl">→</span><Shape kind="arrow-up" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['arrow-down', 'arrow-up', 'arrow-left', 'arrow-right'], answer: 0,
  },
  {
    id: 13, instruction: 'Sides barh rahe hain: 3 (triangle) → 4 (square) → 5 (pentagon) → ?',
    render: () => (<div className="flex gap-4 justify-center items-center"><Shape kind="triangle" /><span className="text-2xl">→</span><Shape kind="square" /><span className="text-2xl">→</span><Shape kind="pentagon" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['hexagon', 'circle', 'diamond', 'star'], answer: 0,
  },
  {
    id: 14, instruction: 'Kitne circles hain? (khali + bhare dono)',
    render: () => (<div className="flex gap-3 justify-center flex-wrap max-w-xs mx-auto"><Shape kind="circle" /><Shape kind="hollow-circle" /><Shape kind="square" /><Shape kind="circle" /><Shape kind="hollow-circle" /></div>),
    options: ['2', '3', '4', '5'], answer: 2,
  },
  {
    id: 15, instruction: 'Odd one out:',
    render: () => (<div className="flex gap-4 justify-center"><Shape kind="diamond" /><Shape kind="square" /><Shape kind="diamond" /><Shape kind="diamond" /></div>),
    options: ['A', 'B', 'C', 'D'], answer: 1,
  },
  {
    id: 16, instruction: 'Pattern: ● ○ ● ○ ● → ? (bhara, khali, bhara...)',
    render: () => (<div className="flex gap-3 justify-center items-center"><Shape kind="circle" /><Shape kind="hollow-circle" /><Shape kind="circle" /><Shape kind="hollow-circle" /><Shape kind="circle" /><span className="text-2xl">→</span><span className="w-10 h-10 border-2 border-dashed border-gold-500 rounded-sm" /></div>),
    options: ['hollow-circle', 'circle', 'square', 'triangle'], answer: 0,
  },
];

function optionLabel(opt: string): React.ReactNode {
  if (['A', 'B', 'C', 'D'].includes(opt)) return <span className="font-black text-lg">{opt}</span>;
  if (opt.includes('circle') && opt !== '4 circles' && opt !== '5 circles' && opt !== '3 circles' && opt !== '6 circles') return <Shape kind={opt} />;
  return <span className="font-bold">{opt}</span>;
}

export const NonVerbal: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  const [started, setStarted] = useState(false);
  const [order, setOrder] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  const start = () => {
    const o = [...questions.keys()].sort(() => Math.random() - 0.5);
    setOrder(o); setIdx(0); setScore(0); setDone(false); setStarted(true);
    next(o, 0, 0);
  };

  const next = (o: number[], i: number, sc: number) => {
    setPicked(null); setIdx(i); setTimeLeft(30);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timer.current) window.clearInterval(timer.current);
          advance(o, i, sc, false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const advance = (o: number[], i: number, sc: number, correct: boolean) => {
    const ns = correct ? sc + 1 : sc;
    setScore(ns);
    if (i + 1 >= o.length) { setDone(true); if (timer.current) window.clearInterval(timer.current); }
    else next(o, i + 1, ns);
  };

  const pick = (oi: number) => {
    if (picked !== null) return;
    setPicked(oi);
    if (timer.current) window.clearInterval(timer.current);
    const q = questions[order[idx]];
    const correct = oi === q.answer;
    setTimeout(() => advance(order, idx, score, correct), 900);
  };

  useEffect(() => () => { if (timer.current) window.clearInterval(timer.current); }, []);

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <span className="inline-flex items-center gap-2 bg-army-900 text-gold-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-4">
          <Shapes className="w-4 h-4" /> Non-Verbal Intelligence
        </span>
        <h1 className="font-serif font-black text-3xl text-army-950 mb-3">Shapes Wala Test</h1>
        <p className="text-ink-soft mb-6">16 sawal — odd one out, series, aur ginti. Har sawal ke liye <strong>30 second</strong>. Tasveer dekho, pattern pehchano!</p>
        <button onClick={start} className="bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-8 py-3 rounded-sm">Start Practice</button>
        <div className="mt-6"><button onClick={() => navigate({ page: 'practice' })} className="text-sm font-bold text-army-800 underline">Back to Practice Ground</button></div>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / order.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="font-serif font-black text-3xl text-army-950 mb-3">Result</h1>
        <p className="font-serif font-black text-6xl text-gold-600 mb-2">{score}/{order.length}</p>
        <p className="text-ink-soft mb-6">{pct >= 80 ? 'Zabardast! Pattern master! 🌟' : pct >= 50 ? 'Achi koshish — roz practice karo!' : 'Himmat na haro — dobara try karo!'}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={start} className="inline-flex items-center gap-2 bg-army-900 text-white font-bold px-6 py-3 rounded-sm"><RotateCcw className="w-4 h-4" /> Again</button>
          <button onClick={() => navigate({ page: 'practice' })} className="border-2 border-army-900 text-army-900 font-bold px-6 py-3 rounded-sm">Practice Ground</button>
        </div>
      </div>
    );
  }

  const q = questions[order[idx]];
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-army-800">Q {idx + 1}/{order.length}</span>
        <span className={`inline-flex items-center gap-1.5 font-black ${timeLeft <= 10 ? 'text-red-700' : 'text-army-800'}`}>
          <Timer className="w-4 h-4" /> {timeLeft}s
        </span>
        <span className="text-sm font-bold text-gold-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gold-500 transition-all" style={{ width: `${(timeLeft / 30) * 100}%` }} />
      </div>
      <div className="bg-paper border-2 border-army-900 rounded-sm p-6 mb-6">
        <p className="font-bold text-army-950 mb-5 text-center">{q.instruction}</p>
        <div className="mb-2">{q.render()}</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {q.options.map((opt, oi) => {
          const isAns = oi === q.answer;
          const cls = picked === null
            ? 'border-army-900 hover:border-gold-500 hover:-translate-y-0.5'
            : oi === picked && isAns
              ? 'border-green-700 bg-green-50'
              : oi === picked
                ? 'border-red-700 bg-red-50'
                : isAns ? 'border-green-700 bg-green-50' : 'border-khaki-300 opacity-60';
          return (
            <button key={oi} onClick={() => pick(oi)} disabled={picked !== null}
              className={`border-2 rounded-sm py-4 flex items-center justify-center gap-2 transition-all ${cls}`}>
              {optionLabel(opt)}
              {picked !== null && isAns && <CheckCircle2 className="w-4 h-4 text-green-700" />}
              {picked === oi && !isAns && <XCircle className="w-4 h-4 text-red-700" />}
            </button>
          );
        })}
      </div>
      <div className="text-center mt-6">
        <button onClick={() => { if (timer.current) window.clearInterval(timer.current); navigate({ page: 'practice' }); }} className="text-sm font-bold text-army-800 underline">Quit</button>
      </div>
    </div>
  );
};
