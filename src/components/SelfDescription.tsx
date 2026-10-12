import React, { useState, useEffect } from 'react';
import { Info, Copy, Check, RotateCcw, UserRound, Save } from 'lucide-react';

const STORAGE_KEY = 'self-description-v1';

interface Section {
  key: string;
  title: string;
  guidance: string;
  placeholder: string;
}

const sections: Section[] = [
  {
    key: 'parents',
    title: 'Mere walidain mere baare me kya kehte hain',
    guidance: 'Ghar walon ki nazar se dekho — wo tumhari kon si aadat ki tareef karte hain?',
    placeholder: 'Mere walidain kehte hain ke me...',
  },
  {
    key: 'teachers',
    title: 'Mere teachers mere baare me kya kehte hain',
    guidance: 'School/college me teachers tumhe kaisa student samajhte hain?',
    placeholder: 'Mere teachers kehte hain ke me...',
  },
  {
    key: 'friends',
    title: 'Mere dost mere baare me kya kehte hain',
    guidance: 'Dost sab se sach kehte hain — mushkil waqt me tum kaise dost ho?',
    placeholder: 'Mere dost kehte hain ke me...',
  },
  {
    key: 'strengths',
    title: 'Meri apni raaye — meri khubiyan',
    guidance: 'Khud ko jaano: 2-3 asal khubiyan likho, har ek ka ek chhota saboot ke saath.',
    placeholder: 'Meri sab se bari khubi... (misal: me mushkil waqt me ghabrata nahi)',
  },
  {
    key: 'weaknesses',
    title: 'Wo kamzoriyan jinhe me behtar karna chahta hoon',
    guidance: '1-2 asal kamzoriyan + unhe theek karne ka plan. "Koi kamzori nahi" likhna sab se bari ghalti hai.',
    placeholder: 'Mujhe ... me behtari ki zaroorat hai, is liye me...',
  },
];

function loadSaved(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const SelfDescription: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAnswers(loadSaved());
  }, []);

  const save = (key: string, text: string) => {
    const next = { ...answers, [key]: text };
    setAnswers(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSavedAt(new Date().toLocaleTimeString());
    } catch {
      /* storage unavailable */
    }
  };

  const filledCount = sections.filter((s) => (answers[s.key] ?? '').trim().length > 0).length;
  const totalWords = sections.reduce((n, s) => n + countWords(answers[s.key] ?? ''), 0);

  const copyAll = async () => {
    const text = sections
      .map((s) => `${s.title}:\n${(answers[s.key] ?? '').trim() || '(khaali)'}`)
      .join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setAnswers({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setSavedAt(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
        Self Description Practice
      </h1>
      <p className="text-army-700 font-medium mb-6">Khud ko likhna seekho — sach, saaf, mukammal</p>

      <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-army-900">Ehem baat:</strong> sach likho — psychologist interview
          me cross-check karta hai. Tumhari self description tumhare{' '}
          <strong>WAT aur TAT wali personality se match</strong> honi chahiye. Jo wahan dikhaya,
          wahi yahan likho.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-bold text-khaki-600">
          {filledCount}/{sections.length} sections bhare &bull; {totalWords} alfaaz
        </span>
        {savedAt && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-army-800">
            <Save className="w-3.5 h-3.5" /> Saved {savedAt}
          </span>
        )}
      </div>

      <div className="space-y-5 mb-8">
        {sections.map((s, i) => {
          const text = answers[s.key] ?? '';
          const words = countWords(text);
          return (
            <div key={s.key} className="bg-paper border-2 border-army-900 rounded-sm p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-2">
                <span className="w-9 h-9 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center shrink-0">
                  <UserRound className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="font-serif font-bold text-lg text-army-950">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="text-xs text-ink-soft mt-0.5">{s.guidance}</p>
                </div>
              </div>
              <textarea
                value={text}
                onChange={(e) => save(s.key, e.target.value)}
                placeholder={s.placeholder}
                rows={4}
                maxLength={800}
                className="w-full border-2 border-khaki-400 rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-army-800 bg-white mt-3"
              />
              <p className="text-xs text-khaki-600 mt-2 text-right">{words} alfaaz</p>
            </div>
          );
        })}
      </div>

      <div className="bg-paper-dark border border-khaki-300 rounded-sm p-5 mb-6">
        <h3 className="font-serif font-bold text-army-900 mb-2">Review checklist</h3>
        <ul className="text-sm text-ink-soft space-y-1.5 leading-relaxed">
          <li>• Har section me kam az kam 30-40 alfaaz hain?</li>
          <li>• Khubiyon ke saath chhote saboot (misal) likhe hain?</li>
          <li>• Kamzoriyan asal hain aur unka behtari ka plan hai?</li>
          <li>• Ye tehrer tumhare WAT jumlon jaisi personality dikhati hai?</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={copyAll}
          className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-white font-bold px-6 py-3 rounded-sm transition-colors"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Copied!' : 'Copy All'}
        </button>
        <button
          onClick={clearAll}
          className="inline-flex items-center gap-2 bg-khaki-200 hover:bg-khaki-300 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
        >
          <RotateCcw className="w-5 h-5" /> Saaf Karo
        </button>
      </div>
      <p className="text-xs text-khaki-600 mt-4 text-center">
        Sab kuch tumhare browser me save hota hai — dobara aao ge to wahi milega.
      </p>
    </div>
  );
};
