// Real initial-interview experiences — candidates ne apne interviews ke baad
// khud share kiye. As-it-is lagaye hain, sirf parhne me asani ke liye tarteeb
// di hai. Naam sirf pehla (jaisa unhon ne khud likha).

export interface InterviewExperience {
  id: string;
  name: string;
  result: string;
  essays?: string[];
  flow: { q: string; a: string }[];
  tip?: string;
}

export const INTERVIEW_EXPERIENCES: InterviewExperience[] = [
  {
    id: 'exp-1',
    name: 'Candidate (Serial 39)',
    result: 'Interview diya — dusre badge me shamil',
    essays: [
      'English: "My embarrassing experience" — FSc me kam marks, parents ke samne sharmindagi',
      'Urdu: taraqqi ke mauzu par',
    ],
    flow: [
      { q: 'May I come in sir?', a: 'Yes, have a seat.' },
      { q: "What's your name? Father's occupation?", a: 'Bata diya.' },
      { q: 'Interesting moment of your life?', a: 'Bata diya.' },
      { q: 'Happiest moment of your life?', a: 'Bata diya.' },
      { q: 'Psych: Hobby?', a: 'Horse riding.' },
      { q: 'Psych: Types of horse riding?', a: 'Walk, Trot, Canter/Loop, Gallop.' },
      { q: 'Colonel: Which two countries are separated by the Yellow Sea?', a: 'China and South Korea.' },
    ],
    tip: 'Kafi wait karwaya phir interview hua — ghabrana nahi, sukoon se jawab do.',
  },
  {
    id: 'exp-2',
    name: 'Candidate (Cleared)',
    result: 'Alhamdulillah — initial interview cleared',
    flow: [
      { q: 'Room me enter, permission li.', a: 'Maj (psych): Have a seat.' },
      { q: 'Col: Your name, father name, his occupation — aur aaj kal kya kar rahe hain? (ek ek kar ke)', a: 'Sab bata diya.' },
      { q: 'Col: Interesting moment of life?', a: 'Bata diya.' },
      { q: 'Col: Siblings ke bare me batao.', a: 'Bata diya.' },
      { q: 'Col: Problems faced by youth?', a: 'Bata diya.' },
      { q: 'Col: Country in the west of Afghanistan?', a: 'Iran.' },
      { q: 'Maj (psych): University me admission liya?', a: 'Bata diya.' },
      { q: 'You may go now.', a: 'Allah Hafiz sir.' },
    ],
  },
  {
    id: 'exp-3',
    name: 'Zain ul Hassan',
    result: 'Alhamdulillah — pass',
    essays: ['English: "Entertainment for all"', 'Urdu: "Qaumi salamati ke masail"'],
    flow: [
      { q: 'Maj: Assalam-o-Alaikum, are you Zain ul Hassan?', a: 'Walaikum Assalam, yes sir.' },
      { q: 'Maj: Have a seat.', a: 'Thank you sir.' },
      { q: 'Col: What is your name?', a: 'Zain ul Hassan.' },
      { q: "Col: Father name, father's profession, place of business?", a: 'Bata diya.' },
      { q: 'Col: Father ke business ke bare me kuch sawal.', a: 'Bata diya.' },
      { q: 'Col: Merits of your college? Your demerits?', a: 'Bata diya.' },
      { q: 'Col: Matric me ache marks — phir FA kyun chuna?', a: 'Bata diya.' },
      { q: 'Col: Any interesting moment of your life?', a: 'Bata diya (wo mutmain ho gaye).' },
      { q: 'Maj: If you are not selected, then what will you do?', a: 'Bata diya.' },
      { q: 'Maj: Thank you and best of luck.', a: 'Result: pass!' },
    ],
  },
  {
    id: 'exp-4',
    name: 'Ahmad',
    result: 'Interview diya',
    flow: [
      { q: 'Me: May I come in sir? Col: Yes. Are you Ahmad?', a: 'Yes. Have a seat — thanks.' },
      { q: 'Col: Name, father name, father occupation, wo kahan kaam karte hain?', a: 'Sab bata diya.' },
      { q: 'Col: FSc pichle saal ki — aaj kal kya karte ho? Kahan? Kaam kaisa? Malik ka naam? Malik kahan rehta hai?', a: 'Sab bata diya.' },
      { q: 'Col: Tumhare gaon aur malik ke gaon me kitna fasla?', a: 'Bata diya.' },
      { q: 'Col: Interesting moment of your life?', a: 'Sorry sir, I don\'t have. (Unhon ne poocha kyun) — phir happiest moment bata diya.' },
      { q: 'Psych: Where are you from?', a: 'Bata diya.' },
      { q: 'Psych: Which sea is between Europe and Africa?', a: 'Mediterranean Sea.' },
    ],
    tip: '3-4 baar "sir repeat the question" kehna para — sawal samajh na aaye to dobara poochna me koi sharam nahi.',
  },
  {
    id: 'exp-5',
    name: 'Eshan',
    result: 'Alhamdulillah — interview passed',
    flow: [
      { q: 'Me: May I come in sir, Assalam-o-Alaikum.', a: 'Walaikum Assalam, have a seat.' },
      { q: 'Col: Are you Eshan? Father name, his occupation?', a: 'Bata diya.' },
      { q: 'Col: Occupation ke bare me mazeed sawal.', a: 'Bata diya.' },
      { q: 'Col: Tell me about your college.', a: 'Bata diya.' },
      { q: 'Maj (psych): When are you angry?', a: 'Bata diya.' },
      { q: 'Maj: Role model?', a: 'Bata diya.' },
      { q: 'Col: India ke south me kya hai?', a: 'Sri Lanka.' },
      { q: 'Col: Best of luck. Thank you — you may leave.', a: '' },
    ],
    tip: 'Dressing bohat achi karo, seedha chalo, kursi par proper baitho. Interview easy hota hai — bas apne dar se jeetna hota hai, phir sab khud ho jata hai.',
  },
  {
    id: 'exp-6',
    name: 'Hafiz Muneeb Murawat',
    result: 'Alhamdulillah — initial interview pass',
    flow: [
      { q: 'Me: Sir, may I come in? Maj: Yes. AoA.', a: 'Walaikum Assalam. Please sit here — thank you.' },
      { q: 'Pehle Maj ne mic off kiya, Col ne mic on kiya (neeche dekh rahe the, phir halki smile).', a: '' },
      { q: "Col: What's your name? Father name? Father occupation?", a: 'Bata diya.' },
      { q: 'Col: Matric ke muqable me FSc me kam marks kyun?', a: 'Bata diya.' },
      { q: 'Col: Siblings ke bare me batao. Apne demerits batao.', a: 'Bata diya.' },
      { q: 'Col: Which country is in the west of Afghanistan?', a: 'Iran.' },
      { q: 'Maj (mic on): Why do you want to join Pak Army?', a: 'Bata diya.' },
      { q: "Maj: Bhai ke rank aur posting par sawal — phir 'good'.", a: '' },
      { q: 'Col: Muneeb, best of luck (bare adab se).', a: 'Thank you sir! Assalam-o-Alaikum.' },
    ],
    tip: 'Sir Haroon ki guidance ka shukriya — tayari ke baghair na jao.',
  },
  {
    id: 'exp-7',
    name: 'Ahmad',
    result: "Alhamdulillah — Allah ke karam se pass (chhoti mistakes ke bawajood)",
    essays: ['Urdu: "Ghairat ke naam par qatal"', 'English: "A look in your daily life"'],
    flow: [
      { q: 'Psych: Are you Ahmad?', a: 'Yes.' },
      { q: 'Col: Name, father name and occupation?', a: 'Bata diya.' },
      { q: 'Col: College ke bare me batao.', a: 'Bata diya (thoda confuse hua).' },
      { q: 'Col: MDCAT attempt kiya?', a: 'Bata diya.' },
      { q: 'Col: Ek demerit par pressure dala.', a: 'Handle kar liya — Allah ka karam.' },
      { q: 'Psych: Which thing makes you angry?', a: 'Bata diya.' },
    ],
    tip: 'Positive raho, natural raho. Eye contact maintain rakho — ye sab se zaroori hai.',
  },
  {
    id: 'exp-8',
    name: 'Candidate (Cleared)',
    result: 'Assalam-o-Alaikum — initial interview passed',
    essays: ['English: "Use of social networks"', 'Urdu: "Meri khandani riwayat"'],
    flow: [
      { q: 'Gate khola, andar ane ki permission li.', a: 'Colonel ne koi reaction nahi diya — distract karne ki koshish, lekin focus raha.' },
      { q: 'Major Madeeha (psych) ne naam liya.', a: 'Yes — have a seat. Wo tackling kar rahi thin.' },
      { q: 'Apna taaruf karwao. Hobbies?', a: 'Bata diya. Phir unhon ne mic off kar diya.' },
      { q: 'Colonel: Hobbies dobara pooche (wohi jawab).', a: 'Eye contact nahi bana rahe the confuse karne ke liye — lekin me unke chehre ki taraf dekhta raha.' },
      { q: 'Col: Capital of Turkiye? Wo kis continent me hai?', a: 'Ankara — jawab de diya.' },
      { q: 'Col: Pichle interview ke bare me sawal.', a: 'Bata diya.' },
      { q: 'Col: Apne essays explain karo.', a: 'Dono explain kiye — Colonel ne kaha "Good".' },
      { q: 'Col: Alright, you can leave now.', a: 'Thank you keh kar bahar aa gaya.' },
    ],
    tip: 'Wo jan boojh kar ignore ya distract karenge — focus na todo, unki ankho me dekho. Essays yaad karke jao, un par sawal zaroor hota hai.',
  },
];

