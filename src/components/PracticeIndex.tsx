import React from 'react';
import { Zap, Timer, PenLine, Image as ImageIcon, MessageSquareText, Mic, Layers, ArrowRight, Dumbbell, Brain, Shapes, ListChecks, Siren, UserRound } from 'lucide-react';
import type { Navigate, Route } from '../types';

interface Tool {
  title: string;
  urdu: string;
  desc: string;
  icon: React.ReactNode;
  route: Route;
  meta: string;
  badge?: string;
}

const tools: Tool[] = [
  {
    title: 'WAT Simulator',
    urdu: 'Word Association Test',
    desc: 'Lafz dekho, 10 second me positive jumla likho. Speed + soch ki practice.',
    icon: <Zap className="w-7 h-7" />,
    route: { page: 'wat' },
    meta: '20 words • 10s each',
  },
  {
    title: 'Sentence Completion',
    urdu: 'Adhooray jumlay',
    desc: 'English aur Urdu — adhooray jumlay 15 second me mukammal karo.',
    icon: <PenLine className="w-7 h-7" />,
    route: { page: 'sentence-completion' },
    meta: '10 items • 15s each • EN/UR',
    badge: 'New',
  },
  {
    title: 'Picture Story',
    urdu: 'TAT Practice',
    desc: 'Tasveer 30 second dekho, 3.5 minute me kahani likho, khud check karo.',
    icon: <ImageIcon className="w-7 h-7" />,
    route: { page: 'picture-story' },
    meta: '3 pictures • timed',
    badge: 'New',
  },
  {
    title: 'SRT Practice',
    urdu: 'Situation Reaction Test',
    desc: '60 situations, 30 minute — har mushkil ka ek wazeh action likho. Full test ya practice mode.',
    icon: <Siren className="w-7 h-7" />,
    route: { page: 'srt' },
    meta: '60 situations • 30 min',
    badge: 'New',
  },
  {
    title: 'Self Description',
    urdu: 'Khud ko likhna seekho',
    desc: '5 guided sections — walidain, teachers, dost, khubiyan, kamzoriyan. Sach likho, WAT se match karo.',
    icon: <UserRound className="w-7 h-7" />,
    route: { page: 'self-description' },
    meta: '5 sections • auto-save',
    badge: 'New',
  },
  {
    title: 'Situation Practice',
    urdu: 'OPI Style',
    desc: 'Mushkil halaat — 20 second me faisla likho. Officer jaisi soch banao.',
    icon: <MessageSquareText className="w-7 h-7" />,
    route: { page: 'opi-practice' },
    meta: '12 situations • 20s each',
    badge: 'New',
  },
  {
    title: 'Intelligence Quiz',
    urdu: 'Verbal Intelligence',
    desc: 'Timed MCQs with explanations — dimagh ki raftar test karo.',
    icon: <Brain className="w-7 h-7" />,
    route: { page: 'quiz' },
    meta: '10 questions • 30s each',
  },
  {
    title: 'Initial Test MCQs',
    urdu: 'Math • Verbal • GK • Islamiat • English',
    desc: 'PMA initial test pattern par practice MCQs — subject choose karo, timer ke saath test do.',
    icon: <ListChecks className="w-7 h-7" />,
    route: { page: 'initial-mcqs' },
    meta: '20 questions • 45s each',
    badge: 'New',
  },
  {
    title: 'Lecturette Practice',
    urdu: 'Stage Practice',
    desc: '2 minute tayyari, 3 minute zor se taqreer. Stage ka dar khatam.',
    icon: <Mic className="w-7 h-7" />,
    route: { page: 'lecturette' },
    meta: '15 topics • timed',
    badge: 'New',
  },
  {
    title: 'Interview Flashcards',
    urdu: '30 Sawal + Tips',
    desc: 'Card palto, sawal parho, approach tip seekho. Roz 10 card.',
    icon: <Layers className="w-7 h-7" />,
    route: { page: 'interview-flashcards' },
    meta: '30 cards • shuffle',
    badge: 'New',
  },
  {
    title: 'Non-Verbal Test',
    urdu: 'Shapes Wala Test',
    desc: 'Odd one out, series, aur ginti — tasveer dekho, pattern pehchano.',
    icon: <Shapes className="w-7 h-7" />,
    route: { page: 'non-verbal' },
    meta: '16 questions • 30s each',
    badge: 'New',
  },
];

export const PracticeIndex: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-army-900 text-gold-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-4">
          <Dumbbell className="w-4 h-4" /> Practice Ground
        </span>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-army-950 mb-3">
          Parho Nahi — <span className="text-gold-600">Practice Karo</span>
        </h1>
        <p className="text-army-700 font-medium max-w-2xl mx-auto">
          ISSB test likhne se nahi, karne se pass hota hai. Har tool me timer aur score hai —
          roz 30 minute yahan lagao.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((t) => (
          <button
            key={t.title}
            onClick={() => navigate(t.route)}
            className="relative bg-paper border-2 border-army-900 rounded-sm p-6 text-left hover:border-gold-500 hover:shadow-lg transition-all group"
          >
            {t.badge && (
              <span className="absolute top-4 right-4 bg-gold-500 text-army-950 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-sm">
                {t.badge}
              </span>
            )}
            <span className="w-14 h-14 rounded-sm bg-army-900 text-gold-400 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-army-950 transition-colors">
              {t.icon}
            </span>
            <h2 className="font-serif font-black text-xl text-army-950 mb-1">{t.title}</h2>
            <p className="text-xs font-bold uppercase tracking-wider text-khaki-600 mb-2">{t.urdu}</p>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">{t.desc}</p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-army-800">
                <Timer className="w-3.5 h-3.5" /> {t.meta}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-gold-600 group-hover:gap-2 transition-all">
                Start <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 bg-khaki-100 border border-khaki-400 rounded-sm p-5 text-center">
        <p className="text-sm text-ink-soft leading-relaxed max-w-2xl mx-auto">
          <strong className="text-army-900">Roz ka plan:</strong> WAT (10 min) → Sentence Completion
          (10 min) → ek Picture Story ya Lecturette. Interview se 2 hafte pehle Flashcards roz.
          Ye sab <strong>practice tools</strong> hain — asal test ke sawal kisi ke paas nahi.
        </p>
      </div>
    </div>
  );
};
