import { notes } from './notes-part1';
import { notesPart2 } from './notes-part2';
import { notesPart3, notesPart3b } from './notes-part3';
import { notesPart4 } from './notes-part4';
import { notesPart5 } from './notes-part5';
import { notesPart6 } from './notes-part6';
import type { Note } from './notes-part1';

// 34 original guides: initial test + ISSB, simple English + Roman Urdu
// Part 6 (practice-papers revision notes) first — user wants them at the top.
export const allNotes: Note[] = [...notesPart6, ...notes, ...notesPart2, ...notesPart3, ...notesPart3b, ...notesPart4, ...notesPart5];

export function getNote(slug: string): Note | undefined {
  return allNotes.find((n) => n.slug === slug);
}

export type { Note };
