import React from 'react';
import { BookOpen, ArrowRight, Play } from 'lucide-react';
import type { Navigate, Route } from '../types';
import { allNotes } from '../data';

/* ---------- Hero banner ---------- */
export const HubHero: React.FC<{
  image?: string;
  icon: React.ReactNode;
  title: string;
  urdu: string;
  intro: string;
}> = ({ image, icon, title, urdu, intro }) => (
  <section className="relative bg-army-900 text-white overflow-hidden">
    {image && (
      <>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-army-950/80" />
      </>
    )}
    {!image && (
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 12px, #C9B896 12px, #C9B896 13px)',
        }}
      />
    )}
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <span className="w-12 h-12 rounded-sm bg-gold-500 text-army-950 flex items-center justify-center mb-4">
        {icon}
      </span>
      <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2">
        {title}
      </h1>
      <p className="text-gold-400 font-bold text-lg mb-3">{urdu}</p>
      <p className="text-khaki-200 max-w-2xl leading-relaxed">{intro}</p>
    </div>
    <div className="relative border-b-2 border-gold-500" />
  </section>
);

/* ---------- Notes grid ---------- */
export const HubNotes: React.FC<{ slugs: string[]; navigate: Navigate }> = ({
  slugs,
  navigate,
}) => {
  const notes = slugs
    .map((s) => allNotes.find((n) => n.slug === s))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-10 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </span>
        <div>
          <h2 className="font-serif font-black text-2xl text-army-950">Notes parho</h2>
          <p className="text-sm text-army-700 font-medium">
            Seedhi zubaan me likhe gaye original notes
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((n) => (
          <button
            key={n.slug}
            onClick={() => navigate({ page: 'note', slug: n.slug })}
            className="text-left bg-white border-2 border-khaki-300 hover:border-gold-500 rounded-sm p-5 transition-colors group"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
              {n.category}
            </p>
            <h3 className="font-serif font-bold text-lg text-army-950 leading-snug mb-1 group-hover:text-army-700">
              {n.title}
            </h3>
            <p className="text-sm text-army-700 font-medium mb-3">{n.urduLine}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 group-hover:text-gold-600">
              Parho <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

/* ---------- Practice grid ---------- */
export interface PracticeItem {
  icon: React.ReactNode;
  name: string;
  desc: string;
  route: Route;
  tag?: string;
}

export const HubPractice: React.FC<{ items: PracticeItem[]; navigate: Navigate }> = ({
  items,
  navigate,
}) => (
  <section className="bg-khaki-100 border-y-2 border-khaki-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-10 rounded-sm bg-gold-500 text-army-950 flex items-center justify-center">
          <Play className="w-5 h-5" />
        </span>
        <div>
          <h2 className="font-serif font-black text-2xl text-army-950">Practice karo</h2>
          <p className="text-sm text-army-700 font-medium">
            Parhna kaafi nahi — haath se karke seekho
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {items.map((p) => (
          <div
            key={p.name}
            className="bg-white border-2 border-army-800 rounded-sm p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="w-12 h-12 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center shrink-0">
                {p.icon}
              </span>
              <div>
                <h3 className="font-serif font-bold text-xl text-army-950">{p.name}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mt-1">{p.desc}</p>
              </div>
            </div>
            {p.tag && (
              <span className="self-start text-[11px] font-bold uppercase tracking-widest bg-gold-100 text-gold-700 border border-gold-500 px-2 py-1 rounded-sm mb-4">
                {p.tag}
              </span>
            )}
            <button
              onClick={() => navigate(p.route)}
              className="mt-auto inline-flex items-center justify-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
            >
              <Play className="w-5 h-5" /> Start Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
