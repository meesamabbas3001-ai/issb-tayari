import React from 'react';
import { Mic, Layers, Shirt } from 'lucide-react';
import type { Navigate } from '../types';
import { HubHero, HubNotes, HubPractice, type PracticeItem } from './SectionHub';

const practiceItems: PracticeItem[] = [
  {
    icon: <Layers className="w-6 h-6" />,
    name: 'Interview Flashcards',
    desc: '30 sample sawal — card palt kar jawab ka tareeqa dekho. Bio-data form ke themes par.',
    route: { page: 'interview-flashcards' },
    tag: 'Jald aa raha hai',
  },
  {
    icon: <Shirt className="w-6 h-6" />,
    name: 'Dress Checklist',
    desc: 'Interview dress ki visual checklist — shirt se joote tak, kuch bhoolo mat.',
    route: { page: 'note', slug: 'interview-dress' },
    tag: 'Note',
  },
];

export const InterviewSection: React.FC<{ navigate: Navigate }> = ({ navigate }) => (
  <div>
    <HubHero
      image="https://drive.google.com/thumbnail?id=1cBhm30yAyAblhGz-DWRwgCNq_RO7CzEo&sz=w1200"
      icon={<Mic className="w-6 h-6" />}
      title="Deputy Interview"
      urdu="Aakhri imtihan — such, confidence, dress"
      intro="Deputy President tumhara interview tumhare bio-data form ke saath karta hai — 15 se 30 minute. Yahan ratta nahi chalta: apni asal zindagi ki kahaniyan, saaf suthra dress, aur pur-sukoon confidence. Neeche notes parho aur flashcards se practice karo."
    />
    <HubNotes
      slugs={['interview-questions', 'interview-dress', 'biodata-form-guide']}
      navigate={navigate}
    />
    <HubPractice items={practiceItems} navigate={navigate} />
  </div>
);
