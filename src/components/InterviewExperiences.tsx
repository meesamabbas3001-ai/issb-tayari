import React, { useState } from 'react';
import { ChevronDown, BadgeCheck, Info, MessageSquareText, Lightbulb } from 'lucide-react';
import {
  INTERVIEW_EXPERIENCES,
  COMMON_INTERVIEW_QUESTIONS,
  INTERVIEW_TIPS,
  type InterviewExperience,
} from '../data/interviewExperiences';

const ExperienceCard: React.FC<{ exp: InterviewExperience }> = ({ exp }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-paper border-2 border-army-900 rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left hover:bg-paper-dark transition-colors"
      >
        <div>
          <p className="font-serif font-black text-lg text-army-950">{exp.name}</p>
          <p className="text-sm font-bold text-gold-600 flex items-center gap-1.5 mt-0.5">
            <BadgeCheck className="w-4 h-4" /> {exp.result}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-army-800 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-khaki-300 pt-3">
          {exp.essays && exp.essays.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-black uppercase tracking-wider text-army-800 mb-1">Essays</p>
              <ul className="list-disc list-inside text-sm text-ink space-y-0.5">
                {exp.essays.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-xs font-black uppercase tracking-wider text-army-800 mb-2">
            Interview ka flow
          </p>
          <ol className="space-y-2.5">
            {exp.flow.map((step, i) => (
              <li key={i} className="text-sm leading-relaxed">
                <span className="font-bold text-army-900">{step.q}</span>
                {step.a && <span className="text-ink-soft"> → {step.a}</span>}
              </li>
            ))}
          </ol>
          {exp.tip && (
            <p className="mt-3 text-sm bg-gold-100 border-l-4 border-gold-500 px-3 py-2 rounded-sm text-ink">
              <strong>Seekh:</strong> {exp.tip}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export const InterviewExperiences: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
    <div className="rule-double mb-6" />
    <h1 className="font-serif font-black text-3xl sm:text-4xl text-army-950 mb-2">
      Real Interview Experiences
    </h1>
    <p className="text-army-700 font-medium mb-6">Asal candidates ke initial interview ke tajarbaat</p>

    <div className="bg-khaki-100 border border-khaki-400 rounded-sm p-4 mb-8 flex items-start gap-3">
      <Info className="w-5 h-5 text-army-800 shrink-0 mt-0.5" />
      <p className="text-sm text-ink-soft leading-relaxed">
        Ye <strong className="text-army-900">real candidates</strong> ne apne initial interviews ke
        baad khud share kiye hain — ISSB Tayari ne inhein as-it-is lagaya hai, sirf parhne me
        asani ke liye tarteeb di hai. Har candidate ka interview alag hota hai, lekin{' '}
        <strong className="text-army-900">pattern ek jaisa</strong> hai — isi liye ye experiences
        itne qeemti hain.
      </p>
    </div>

    <h2 className="font-serif font-black text-2xl text-army-950 mb-4 flex items-center gap-2">
      <MessageSquareText className="w-6 h-6 text-gold-600" /> Sab se common sawal
    </h2>
    <div className="bg-paper border-2 border-army-900 rounded-sm p-4 mb-8">
      <ol className="space-y-2.5">
        {COMMON_INTERVIEW_QUESTIONS.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2">
            <span className="font-black text-gold-600 shrink-0">{i + 1}.</span>
            <span>
              <span className="font-bold text-army-950">{item.q}</span>
              {item.note && <span className="text-ink-soft"> — {item.note}</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>

    <h2 className="font-serif font-black text-2xl text-army-950 mb-4 flex items-center gap-2">
      <Lightbulb className="w-6 h-6 text-gold-600" /> Candidates ki naseehatain
    </h2>
    <div className="grid gap-2.5 mb-10">
      {INTERVIEW_TIPS.map((tip, i) => (
        <div
          key={i}
          className="bg-gold-100 border-l-4 border-gold-500 px-4 py-2.5 rounded-sm text-sm text-ink"
        >
          {tip}
        </div>
      ))}
    </div>

    <h2 className="font-serif font-black text-2xl text-army-950 mb-4">
      Tajarbaat <span className="text-base font-bold text-khaki-600">(card kholo)</span>
    </h2>
    <div className="space-y-4">
      {INTERVIEW_EXPERIENCES.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </div>
  </div>
);
