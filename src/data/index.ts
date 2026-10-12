import { notes } from './notes-part1';
import { notesPart2 } from './notes-part2';
import type { Note } from './notes-part1';

export const allNotes: Note[] = [...notes, ...notesPart2];

export function getNote(slug: string): Note | undefined {
  return allNotes.find((n) => n.slug === slug);
}

export type { Note };