// In 8 experiences se nikle MOST COMMON sawal
export const COMMON_INTERVIEW_QUESTIONS: { q: string; note: string }[] = [
  { q: 'Apna naam, father ka naam aur occupation', note: 'Har interview me — pehle 2 minute.' },
  { q: 'Interesting / happiest / embarrassing moment of your life', note: '8 me se 5 candidates se poocha gaya — tayyar karke jao!' },
  { q: 'Siblings / family ke bare me', note: 'Bohat common.' },
  { q: 'College, marks — FSc me Matric se kam kyun?', note: 'Marks par sawal pakka samjho.' },
  { q: 'Hobbies (psych zyada poochta hai)', note: 'Jo hobby batao, uski detail bhi ani chahiye.' },
  { q: 'Why join Pak Army? / Select na hue to kya karoge?', note: 'Motivation check.' },
  { q: 'Merits / demerits, role model, gussa kab ata hai?', note: 'Psych ke favourite.' },
  { q: 'GK: Afghanistan ke west me kaunsa mulk? (Iran)', note: '2 candidates se poocha gaya.' },
  { q: 'GK: Yellow Sea kin 2 mumalik ko alag karta hai? (China–South Korea)', note: '' },
  { q: 'GK: Europe aur Africa ke darmiyan kaunsa samandar? (Mediterranean)', note: '' },
  { q: 'GK: India ke south me kya hai? (Sri Lanka)', note: '' },
  { q: 'GK: Turkiye ka capital? (Ankara)', note: '' },
  { q: 'Apne essays explain karo', note: 'Jo essay likha, us par sawal zaroor hota hai — bhoolna mat.' },
];

export const INTERVIEW_TIPS: string[] = [
  'Dressing bohat achi karo — shirt se joote tak. Walk seedhi, kursi par proper baitho.',
  'Permission lekar andar jao: "May I come in sir?"',
  'Eye contact maintain rakho — ye sab se bara test hai.',
  'Wo jan boojh kar ignore ya distract karenge — focus na todo.',
  'Sawal samajh na aaye to "Sir, repeat the question" kehne me sharam nahi.',
  'Positive aur natural raho — ratta hua jawab pakra jata hai.',
  'Interesting/happiest moment ki kahani pehle se tayyar karke jao.',
  'Apne essays yaad karke jao — un par sawal pakka hota hai.',
];
