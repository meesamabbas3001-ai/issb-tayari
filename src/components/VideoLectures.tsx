import React, { useState, useEffect, useCallback } from 'react';
import { PlayCircle, X, ExternalLink, BookOpen, Youtube } from 'lucide-react';
import type { Navigate } from '../types';
import {
  lectureVideos,
  lectureTopics,
  thumbnailUrl,
  embedUrl,
  getVideoById,
  VIDEO_CREDIT,
  type LectureVideo,
} from '../data/videos';

const ALL = 'All';

export const VideoLectures: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  const [topic, setTopic] = useState<string>(ALL);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filtered =
    topic === ALL ? lectureVideos : lectureVideos.filter((v) => v.topic === topic);

  const close = useCallback(() => setPlayingId(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = playingId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [playingId]);

  const playing: LectureVideo | undefined = playingId ? getVideoById(playingId) : undefined;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
        Free Video Lectures
      </p>
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 leading-tight mb-2">
        Video Lectures
      </h1>
      <p className="text-lg text-army-700 font-medium mb-3">
        Dekh kar seekho — har topic par video lecture.
      </p>
      <p className="text-sm text-ink-soft mb-6 flex items-start gap-2">
        <Youtube className="w-4 h-4 mt-0.5 shrink-0 text-red-700" />
        <span>{VIDEO_CREDIT}</span>
      </p>

      <div className="rule-double mb-8" />

      {/* Topic filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[ALL, ...lectureTopics].map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`px-4 py-2 rounded-sm text-sm font-bold border-2 transition-colors ${
              topic === t
                ? 'bg-army-900 text-gold-400 border-army-900'
                : 'bg-paper text-army-800 border-khaki-300 hover:border-army-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {filtered.map((v) => (
          <article
            key={v.id}
            className="border border-khaki-300 bg-paper rounded-sm overflow-hidden hover:border-army-800 hover:shadow-md transition-all flex flex-col"
          >
            <button
              onClick={() => setPlayingId(v.id)}
              className="relative block w-full aspect-video bg-army-950 group"
              aria-label={`Play: ${v.title}`}
            >
              <img
                src={thumbnailUrl(v.id)}
                alt={v.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-14 h-14 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
              </span>
              <span className="absolute top-2 left-2 bg-army-950/85 text-gold-400 text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-1 rounded-sm">
                {v.topic}
              </span>
            </button>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-serif font-bold text-army-950 leading-snug mb-2">{v.title}</h2>
              <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-1">{v.description}</p>
              <button
                onClick={() => navigate({ page: 'note', slug: v.pairsWith })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-army-800 hover:text-gold-600 text-left"
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="underline underline-offset-2">
                  Pairs with: {v.pairsWithTitle}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Credit + full playlist link */}
      <div className="bg-khaki-100 border-2 border-army-800 rounded-sm p-5 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-serif font-bold text-lg text-army-900 mb-1">
            Haroon Forces Academy — ISSB Complete Lectures
          </h3>
          <p className="text-sm text-ink-soft">
            All {lectureVideos.length} selected lectures are embedded from their public YouTube
            playlist. Full playlist (59 videos) available on YouTube.
          </p>
        </div>
        <a
          href="https://youtube.com/playlist?list=PLZQfVnB6Z6Rozu7RCrCfPiTkRi5eo4M-U"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-sm text-sm transition-colors shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
          Full Playlist
        </a>
      </div>
      <p className="text-xs text-ink-soft italic">{VIDEO_CREDIT}</p>

      {/* Player modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={playing.title}
        >
          <div
            className="w-full max-w-4xl bg-army-950 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-army-700">
              <p className="font-serif font-bold text-white text-sm sm:text-base pr-4 leading-snug">
                {playing.title}
              </p>
              <button
                onClick={close}
                className="p-1.5 text-khaki-200 hover:text-gold-400 shrink-0"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                key={playing.id}
                src={embedUrl(playing.id)}
                title={playing.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-khaki-300">
                Video by Haroon Forces Academy (YouTube) — embedded with credit.
              </p>
              <button
                onClick={() => {
                  close();
                  navigate({ page: 'note', slug: playing.pairsWith });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read paired note: {playing.pairsWithTitle}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
