import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, RotateCcw, Info, Mic, Lightbulb, SkipForward, Hourglass } from 'lucide-react';
import { lecturetteTopics } from '../data/lecturetteTopics';
import { shuffled } from '../data/sentenceCompletion';

const PREP_TIME = 120; // 2 minutes
const SPEAK_TIME = 180; // 3 minutes

type Phase = 'idle' | 'prep' | 'speak' | 'done';

const tips = [
  'Structure: Taaruf (20 sec) → 3 points (2 min) → Khulasa (30 sec)',
  'Awaz unchi aur saaf rakho — aahista bolne wala leader nahi lagta',
  'Ankhen sun-ne walon par — ek jagah takna nahi',
  'Rata hua na lage — apne alfaaz me bolo',
  'Waqt se pehle khatam ho to ek misaal de kar poora karo',
  'Ghabrahat normal hai — 30 second baad khud confident ho jao ge',
];

export const LecturettePractice: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [queue, setQueue] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(PREP_TIME);
  const [done, setDone] = useState(0);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    stopTimer();
    if (phase === 'prep') {
      setSecondsLeft(PREP_TIME);
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setPhase('speak');
            return SPEAK_TIME;
          }
          return s - 1;
        });
      }, 1000);
    } else if (phase === 'speak') {
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

  const start = () => {
    const topics = shuffled(lecturetteTopics);
    setQueue(topics);
    setCurrent(0);
    setDone(0);
    setPhase('prep');
  };

  const nextTopic = () => {
    stopTimer();
    setDone((d) => d + 1);
    if (current + 1 >= queue.length) {
      setQueue(shuffled(lecturetteTopics));
      setCurrent(0);
    } else {
      setCurrent((c) => c + 1);
    }
    setPhase('prep');
  };

  const skipToSpeak = () => {
    stopTimer();
    setPhase('speak');
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const topic = queue[current] ?? '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Lecturette Practice
      </h1>
      <p className="text-army-700 font-medium mb-6">2 minute tayyari → 3 minute taqreer — stage ka dar khatam karo</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">How to use:</strong> topic milega → <strong>2 minute</strong>{' '}
          me 3 points socho → phir <strong>3 minute</strong> zor se bol kar practice karo (jaise stage
          par ho). Mobile ka timer samjho — bolna zaroori hai, sirf parhna nahi!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {phase === 'idle' && (
            <div className="text-center bg-paper border-2 border-army-900 rounded-sm p-10">
              <Mic className="w-12 h-12 text-army-800 mx-auto mb-4" />
              <h2 className="font-serif font-bold text-xl text-army-950 mb-2">15 topics. Stage tumhara.</h2>
              <p className="text-ink-soft mb-6">Pehla topic milte hi 2 minute ki tayyari shuru!</p>
              <button
                onClick={start}
                className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-8 py-3 rounded-sm transition-colors"
              >
                <Play className="w-5 h-5" /> Start Practice
              </button>
            </div>
          )}

          {phase === 'prep' && (
            <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 text-center">
              <p className="inline-flex items-center gap-2 font-black text-4xl text-army-900 tabular-nums mb-2">
                <Hourglass className="w-8 h-8" /> {fmt(secondsLeft)}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-khaki-600 font-bold mb-6">
                Tayyari ka waqt — 3 points socho
              </p>
              <p className="font-serif font-black text-3xl text-army-950 mb-6 leading-snug">{topic}</p>
              <div className="h-2 bg-khaki-200 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-gold-500 transition-all duration-1000" style={{ width: `${(secondsLeft / PREP_TIME) * 100}%` }} />
              </div>
              <div className="text-left bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-6 text-sm text-ink-soft">
                <p className="font-bold text-army-900 mb-2">Abhi ye socho:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Taaruf — topic ka matlab ek jumlay me</li>
                  <li>Point 1 + ek misaal</li>
                  <li>Point 2 + ek misaal</li>
                  <li>Point 3 + khulasa (ending line)</li>
                </ol>
              </div>
              <button
                onClick={skipToSpeak}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-8 py-3 rounded-sm transition-colors"
              >
                <Mic className="w-5 h-5" /> Tayyar hun — Bolna Shuru
              </button>
            </div>
          )}

          {phase === 'speak' && (
            <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 text-center">
              <p className={`inline-flex items-center gap-2 font-black text-5xl tabular-nums mb-2 ${secondsLeft <= 30 ? 'text-red-700' : 'text-army-900'}`}>
                <Timer className="w-9 h-9" /> {fmt(secondsLeft)}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-khaki-600 font-bold mb-4">
                Zor se bolo — jaise stage par ho!
              </p>
              <p className="font-serif font-bold text-2xl text-army-950 mb-6">{topic}</p>
              <div className="h-3 bg-khaki-200 rounded-full mb-6 overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ${secondsLeft <= 30 ? 'bg-red-700' : 'bg-army-700'}`}
                  style={{ width: `${(secondsLeft / SPEAK_TIME) * 100}%` }}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={nextTopic}
                  className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
                >
                  <SkipForward className="w-5 h-5" /> Khatam — Next Topic
                </button>
              </div>
              <p className="text-xs text-khaki-600 mt-4">Mukammal: {done} lecturette</p>
            </div>
          )}

          {phase === 'done' && (
            <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 text-center">
              <Mic className="w-12 h-12 text-army-700 mx-auto mb-3" />
              <h2 className="font-serif font-black text-2xl text-army-950 mb-2">Waqt Khatam!</h2>
              <p className="text-ink-soft mb-2">Topic: <strong className="text-army-900">{topic}</strong></p>
              <p className="text-sm text-ink-soft mb-6 max-w-md mx-auto">
                3 minute poori taqreer karna hi asal practice hai. Agar beech me ruk gaye thay — agli
                dafa points pehle se mazboot karo.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={nextTopic}
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
                >
                  <SkipForward className="w-5 h-5" /> Next Topic
                </button>
                <button
                  onClick={() => setPhase('idle')}
                  className="inline-flex items-center gap-2 border-2 border-army-800 text-army-900 font-bold px-6 py-3 rounded-sm hover:bg-army-900 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-5 h-5" /> Stop
                </button>
              </div>
              <p className="text-xs text-khaki-600 mt-4">Mukammal: {done + 1} lecturette</p>
            </div>
          )}
        </div>

        <aside className="bg-khaki-100 border-2 border-army-800 rounded-sm p-5 h-fit">
          <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-army-900 mb-4">
            <Lightbulb className="w-5 h-5 text-gold-600" /> Lecturette Tips
          </h3>
          <ul className="space-y-3">
            {tips.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                <span className="font-black text-army-700">{i + 1}.</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};
