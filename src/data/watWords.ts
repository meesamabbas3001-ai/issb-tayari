// 100 common WAT-style words for the simulator.
// These are ordinary practice words, not from any real test.
export const watWords: string[] = [
  'mother', 'country', 'fear', 'success', 'army', 'friend', 'failure', 'duty',
  'honesty', 'war', 'peace', 'leader', 'team', 'courage', 'dream', 'money',
  'health', 'study', 'discipline', 'trust', 'help', 'danger', 'victory',
  'defeat', 'family', 'teacher', 'book', 'river', 'mountain', 'night',
  'morning', 'rain', 'fire', 'light', 'darkness', 'journey', 'goal',
  'effort', 'sacrifice', 'nation',
  'soldier', 'officer', 'village', 'school', 'student', 'exam', 'garden',
  'flower', 'tree', 'sea', 'sky', 'star', 'moon', 'sun', 'cloud', 'wind',
  'storm', 'bridge', 'road', 'home', 'child', 'brother', 'sister', 'neighbor',
  'kindness', 'bravery', 'loyalty', 'patience', 'strength', 'unity', 'freedom',
  'justice', 'service', 'prayer', 'faith', 'hope', 'love', 'respect',
  'character', 'time', 'farmer', 'market', 'train', 'bus', 'hospital',
  'doctor', 'food', 'water', 'flag', 'border', 'guard', 'signal', 'game',
  'cricket', 'race', 'smile', 'calm', 'wise', 'promise', 'law',
];

export function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
