import React from 'react';
import { Brain, Zap, PenLine, Image as ImageIcon, MessageSquare, Siren, UserRound } from 'lucide-react';
import type { Navigate } from '../types';
import { HubHero, HubNotes, HubPractice, type PracticeItem } from './SectionHub';

const practiceItems: PracticeItem[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    name: 'WAT Simulator',
    desc: 'Word Association Test — 10 second me jumla banao. Speed aur positivity ki practice.',
    route: { page: 'wat' },
    tag: 'Live tool',
  },
  {
    icon: <PenLine className="w-6 h-6" />,
    name: 'Sentence Completion',
    desc: 'Adhoore jumlay mukammal karo — English aur Urdu dono me. Timer ke saath.',
    route: { page: 'sentence-completion' },
    tag: 'Jald aa raha hai',
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    name: 'Picture Story',
    desc: 'Tasveer dekh kar kahani likho — hero, problem, action, positive ending.',
    route: { page: 'picture-story' },
    tag: 'Jald aa raha hai',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    name: 'Pointer Story',
    desc: 'Baghair tasveer — sirf pointer se 3 minute me kahani likho. TAT ki gehri practice.',
    route: { page: 'pointer-story' },
    tag: 'Live tool',
  },
  {
    icon: <Siren className="w-6 h-6" />,
    name: 'SRT Practice',
    desc: 'Situation Reaction Test — 60 situations, 30 minute. Har mushkil ka ek wazeh action likho.',
    route: { page: 'srt' },
    tag: 'Live tool',
  },
  {
    icon: <UserRound className="w-6 h-6" />,
    name: 'Self Description',
    desc: 'Khud ko likhna seekho — 5 guided sections. Sach likho, WAT/TAT wali personality se match karo.',
    route: { page: 'self-description' },
    tag: 'Live tool',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    name: 'OPI Practice',
    desc: 'Opinion / Pointer items — apni raaye wazeh aur mukhtasar likhna seekho.',
    route: { page: 'opi-practice' },
    tag: 'Jald aa raha hai',
  },
];

export const PsychologySection: React.FC<{ navigate: Navigate }> = ({ navigate }) => (
  <div>
    <HubHero
      image="https://drive.google.com/thumbnail?id=12qb0uW5pHfdSPO9mRTYw7PL2hh1p36zI&sz=w1200"
      icon={<Brain className="w-6 h-6" />}
      title="Psychology Day"
      urdu="Dimagh ka test — jaldi aur such me"
      intro="Psychology day par tumhari soch ko parha jata hai: WAT, TAT (picture story), SRT aur Self Description — 4 tests. Yahan koi sahi-ghalat nahi — tumhari asal personality nazar aani chahiye. Neeche notes parho, phir practice tools se haath saaf karo."
    />
    <HubNotes slugs={['wat-guide', 'sentence-completion-guide', 'picture-story-guide']} navigate={navigate} />
    <HubPractice items={practiceItems} navigate={navigate} />
  </div>
);
