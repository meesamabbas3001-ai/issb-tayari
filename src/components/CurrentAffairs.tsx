import React, { useState } from 'react';
import { Newspaper, CalendarDays, Building2, Lightbulb, BadgeCheck } from 'lucide-react';
import { currentAffairs, lastUpdated, type AffairsCategory } from '../data/currentAffairs';

const categories: ('All' | AffairsCategory)[] = [
  'All',
  'Defense',
  'National',
  'International',
  'Sports',
  'Economy',
];

const categoryColors: Record<AffairsCategory, string> = {
  Defense: 'bg-army-800 text-khaki-100',
  National: 'bg-gold-500 text-army-950',
  International: 'bg-[#2b4a6f] text-white',
  Sports: 'bg-[#3f6b3a] text-white',
  Economy: 'bg-[#6b4a2b] text-white',
};

export const CurrentAffairs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | AffairsCategory>('All');

  const items =
    filter === 'All' ? currentAffairs : currentAffairs.filter((a) => a.category === filter);

  const counts = (c: AffairsCategory) => currentAffairs.filter((a) => a.category === c).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-start gap-4 mb-2">
        <span className="w-12 h-12 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center shrink-0">
          <Newspaper className="w-6 h-6" />
        </span>
        <div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 leading-tight">
            Current Affairs
          </h1>
          <p className="text-army-700 font-medium mt-1">
            Interview ke liye chuni hui khabren — sirf wahi jo waqai hui hon.
          </p>
        </div>
      </div>

      {/* Last updated stamp */}
      <div className="flex items-center gap-2 mt-4 mb-6">
        <span className="stamp inline-flex items-center gap-1.5 text-gold-700 text-xs px-3 py-1.5 border-gold-500">
          <BadgeCheck className="w-3.5 h-3.5" />
          Last updated: {lastUpdated}
        </span>
        <span className="text-xs text-khaki-600 font-semibold">
          {currentAffairs.length} verified items
        </span>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-sm text-sm font-bold border-2 transition-colors ${
              filter === c
                ? 'bg-army-900 text-gold-400 border-army-900'
                : 'bg-paper text-army-800 border-khaki-300 hover:border-army-700'
            }`}
          >
            {c}
            {c !== 'All' && (
              <span className="ml-1.5 text-xs opacity-70">({counts(c)})</span>
            )}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {items.map((a) => (
          <article
            key={a.id}
            className="bg-white border border-khaki-300 rounded-sm shadow-sm overflow-hidden"
          >
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${categoryColors[a.category]}`}
                >
                  {a.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-khaki-600 font-semibold">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {a.date}
                </span>
              </div>
              <h2 className="font-serif font-bold text-xl text-army-950 leading-snug mb-3">
                {a.headline}
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">{a.summary}</p>
              <div className="bg-khaki-100 border-r-4 border-gold-500 rounded-sm p-4 mb-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed">
                  <Lightbulb className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-bold text-army-900">Interview tip: </span>
                    <span className="text-ink-soft">{a.whyItMatters}</span>
                  </span>
                </p>
              </div>
              {a.sourceUrl ? (
                <a
                  href={a.sourceUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs text-khaki-600 font-semibold underline hover:text-army-800"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  Source: {a.source}
                </a>
              ) : (
                <p className="inline-flex items-center gap-1.5 text-xs text-khaki-600 font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  Source: {a.source}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Honesty note */}
      <div className="mt-10 bg-army-900 text-khaki-200 rounded-sm p-6">
        <h3 className="font-serif font-bold text-lg text-gold-400 mb-2">Ek zaroori baat</h3>
        <p className="text-sm leading-relaxed">
          Interview me sirf wahi poocha jata hai jo waqai hua ho — har item verified source se
          hai. Koi afwah, koi guess, koi purani khabar nahi. Phir bhi, interview se pehle aakhri
          haftay ki khabren khud bhi check kar lena — Deputy aksar taaza tareen waqiaat poochta
          hai.
        </p>
      </div>
    </div>
  );
};
