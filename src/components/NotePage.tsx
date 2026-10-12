import React from 'react';
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, Lightbulb, CheckCircle2, PlayCircle, Youtube, ListChecks } from 'lucide-react';
import type { Navigate } from '../types';
import { allNotes, getNote } from '../data';
import { noteVideoMap, getVideoById, thumbnailUrl } from '../data/videos';

export const NotePage: React.FC<{ slug: string; navigate: Navigate }> = ({ slug, navigate }) => {
  const note = getNote(slug);

  if (!note) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif font-black text-2xl text-army-950 mb-4">Note nahi mila</h1>
        <button
          onClick={() => navigate({ page: 'notes' })}
          className="text-army-800 font-bold underline"
        >
          Wapas notes par jao
        </button>
      </div>
    );
  }

  const idx = allNotes.findIndex((n) => n.slug === slug);
  const prev = idx > 0 ? allNotes[idx - 1] : null;
  const next = idx < allNotes.length - 1 ? allNotes[idx + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <button
        onClick={() => navigate({ page: 'notes' })}
        className="inline-flex items-center gap-2 text-sm font-bold text-army-800 hover:text-gold-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> All Notes
      </button>

      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
        {note.category}
      </p>
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 leading-tight mb-2">
        {note.title}
      </h1>
      <p className="text-lg text-army-700 font-medium mb-3">{note.urduLine}</p>
      <p className="inline-flex items-center gap-1.5 text-xs text-khaki-600 font-semibold mb-6">
        <Clock className="w-3.5 h-3.5" /> {note.readTime}
      </p>

      <div className="rule-double mb-8" />

      <p className="prose-note text-[1.05rem] text-ink leading-relaxed mb-8 font-medium border-l-4 border-gold-500 pl-5">
        {note.intro}
      </p>

      {note.sections.map((s, i) => (
        <section key={i} className="mb-8">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-army-900 mb-4">
            {s.heading}
          </h2>
          <div className="prose-note text-ink-soft">
            {s.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
          {s.list && (
            <ul className="mt-3 space-y-2.5">
              {s.list.map((item, k) => (
                <li key={k} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-army-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {s.image && (
            <figure className="mt-5 mb-2 border border-khaki-300 bg-paper p-2 rounded-sm">
              <img
                src={s.image.src}
                alt={s.image.caption}
                className="w-full h-auto rounded-sm"
                loading="lazy"
              />
              <figcaption className="text-xs text-khaki-600 font-medium text-center px-2 py-2.5 leading-relaxed">
                {s.image.caption}
              </figcaption>
            </figure>
          )}
          {s.urduNote && (
            <div className="mt-4 bg-khaki-100 border-r-4 border-gold-500 rounded-sm p-4">
              <p className="text-sm font-bold text-army-900 mb-1">Seedhi zubaan me:</p>
              <p className="text-sm text-ink-soft leading-relaxed">{s.urduNote}</p>
            </div>
          )}
        </section>
      ))}

      {/* Common mistakes */}
      <div className="bg-[#fdf3f3] border-2 border-red-800/60 rounded-sm p-5 sm:p-6 mb-6">
        <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-red-900 mb-4">
          <AlertTriangle className="w-5 h-5" /> Common Mistakes — Bachna!
        </h3>
        <ul className="space-y-2.5">
          {note.mistakes.map((m, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="font-black text-red-800">✕</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Practical tips */}
      <div className="bg-khaki-100 border-2 border-army-800 rounded-sm p-5 sm:p-6 mb-10">
        <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-army-900 mb-4">
          <Lightbulb className="w-5 h-5 text-gold-600" /> Practical Tips
        </h3>
        <ul className="space-y-2.5">
          {note.tips.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="font-black text-army-700">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      {note.faqs && note.faqs.length > 0 && (
        <div className="mb-10">
          <h3 className="font-serif font-bold text-xl text-army-900 mb-5">
            Aksar Poochay Janay Walay Sawal
          </h3>
          <div className="space-y-3">
            {note.faqs.map((f, i) => (
              <details
                key={i}
                className="border border-khaki-300 bg-paper rounded-sm px-4 py-3 group"
              >
                <summary className="font-bold text-sm text-army-900 cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-gold-600 font-black shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-ink-soft leading-relaxed mt-2.5">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Video lectures for this note */}
      {noteVideoMap[note.slug] && noteVideoMap[note.slug].length > 0 && (
        <div className="mb-10 bg-army-950 rounded-sm p-5 sm:p-6 border-2 border-gold-500">
          <h3 className="flex items-center gap-2 font-serif font-bold text-xl text-white mb-1">
            <PlayCircle className="w-6 h-6 text-gold-400" /> Video Lectures — Is Topic Par
          </h3>
          <p className="text-xs text-khaki-300 mb-4 flex items-start gap-1.5">
            <Youtube className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>Haroon Forces Academy (YouTube) — credit ke saath embedded.</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {noteVideoMap[note.slug]
              .map((id) => getVideoById(id))
              .filter((v): v is NonNullable<typeof v> => Boolean(v))
              .map((v) => (
                <button
                  key={v.id}
                  onClick={() => navigate({ page: 'videos' })}
                  className="flex items-center gap-3 text-left bg-army-900 hover:bg-army-800 rounded-sm p-2.5 transition-colors"
                >
                  <span className="relative shrink-0 w-28 aspect-video rounded-sm overflow-hidden bg-black">
                    <img
                      src={thumbnailUrl(v.id)}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-7 h-7 text-white drop-shadow" />
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gold-400 mb-0.5">
                      {v.topic}
                    </span>
                    <span className="block text-sm font-bold text-white leading-snug line-clamp-2">
                      {v.title}
                    </span>
                  </span>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Practice MCQs link card for the initial test guide */}
      {note.slug === 'initial-test-guide' && (
        <div className="mb-10 bg-army-900 rounded-sm p-5 sm:p-6 border-2 border-gold-500">
          <h3 className="flex items-center gap-2 font-serif font-bold text-xl text-white mb-1">
            <ListChecks className="w-6 h-6 text-gold-400" /> Practice Initial Test MCQs
          </h3>
          <p className="text-xs text-khaki-300 mb-4">
            Math, Verbal Intelligence, GK, Islamiat, English — timed practice questions, PMA initial test pattern par.
          </p>
          <button
            onClick={() => navigate({ page: 'initial-mcqs' })}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
          >
            <PlayCircle className="w-5 h-5" /> Start Practice Test
          </button>
        </div>
      )}
      {/* Related notes */}
      {note.related && note.related.length > 0 && (
        <div className="mb-10">
          <h3 className="font-serif font-bold text-xl text-army-900 mb-4">Related Notes</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {note.related
              .map((slug) => allNotes.find((n) => n.slug === slug))
              .filter((n): n is NonNullable<typeof n> => Boolean(n))
              .map((n) => (
                <button
                  key={n.slug}
                  onClick={() => navigate({ page: 'note', slug: n.slug })}
                  className="text-left border border-khaki-300 bg-paper rounded-sm p-4 hover:border-army-800 transition-all"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-600 mb-1">
                    {n.category}
                  </p>
                  <p className="font-serif font-bold text-army-950 text-sm leading-snug">
                    {n.title}
                  </p>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div className="rule-double mb-6" />
      <div className="flex justify-between gap-4">
        {prev ? (
          <button
            onClick={() => navigate({ page: 'note', slug: prev.slug })}
            className="flex items-center gap-2 text-sm font-bold text-army-800 hover:text-gold-600 text-left"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="line-clamp-2">{prev.title}</span>
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button
            onClick={() => navigate({ page: 'note', slug: next.slug })}
            className="flex items-center gap-2 text-sm font-bold text-army-800 hover:text-gold-600 text-right ml-auto"
          >
            <span className="line-clamp-2">{next.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        )}
      </div>
    </article>
  );
};
