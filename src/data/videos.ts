export interface LectureVideo {
  id: string;
  title: string;
  topic: string;
  description: string;
  pairsWith: string; // note slug
  pairsWithTitle: string;
}

export const lectureTopics = [
  'Overview',
  'Psychology',
  'GTO',
  'Interview',
  'Dress',
  'Bio-Data',
  'Logistics',
] as const;

export const lectureVideos: LectureVideo[] = [
  {
    id: 'KRM1ZVqEYRQ',
    title: 'What is ISSB? — Complete Overview',
    topic: 'Overview',
    description: 'ISSB kya hai, kaun apply kar sakta hai, aur poora selection process shuru se akhir tak.',
    pairsWith: 'what-is-issb',
    pairsWithTitle: 'What is ISSB?',
  },
  {
    id: 'gcxjBMlOWfw',
    title: 'ISSB Dressing Code',
    topic: 'Dress',
    description: 'Interview aur ISSB days me kya pehna hai — poora dress code simple zubaan me.',
    pairsWith: 'interview-dress',
    pairsWithTitle: 'Interview Day Dress Guide',
  },
  {
    id: 'F69IpyiVf7U',
    title: 'Bio-Data Sheet: Merits, Demerits & Friends',
    topic: 'Bio-Data',
    description: 'Bio-data form kaise bharna hai — merits, demerits, dost, aur na-bhoolne wali ghaltiyan.',
    pairsWith: 'biodata-form-guide',
    pairsWithTitle: 'Bio-Data Form Guide',
  },
  {
    id: 'Y8Xq52BeHHI',
    title: 'Merits and Demerits — Honest Answers',
    topic: 'Bio-Data',
    description: 'Apni khoobiyan aur khamiyan interview me kaise bayan karen — sachai ke saath.',
    pairsWith: 'interview-questions',
    pairsWithTitle: '30 Interview Questions',
  },
  {
    id: 'LBgah3VtcXg',
    title: 'OPI Test — Very Important',
    topic: 'Psychology',
    description: 'OPI test kya hai aur is me natural jawab kaise dena hai — psychology day ki tayari.',
    pairsWith: 'sentence-completion-guide',
    pairsWithTitle: 'Sentence Completion Guide',
  },
  {
    id: 'IwGuOjTZe0I',
    title: 'SRT — Situation Reaction Test',
    topic: 'Psychology',
    description: 'SRT me situations ka jawab kaise dena hai — quick thinking aur positive approach.',
    pairsWith: 'sentence-completion-guide',
    pairsWithTitle: 'Sentence Completion Guide',
  },
  {
    id: 'joFwzyF8kHI',
    title: 'Picture Story Writing',
    topic: 'Psychology',
    description: 'Tasveer dekh kar kahani kaise likhni hai — hero, problem, action aur positive ending.',
    pairsWith: 'picture-story-guide',
    pairsWithTitle: 'Picture Story Guide',
  },
  {
    id: 'XqfUKu19Z9M',
    title: 'WAT Test — Complete Lecture',
    topic: 'Psychology',
    description: 'Word Association Test ka poora tareeqa — lafz par jumla kaise banana hai.',
    pairsWith: 'wat-guide',
    pairsWithTitle: 'WAT Guide',
  },
  {
    id: 'QbLSKnY6fo8',
    title: 'WAT Tricks',
    topic: 'Psychology',
    description: 'WAT me tez aur positive jumle banane ki practical tricks.',
    pairsWith: 'wat-guide',
    pairsWithTitle: 'WAT Guide',
  },
  {
    id: 'OedWxB8ZnrU',
    title: 'Essay Writing for ISSB',
    topic: 'Psychology',
    description: 'Essay kaise likhna hai — structure, waqt ka istemal, aur aam ghaltiyan.',
    pairsWith: 'initial-test-guide',
    pairsWithTitle: 'Initial Test Guide',
  },
  {
    id: '5gTIYG0dVdQ',
    title: 'Group Discussion & Lecturette — Public Speaking',
    topic: 'GTO',
    description: 'Group discussion aur lecturette me bolne ka tareeqa — dominate kiye baghair standout karen.',
    pairsWith: 'group-discussion',
    pairsWithTitle: 'Group Discussion Guide',
  },
  {
    id: 'oyU5aOy0Qfw',
    title: 'Lecturette Discussion',
    topic: 'GTO',
    description: 'Lecturette topic par 3 minute ki guftagu — intro, points aur conclusion ka structure.',
    pairsWith: 'lecturette-guide',
    pairsWithTitle: 'Lecturette Guide',
  },
  {
    id: '1toQ6mU9zQ4',
    title: 'GTO Outdoor Group Tasks — Briefing',
    topic: 'GTO',
    description: 'Outdoor group tasks kya hote hain — rules, planning aur teamwork ka asal test.',
    pairsWith: 'gto-tasks',
    pairsWithTitle: 'GTO Tasks Guide',
  },
  {
    id: 'e85eceXfHZo',
    title: 'GTO Command Task — Briefing',
    topic: 'GTO',
    description: 'Command task me leader kaise banna hai — plan, clear instructions aur calm execution.',
    pairsWith: 'gto-tasks',
    pairsWithTitle: 'GTO Tasks Guide',
  },
  {
    id: 'SUAm4bBRgsg',
    title: 'GTO Obstacles',
    topic: 'GTO',
    description: 'Individual obstacles ka course — himmat, fitness aur waqt ka sahi istemal.',
    pairsWith: 'gto-tasks',
    pairsWithTitle: 'GTO Tasks Guide',
  },
  {
    id: '-xEo4pPYHzM',
    title: 'Individual Obstacles (IOs)',
    topic: 'GTO',
    description: 'Har individual obstacle ko kaise attempt karna hai — marks aur strategy.',
    pairsWith: 'gto-tasks',
    pairsWithTitle: 'GTO Tasks Guide',
  },
  {
    id: 'UVJyTLgdLe4',
    title: 'ISSB Interview — Complete Lecture',
    topic: 'Interview',
    description: 'Deputy interview ka poora lecture — kis qism ke sawal aur un ka jawab kaise dena hai.',
    pairsWith: 'interview-questions',
    pairsWithTitle: '30 Interview Questions',
  },
  {
    id: '2oHnxJdeelI',
    title: 'Interview Tips',
    topic: 'Interview',
    description: 'Interview me confident rehne ki practical tips — body language se lekar jawab tak.',
    pairsWith: 'interview-questions',
    pairsWithTitle: '30 Interview Questions',
  },
  {
    id: 'cb1w610WpUg',
    title: 'GTO Interview',
    topic: 'Interview',
    description: 'GTO se informal guftagu — casual sawalon ke peeche kya check ho raha hai.',
    pairsWith: 'gto-interview-tips',
    pairsWithTitle: 'GTO Interview Tips',
  },
  {
    id: 'DcJo03KP7kE',
    title: 'Call Letter & Packing',
    topic: 'Logistics',
    description: 'Call letter milne ke baad kya karna hai — packing list aur reporting ki tayari.',
    pairsWith: 'issb-dates',
    pairsWithTitle: 'ISSB Dates Guide',
  },
];

