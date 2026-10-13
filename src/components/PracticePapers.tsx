import React, { useState } from 'react';
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  X,
  RotateCcw,
  ListChecks,
  Info,
  BookOpen,
} from 'lucide-react';
import { PRACTICE_PAPERS, HUNDRED_SET, type PracticePaper } from '../data/practicePapers';
import type { Navigate } from '../types';

type Phase = 'list' | 'practice' | 'done';

const SUBJECT_COLORS: Record<string, string> = {
  Math: 'bg-blue-100 text-blue-900 border-blue-300',
  Verbal: 'bg-purple-100 text-purple-900 border-purple-300',
  GK: 'bg-amber-100 text-amber-900 border-amber-300',
  Islamiat: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  PakStudies: 'bg-green-100 text-green-900 border-green-300',
  English: 'bg-rose-100 text-rose-900 border-rose-300',
};

export const PracticePapers: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  const [phase, setPhase] = useState<Phase>('list');
  const [paper, setPaper] = useState<PracticePaper | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [marks, setMarks] = useState<Record<number, boolean | null>>({});

  const startPaper = (p: PracticePaper) => {
    setPaper(p);
    setCurrent(0);
    setAnswers({});
    setRevealed({});
    setMarks({});
    setPhase('practice');
  };

  const backToList = () => {
    setPhase('list');
    setPaper(null);
  };

  const reveal = () => setRevealed((r) => ({ ...r, [current]: true }));

  const mark = (correct: boolean) => {
    setMarks((m) => ({ ...m, [current]: correct }));
    if (paper && current < paper.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setPhase('done');
    }
  };

  const goTo = (idx: number) => {
    if (paper && idx >= 0 && idx < paper.questions.length) setCurrent(idx);
  };

  const score = Object.values(marks).filter((m) => m === true).length;
  const marked = Object.values(marks).filter((m) => m !== null && m !== undefined).length;

  const allPapers = [...PRACTICE_PAPERS, HUNDRED_SET];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Practice Papers
      </h1>
      <p className="text-army-700 font-medium mb-6">Likho, check karo, seekho — initial test practice</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Kaise kaam karega:</strong> paper chuno, har sawal ka
          jawab likho, phir <strong>"Jawab dekho"</strong> dabao — khud faisla karo tumhara jawab
          theek tha ya nahi. Ye <strong>practice papers</strong> hain initial test ki tayari ke
          liye — asal papers nahi.
        </p>
      </div>

      {phase === 'list' && (
        <div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {allPapers.map((p) => (
              <button
                key={p.id}
                onClick={() => startPaper(p)}
                className="text-left bg-paper border-2 border-army-900 rounded-sm p-5 hover:bg-paper-dark transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <FileText className="w-8 h-8 text-army-800 shrink-0" />
                  <span className="text-xs font-black bg-army-900 text-gold-400 px-2.5 py-1 rounded-sm">
                    {p.questions.length} sawal
                  </span>
                </div>
                <h2 className="font-serif font-black text-xl text-army-950 mt-3 group-hover:text-gold-600 transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-army-700 font-medium">{p.urdu}</p>
              </button>
            ))}
          </div>

          <h2 className="font-serif font-black text-2xl text-army-950 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-gold-600" /> Pehle Parho — Revision Notes
          </h2>
          <p className="text-sm text-ink-soft mb-4">
            Papers me aye hue verified facts — practice se pehle ya baad me parho:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { slug: 'practice-papers-gk-revision', title: 'GK Revision', urdu: 'Darya, mumalik, tanzeemain' },
              { slug: 'practice-papers-islamiat-revision', title: 'Islamiat Revision', urdu: 'Ghazwat, Surah, alqabat' },
              { slug: 'practice-papers-pakstudies-revision', title: 'Pak Studies Revision', urdu: 'Aaeen, jangein, sheher' },
            ].map((n) => (
              <button
                key={n.slug}
                onClick={() => navigate({ page: 'note', slug: n.slug })}
                className="text-left bg-khaki-100 border border-khaki-400 rounded-sm p-4 hover:border-gold-500 transition-colors group"
              >
                <BookOpen className="w-6 h-6 text-army-800 mb-2" />
                <h3 className="font-serif font-bold text-army-950 group-hover:text-gold-600 transition-colors">
                  {n.title}
                </h3>
                <p className="text-xs text-army-700 font-medium">{n.urdu}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === 'practice' && paper && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={backToList}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 hover:text-gold-600"
            >
              <ChevronLeft className="w-4 h-4" /> Papers
            </button>
            <span className="text-sm font-bold text-khaki-600">
              {paper.title} — {current + 1} / {paper.questions.length}
            </span>
          </div>

          <div className="bg-paper border-2 border-army-900 rounded-sm p-6 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-black px-2.5 py-1 rounded-full border ${
                  SUBJECT_COLORS[paper.questions[current].subject] || SUBJECT_COLORS.GK
                }`}
              >
                {paper.questions[current].subject}
              </span>
            </div>
            <p className="font-serif font-bold text-xl text-army-950 leading-relaxed mb-5">
              {paper.questions[current].q}
            </p>

            {!revealed[current] ? (
              <div>
                <input
                  value={answers[current] || ''}
                  onChange={(e) => setAnswers((a) => ({ ...a, [current]: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && reveal()}
                  placeholder="Apna jawab likho..."
                  className="w-full bg-paper-dark border border-khaki-300 rounded-sm px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 mb-3"
                />
                <button
                  onClick={reveal}
                  className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
                >
                  <Eye className="w-4 h-4" /> Jawab Dekho
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-emerald-50 border-2 border-emerald-600 rounded-sm p-4 mb-3">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                    Sahi jawab
                  </p>
                  <p className="font-bold text-emerald-950 text-lg">{paper.questions[current].a}</p>
                  {answers[current] && (
                    <p className="text-sm text-ink-soft mt-2">
                      Tumhara jawab: <span className="font-semibold">{answers[current]}</span>
                    </p>
                  )}
                </div>
                <p className="text-sm font-bold text-army-900 mb-2">Kya tumhara jawab theek tha?</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => mark(true)}
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-sm transition-colors"
                  >
                    <Check className="w-4 h-4" /> Theek tha
                  </button>
                  <button
                    onClick={() => mark(false)}
                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-6 py-2.5 rounded-sm transition-colors"
                  >
                    <X className="w-4 h-4" /> Ghalat tha
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 hover:text-gold-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> Pehla
            </button>
            <span className="text-sm font-bold text-emerald-800">
              Score: {score} / {marked} checked
            </span>
            <button
              onClick={() => goTo(current + 1)}
              disabled={!paper || current >= paper.questions.length - 1}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 hover:text-gold-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Agla <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {paper.questions.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Sawal ${i + 1}`}
                className={`w-8 h-8 rounded-sm text-xs font-black transition-colors ${
                  i === current
                    ? 'bg-army-900 text-gold-400'
                    : marks[i] === true
                      ? 'bg-emerald-600 text-white'
                      : marks[i] === false
                        ? 'bg-red-500 text-white'
                        : 'bg-khaki-200 text-army-900 hover:bg-khaki-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === 'done' && paper && (
        <div className="text-center">
          <div className="bg-paper border-2 border-army-900 rounded-sm p-8 mb-6">
            <ListChecks className="w-12 h-12 text-army-800 mx-auto mb-4" />
            <h2 className="font-serif font-black text-3xl text-army-950 mb-2">
              {paper.title} — Mukammal!
            </h2>
            <p className="text-5xl font-black text-gold-600 my-4">
              {score} <span className="text-2xl text-khaki-500">/ {paper.questions.length}</span>
            </p>
            <p className="text-ink-soft mb-6">
              {score === paper.questions.length
                ? 'Kamaal! Sab theek — isi tarah tayari jari rakho!'
                : score >= paper.questions.length * 0.7
                  ? 'Bohat acha! Ghalat sawalon ko dobara parho.'
                  : 'Himmat na haro — neeche notes parho aur phir try karo.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => startPaper(paper)}
                className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Dobara Try Karo
              </button>
              <button
                onClick={backToList}
                className="inline-flex items-center gap-2 border-2 border-army-900 text-army-900 hover:bg-army-900 hover:text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <BookOpen className="w-4 h-4" /> Aur Papers
              </button>
            </div>
          </div>

          {Object.entries(marks).filter(([, m]) => m === false).length > 0 && (
            <div className="text-left bg-paper border-2 border-red-300 rounded-sm p-6">
              <h3 className="font-serif font-bold text-lg text-red-800 mb-4">
                Ghalat sawal — dobara parho
              </h3>
              <div className="space-y-4">
                {Object.entries(marks)
                  .filter(([, m]) => m === false)
                  .map(([idx]) => {
                    const i = Number(idx);
                    return (
                      <div key={i} className="border-b border-khaki-200 pb-3 last:border-0">
                        <p className="font-bold text-army-950 text-sm">
                          {i + 1}. {paper.questions[i].q}
                        </p>
                        <p className="text-sm text-emerald-800 font-semibold mt-1">
                          Sahi jawab: {paper.questions[i].a}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
