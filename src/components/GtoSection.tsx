import React from 'react';
import { Users, Mic, Brain } from 'lucide-react';
import type { Navigate } from '../types';
import { HubHero, HubNotes, HubPractice, type PracticeItem } from './SectionHub';

const practiceItems: PracticeItem[] = [
  {
    icon: <Mic className="w-6 h-6" />,
    name: 'Lecturette Practice',
    desc: '3 minute ki speech — topic milte hi intro, 3 points, conclusion. Timer ke saath practice.',
    route: { page: 'lecturette' },
    tag: 'Jald aa raha hai',
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: 'Group Discussion Practice',
    desc: '40 topics — behas me leader bano. Topic lo, 2 minute bolo, timer ke saath.',
    route: { page: 'group-discussion' },
    tag: 'New',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    name: 'Intelligence Quiz',
    desc: '10 verbal sawal, 30 second har ek — GTO day se pehle dimagh garam karo.',
    route: { page: 'quiz' },
    tag: 'Live tool',
  },
];

const driveImg = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

const gallery: { src: string; caption: string }[] = [
  { src: driveImg('1Cv_IrpOdP3X2zkKWLwW36DycdIhpUfV8'), caption: 'Group discussion — circle me behas' },
  { src: driveImg('19i5eDqDETIKsxJXgFNiBM5MKq_jhlgS3'), caption: 'Group planning — map par plan banao' },
  { src: driveImg('1TFMtV_7zJS61AkLs-N1FnnU9h9MfGb22'), caption: 'Progressive task — plank aur rassi se paar' },
  { src: driveImg('1a_ADbFZO9cSOtm80pg74Szx8147WYhGg'), caption: 'Half group task — chhoti team, bara imtihan' },
  { src: driveImg('1pCRsvK6LKMMr3Du9Fc3lQQMCWtDX4Rfa'), caption: 'Command task — tum leader ho' },
  { src: driveImg('1KLO4tm-thxmFBjC6J9EYjqvQGQrDwbfa'), caption: 'Individual obstacles — himmat aur fitness' },
  { src: driveImg('1M7ogaPaKAuMHDg-UuvxKzZ61HK4xWl44'), caption: 'Final task — sab mil kar finish' },
  { src: driveImg('1pCLX3JhNxtGcwT77bXwy0L06Nfeg5lDu'), caption: 'Lecturette — 3 minute ki speech' },
];

export const GtoSection: React.FC<{ navigate: Navigate }> = ({ navigate }) => (
  <div>
    <HubHero
      image="https://drive.google.com/thumbnail?id=1SDaMJ2xvaCs9K2gdSqnxDDZx4m9frsAD&sz=w1200"
      icon={<Users className="w-6 h-6" />}
      title="GTO Day"
      urdu="Teamwork ka din — bahar maidan me"
      intro="GTO day outdoor hota hai: group discussion, group tasks, obstacles, command task aur lecturette. GTO dekhta hai — tum team me kaise kaam karte ho, leader ban sakte ho ya nahi. Neeche har task ki tasveer ke saath notes parho."
    />
    <HubNotes
      slugs={['gto-tasks', 'gto-interview-tips', 'lecturette-guide', 'group-discussion']}
      navigate={navigate}
    />

    {/* Task gallery */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="font-serif font-black text-2xl text-army-950 mb-1">GTO Task Gallery</h2>
      <p className="text-sm text-army-700 font-medium mb-6">
        Har task dekho — tasveer me samjho, phir notes me detail parho
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((g) => (
          <figure
            key={g.src}
            className="border-2 border-khaki-300 rounded-sm overflow-hidden bg-white"
          >
            <img src={g.src} alt={g.caption} className="w-full h-40 sm:h-48 object-cover" loading="lazy" />
            <figcaption className="px-3 py-2 text-xs font-bold text-army-900 bg-khaki-100">
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

    <HubPractice items={practiceItems} navigate={navigate} />
  </div>
);