/** note slug -> video ids shown in the "Video Lectures" box at the end of notes */
export const noteVideoMap: Record<string, string[]> = {
  'wat-guide': ['XqfUKu19Z9M', 'QbLSKnY6fo8'],
  'gto-tasks': ['1toQ6mU9zQ4', 'e85eceXfHZo', 'SUAm4bBRgsg', '-xEo4pPYHzM'],
  'lecturette-guide': ['oyU5aOy0Qfw', '5gTIYG0dVdQ'],
  'group-discussion': ['5gTIYG0dVdQ'],
  'interview-dress': ['gcxjBMlOWfw'],
  'interview-questions': ['UVJyTLgdLe4', '2oHnxJdeelI', 'Y8Xq52BeHHI'],
  'picture-story-guide': ['joFwzyF8kHI'],
  'sentence-completion-guide': ['LBgah3VtcXg', 'IwGuOjTZe0I'],
  'biodata-form-guide': ['F69IpyiVf7U'],
  'issb-dates': ['DcJo03KP7kE'],
  'what-is-issb': ['KRM1ZVqEYRQ'],
  'initial-test-guide': ['OedWxB8ZnrU'],
  'gto-interview-tips': ['cb1w610WpUg'],
};

export function getVideoById(id: string): LectureVideo | undefined {
  return lectureVideos.find((v) => v.id === id);
}

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function embedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}

export const VIDEO_CREDIT =
  'Videos by Haroon Forces Academy (YouTube) — embedded with credit. Watch on YouTube for the full playlist.';
