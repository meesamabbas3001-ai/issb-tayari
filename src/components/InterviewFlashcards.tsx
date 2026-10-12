import React, { useState } from 'react';
import { Shuffle, ChevronLeft, ChevronRight, RotateCcw, Info, Layers, MousePointerClick } from 'lucide-react';
import { interviewFlashcards, shuffled } from '../data/interviewFlashcards';

export const InterviewFlashcards: React.FC = () => {
  const [deck, setDeck] = useState(() => shuffled(interviewFlashcards));
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[current];

  const go = (dir: 1 | -1) => {
    setFlipped(false);
    setCurrent((c) => (c + dir + deck.length) % deck.length);
  };

  const reshuffle = () => {
    setDeck(shuffled(interviewFlashcards));
    setCurrent(0);
    setFlipped(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Interview Flashcards
      </h1>
      <p className="text-army-700 font-medium mb-6">30 sawal — card palto, approach tip parho</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">How to use:</strong> card par sawal hai — pehle khud jawab
          socho, phir card par click kar ke <strong>approach tip</strong> parho. Roz 10 card = interview
          ready. Ye sample sawal hain — asal interview ke nahi.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-khaki-600">
          Card {current + 1} / {deck.length}
        </span>
        <button
          onClick={reshuffle}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 hover:text-gold-600"
        >
          <Shuffle className="w-4 h-4" /> Shuffle
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {deck.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setFlipped(false); }}
            aria-label={`Card ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-gold-500' : 'bg-khaki-300 hover:bg-khaki-400'}`}
          />
        ))}
      </div>

      {/* Flip card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full text-left [perspective:1200px] mb-6"
        aria-label="Flip card"
      >
        <div
          className={`relative w-full min-h-[280px] transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-paper border-2 border-army-900 rounded-sm p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <Layers className="w-8 h-8 text-gold-600 mb-4" />
            <p className="text-xs uppercase tracking-[0.25em] text-khaki-600 font-bold mb-3">Interview Sawal</p>
            <p className="font-serif font-black text-2xl sm:text-3xl text-army-950 leading-snug">{card.q}</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-khaki-600 mt-6">
              <MousePointerClick className="w-4 h-4" /> Tip dekhne ke liye click karo
            </p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 bg-army-900 border-2 border-gold-500 rounded-sm p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-3">Approach Tip</p>
            <p className="text-khaki-100 text-lg leading-relaxed max-w-lg">{card.tip}</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-khaki-400 mt-6">
              <RotateCcw className="w-4 h-4" /> Wapas sawal dekhne ke liye click karo
            </p>
          </div>
        </div>
      </button>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          className="inline-flex items-center gap-2 border-2 border-army-800 text-army-900 font-bold px-6 py-3 rounded-sm hover:bg-army-900 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Prev
        </button>
        <button
          onClick={() => go(1)}
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
        >
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
