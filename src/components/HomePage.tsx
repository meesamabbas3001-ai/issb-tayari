import React, { useState } from 'react';
import {
  BookOpen,
  Timer,
  Brain,
  CalendarDays,
  BadgeCheck,
  Languages,
  ShieldCheck,
  Users,
  ArrowRight,
  Eye,
  EyeOff,
  Quote,
  Dumbbell,
  Zap,
  PenLine,
  Image as ImageIcon,
  MessageSquareText,
  Mic,
  Layers,
} from 'lucide-react';
import type { Navigate } from '../types';
import { allNotes } from '../data';
import { gkQuestions } from '../data/gkQuestions';

const badges = [
  { icon: <BadgeCheck className="w-5 h-5" />, title: '100% Free Forever', text: 'No paywalls. No "premium notes".' },
  { icon: <Languages className="w-5 h-5" />, title: 'Urdu + English', text: 'Har note aasaan zubaan me.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'No Fake Claims', text: 'No invented stats or "real papers".' },
  { icon: <Users className="w-5 h-5" />, title: 'Real Guidance', text: 'Honest advice, verified facts.' },
];

export const HomePage: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  const [qIndex] = useState(() => Math.floor(Math.random() * gkQuestions.length));
  const [revealed, setRevealed] = useState(false);
  const q = gkQuestions[qIndex];

  return (
    <div>
      {/* HERO */}
      <section className="bg-army-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 12px, #C9B896 12px, #C9B896 13px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="stamp inline-block text-gold-400 text-xs px-3 py-1.5 mb-5 border-gold-500 anim-fade-up">
              Free ISSB Preparation
            </p>
            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 anim-fade-up anim-delay-1">
              ISSB ki Tayari,
              <br />
              <span className="text-gold-400">Seedhi Zubaan</span> Me.
            </h1>
            <p className="text-khaki-200 text-lg sm:text-xl mb-2 font-medium anim-fade-up anim-delay-2">
              100% Free &bull; Urdu + English &bull; Real Guidance
            </p>
            <p className="text-khaki-300 mb-8 max-w-2xl leading-relaxed anim-fade-up anim-delay-3">
              29 original notes, 7 timed practice tools, video lectures, and a 30-day plan —
              written honestly for Pakistani students. No copied material, no fake promises.
            </p>
            <div className="flex flex-wrap gap-3 anim-fade-up anim-delay-4">
              <button
                onClick={() => navigate({ page: 'practice' })}
                className="anim-glow inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <Dumbbell className="w-5 h-5" />
                Practice All Tests
              </button>
              <button
                onClick={() => navigate({ page: 'plan' })}
                className="inline-flex items-center gap-2 border-2 border-khaki-400 hover:border-gold-400 text-khaki-100 hover:text-gold-400 font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <CalendarDays className="w-5 h-5" />
                Start 30-Day Plan
              </button>
            </div>
          </div>
          <div className="hidden lg:block anim-fade-up anim-delay-2">
            <figure className="anim-float border-2 border-gold-500/60 rounded-sm overflow-hidden shadow-2xl">
              <img src="https://drive.google.com/thumbnail?id=1SDaMJ2xvaCs9K2gdSqnxDDZx4m9frsAD&sz=w1200" alt="ISSB candidates walking toward the academy at dawn" className="w-full h-auto object-cover" loading="eager" />
            </figure>
            <p className="text-khaki-400 text-xs mt-2 italic">Subah ki tayari — har din ek qadam manzil ki taraf.</p>
          </div>
        </div>
        <div className="border-b-2 border-gold-500" />
      </section>

      {/* TRUST BADGES */}
      <section className="bg-paper-dark border-b border-khaki-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.title} className="flex items-start gap-3 bg-paper border border-khaki-300 rounded-sm p-4">
              <span className="text-army-800 mt-0.5">{b.icon}</span>
              <span>
                <span className="block font-bold text-sm text-army-950">{b.title}</span>
                <span className="block text-xs text-ink-soft mt-1">{b.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="rule-double mb-8" />
        <h2 className="font-serif font-black text-2xl sm:text-3xl text-army-950 mb-2">
          Kahan Se Shuru Karo?
        </h2>
        <p className="text-ink-soft mb-8">Pick your battlefield. Everything below is free.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <button
            onClick={() => navigate({ page: 'notes' })}
            className="text-left bg-paper border-2 border-army-900 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <span className="w-11 h-11 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </span>
            <h3 className="font-serif font-bold text-lg text-army-950 mb-2">10 Original Notes</h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">
              WAT, interview, GTO, bio-data form, dress code — har topic par asal guide.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-army-800 group-hover:text-gold-600">
              Read notes <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <button
            onClick={() => navigate({ page: 'practice' })}
            className="text-left bg-army-900 text-white border-2 border-army-900 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group sm:col-span-2"
          >
            <span className="w-11 h-11 rounded-sm bg-gold-500 text-army-950 flex items-center justify-center mb-4">
              <Dumbbell className="w-6 h-6" />
            </span>
            <h3 className="font-serif font-bold text-lg mb-2">Practice Ground — 7 Timed Tests</h3>
            <p className="text-sm text-khaki-200 leading-relaxed mb-4">
              WAT, Sentence Completion, Picture Story, OPI, Intelligence Quiz, Lecturette,
              Interview Flashcards — sab tests ki practice, timer ke saath.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-gold-400 group-hover:gap-2 transition-all">
              Start practicing <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <button
            onClick={() => navigate({ page: 'plan' })}
            className="text-left bg-paper border-2 border-army-900 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <span className="w-11 h-11 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center mb-4">
              <CalendarDays className="w-6 h-6" />
            </span>
            <h3 className="font-serif font-bold text-lg text-army-950 mb-2">30-Day Plan</h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">
              Week-by-week checklist — roz ka kaam, tick karte jao.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-army-800 group-hover:text-gold-600">
              View plan <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>

      {/* PRACTICE STRIP — all 7 tests */}
      <section className="bg-army-950 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Practice Ground</p>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-white">Sab Tests Ki Practice</h2>
            </div>
            <button
              onClick={() => navigate({ page: 'practice' })}
              className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-gold-400 hover:text-gold-300"
            >
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { icon: <Zap className="w-5 h-5" />, label: 'WAT', route: { page: 'wat' } as const },
              { icon: <PenLine className="w-5 h-5" />, label: 'Sentence', route: { page: 'sentence-completion' } as const },
              { icon: <ImageIcon className="w-5 h-5" />, label: 'Picture Story', route: { page: 'picture-story' } as const },
              { icon: <MessageSquareText className="w-5 h-5" />, label: 'OPI', route: { page: 'opi-practice' } as const },
              { icon: <Brain className="w-5 h-5" />, label: 'Quiz', route: { page: 'quiz' } as const },
              { icon: <Mic className="w-5 h-5" />, label: 'Lecturette', route: { page: 'lecturette' } as const },
              { icon: <Layers className="w-5 h-5" />, label: 'Flashcards', route: { page: 'interview-flashcards' } as const },
            ].map((t) => (
              <button
                key={t.label}
                onClick={() => navigate(t.route)}
                className="flex flex-col items-center gap-2 bg-army-900 border border-khaki-700/40 rounded-sm py-5 px-2 hover:border-gold-500 hover:-translate-y-1 transition-all group"
              >
                <span className="text-gold-400 group-hover:scale-110 transition-transform">{t.icon}</span>
                <span className="text-xs font-bold text-khaki-100">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AAJ KA SAWAL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="bg-army-900 rounded-sm p-6 sm:p-8 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, transparent, transparent 12px, #C9B896 12px, #C9B896 13px)',
            }}
          />
          <div className="relative">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Aaj Ka Sawal
            </p>
            <div className="flex items-start gap-3 mb-5">
              <Quote className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
              <p className="font-serif text-xl sm:text-2xl font-bold leading-snug">{q.question}</p>
            </div>
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                <Eye className="w-4 h-4" /> Jawab Dekho
              </button>
            ) : (
              <div className="bg-army-800 border border-gold-500 rounded-sm p-4">
                <p className="text-sm text-khaki-300 mb-1 flex items-center gap-2">
                  <EyeOff className="w-4 h-4" /> Jawab:
                </p>
                <p className="font-serif font-bold text-lg text-gold-400">{q.answer}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NOTES PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="rule-double mb-8" />
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-army-950">Latest Notes</h2>
          <button
            onClick={() => navigate({ page: 'notes' })}
            className="inline-flex items-center gap-1 text-sm font-bold text-army-800 hover:text-gold-600"
          >
            All 10 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allNotes.slice(0, 6).map((n) => (
            <button
              key={n.slug}
              onClick={() => navigate({ page: 'note', slug: n.slug })}
              className="text-left bg-paper border border-khaki-300 rounded-sm p-5 hover:border-army-800 hover:shadow-md transition-all"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-600 mb-2">
                {n.category}
              </p>
              <h3 className="font-serif font-bold text-army-950 mb-2 leading-snug">{n.title}</h3>
              <p className="text-sm text-ink-soft line-clamp-2 mb-3">{n.description}</p>
              <p className="text-xs text-khaki-600 font-semibold">{n.readTime}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
