import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Eye, PenLine, CheckCircle2, RotateCcw, Image as ImageIcon, Info } from 'lucide-react';
import { tatPictures, type TatPicture } from '../data/tatPictures';

const OBSERVE_TIME = 30;
const WRITE_TIME = 210; // 3.5 minutes

type Phase = 'pick' | 'observe' | 'write' | 'done';

const checklistItems = [
  'Kahani me ek wazeh HERO (markazi kirdaar) hai',
  'Koi masla ya challenge dikhaya gaya',
  'Hero ne AMAL kiya (sirf socha nahi)',
  'Ending POSITIVE hai (ummid, kamyabi)',
  'Kahani 120-180 alfaaz ki hai',
  'Tasveer ki details istemal ki (waqt, jagah, mahaul)',
];

export const PictureStory: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('pick');
  const [pic, setPic] = useState<TatPicture>(tatPictures[0]);
  const [secondsLeft, setSecondsLeft] = useState(OBSERVE_TIME);
  const [story, setStory] = useState('');
  const [checked, setChecked] = useState<boolean[]>(new Array(checklistItems.length).fill(false));
  const timerRef = useRef<number | null>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const wordCount = story.trim() ? story.trim().split(/\s+/).length : 0;

  useEffect(() => {
    stopTimer();
    if (phase === 'observe') {
      setSecondsLeft(OBSERVE_TIME);
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setPhase('write');
            setSecondsLeft(WRITE_TIME);
            return WRITE_TIME;
          }
          return s - 1;
        });
      }, 1000);
    } else if (phase === 'write') {
      areaRef.current?.focus();
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setPhase('done');
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const startObserve = (p: TatPicture) => {
    setPic(p);
    setStory('');
    setChecked(new Array(checklistItems.length).fill(false));
    setPhase('observe');
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const toggleCheck = (i: number) => {
    setChecked((c) => c.map((v, j) => (j === i ? !v : v)));
  };

  const score = checked.filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Picture Story Practice
      </h1>
      <p className="text-army-700 font-medium mb-6">TAT — tasveer dekho, kahani likho, khud check karo</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Asal pattern:</strong> pehle tasveer <strong>30 second</strong>{' '}
          dekho (observe), phir <strong>3.5 minute</strong> me kahani likho. Hero + masla + amal +
          positive ending. Ye practice pictures hain — asal test ki nahi.
        </p>
      </div>

      {phase === 'pick' && (
        <div>
          <h2 className="font-serif font-bold text-xl text-army-950 mb-4 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" /> Tasveer chuno:
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {tatPictures.map((p) => (
              <button
                key={p.id}
                onClick={() => startObserve(p)}
                className="bg-paper border-2 border-army-900 rounded-sm overflow-hidden hover:border-gold-500 transition-colors text-left group"
              >
                <img src={p.url} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <p className="font-serif font-bold text-army-950 group-hover:text-gold-600">{p.title}</p>
                  <p className="text-xs text-ink-soft mt-1 line-clamp-2">{p.hint}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-army-800 mt-3">
                    <Play className="w-4 h-4" /> Start
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === 'observe' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 text-center">
          <p className="inline-flex items-center gap-2 font-black text-3xl text-army-900 tabular-nums mb-4">
            <Eye className="w-7 h-7" /> {secondsLeft}s
          </p>
          <p className="text-sm font-bold text-khaki-600 uppercase tracking-[0.2em] mb-4">
            Observe karo — likhna abhi nahi!
          </p>
          <img src={pic.url} alt={pic.title} className="w-full max-h-96 object-contain rounded-sm border border-khaki-300 mb-4" />
          <p className="text-sm text-ink-soft italic">{pic.hint}</p>
          <div className="h-2 bg-khaki-200 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-army-700 transition-all duration-1000" style={{ width: `${(secondsLeft / OBSERVE_TIME) * 100}%` }} />
          </div>
        </div>
      )}

      {phase === 'write' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-serif font-bold text-army-950">{pic.title}</span>
            <span className={`inline-flex items-center gap-1.5 font-black text-2xl tabular-nums ${secondsLeft <= 30 ? 'text-red-700' : 'text-army-900'}`}>
              <Timer className="w-5 h-5" /> {fmt(secondsLeft)}
            </span>
          </div>
          <img src={pic.url} alt={pic.title} className="w-full h-36 object-cover rounded-sm border border-khaki-300 mb-4" />
          <div className="h-2 bg-khaki-200 rounded-full mb-4 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${secondsLeft <= 30 ? 'bg-red-700' : 'bg-gold-500'}`}
              style={{ width: `${(secondsLeft / WRITE_TIME) * 100}%` }}
            />
          </div>
          <textarea
            ref={areaRef}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Apni kahani yahan likho... (Hero kaun? Masla kya? Us ne kya kiya? Ending kaisi?)"
            className="w-full h-56 border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white leading-relaxed"
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm font-bold text-army-800">Alfaaz: {wordCount}</span>
            <button
              onClick={() => { stopTimer(); setPhase('done'); }}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-2.5 rounded-sm transition-colors"
            >
              <PenLine className="w-4 h-4" /> Finish Story
            </button>
          </div>
        </div>
      )}

      {phase === 'done' && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8">
          <div className="text-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-army-700 mx-auto mb-3" />
            <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Kahani Mukammal!</h2>
            <p className="text-ink-soft">
              Alfaaz: <strong className="text-army-900">{wordCount}</strong> &bull; Self-check score:{' '}
              <strong className="text-army-900">{score}/{checklistItems.length}</strong>
            </p>
          </div>

          {story && (
            <div className="bg-paper-dark border border-khaki-300 rounded-sm p-4 mb-6 max-h-48 overflow-y-auto">
              <p className="text-sm text-ink-soft leading-relaxed whitespace-pre-wrap">{story}</p>
            </div>
          )}

          <h3 className="font-serif font-bold text-army-900 mb-3">Khud check karo (tick lagao):</h3>
          <div className="space-y-2 mb-6">
            {checklistItems.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleCheck(i)}
                className={`w-full flex items-start gap-3 text-left border-2 rounded-sm px-4 py-3 text-sm transition-colors ${
                  checked[i] ? 'border-army-700 bg-army-900/5' : 'border-khaki-300 bg-white'
                }`}
              >
                <span className={`w-5 h-5 shrink-0 rounded-sm border-2 flex items-center justify-center mt-0.5 ${checked[i] ? 'bg-army-700 border-army-700 text-white' : 'border-khaki-400'}`}>
                  {checked[i] && <CheckCircle2 className="w-4 h-4" />}
                </span>
                <span className={checked[i] ? 'text-army-900 font-semibold' : 'text-ink-soft'}>{item}</span>
              </button>
            ))}
          </div>

          <p className="text-sm text-ink-soft mb-6 bg-khaki-100 border border-khaki-400 rounded-sm p-4">
            <strong className="text-army-900">Tip:</strong>{' '}
            {score >= 5 ? 'Zabardast structure! Ab raftar par kaam karo — 3.5 minute me poori kahani.' : score >= 3 ? 'Achi koshish! Jo points miss hue, agli kahani me un par focus karo.' : 'Structure yaad rakho: HERO → MASLA → AMAL → POSITIVE ENDING. Phir se try karo!'}
          </p>

          <div className="text-center">
            <button
              onClick={() => setPhase('pick')}
              className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> New Picture
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
