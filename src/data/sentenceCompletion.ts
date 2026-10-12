// Original sentence-completion stems for practice.
// These are sample stems written for this site — not from any real test.
export const scEnglish: string[] = [
  'My biggest strength is ___',
  'I feel proud when ___',
  'A good leader always ___',
  'My mother taught me ___',
  'In difficult times, I ___',
  'I want to join the armed forces because ___',
  'My friends describe me as ___',
  'Success means ___',
  'I get angry when ___',
  'Teamwork is important because ___',
  'My biggest weakness is ___',
  'I admire ___ because ___',
  'Discipline means ___',
  'When I fail, I ___',
  'Pakistan needs young people who ___',
];

export const scUrdu: string[] = [
  'Mei mushkil waqt me ___',
  'Mere walid ne mujhe ___ sikhaya',
  'Acha dost woh hai jo ___',
  'Mei apne mulk ke liye ___',
  'Jab mei ghalti karta hun to ___',
  'Meri sab se bari khubi ___',
  'Mei naraaz hota hun jab ___',
  'Mehnat ka phal ___',
  'Ek acha sipahi ___',
  'Meri zindagi ka maqsad ___',
  'Mei apne ustad ka shukar guzar hun kyunke ___',
  'Jhoot bolna ___',
  'Waqt ki pabandi ___',
  'Mei apne gaon/shahar ke liye ___',
  'Kamyabi ka raaz ___',
];

export function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
