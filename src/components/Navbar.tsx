import React, { useState } from 'react';
import { Shield, Menu, X, Home, BookOpen, Dumbbell, CalendarDays, Newspaper, MonitorPlay, Brain, Users, Mic } from 'lucide-react';
import type { Navigate, Route } from '../types';

interface NavbarProps {
  route: Route;
  navigate: Navigate;
}

const links: { label: string; icon: React.ReactNode; route: Route; match: string }[] = [
  { label: 'Home', icon: <Home className="w-4 h-4" />, route: { page: 'home' }, match: 'home' },
  { label: 'Psychology', icon: <Brain className="w-4 h-4" />, route: { page: 'psychology' }, match: 'psychology' },
  { label: 'GTO', icon: <Users className="w-4 h-4" />, route: { page: 'gto' }, match: 'gto' },
  { label: 'Interview', icon: <Mic className="w-4 h-4" />, route: { page: 'interview' }, match: 'interview' },
  { label: 'Notes', icon: <BookOpen className="w-4 h-4" />, route: { page: 'notes' }, match: 'notes' },
  { label: 'Practice', icon: <Dumbbell className="w-4 h-4" />, route: { page: 'practice' }, match: 'practice' },
  { label: '30-Day Plan', icon: <CalendarDays className="w-4 h-4" />, route: { page: 'plan' }, match: 'plan' },
  { label: 'Current Affairs', icon: <Newspaper className="w-4 h-4" />, route: { page: 'current-affairs' }, match: 'current-affairs' },
  { label: 'Videos', icon: <MonitorPlay className="w-4 h-4" />, route: { page: 'videos' }, match: 'videos' },
];

export const Navbar: React.FC<NavbarProps> = ({ route, navigate }) => {
  const [open, setOpen] = useState(false);

  const activeKey =
    route.page === 'home'
      ? 'home'
      : route.page === 'psychology'
        ? 'psychology'
        : route.page === 'gto'
          ? 'gto'
          : route.page === 'interview'
            ? 'interview'
            : route.page === 'notes' || route.page === 'note'
              ? 'notes'
              : route.page === 'wat' ||
                  route.page === 'quiz' ||
                  route.page === 'sentence-completion' ||
                  route.page === 'picture-story' ||
                  route.page === 'opi-practice' ||
                  route.page === 'lecturette' ||
                  route.page === 'interview-flashcards' ||
                  route.page === 'non-verbal'
                ? 'practice'
                : route.page === 'current-affairs'
                  ? 'current-affairs'
                  : route.page === 'videos'
                    ? 'videos'
                    : 'plan';

  const go = (r: Route) => {
    setOpen(false);
    navigate(r);
  };

  return (
    <header className="sticky top-0 z-50 bg-army-900 text-khaki-100 shadow-md">
      {/* Top announcement bar */}
      <div className="bg-gold-500 text-army-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-bold">
          <button onClick={() => go({ page: 'current-affairs' })} className="inline-flex items-center gap-1.5 hover:underline">
            <Newspaper className="w-3.5 h-3.5" /> News Daily
          </button>
          <span className="opacity-40">|</span>
          <button onClick={() => go({ page: 'practice' })} className="inline-flex items-center gap-1.5 hover:underline">
            <Dumbbell className="w-3.5 h-3.5" /> Free Practice All Tests
          </button>
        </div>
      </div>
      <div className="border-b-2 border-gold-500" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go({ page: 'home' })} className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-sm bg-gold-500 text-army-950 flex items-center justify-center">
              <Shield className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-serif font-black text-lg tracking-wide text-white group-hover:text-gold-400 transition-colors">
                ISSB TAYARI
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-khaki-400">
                100% Free Guide
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.route)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm font-semibold tracking-wide transition-colors ${
                  activeKey === l.match
                    ? 'bg-army-800 text-gold-400'
                    : 'text-khaki-200 hover:text-white hover:bg-army-800'
                }`}
              >
                {l.icon}
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-khaki-200 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-army-700 bg-army-950 px-4 py-3 space-y-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.route)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-semibold ${
                activeKey === l.match ? 'bg-army-800 text-gold-400' : 'text-khaki-200 hover:bg-army-800'
              }`}
            >
              {l.icon}
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
