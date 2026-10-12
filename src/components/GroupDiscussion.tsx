import React, { useState, useEffect, useRef } from 'react';
import { Users, Play, Square, RotateCcw, Shuffle, CheckCircle2, Lightbulb, ListChecks } from 'lucide-react';
import { gdTopics, gdCategories, shuffled, type GdTopic } from '../data/gdTopics';

const SPEAK_TIME = 120; // 2 minutes speaking practice
const STORAGE_KEY = 'gd-practiced-v1';

const dos = [
  'Pehle 30 second me apna point rakho — shuru me bolna himmat dikhata hai',
  'Doosron ki baat suno, phir apna point joro — "Bilal ki baat se ittefaq, aur..."',
  'Facts aur misaal do — khaali jazbaat se discussion nahi jeetti jaati',
  'Aawaz saaf, chehra pur-sukoon — gussa ya cheekhna kamzori hai',
  'Waqt dekho — 2 minute me 2-3 solid points kaafi hain',
];

const donts = [
  'Kisi ko tokna ya beech me kaatna nahi — GTO ye note karta hai',
  'Ek hi baat ko ghoom phir kar dohraya nahi — naya point lao ya khamosh raho',
  'Zyada der tak mic pakar ke na rakho — 30-45 second ek baar me kaafi',
  'Personal attack nahi — point par behas karo, bande par nahi',
];

function loadPracticed(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export const GroupDiscussion: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const [topic, setTopic] = useState<GdTopic | null>(null);
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(SPEAK_TIME);
  const [practiced, setPracticed] = useState<string[]>(loadPracticed);
  const timerRef = useRef<number | null>(null);

  const pool = category === 'All' ? gdTopics : gdTopics.filter((t) => t.category === category);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => stopTimer, []);

  const giveTopic = () => {
    stopTimer();
    setRunning(false);
    setSecondsLeft(SPEAK_TIME);
    const pick = shuffled(pool)[0];
    setTopic(pick || null);
  };

  const startTimer = () => {
    if (!topic || running) return;
    setRunning(true);
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          stopTimer();
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const stopAndCount = () => {
    stopTimer();
    setRunning(false);
    if (topic && !practiced.includes(topic.topic)) {
      const next = [...practiced, topic.topic];
      setPracticed(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  };

  const resetTimer = () => {
    stopTimer();
    setRunning(false);
    setSecondsLeft(SPEAK_TIME);
  };

  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const progress = 1 - secondsLeft / SPEAK_TIME;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-army-900 text-gold-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-4">
          <Users className="w-4 h-4" /> Group Discussion Practice
        </span>
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-3">
          Behas Me <span className="text-gold-600">Leader</span> Bano
        </h1>
        <p className="text-army-700 font-medium max-w-2xl mx-auto">
          GTO ke group discussion me 8-10 candidates hote hain. Yahan topic lo, 2 minute zor se
          bolo — doston ke saath bhi practice kar sakte ho.
        </p>
      </div>

      {/* category chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {gdCategories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setTopic(null);
              resetTimer();
            }}
            className={`px-4 py-2 rounded-sm text-sm font-bold border-2 transition-colors ${
              category === c
                ? 'bg-army-900 text-gold-400 border-army-900'
                : 'bg-paper text-army-900 border-khaki-300 hover:border-army-900'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <button
          onClick={giveTopic}
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-army-950 font-bold px-8 py-3 rounded-sm transition-colors"
        >
          <Shuffle className="w-5 h-5" /> Mujhe Topic Do
        </button>
        <p className="text-xs text-ink-soft mt-2">
          {pool.length} topics is category me • {practiced.length} topics practice ho chuke
        </p>
      </div>

      {topic && (
        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 sm:p-8 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-khaki-600 mb-2">
            {topic.category}
          </p>
          <h2 className="font-serif font-black text-2xl text-army-950 mb-6 leading-snug">
            {topic.topic}
          </h2>

          {/* timer */}
          <div className="mb-2 flex items-end justify-between">
            <span className="text-sm font-bold text-army-800">Speaking timer</span>
            <span className={`font-serif font-black text-4xl ${secondsLeft <= 15 ? 'text-red-700' : 'text-army-950'}`}>
              {mm}:{ss}
            </span>
          </div>
          <div className="h-3 bg-khaki-200 rounded-sm overflow-hidden mb-5">
            <div
              className="h-full bg-gold-500 transition-all duration-1000"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {!running ? (
              <button
                onClick={startTimer}
                className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-gold-400 font-bold px-6 py-2.5 rounded-sm transition-colors"
              >
                <Play className="w-4 h-4" /> Bolna Shuru Karo
              </button>
            ) : (
              <button
                onClick={stopAndCount}
                className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-sm transition-colors"
              >
                <Square className="w-4 h-4" /> Roko aur Count Karo
              </button>
            )}
            <button
              onClick={resetTimer}
              className="inline-flex items-center gap-2 border-2 border-khaki-400 hover:border-army-900 text-army-900 font-bold px-6 py-2.5 rounded-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
          {secondsLeft === 0 && (
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-green-800">
              <CheckCircle2 className="w-5 h-5" /> 2 minute poore! "Roko aur Count Karo" dabao taake ye topic practiced me count ho.
            </p>
          )}
        </div>
      )}

      {/* tips */}
      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div className="bg-green-50 border-2 border-green-700 rounded-sm p-5">
          <h3 className="flex items-center gap-2 font-bold text-green-900 mb-3">
            <Lightbulb className="w-5 h-5" /> Aise Karo (Do's)
          </h3>
          <ul className="text-sm text-green-950 space-y-2">
            {dos.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-black">✓</span> {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border-2 border-red-800 rounded-sm p-5">
          <h3 className="flex items-center gap-2 font-bold text-red-900 mb-3">
            <ListChecks className="w-5 h-5" /> Aise Nahi (Don'ts)
          </h3>
          <ul className="text-sm text-red-950 space-y-2">
            {donts.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-black">✗</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-5 text-center">
        <p className="text-sm text-ink-soft leading-relaxed max-w-2xl mx-auto">
          <strong className="text-army-900">Tip:</strong> akelay practice boring lage to 3-4 doston
          ko jama karo, ek topic nikalo, aur baari baari 2-2 minute bolo. Asal GD ka mahaul ban jayega.
        </p>
      </div>
    </div>
  );
};
