// Per-route SEO for the ISSB Tayari SPA.
//
// Problem: the site is a client-side SPA — every route serves the same
// index.html shell, and no route ever set a canonical, title or description.
// Google Search Console flagged the sitemap URLs as
// "Duplicate without user-selected canonical" (Nov 2026).
//
// Fix: on every route change, set a unique document.title, upsert a
// <link rel="canonical"> for that route's own URL, and set a matching meta
// description (+ og:title / og:url). /plan is the one exception: it renders
// the same page as /notes/30-day-plan, so its canonical points there
// (the route itself keeps working).

import type { Route } from './types';
import { routeToPath } from './types';
import { getNote } from './data';

export const SITE_URL = 'https://issb-tayari.vercel.app';

export const DEFAULT_TITLE =
  'ISSB Tayari — Free ISSB Preparation Guide (Urdu + English) 2026';
export const DEFAULT_DESCRIPTION =
  'Free ISSB preparation: 30-day plan, WAT simulator, intelligence quizzes, interview guides, bio-data form help and GK — in simple Urdu + English. 100% free, no fake claims.';

export interface RouteSeo {
  title: string;
  description: string;
  canonical: string;
}

// Titles/descriptions for every static route (key = Route['page']).
// Kept in plain words, no fake claims, no invented test content.
const STATIC_META: Record<string, { title: string; description: string }> = {
  notes: {
    title: 'All ISSB Notes — Free Guides in Urdu + English',
    description:
      'Free ISSB notes: initial test, psychology tests, GTO tasks, interview, medical and physical guides — in simple Urdu + English.',
  },
  practice: {
    title: 'ISSB Practice Tools — Free WAT, SRT, Quizzes & Simulators',
    description:
      'Free ISSB practice tools: WAT simulator, SRT practice, intelligence quiz, picture story, sentence completion and more — no signup, no fee.',
  },
  wat: {
    title: 'WAT Simulator — Word Association Test Practice',
    description:
      'Practise the ISSB Word Association Test with timed words and example responses. Free, no signup.',
  },
  srt: {
    title: 'SRT Simulator — Situation Reaction Test Practice',
    description:
      'Practise the ISSB Situation Reaction Test: read a situation, decide fast, compare with a sample answer. Free, no signup.',
  },
  'self-description': {
    title: 'Self-Description Test — Practice Writing About Yourself',
    description:
      'Practise the ISSB self-description test: write about yourself in a few honest lines, the way the assessors read it. Free.',
  },
  quiz: {
    title: 'Intelligence Quiz — Verbal & Non-Verbal Practice',
    description:
      'Free ISSB intelligence quiz with verbal and non-verbal questions, answers and short explanations. No signup.',
  },
  'sentence-completion': {
    title: 'Sentence Completion Test Practice',
    description:
      'Practise the ISSB sentence completion test: finish the sentence honestly and quickly, the way the test measures it. Free.',
  },
  'picture-story': {
    title: 'Picture Story Test (TAT) Practice',
    description:
      'Practise the ISSB picture story test: look at a picture, write a short story with a hero, a problem and an ending. Free.',
  },
  'pointer-story': {
    title: 'Pointer Story Practice — Build a Story From a Hint',
    description:
      'Practise the ISSB pointer story: take one starting line and build a complete short story from it. Free.',
  },
  'mechanical-aptitude': {
    title: 'Mechanical Aptitude Test Practice',
    description:
      'Free mechanical aptitude practice for the ISSB initial test: levers, pulleys, gears and everyday machines, explained simply.',
  },
  'opi-practice': {
    title: 'OPI Practice — Situation & Opinion Questions',
    description:
      'Practise ISSB situation and opinion questions: what would you do, and why — with sample answers to compare. Free.',
  },
  lecturette: {
    title: 'Lecturette Practice — Short Talks for ISSB',
    description:
      'Practise the ISSB lecturette: pick a topic, speak for two minutes, and build confidence for the GTO group tasks. Free.',
  },
  'group-discussion': {
    title: 'Group Discussion Practice — ISSB GTO',
    description:
      'Practise the ISSB group discussion: take a topic, speak clearly for two minutes, and learn the do’s and don’ts. Free.',
  },
  'interview-flashcards': {
    title: 'Interview Flashcards — Common ISSB Questions',
    description:
      'Common ISSB interview questions as flashcards, with short honest answers to practise from. Free, no signup.',
  },
  'non-verbal': {
    title: 'Non-Verbal Intelligence Test Practice',
    description:
      'Free non-verbal intelligence practice for the ISSB initial test: shapes, patterns and series, with answers explained. No signup.',
  },
  videos: {
    title: 'ISSB Video Lectures — Free Preparation Videos',
    description:
      'Free ISSB video lectures: initial test, psychology, GTO and interview preparation, in simple Urdu + English.',
  },
  'current-affairs': {
    title: 'Current Affairs for ISSB — Daily Updates',
    description:
      'Daily current affairs for ISSB and initial test preparation, updated every morning. Free.',
  },
  psychology: {
    title: 'ISSB Psychology Tests — Complete Guide',
    description:
      'A complete guide to the ISSB psychology tests: WAT, SRT, sentence completion, picture story and self-description, in simple words.',
  },
  gto: {
    title: 'ISSB GTO Tasks — Complete Guide',
    description:
      'A complete guide to the ISSB GTO tasks: group discussion, lecturette, group planning, obstacles and command tasks, explained simply.',
  },
  interview: {
    title: 'ISSB Interview — Complete Guide & Questions',
    description:
      'A complete guide to the ISSB interview: common questions, how to answer honestly, dress, and what the interviewer looks for.',
  },
  'initial-mcqs': {
    title: 'Initial Test MCQs — Free Practice',
    description:
      'Free MCQs for the ISSB initial test: intelligence, English, maths and general knowledge, with answers. No signup.',
  },
  'voice-interview': {
    title: 'AI Voice Interview — Practise Your ISSB Interview',
    description:
      'Practise your ISSB interview by voice: answer spoken questions and get feedback, the way the real interview feels. Free.',
  },
  'interview-experiences': {
    title: 'Real ISSB Interview Experiences',
    description:
      'Real ISSB candidates share what their interview was actually like: the questions asked, the atmosphere, and what helped.',
  },
  'practice-papers': {
    title: 'ISSB Practice Papers — 10 Full Papers',
    description:
      'Ten free ISSB practice papers with corrected answers, plus short revision notes for GK, Islamiat and Pak Studies. No signup.',
  },
};

