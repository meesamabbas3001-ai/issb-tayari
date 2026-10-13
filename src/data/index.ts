import { notes } from './notes-part1';
import { notesPart2 } from './notes-part2';
import { notesPart3, notesPart3b } from './notes-part3';
import { notesPart4 } from './notes-part4';
import { notesPart5 } from './notes-part5';
import { notesPart6 } from './notes-part6';
import type { Note } from './notes-part1';

// 34 original guides: initial test + ISSB, simple English + Roman Urdu
export const allNotes: Note[] = [...notes, ...notesPart2, ...notesPart3, ...notesPart3b, ...notesPart4, ...notesPart5, ...notesPart6];

export function getNote(slug: string): Note | undefined {
  return allNotes.find((n) => n.slug === slug);
}

export type { Note };
