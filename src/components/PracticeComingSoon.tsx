import React from 'react';
import { Hammer, ArrowLeft } from 'lucide-react';
import type { Navigate } from '../types';

export const PracticeComingSoon: React.FC<{ title: string; navigate: Navigate }> = ({
  title,
  navigate,
}) => (
  <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
    <span className="inline-flex w-16 h-16 rounded-sm bg-army-900 text-gold-400 items-center justify-center mb-5">
      <Hammer className="w-8 h-8" />
    </span>
    <h1 className="font-serif font-black text-3xl text-army-950 mb-3">{title}</h1>
    <p className="text-army-700 font-medium mb-2">Ye practice tool abhi ban raha hai.</p>
    <p className="text-sm text-ink-soft leading-relaxed mb-8">
      Jab tak tayyar hota hai, is topic ke notes parh lo — neeche wapas jao aur notes se
      tayari shuru karo.
    </p>
    <button
      onClick={() => navigate({ page: 'home' })}
      className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
    >
      <ArrowLeft className="w-5 h-5" /> Wapas Home
    </button>
  </div>
);
