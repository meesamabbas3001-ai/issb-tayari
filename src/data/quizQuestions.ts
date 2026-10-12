export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

// 10 ORIGINAL sample verbal-intelligence questions written by us for practice.
// They are in the STYLE of ISSB verbal tests. They are NOT real test questions —
// no website can provide real papers, and we never claim these are.
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'If yesterday was Saturday, what day will it be the day after tomorrow?',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
    answerIndex: 1,
    explanation: 'Today is Sunday (day after Saturday). Tomorrow is Monday, so the day after tomorrow is Tuesday.',
  },
  {
    id: 2,
    question: 'Find the missing number: 3, 6, 11, 18, 27, ?',
    options: ['36', '38', '40', '42'],
    answerIndex: 1,
    explanation: 'Differences grow by 2 each time: +3, +5, +7, +9, so next is +11 → 27 + 11 = 38.',
  },
  {
    id: 3,
    question: 'BOOK is to CHAPTER as SONG is to:',
    options: ['Singer', 'Verse', 'Music', 'Radio'],
    answerIndex: 1,
    explanation: 'A chapter is a part of a book, just as a verse is a part of a song.',
  },
  {
    id: 4,
    question: 'In a class of 40 students, 25% are absent. How many are present?',
    options: ['10', '25', '30', '35'],
    answerIndex: 2,
    explanation: '25% of 40 = 10 absent. Present = 40 − 10 = 30.',
  },
  {
    id: 5,
    question: 'Which word is the odd one out?',
    options: ['River', 'Lake', 'Ocean', 'Mountain'],
    answerIndex: 3,
    explanation: 'River, lake, and ocean are bodies of water. A mountain is land.',
  },
  {
    id: 6,
    question: 'A train travels 120 km in 2 hours. At the same speed, how far will it travel in 5 hours?',
    options: ['240 km', '300 km', '360 km', '600 km'],
    answerIndex: 1,
    explanation: 'Speed = 120 ÷ 2 = 60 km/h. In 5 hours: 60 × 5 = 300 km.',
  },
  {
    id: 7,
    question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely:',
    options: ['Razzies only', 'Lazzies', 'Neither', 'Cannot say'],
    answerIndex: 1,
    explanation: 'Chain logic: Bloops ⊂ Razzies ⊂ Lazzies, so every Bloop is a Lazzie.',
  },
  {
    id: 8,
    question: 'What comes next? A, C, F, J, O, ?',
    options: ['S', 'T', 'U', 'V'],
    answerIndex: 2,
    explanation: 'Gaps increase: +2, +3, +4, +5, so next is +6 → O + 6 = U.',
  },
  {
    id: 9,
    question: 'Ahmed is taller than Bilal. Bilal is taller than Daniyal. Who is the shortest?',
    options: ['Ahmed', 'Bilal', 'Daniyal', 'Cannot say'],
    answerIndex: 2,
    explanation: 'Ahmed > Bilal > Daniyal, so Daniyal is the shortest.',
  },
  {
    id: 10,
    question: 'A shopkeeper buys a bat for Rs. 800 and sells it for Rs. 1000. What is his profit percentage?',
    options: ['20%', '25%', '30%', '200%'],
    answerIndex: 1,
    explanation: 'Profit = 200. Percentage = (200 ÷ 800) × 100 = 25%.',
  },
];

export const SECONDS_PER_QUESTION = 30;
