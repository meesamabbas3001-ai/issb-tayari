export interface NoteSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  urduNote?: string;
}

export interface Note {
  slug: string;
  title: string;
  urduLine: string;
  description: string;
  readTime: string;
  category: string;
  intro: string;
  sections: NoteSection[];
  mistakes: string[];
  tips: string[];
}

export const notes: Note[] = [
  {
    slug: 'what-is-issb',
    title: 'What is ISSB? The 4-Day Selection Explained',
    urduLine: 'ISSB kya hai? 4 din ka selection process samjho',
    description:
      'A plain-language guide to the Inter Services Selection Board: who runs it, the four days of testing, and the important difference between the initial test and ISSB itself.',
    readTime: '8 min read',
    category: 'Getting Started',
    intro:
      'ISSB stands for Inter Services Selection Board. It is the body that selects officers for the Pakistan Army, Pakistan Navy, and Pakistan Air Force. If you want to become a commissioned officer, clearing ISSB is compulsory — there is no other door. The selection runs over four to five days at one of the ISSB centres (Kohat, Gujranwala, Malir, and Quetta). Thousands of candidates report; only a small fraction are recommended. This note explains, day by day, what actually happens there — in simple words, so a first-timer is not walking in blind.',
    sections: [
      {
        heading: 'First, the important distinction: initial test vs ISSB',
        paragraphs: [
          'Many students mix up two different stages. The initial (preliminary) test happens FIRST, at your nearest Army Selection and Recruitment Centre (AS&RC). It includes an intelligence test, an academic test, a physical test, a medical check, and a short interview. Only candidates who clear the initial stage receive the ISSB call letter.',
          'ISSB itself comes months later — typically two to four months after the initial test. It is a residential selection: you stay at the ISSB centre for four to five days and are observed continuously by three different assessors.',
        ],
        urduNote:
          'Seedhi baat: pehle AS&RC par initial test hota hai (likha hua test, running, medical, chhota interview). Jo pass karega, usay ISSB ka call letter milega. ISSB uske 2-4 mahine BAAD hota hai — 4-5 din aap wahin rehte ho.',
      },
      {
        heading: 'Day 0 — Reporting and arrival',
        paragraphs: [
          'You report at the ISSB centre on the date given in your call letter, usually by the afternoon. Documents are checked, you are allotted a chest number (this number stays with you for all four days — assessors know you by it), and you settle into the barracks with other candidates. There is usually a briefing about rules: no mobile phones, no cameras, and strict timings.',
          'Tip for Day 0: reach on time, keep your documents in one folder, and sleep early. The next four days are tiring, and a fresh mind on Day 1 matters more than last-minute revision.',
        ],
      },
      {
        heading: 'Day 1 — Screening tests',
        paragraphs: [
          'Day 1 is the screening day. Everyone takes intelligence tests (verbal and non-verbal) and usually a picture-story or announcement test. Based on these results, a large number of candidates are screened out on the very first day. Those who remain continue to the full four-day testing.',
          'This is why Day 1 preparation is non-negotiable: no matter how good your personality is, you must clear the screening tests to stay in the game. Practice timed intelligence questions until the format feels familiar.',
        ],
        urduNote:
          'Day 1 sab se khatarnak hai — intelligence test me fail huay to usi din wapsi. Isi liye timed practice itni zaroori hai.',
      },
      {
        heading: 'Day 2 — Psychology tests',
        paragraphs: [
          'Day 2 belongs to the psychologist. You will face a battery of written tests: the Word Association Test (WAT), sentence completion in English and Urdu, picture/pointer story writing, and a self-description exercise. Everything is strictly timed — seconds per item, not minutes.',
          'The psychologist is not looking for perfect English or clever answers. They are building a picture of your personality: are you positive or negative in outlook, stable or anxious, honest or putting on an act? Consistency across all these tests is what counts.',
        ],
      },
      {
        heading: 'Day 3 — GTO tasks (outdoor)',
        paragraphs: [
          'Day 3 is outdoors with the Group Testing Officer (GTO). You will do group discussions, group planning exercises, progressive group tasks with obstacles, a command task where you lead, and individual obstacles. The GTO watches how you behave in a team: do you cooperate, do you listen, do you take initiative without crushing others?',
          'A common misunderstanding: GTO day is not about being the loudest or finishing first. Candidates who dominate every task and ignore teammates are noticed — and not in a good way.',
        ],
        urduNote:
          'GTO day par sab se bara ghalat fehmi: sab se zyada chillana ya sab se aagay rehna. Asal me teamwork dekha jata hai — sunna, cooperate karna, aur zaroorat par lead karna.',
      },
      {
        heading: 'Day 4 — Interview and conference',
        paragraphs: [
          'On the final day you face the Deputy President in a personal interview, and then the conference: all three assessors (psychologist, GTO, Deputy President) sit together and decide each candidate as Recommended or Not Recommended. You do not get reasons for the decision.',
          'The interview covers your background, education, interests, family, and current affairs. The Deputy may also ask rapid-fire questions to see how you handle pressure. Stay calm, be honest, and never pretend to know something you do not.',
        ],
      },
      {
        heading: 'The three assessors cross-check each other',
        paragraphs: [
          'Here is the part most candidates underestimate: the psychologist, the GTO, and the Deputy President each form an independent opinion of you — and then they compare. If your bio-data form says you love reading, your psychology stories show a reader, and your interview answers match, that is one consistent person. If the three pictures contradict each other, it signals that something was faked.',
          'So the golden rule of ISSB: be one real person everywhere. Do not be three different people for three assessors.',
        ],
        urduNote:
          'Teeno assessors aapas me match karte hain. Form me kuch, test me kuch, interview me kuch — ye pakra jata hai. Har jagah EK jaisi asal shakhsiyat rakho.',
      },
    ],
    mistakes: [
      'Thinking ISSB happens immediately after applying — the initial test at AS&RC comes first, months earlier.',
      'Ignoring Day 1 screening prep because "personality matters more" — you cannot show personality if you are screened out.',
      'Trying to act like a different, "ideal" person in each test — the cross-check catches inconsistency.',
      'Memorizing clever answers for psychology tests — assessors are trained to spot crammed responses.',
    ],
    tips: [
      'Read your call letter twice and reach the centre on time with original documents.',
      'Your chest number is your identity for four days — be the same person throughout.',
      'Sleep well before Day 1; fatigue ruins timed tests.',
      'Verify all dates and procedures at issb.gov.pk — rules can change between courses.',
    ],
  },
  {
    slug: 'initial-test-guide',
    title: 'Initial Test Complete Guide (AS&RC)',
    urduLine: 'Initial test ki mukammal tayari — AS&RC stage',
    description:
      'Everything about the preliminary stage at Army Selection and Recruitment Centres: intelligence test, academic test, physical standards, medical, and the short interview.',
    readTime: '10 min read',
    category: 'Getting Started',
    intro:
      'Before ISSB, every candidate must clear the initial (preliminary) test at an Army Selection and Recruitment Centre (AS&RC). This stage filters out a large share of applicants, so treat it as seriously as ISSB itself. It has five parts: an intelligence test, an academic test, a physical test, a medical examination, and a short interview. Fail any critical part and the journey ends here.',
    sections: [
      {
        heading: '1. Intelligence test (verbal + non-verbal)',
        paragraphs: [
          'This is a computer-based MCQ test with two sections. Verbal intelligence includes word problems, analogies, series, and simple arithmetic reasoning. Non-verbal intelligence uses shapes, patterns, and figure matrices where you find the missing or odd one out.',
          'The test is timed and the questions come fast — roughly half a minute per question. Speed matters as much as accuracy. The only reliable preparation is timed practice: solve sample questions daily with a stopwatch until the common patterns become automatic.',
        ],
        urduNote:
          'Computer par MCQ test hota hai — verbal (alfaz wale sawal) aur non-verbal (shaklon wale sawal). Time bohat kam milta hai, is liye roz stopwatch ke saath practice karo.',
        list: [
          'Practice number series, alphabet series, and analogy questions daily',
          'For non-verbal: learn to spot rotations, reflections, and pattern progressions',
          'Never leave a question blank if there is no negative marking — attempt all',
        ],
      },
      {
        heading: '2. Academic test',
        paragraphs: [
          'The academic portion tests what you studied in school and college: English, mathematics, general knowledge, Islamiat, and Pakistan studies. The level is roughly Matric to Intermediate. Candidates often neglect this part because they focus only on intelligence questions — a mistake, because easy marks are lost here.',
          'Revise the basics: grammar rules, percentage and average problems, important dates and facts about Pakistan, and fundamental Islamiat. A few weeks of steady revision is enough if your concepts are clear.',
        ],
      },
      {
        heading: '3. Physical test',
        paragraphs: [
          'The commonly reported physical standard is a 1 kilometre run in 8 minutes, plus push-ups and sit-ups to a qualifying standard. Start running practice at least 6-8 weeks before your test date — do not try to build stamina in the final week.',
          'Wear proper running shoes, warm up before the run, and pace yourself: many candidates sprint the first 200 metres and collapse later. A steady pace beats a fast start.',
        ],
        urduNote:
          '1 kilometer 8 minute me — yehi standard suna jata hai. 6-8 haftay pehle se roz running karo. Aakhri haftay me stamina nahi banta!',
      },
      {
        heading: '4. Medical examination',
        paragraphs: [
          'A basic medical check covers height, weight (BMI standards), eyesight, hearing, and general fitness. Some candidates clear every test and are then declared medically unfit — which is devastating. Get a private checkup beforehand if you suspect any issue (eyesight is the most common surprise).',
          'Note: the detailed medical standards are applied by the official medical board. If anything is borderline, consult a doctor early rather than hoping it passes.',
        ],
      },
      {
        heading: '5. Short interview at AS&RC',
        paragraphs: [
          'If you clear the tests, physical, and medical, there is a short interview — often including a brief essay (candidates report writing a few lines in English and Urdu on a given topic). The interviewers check your communication, confidence, and general awareness. It is scored, and a poor interview can still stop you here.',
          'Prepare a short introduction about yourself, know basic current affairs, and speak clearly. This interview is shorter than the ISSB Deputy interview, but the same honesty rules apply.',
        ],
      },
    ],
    mistakes: [
      'Only preparing intelligence questions and ignoring academics, physical, and medical.',
      'Starting running practice one week before the test.',
      'Assuming eyesight or weight "will be fine" without checking beforehand.',
      'Arriving without original documents (matric certificate, not just the result card).',
    ],
    tips: [
      'Make a checklist: documents, running shoes, and your test date slip.',
      'Practice intelligence questions with a timer every single day.',
      'Revise one academic subject per day in rotation.',
      'Run 4-5 times a week; track your 1km time and watch it drop.',
    ],
  },
  {
    slug: 'wat-guide',
    title: 'Word Association Test (WAT): The Complete Guide',
    urduLine: 'WAT ka mukammal guide — seconds me sentence banana seekho',
    description:
      'How the Word Association Test works, why speed matters more than vocabulary, 5 practical tips, and the mistakes that expose crammed answers.',
    readTime: '7 min read',
    category: 'Psychology Tests',
    intro:
      'The Word Association Test is the most feared psychology test at ISSB — and the most misunderstood. Words are flashed on a screen one by one (around 80-100 words in total), and you get only a few seconds per word to write one short sentence. There is no time to think deeply, and that is exactly the point: the psychologist wants your natural, first response — not a rehearsed one.',
    sections: [
      {
        heading: 'How WAT actually works',
        paragraphs: [
          'A word appears on the screen. You immediately write a short, positive sentence using it. Before you can overthink, the next word appears. This continues for roughly 80-100 words. The whole exercise is over in about 10-15 minutes.',
          'The psychologist reads all your sentences together. A pattern emerges: is this person generally positive, constructive, and stable? Or negative, fearful, and aggressive? One "bad" sentence does not fail you — the overall trend is what matters.',
        ],
        urduNote:
          'Screen par ek lafz aayega — foran ek chhota positive jumla likhna hai. Sochnay ka time nahi milega, aur yehi asal test hai: tumhara natural response kya hai?',
      },
      {
        heading: 'What makes a good WAT sentence',
        paragraphs: [
          'Good WAT sentences are short, positive, and action-oriented. They show a person who faces life constructively. For example, with the word "fear": a weak sentence is "I fear the dark" (negative, passive). A strong sentence is "I face my fears with courage" (positive, active).',
          'Keep sentences to 5-8 words. Long sentences waste time and often turn negative halfway. Use "I" statements where natural — they show ownership of your thoughts.',
        ],
        list: [
          'Short: 5-8 words is enough',
          'Positive: show courage, honesty, hard work, patriotism',
          'Active: "I will...", "We should...", not "It cannot..."',
          'Natural: write what YOU believe, not what sounds impressive',
        ],
      },
      {
        heading: '5 practice tips that actually work',
        paragraphs: [
          'You cannot memorize 100 sentences — but you CAN train the reflex. Here is how:',
        ],
        list: [
          'Practice with a timer: take any word list, give yourself 10 seconds per word, write the sentence. Do 20 words daily.',
          'Build a "positive bank": practice turning negative words (fear, failure, war, death) into constructive sentences.',
          'Write, do not just think: the physical act of writing under time pressure is the real skill.',
          'Review your own sentences weekly: are they getting more positive and natural?',
          'Use our WAT simulator on this site — it gives you random words with a real 10-second countdown.',
        ],
      },
      {
        heading: 'What NOT to do (these get caught)',
        paragraphs: [
          'Assessors read thousands of WAT booklets. They recognize crammed material instantly. Avoid these traps:',
        ],
        list: [
          'Do not write the same memorized sentence for every word ("I love my country" for mother, fear, success, and food).',
          'Do not write negative or violent sentences, even as jokes.',
          'Do not leave many blanks — a few are fine, but large gaps suggest freezing under pressure.',
          'Do not write advice-sermons ("One should always...") for every word; mix in personal, real responses.',
        ],
        urduNote:
          'Ratay huay jumlay foran pakray jatay hain. Har lafz par "I love my country" likhna tumhe fail karayega, pass nahi.',
      },
    ],
    mistakes: [
      'Memorizing 100 "perfect" sentences — they sound artificial and get flagged.',
      'Writing long, complicated sentences that eat up time.',
      'Panicking on negative words instead of calmly reframing them positively.',
      'Practicing without a timer — speed IS the test.',
    ],
    tips: [
      'Think in themes: courage, honesty, family, hard work, country — rotate naturally.',
      'If a word blanks your mind, write the simplest positive thing and move on.',
      'Legible handwriting matters — an unreadable sentence helps nobody.',
      'Practice daily for 15 minutes; the reflex builds in 2-3 weeks.',
    ],
  },
  {
    slug: 'sentence-completion-guide',
    title: 'Sentence Completion: English + Urdu Guide',
    urduLine: 'Sentence completion — English aur Urdu dono ka guide',
    description:
      'Format, timing, and strategy for sentence completion tests in both languages, with 5 original sample stems (clearly marked as practice samples).',
    readTime: '6 min read',
    category: 'Psychology Tests',
    intro:
      'In sentence completion, you are given half-sentences (stems) and must complete them quickly — in both English and Urdu. Like WAT, it is strictly timed: dozens of stems in a few minutes per language. The psychologist compares your English and Urdu responses for the same consistent personality. Below are 5 ORIGINAL sample stems we wrote for practice — they are samples only, not real test items.',
    sections: [
      {
        heading: 'The format',
        paragraphs: [
          'You receive a booklet of incomplete sentences. Example stems (SAMPLES — written by us for practice, not from any real test): "My biggest strength is…", "When I fail, I…", "My mother always…", "میرا سب سے بڑا خواب…", "مشکل وقت میں میں…". You complete each with the first honest thought that comes to mind.',
          'Time is tight — roughly 8-10 minutes per language set. That leaves about 10-12 seconds per stem. Write short completions; a few words are enough.',
        ],
        urduNote:
          'Aadhay jumlay diye jatay hain — tumhe foran poora karna hai, English aur Urdu dono me. Time bohat kam: har jumlay ke liye 10-12 second.',
      },
      {
        heading: 'Strategy: be consistent, be real',
        paragraphs: [
          'The biggest mistake is trying to sound like a hero in every stem. "I never lie, I always help, I fear nothing" — nobody believes a perfect person, and the psychologist certainly does not. Real, balanced completions score better than flawless ones.',
          'Second: keep your English and Urdu answers aligned. If your English stems show a confident leader and your Urdu stems show an anxious follower, the mismatch raises questions. You are one person — write like one person in both languages.',
        ],
        list: [
          'Honest > heroic: "I get nervous but I prepare well" beats "I never feel fear"',
          'Short completions: 3-7 words',
          'Same personality in English and Urdu stems',
          'Do not skip too many — blanks suggest freezing',
        ],
      },
      {
        heading: '5 original sample stems for practice (SAMPLES)',
        paragraphs: [
          'We wrote these ourselves for your practice. They are NOT from any real ISSB test — no website can give you real test items, and anyone claiming to is misleading you. Practice completing each in under 12 seconds:',
        ],
        list: [
          'SAMPLE 1 (English): "My friends trust me because…"',
          'SAMPLE 2 (English): "When plans fail, I…"',
          'SAMPLE 3 (Urdu): "میری والدہ کی سب سے اچھی عادت…"',
          'SAMPLE 4 (Urdu): "ناکامی کے بعد میں…"',
          'SAMPLE 5 (English): "In five years, I see myself…"',
        ],
        urduNote:
          'Ye 5 jumlay HUM ne practice ke liye likhay hain — asal test ke nahi. Koi bhi website asal test ke jumlay nahi de sakti, jo de woh jhoot bolta hai.',
      },
    ],
    mistakes: [
      'Writing "perfect hero" completions for every stem.',
      'Showing a different personality in Urdu vs English stems.',
      'Leaving many stems blank instead of writing something simple.',
      'Believing any website that claims to have "real" sentence stems.',
    ],
    tips: [
      'Practice 20 stems daily with a timer — 10 English, 10 Urdu.',
      'Read your completions back weekly and check: do I sound like ONE real person?',
      'Keep a small diary of real thoughts — it makes honest completions easier.',
    ],
  },
  {
    slug: 'picture-story-guide',
    title: 'Picture Story Writing (TAT): Structure That Works',
    urduLine: 'Picture story likhna seekho — 3.5 minute me mukammal kahani',
    description:
      'How picture/pointer story writing works at ISSB, the simple hero-problem-action-ending structure, and 3 practical tips.',
    readTime: '6 min read',
    category: 'Psychology Tests',
    intro:
      'You are shown a picture (sometimes a hazy or ambiguous one) for a few seconds, then get about 3.5 minutes to write a complete story about it. This repeats for several pictures. The psychologist is not judging your English literature skills — they are watching what kind of stories your mind naturally creates: does your hero solve problems or run from them?',
    sections: [
      {
        heading: 'The 4-part story structure',
        paragraphs: [
          'Every story needs four parts, and you should be able to write them in 3.5 minutes:',
        ],
        list: [
          'HERO: Who is the main character? Give them a simple role (a student, a farmer, a young officer).',
          'PROBLEM: What difficulty do they face? (flood, failure, a sick parent, a team dispute)',
          'ACTION: What does the hero DO about it? This is the most important part — the hero must act, not wait.',
          'POSITIVE ENDING: How does it resolve well? Effort leading to a good outcome.',
        ],
        urduNote:
          'Har kahani ke 4 hisse: Hero (kaun?), Mushkil (kya?), Action (usne KYA kiya?), Achha anjaam. Sab se important: hero kuch KARAY, bas dekhta na rahay.',
      },
      {
        heading: 'What the psychologist actually reads',
        paragraphs: [
          'Your stories reveal your default worldview. If every hero is brave and solves problems, that says something. If every story ends in tragedy, or the hero always needs rescuing, that says something else. There is no "correct" story — but constructive, action-oriented stories reflect the mindset ISSB looks for.',
          'Keep the language simple. A clear 120-word story beats a confused 200-word one. And watch the clock: an unfinished story hurts more than a simple finished one.',
        ],
      },
      {
        heading: '3 tips for story day',
        paragraphs: [
          'First: decide the ending first. Before writing, know where the story lands — then write toward it. This prevents rambling.',
          'Second: make the hero active in every story. Even if the picture looks sad, your hero can respond with courage — that choice is yours and it is being observed.',
          'Third: practice with any picture — a newspaper photo, a magazine image. Set a 3.5-minute timer, write the story, then check: hero, problem, action, positive ending. All four present? Good.',
        ],
      },
    ],
    mistakes: [
      'Writing stories where the hero is passive or gets rescued.',
      'Tragic endings in every story — it signals a negative outlook.',
      'Running out of time with an unfinished story.',
      'Overcomplicating: too many characters, too many subplots.',
    ],
    tips: [
      'Practice 2 stories daily with a 3.5-minute timer.',
      'Endings first: decide the positive outcome, then write.',
      'Simple language, complete story — always.',
    ],
  },
];
