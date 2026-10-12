import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import type { Navigate } from '../types';
import { allNotes } from '../data';

const categories = [...new Set(allNotes.map((n) => n.category))];

export const NotesIndex: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-3">All Notes</h1>
      <p className="text-ink-soft mb-10 max-w-2xl leading-relaxed">
        10 original guides — har ek hum ne khud likha hai, aasaan English aur Roman Urdu me.
        Koi copy-paste nahi, koi jhootay daway nahi.
      </p>

      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="font-serif font-bold text-xl text-army-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            {cat}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {allNotes
              .filter((n) => n.category === cat)
              .map((n) => (
                <button
                  key={n.slug}
                  onClick={() => navigate({ page: 'note', slug: n.slug })}
                  className="text-left bg-paper border border-khaki-300 rounded-sm p-5 hover:border-army-800 hover:shadow-md transition-all group"
                >
                  <h3 className="font-serif font-bold text-lg text-army-950 mb-1 group-hover:text-army-700">
                    {n.title}
                  </h3>
                  <p className="text-sm text-gold-600 font-medium mb-2">{n.urduLine}</p>
                  <p className="text-sm text-ink-soft line-clamp-2 mb-4">{n.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-khaki-600 font-semibold">
                      <Clock className="w-3.5 h-3.5" /> {n.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-army-800 group-hover:text-gold-600">
                      Parho <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
