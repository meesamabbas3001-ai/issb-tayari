// Group Discussion practice topics — all original, written for Pakistani
// ISSB/GTO preparation. Simple English. Practice topics only.
export interface GdTopic {
  topic: string;
  category: 'Current Affairs' | 'Social Issues' | 'Education & Youth' | 'Technology' | 'Abstract';
}

export const gdCategories = [
  'All',
  'Current Affairs',
  'Social Issues',
  'Education & Youth',
  'Technology',
  'Abstract',
] as const;

export const gdTopics: GdTopic[] = [
  // ---- Current Affairs (10) ----
  { topic: 'Should Pakistan focus more on dams or solar energy for its power needs?', category: 'Current Affairs' },
  { topic: 'Is CPEC a game changer for Pakistan’s economy?', category: 'Current Affairs' },
  { topic: 'Should voting age be lowered to 16 in Pakistan?', category: 'Current Affairs' },
  { topic: 'How can Pakistan reduce its trade deficit?', category: 'Current Affairs' },
  { topic: 'Should Pakistan invest more in IT exports or textile exports?', category: 'Current Affairs' },
  { topic: 'Is tourism a realistic industry for Pakistan’s northern areas?', category: 'Current Affairs' },
  { topic: 'Should Pakistan make water conservation a national emergency?', category: 'Current Affairs' },
  { topic: 'How should Pakistan handle the brain drain of young professionals?', category: 'Current Affairs' },
  { topic: 'Should local governments be given more power in Pakistan?', category: 'Current Affairs' },
  { topic: 'Is Pakistan ready for electric vehicles on a large scale?', category: 'Current Affairs' },
  // ---- Social Issues (10) ----
  { topic: 'Should mobile phones be banned in schools?', category: 'Social Issues' },
  { topic: 'Is joint family system better than nuclear family?', category: 'Social Issues' },
  { topic: 'How can we reduce traffic accidents in our cities?', category: 'Social Issues' },
  { topic: 'Should there be a complete ban on plastic bags?', category: 'Social Issues' },
  { topic: 'Is dowry destroying the institution of marriage?', category: 'Social Issues' },
  { topic: 'Should every citizen do one year of national service?', category: 'Social Issues' },
  { topic: 'How can neighbourhoods become safer for women at night?', category: 'Social Issues' },
  { topic: 'Is social media making youngsters less social in real life?', category: 'Social Issues' },
  { topic: 'Should smoking be banned in all public places?', category: 'Social Issues' },
  { topic: 'Who is responsible for keeping our streets clean — citizens or government?', category: 'Social Issues' },
  // ---- Education & Youth (8) ----
  { topic: 'Should exams be replaced with practical projects?', category: 'Education & Youth' },
  { topic: 'Is a university degree necessary for success today?', category: 'Education & Youth' },
  { topic: 'Should students be allowed to choose subjects freely after class 8?', category: 'Education & Youth' },
  { topic: 'How can we make government schools as good as private schools?', category: 'Education & Youth' },
  { topic: 'Should sports be compulsory in every school?', category: 'Education & Youth' },
  { topic: 'Is tuition culture harming real learning?', category: 'Education & Youth' },
  { topic: 'Should every student learn one skill before graduation?', category: 'Education & Youth' },
  { topic: 'How can youth be kept away from drugs?', category: 'Education & Youth' },
  // ---- Technology (6) ----
  { topic: 'Is artificial intelligence a threat to jobs in Pakistan?', category: 'Technology' },
  { topic: 'Should online classes replace classroom teaching?', category: 'Technology' },
  { topic: 'Is Pakistan ready for a cashless economy?', category: 'Technology' },
  { topic: 'Should there be an age limit for social media accounts?', category: 'Technology' },
  { topic: 'Can technology solve Pakistan’s traffic problems?', category: 'Technology' },
  { topic: 'Is mobile banking safe for village communities?', category: 'Technology' },
  // ---- Abstract (6) ----
  { topic: 'Failure is a better teacher than success — do you agree?', category: 'Abstract' },
  { topic: 'Is honesty always the best policy?', category: 'Abstract' },
  { topic: 'Does hard work beat talent?', category: 'Abstract' },
  { topic: 'Is patience a strength or a weakness in a leader?', category: 'Abstract' },
  { topic: 'Should one follow the heart or the mind when choosing a career?', category: 'Abstract' },
  { topic: 'Is silence sometimes stronger than words?', category: 'Abstract' },
];

export function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