export function getRouteSeo(route: Route): RouteSeo {
  const path = routeToPath(route);

  if (route.page === 'home') {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE_URL}/`,
    };
  }

  if (route.page === 'note') {
    const note = getNote(route.slug);
    if (!note) {
      // Unknown slug renders a "not found" page — point search engines at
      // the notes index instead of indexing a dead page.
      return {
        title: 'Note Not Found | ISSB Tayari',
        description:
          'This ISSB guide does not exist. Browse all free ISSB notes on ISSB Tayari.',
        canonical: `${SITE_URL}/notes`,
      };
    }
    return {
      title: `${note.title} | ISSB Tayari`,
      description: note.description,
      canonical: `${SITE_URL}/notes/${note.slug}`,
    };
  }

  if (route.page === 'plan') {
    // /plan renders the exact same page as /notes/30-day-plan. Keep the
    // route working, but canonicalise it to the note URL.
    const plan = getNote('30-day-plan');
    return {
      title: plan ? `${plan.title} | ISSB Tayari` : 'The 30-Day ISSB Plan | ISSB Tayari',
      description: plan ? plan.description : DEFAULT_DESCRIPTION,
      canonical: `${SITE_URL}/notes/30-day-plan`,
    };
  }

  const meta = STATIC_META[route.page];
  if (meta) {
    return {
      title: `${meta.title} | ISSB Tayari`,
      description: meta.description,
      canonical: `${SITE_URL}${path}`,
    };
  }

  // Fallback: never leave a route without a canonical.
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}${path}`,
  };
}

function upsertLinkCanonical(href: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Set title, canonical, description and Open Graph tags for a route. */
export function applyRouteSeo(route: Route): void {
  const { title, description, canonical } = getRouteSeo(route);
  document.title = title;
  upsertLinkCanonical(canonical);
  upsertMeta('description', description);
  upsertMeta('og:title', title, 'property');
  upsertMeta('og:url', canonical, 'property');
}
