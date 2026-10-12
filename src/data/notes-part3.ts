import type { Note } from './notes-part1';

// Phase 2 notes: interview dress (visual), interview question bank from the real
// bio-data forms, 4-day routine, GTO tasks with pictures, GTO interview tips,
// lecturette, group discussion, general knowledge master pack, ISSB dates.
// Images referenced here must be placed in public/images/ by the build step.

export const notesPart3: Note[] = [
  {
    slug: 'interview-dress',
    title: 'Interview Day Dress: The Complete Visual Guide',
    urduLine: 'Interview wale din kya pehno — tasveer ke saath mukammal guide',
    description:
      'The exact interview-day dress for ISSB: shirt, trousers, tie, shoes, grooming — with a labelled diagram, a female-candidates section, and a night-before checklist.',
    readTime: '7 min read',
    category: 'Interview',
    intro:
      'The interviewer forms an impression in the first ten seconds — before you speak a single word. Correct dress does not earn you marks by itself, but wrong dress starts you at a disadvantage that is hard to recover from. This is the visual, no-confusion guide: exactly what to wear, how each piece should look, and the grooming routine that completes it.',
    sections: [
      {
        heading: 'The complete interview outfit (see diagram)',
        paragraphs: [
          'Below is the standard, expected interview dress. Every piece has a reason — nothing here is fashion, it is all signalling: "I am serious, disciplined, and I respect this process."',
        ],
        image: {
          src: '/images/dress-diagram.png',
          caption:
            'Interview-day dress, labelled: light dress shirt, sober tie, dark formal trousers, matching belt, polished formal shoes, neat haircut, clean shave.',
        },
        list: [
          'Dress shirt: white or light blue, freshly ironed, top button fastened with the tie properly knotted',
          'Tie: simple and sober — small dots or stripes in dark colours; avoid bright red, neon, or cartoon patterns',
          'Trousers: dark formal — navy, charcoal, or black; proper length (slight break over the shoe, not pooling)',
          'Belt: plain leather, colour matching the shoes (black belt with black shoes)',
          'Shoes: black formal shoes, POLISHED to a shine — scuffed shoes are one of the most noticed details',
          'Socks: dark, matching the trousers — never white sports socks with formal dress',
        ],
        urduNote:
          'Seedhi baat: safed ya light blue shirt, dark pant, simple tie, kaalay polish kiye huay shoes. Koi fashion nahi — bas saaf suthra, serious look.',
      },
      {
        heading: 'Grooming: the other half of the dress',
        paragraphs: [
          'Clothes are half the picture. Get your haircut 3-4 days before the interview — a fresh cut looks sharp, a night-before cut looks panicked. On interview morning: clean shave, trimmed nails, teeth brushed, light or no fragrance (interview rooms are small and strong perfume is genuinely unpleasant). Carry a clean handkerchief and a working pen.',
        ],
        list: [
          'Haircut: 3-4 days before, neat sides, no extreme styles',
          'Shave: interview morning, clean — no stubble, no designer beard experiments',
          'Nails: trimmed and clean',
          'Fragrance: none, or extremely light',
          'In pocket: handkerchief + pen',
        ],
      },
      {
        heading: 'For female candidates',
        paragraphs: [
          'Female candidates should follow the same principle: formal, neat, understated. A modest formal dress — a plain shalwar kameez in a sober colour with a dupatta, or formal shirt-trousers — with closed, simple shoes. Hair neatly tied, minimal jewellery, light or no makeup. The goal is identical: the focus stays on you, not your clothes.',
        ],
        urduNote:
          'Female candidates ke liye usool wohi: sober colour ka formal dress, dupatta, simple closed shoes, baal neatly tied, halka ya no makeup.',
      },
      {
        heading: 'The night-before routine (15 minutes)',
        paragraphs: [
          'Iron the shirt and trousers. Polish the shoes and let them dry. Lay out the tie, belt, and socks together. Put documents in one folder by the door. This tiny routine removes all morning panic — and a calm morning shows in the interview room.',
        ],
      },
    ],
    mistakes: [
      'Brand-new shoes on interview day — they hurt, and pain shows on your face.',
      'A haircut the night before — it looks last-minute and too sharp.',
      'Strong perfume or aftershave in a small interview room.',
      'Flashy tie or bright shirt that pulls attention away from your answers.',
      'White sports socks with formal trousers.',
    ],
    tips: [
      'Break in formal shoes at least a week before ISSB.',
      'Keep one full interview set packed separately — never use it on other days.',
      'When in doubt, choose the simpler option.',
      'Ask a family member for an honest look-check before you leave.',
    ],
    faqs: [
      {
        q: 'Kya blazer ya coat pehanna zaroori hai?',
        a: 'Zaroori nahi. Shirt, tie aur trousers kaafi hain. Agar sardi ho to simple dark blazer pehen sakte ho — lekin flashy ya check wala nahi.',
      },
      {
        q: 'Shalwar kameez me interview de sakte hain?',
        a: 'Neat, formal shalwar kameez (sober colour, ironed) acceptable hai, lekin shirt-trouser-tie sab se standard aur safe option hai.',
      },
      {
        q: 'Glasses pehen sakte hain?',
        a: 'Bilkul — agar aap glasses use karte ho to wohi pehno. Naye look ke experiments interview wale din mat karo.',
      },
    ],
    related: ['dress-code-guide', 'interview-guide', 'biodata-form-guide'],
  },
  {
    slug: 'interview-questions',
    title: '30 Interview Questions from the Real Bio-Data Forms',
    urduLine: 'Asal bio-data forms se niklay 30 sawal — har ek ka tareeqa',
    description:
      'We studied the actual ISSB bio-data forms (33-item AS&RC form + 7-page personal bio-data) and built 30 sample interview questions from their exact themes — each with a 2-line approach tip.',
    readTime: '12 min read',
    category: 'Interview',
    intro:
      'The Deputy President interviews you WITH your bio-data form in hand. So the smartest interview preparation is not guessing random questions — it is studying the form itself. We read the real 33-item AS&RC bio-data form and the 7-page personal bio-data form, extracted every theme they cover, and turned them into 30 sample questions. These are SAMPLE questions based on the real form pattern — not leaked papers. For each, you get a short "how to approach" tip. Your real answers must come from YOUR life.',
    sections: [
      {
        heading: 'How to use this bank (important)',
        paragraphs: [
          'Do NOT memorize answers. For each question below: (1) understand what the interviewer is really checking, (2) think of YOUR real-life material for it, (3) say it aloud once or twice so it flows naturally. A memorized speech collapses at the first follow-up question — a real story does not.',
        ],
        image: {
          src: '/images/interview-room.png',
          caption: 'The interview room: calm, formal, and honest — just like your answers should be.',
        },
        urduNote:
          'Jawab ratto MAT. Har sawal par apni asal zindagi ki misaal socho aur ek-do dafa bol kar practice karo. Rata hua jawab pehle follow-up par toot jata hai.',
      },
      {
        heading: 'Theme 1 — Personal background (Form: name, CNIC, DOB, domicile)',
        paragraphs: [
          'The form records your name, date of birth, district, province, and domicile. The interviewer checks that you know your own basics — and watches for hesitation, which suggests carelessness.',
        ],
        list: [
          'SAMPLE 1: "What is the meaning of your name?" — Approach: know it exactly; if it is from Arabic/Urdu, say the meaning confidently.',
          'SAMPLE 2: "Tell me about your district/tehsil." — Approach: 2-3 real facts (famous for what, main occupation of people). Shows you know your roots.',
          'SAMPLE 3: "Rural ya urban background — is se aap ne kya seekha?" — Approach: honest comparison, one lesson from your background.',
        ],
      },
      {
        heading: 'Theme 2 — Family (Form Q5-12: parents, income, family structure)',
        paragraphs: [
          'The form asks about your father\u2019s and mother\u2019s occupations, monthly income, joint or nuclear family, and even domestic problems. Answer factually and respectfully — never exaggerate, never complain.',
        ],
        list: [
          'SAMPLE 4: "Your father does what?" — Approach: exact occupation/designation; know it precisely, including his rank if retired from service.',
          'SAMPLE 5: "Joint family ke fayde aur nuksan?" — Approach: balanced, mature view — one genuine advantage, one genuine adjustment.',
          'SAMPLE 6: "Aap ke ghar ka mahol kaisa hai?" — Approach: positive and brief; never discuss family disputes in an interview.',
        ],
      },
      {
        heading: 'Theme 3 — Education (Form Q22-24: qualifications, school, college)',
        paragraphs: [
          'Your marks, subjects, and institutions are on the form. Low marks WILL be asked about — prepare an honest explanation, not an excuse.',
        ],
        list: [
          'SAMPLE 7: "Matric me itne kam marks kyun?" — Approach: own it honestly + what changed after (proof of improvement matters more than the excuse).',
          'SAMPLE 8: "Favourite subject kaunsa aur kyun?" — Approach: name it, say what you actually enjoy in it, one thing you learned.',
          'SAMPLE 9: "Apne school/college ke baare me batao." — Approach: name, one good memory, one teacher who influenced you.',
        ],
      },
      {
        heading: 'Theme 4 — Hobbies (Form Q28: three hobbies)',
        paragraphs: [
          'You must write three hobbies on the form — and the interviewer WILL probe them. This is where fake hobbies die. Only claim what you can discuss for two full minutes.',
        ],
        list: [
          'SAMPLE 10: "Aap ne hobby me cricket likha — aakhri match kab khela?" — Approach: real, recent details. Vague answers expose a fake hobby instantly.',
          'SAMPLE 11: "Reading hobby hai — aakhri kitab kaunsi parhi?" — Approach: title + one idea from it. If you cannot name one, do not claim reading.',
          'SAMPLE 12: "Hobbies se aap ne kya seekha?" — Approach: one real life-skill per hobby (teamwork, patience, discipline).',
        ],
      },
      {
        heading: 'Theme 5 — Self & psychology (Form Q30 a-k: the deep questions)',
        paragraphs: [
          'These eleven questions are the heart of the form — and the interview. They are designed so that crammed answers sound hollow. Prepare by actually thinking about your life, not by memorizing lines.',
        ],
        list: [
          'SAMPLE 13: "What have you learnt from your parents?" — Approach: one specific value + one small real incident showing it.',
          'SAMPLE 14: "Your biggest fear?" — Approach: name a real, human fear + how you manage it. "I fear nothing" is not believed.',
          'SAMPLE 15: "Where do you see yourself in five years?" — Approach: realistic and relevant — trained officer, serving, learning. Not "I will be a General".',
          'SAMPLE 16: "How do you respond to criticism?" — Approach: honest pattern — listen, think, correct if valid. Give one real example.',
          'SAMPLE 17: "Who in your life can you really depend on?" — Approach: name the person + why (one concrete reason). Shows your support system.',
          'SAMPLE 18: "Koi aisa waqia jo aap ki zindagi badal gaya?" — Approach: one real incident, what changed in you after it. Real stories have details.',
        ],
      },
      {
        heading: 'Theme 6 — Merits & demerits (Form Q31: self, parents, friend, siblings)',
        paragraphs: [
          'You must list merits and demerits — of yourself and as seen by others. The interviewer cross-checks: do your claimed merits show up in your stories?',
        ],
        list: [
          'SAMPLE 19: "Apni 3 khubiyan batao — saboot ke saath." — Approach: each merit needs a one-line proof from real life ("I wake at 5am daily for running").',
          'SAMPLE 20: "Apni ek kamzori batao." — Approach: real, minor, fixable + what you are doing about it. Never "I have no weaknesses".',
          'SAMPLE 21: "Aap ke dost aap ko kaisa kehte hain?" — Approach: consistent with your form — the interviewer may already know what you wrote.',
        ],
      },
      {
        heading: 'Theme 7 — Previous attempts (Form Q32)',
        paragraphs: [
          'ISSB keeps records of previous attempts — hiding one is disqualifying. If you are a repeater, own it and show what changed.',
        ],
        list: [
          'SAMPLE 22: "Pehli dafa kyun select nahi huay?" — Approach: honest self-analysis (one real reason) + exactly what you improved since.',
          'SAMPLE 23: "Is dafa kya different hai?" — Approach: concrete changes — practice routine, fitness, knowledge — not just "I am more confident".',
        ],
      },
      {
        heading: 'Theme 8 — Security & background (7-page form: relatives abroad, travel, checklist)',
        paragraphs: [
          'The longer form asks about relatives in foreign countries, travel abroad, smoking, even pocket money. Answer plainly — these check background consistency, not perfection.',
        ],
        list: [
          'SAMPLE 24: "Bahir mulk me rishtedar hain?" — Approach: simple facts — who, where, what they do. Hiding this is far worse than having relatives abroad.',
          'SAMPLE 25: "Pocket money kitni milti hai, kahan kharch hoti hai?" — Approach: honest, ordinary answer. It checks lifestyle honesty.',
          'SAMPLE 26: "Kya aap smoking karte hain?" — Approach: truth. One honest "no" beats a nervous lie every time.',
        ],
      },
      {
        heading: 'Theme 9 — Motivation (the "why")',
        paragraphs: [
          'Not on the form directly — but the interview always comes here. "I love my country" alone is not an answer.',
        ],
        list: [
          'SAMPLE 27: "Fauj me kyun aana chahte ho?" — Approach: real inspiration (person/event) + what you understand of the life + what you offer.',
          'SAMPLE 28: "Army, Navy ya PAF — kyun?" — Approach: show you know the difference between the services; pick with a reason.',
          'SAMPLE 29: "Agar select na huay to?" — Approach: honest backup plan + you will try again. Maturity, not desperation.',
        ],
      },
      {
        heading: 'Theme 10 — Rapid-fire GK (the pressure test)',
        paragraphs: [
          'Near the end, quick questions test composure under pressure. Answer fast what you know; calmly say "not sure, Sir" for the rest.',
        ],
        list: [
          'SAMPLE 30: Rapid-fire — "Pakistan ka capital? Sab se bara suba? PMA kahan hai? Abhi ke Army Chief ka title kya hai?" — Approach: revise our General Knowledge note; speed + honesty beats guessing.',
        ],
        urduNote:
          'Rapid-fire me jo aata hai foran jawab do, jo nahi aata us par "not sure, Sir" keh kar aagay barho. Atakna nahi — composure dekha ja raha hai.',
      },
    ],
    mistakes: [
      'Memorizing model answers — they collapse at the first follow-up.',
      'Claiming hobbies from the form that you cannot discuss for two minutes.',
      'Answers that contradict what you wrote in the bio-data form.',
      'Hiding a previous attempt — ISSB keeps records.',
      'Bluffing on GK instead of an honest "I don\u2019t know, Sir".',
    ],
    tips: [
      'Read the real form questions (listed above) and prepare YOUR real material for each.',
      'Practice answers aloud — speaking is a different skill from thinking.',
      'Keep a copy of your filled form and revise it the night before the interview.',
      'Two-minute rule: if you cannot talk about it for two minutes, do not claim it.',
    ],
    faqs: [
      {
        q: 'Kya ye asal interview ke sawal hain?',
        a: 'Nahi — ye SAMPLE sawal hain, asal bio-data forms ke themes par mabni. Koi bhi website asal interview ke sawal nahi de sakti. Lekin themes wohi hain jo form me poochay jatay hain, is liye tayari bilkul relevant hai.',
      },
      {
        q: 'Interview kitne minute ka hota hai?',
        a: 'Aam tor par 15-30 minute, candidate ke hisaab se mukhtalif. Kuch ke jaldi khatam, kuch ke lambe — lamba hona achi ya buri baat ki alamat nahi.',
      },
      {
        q: 'English me jawab dena zaroori hai?',
        a: 'Jis zuban me sawal ho usi me jawab do. Aam tor par mix hota hai — English aur Urdu dono me rawani honi chahiye.',
      },
    ],
    related: ['interview-guide', 'biodata-form-guide', 'general-knowledge', 'interview-dress'],
  },
  {
    slug: 'issb-4-day-routine',
    title: 'ISSB 4-Day Routine: What Happens Each Day',
    urduLine: '4 din ka mukammal routine — har din kya hota hai',
    description:
      'Day 0 reporting se Day 5 dispersal tak: har din ka schedule, kya test hota hai, kya saath le jana hai, aur din ka pattern.',
    readTime: '9 min read',
    category: 'Getting Started',
    intro:
      'Four days at an ISSB centre follow a rhythm — early mornings, packed days, and lights-out at night. Knowing the routine in advance removes the fear of the unknown, so you can spend your energy on the tests instead of worrying about "what happens next". Note: the exact order of some tests can vary slightly between batches — the pattern below is the standard one.',
    sections: [
      {
        heading: 'Day 0 — Reporting day (afternoon)',
        paragraphs: [
          'You report at the centre on the date in your call letter, usually by early afternoon. At the gate: document checking (originals — matric certificate, CNIC/B-form, domicile, photographs). Then you are allotted your chest number — this number is your identity for all four days; assessors will know you by it, so remember it.',
          'You settle into the barracks/dormitory with other candidates, there is a general briefing (rules: no mobile phones, no cameras, timings, mess rules), bio-data forms may be issued, and then dinner and early lights-out. Tip: sleep early. Day 1 starts at dawn.',
        ],
        urduNote:
          'Day 0: documents check, chest number milega (ye 4 din aap ki pehchan hai), barracks me shift, briefing — aur jaldi so jao. Subah bohat jaldi uthna hai.',
      },
      {
        heading: 'Day 1 — Screening day (the cut)',
        paragraphs: [
          'The day starts very early. Day 1 is screening: intelligence tests (verbal and non-verbal, timed) and usually a picture-story or announcement-based screening test. Everyone takes them; based on results, a large group is screened out the same evening.',
          'Those screened out leave the next morning. Those who stay continue to the full testing. This is the day your months of timed practice pay off — there is no personality assessment yet, only performance under time pressure.',
        ],
        list: [
          'Carry: chest number, stationery, water bottle',
          'Mindset: speed + accuracy; do not get stuck on one question',
          'Evening: results announced — stay calm whatever the outcome',
        ],
      },
      {
        heading: 'Day 2 — Psychology day (indoor, timed)',
        paragraphs: [
          'Day 2 belongs to the psychologist — a full battery of written tests, all strictly timed: Word Association Test (about a minute per... actually seconds per word, ~80-100 words), sentence completion in English and Urdu, picture/pointer story writing (about 3.5 minutes per story), and a self-description exercise. The detailed bio-data form is usually filled on this day too.',
          'Pace yourself: the tests come back-to-back. Keep handwriting legible even when rushing — an unreadable answer helps nobody. Between tests, breathe and reset; do not carry one bad item into the next.',
        ],
        urduNote:
          'Day 2: WAT, English/Urdu sentence completion, picture stories, self-description — sab timed, ek ke baad ek. Ek kharab item ko aglay me mat lao.',
      },
      {
        heading: 'Day 3 — GTO day (outdoor)',
        paragraphs: [
          'Outdoor day with the Group Testing Officer. Morning usually starts with indoor group tasks: group discussion and group planning exercise. Then outdoors: progressive group tasks (obstacles with planks and ropes), half group task, individual obstacles course, command tasks (each candidate leads once), and the final group task.',
          'Wear sports clothes and proper sports shoes. Eat well at breakfast — you will need the energy. And remember the golden rule: it is a team day, not a race.',
        ],
        list: [
          'Carry: sports kit, sports shoes, water, a small towel',
          'In discussions: contribute 3-4 solid points; listen as much as you speak',
          'In obstacles: help the weakest member — the GTO notices',
          'As leader: clear short instructions, calm face, include everyone',
        ],
      },
      {
        heading: 'Day 4 — Interview + conference (decision day)',
        paragraphs: [
          'The final day: your personal interview with the Deputy President (usually 15-30 minutes), in formal dress. After all interviews, the conference: the psychologist, GTO, and Deputy President sit together and decide each candidate — Recommended or Not Recommended. Results are typically announced the same evening or next morning.',
          'Whatever the result: it is a decision about fit for this role, not a verdict on your worth. Repeaters who fix real weaknesses come back stronger — the form even has a section for previous attempts.',
        ],
      },
      {
        heading: 'Day 5 — Dispersal (morning)',
        paragraphs: [
          'After results, candidates disperse — usually the same evening or next morning. Collect your documents, say your goodbyes, and leave with your head high regardless of the outcome.',
        ],
      },
      {
        heading: 'The daily pattern (what every day feels like)',
        paragraphs: [
          'Days start very early (before sunrise), with physical training or parade-type assembly, then breakfast, then the day\u2019s tests. Lunch and short rest midday, more tests in the afternoon, dinner, and lights-out early. You are observed informally too — mess manners, punctuality, how you treat fellow candidates. There is no "off" time at ISSB.',
        ],
        urduNote:
          'Har din subah bohat jaldi shuru hota hai. Mess me, line me, barracks me — har jagah aap ka bartao dekha ja raha hai. ISSB me koi "off time" nahi.',
      },
    ],
    mistakes: [
      'Treating Day 0 casually and sleeping late — Day 1 punishes tired minds.',
      'Panicking after one bad test and ruining the next three.',
      'Forgetting that mess manners and punctuality are also observed.',
      'Wearing the interview dress on GTO day (keep it crisp for Day 4).',
    ],
    tips: [
      'Memorize your chest number on Day 0.',
      'Pack day-wise: sports kit separate from interview dress.',
      'Sleep is a weapon — protect it every night.',
      'Between tests: water, deep breaths, reset.',
    ],
    faqs: [
      {
        q: 'Kya mobile phone le ja sakte hain?',
        a: 'Nahi — mobile phones aur cameras aam tor par zabt kar liye jatay hain ya allowed nahi. Call letter ki hidayat parho aur follow karo.',
      },
      {
        q: 'Screening me fail huay to kya hota hai?',
        a: 'Screened-out candidates aglay din wapas bhej diye jatay hain. Isi liye Day 1 ki timed practice sab se zaroori hai.',
      },
      {
        q: 'Result usi din milta hai?',
        a: 'Aam tor par conference ke baad shaam ko ya agli subah result announce hota hai. Exact timing batch ke hisaab se mukhtalif ho sakti hai.',
      },
    ],
    related: ['what-is-issb', 'initial-test-guide', 'gto-tasks', 'interview-guide'],
  },
  {
    slug: 'gto-tasks',
    title: 'GTO Outdoor Tasks with Pictures: Each Task Explained',
    urduLine: 'GTO tasks tasveeron ke saath — har task ki asaan wazahat',
    description:
      'Every GTO task explained with pictures: group discussion, group planning, progressive group task, half group task, individual obstacles, command task, final group task — plus what the GTO observes in each.',
    readTime: '11 min read',
    category: 'GTO & Outdoor',
    intro:
      'GTO day looks like playing games outdoors — but every "game" is a test. This note explains each task with pictures: what you actually do, the rules that govern it, and most importantly what the Group Testing Officer is observing while you do it. Read this, and no task will surprise you on the day.',
    sections: [
      {
        heading: 'Task 1 — Group discussion (indoor)',
        paragraphs: [
          'The group sits together and gets a topic — usually a current-affairs or social issue. You discuss it, typically in English, for 15-20 minutes. There is no chairman; the group manages itself. The GTO watches: who initiates, who builds on others\u2019 points, who listens, who dominates, who stays silent.',
          'Tactic: speak 3-4 times with solid, structured points. Agreeing and extending someone\u2019s point ("I agree with Ali, and to add...") scores as teamwork. Shouting others down scores against you.',
        ],
        urduNote:
          'Group discussion me 3-4 dafa solid baat karo. Dusron ki baat kaatna nahi — unki baat aagay barhana teamwork hai.',
      },
      {
        heading: 'Task 2 — Group planning exercise (indoor)',
        paragraphs: [
          'The group studies a model or map showing a situation — places, distances, a problem (e.g., an injured person, limited time, multiple tasks). Together you must make a practical plan: priorities, routes, who does what. Then each member may be asked to present the group\u2019s plan briefly.',
          'The GTO watches logical thinking and cooperation: do you listen to the map reader, do you suggest practical steps, can you summarize a plan clearly in 60 seconds?',
        ],
      },
      {
        heading: 'Task 3 — Progressive group task (outdoor, with picture)',
        paragraphs: [
          'The famous obstacle series: the group must cross 3-4 obstacles in sequence using helping materials (a wooden plank, a rope, a balli/pole). Each obstacle is harder than the last. There are strict rules — certain coloured areas are out of bounds, materials cannot touch forbidden zones, and the whole group must cross.',
        ],
        image: {
          src: '/images/gto-group-task.png',
          caption:
            'Progressive group task: candidates crossing an obstacle together using a plank and rope — teamwork, not individual speed, is being tested.',
        },
        list: [
          'Listen to the GTO\u2019s briefing carefully — rules differ slightly each time',
          'First 60 seconds: as a group, quickly agree on a plan before touching anything',
          'Stronger members help weaker ones across — never leave anyone behind',
          'If the plan fails, stop, re-plan calmly, try again — panicking is the real failure',
        ],
        urduNote:
          'Plank aur rassi se poori team ko rukawat paar karani hai. Pehle 60 second me plan banao, phir kaam shuru karo. Kamzor saathi ko akela mat chhoro.',
      },
      {
        heading: 'Task 4 — Half group task (outdoor)',
        paragraphs: [
          'Same idea as the progressive task, but with a smaller group and usually one obstacle. With fewer people, individual contribution becomes more visible — this is your chance to show practical thinking. Same rules apply: plan first, include everyone, no rule-breaking shortcuts.',
        ],
      },
      {
        heading: 'Task 5 — Individual obstacles (outdoor, with picture)',
        paragraphs: [
          'A course of about 9-10 obstacles (walls, ropes, ditches, balance beams), each carrying marks. You get a few minutes — attempt as many as you can. This is the one task where individual courage and fitness directly count.',
        ],
        image: {
          src: '/images/gto-obstacles.png',
          caption:
            'Individual obstacles course: walls, ropes and balance beams — each obstacle carries marks; attempt as many as you can with courage.',
        },
        list: [
          'Do not waste time on one obstacle — if stuck, move to the next and come back',
          'Higher-mark obstacles first if you are fit; secure the easy marks first if you are not',
          'Effort is observed: a candidate who tries everything bravely beats one who quits early',
        ],
      },
      {
        heading: 'Task 6 — Command task (you lead)',
        paragraphs: [
          'You are made the leader and given 2-3 group members to lead across one obstacle. This is your direct leadership test. Quickly study the obstacle, make a simple plan, explain it in short clear sentences, assign roles, and execute. If the plan fails, stay calm and adjust — the GTO watches your reaction to failure more than the failure itself.',
        ],
        urduNote:
          'Command task me AAP leader ho. Plan simple rakho, short sentences me samjhao, sab ko include karo. Plan fail ho to ghabrao mat — calm reh kar adjust karo.',
      },
      {
        heading: 'Task 7 — Final group task (outdoor)',
        paragraphs: [
          'The whole group reunites for one last, tougher obstacle. By now the GTO has seen everyone — this task confirms impressions. Tired bodies, same rules: cooperate, communicate, finish together.',
        ],
      },
      {
        heading: 'What the GTO observes in EVERY task',
        paragraphs: [
          'Across all seven tasks, the assessor is scoring the same officer-like qualities: cooperation (do you work with the team?), initiative (do you step up when needed?), communication (clear and calm?), planning (think before acting?), stress tolerance (what happens when the plan fails?), and consideration for others (do you help the weakest member?). Physical fitness is the enabler — not the test itself.',
        ],
      },
    ],
    mistakes: [
      'Treating group tasks as a race — finishing alone while the team struggles.',
      'Breaking obstacle rules for a shortcut — rule-breaking is an instant negative.',
      'Going silent in discussions, then overcompensating by shouting in tasks.',
      'Arguing with teammates when a plan fails instead of re-planning calmly.',
    ],
    tips: [
      'First 60 seconds of every task: plan together, then act.',
      'Learn the standard obstacle rules beforehand (out-of-bounds colours, material rules).',
      'Help the weakest member visibly — the GTO always notices.',
      'Build stamina now: tired bodies make selfish decisions.',
    ],
    faqs: [
      {
        q: 'Kya GTO day me running bhi hoti hai?',
        a: 'Individual obstacles me fitness lagti hai, aur tasks me stamina. Alag se race nahi hoti — lekin fit hona har task me madad karta hai.',
      },
      {
        q: 'Agar group me koi cooperate na kare to?',
        a: 'Usay force mat karo, argue mat karo — apna kaam jari rakho aur usay include karne ki koshish karo. GTO tumhara reaction dekh raha hai, uska nahi.',
      },
      {
        q: 'Command task me leader kaise select hota hai?',
        a: 'GTO khud select karta hai — har candidate ko ek dafa command task milta hai. Apni baari ka intezar karo, dusron ki baari me interfere mat karo.',
      },
    ],
    related: ['gto-tasks-guide', 'gto-interview-tips', 'lecturette-guide', 'group-discussion'],
  },
  {
    slug: 'gto-interview-tips',
    title: 'GTO Interview & Interaction: Tips with Picture',
    urduLine: 'GTO se baat cheet — kya karein, kya na karein',
    description:
      'The GTO talks to you during tasks, not just in a formal interview: how these informal interactions work, what is being judged, and dos and don\u2019ts with a picture.',
    readTime: '6 min read',
    category: 'GTO & Outdoor',
    intro:
      'Many candidates prepare for the Deputy President\u2019s formal interview and forget the GTO\u2019s informal one. The Group Testing Officer does not just watch you from a distance — he talks to you: during tasks, between tasks, in the group. These casual interactions are an interview in disguise, and this note tells you how to handle them.',
    sections: [
      {
        heading: 'How the GTO interacts with you (see picture)',
        paragraphs: [
          'Picture the scene: your group is catching its breath between obstacles, and the GTO walks over and asks you something casual — your name, your city, what your father does, why you want to join. It feels like friendly chit-chat. It is not. He is checking: are you the same natural person here as in your psychology tests and bio-data form? Can you speak clearly and confidently without preparation?',
        ],
        image: {
          src: '/images/gto-scene.png',
          caption:
            'GTO interacting with candidates between outdoor tasks — casual questions here are an informal interview; stay natural and consistent.',
        },
        urduNote:
          'Tasks ke darmiyan GTO aakar casual sawal poochta hai — ye dosti nahi, informal interview hai. Wahi natural, consistent shakhsiyat rakho jo form me likhi thi.',
      },
      {
        heading: 'What is being judged',
        paragraphs: [
          'Three things: consistency (do your casual answers match your form and psychology responses?), communication (can you speak clearly, look people in the eye, and answer directly?), and temperament (are you relaxed and positive, or tense and defensive?). A candidate who is warm and natural here confirms everything good the assessors saw elsewhere.',
        ],
      },
      {
        heading: 'Dos and don\u2019ts',
        paragraphs: [
          'The rules are simple — mostly about being a pleasant, genuine human being under observation.',
        ],
        list: [
          'DO answer directly and briefly — rambling suggests nervousness',
          'DO maintain easy eye contact and a natural posture',
          'DO be the same person as in your form — same hobbies, same facts, same stories',
          'DO stay positive about fellow candidates — never complain about your group',
          'DON\u2019T try to impress with big words or fake confidence',
          'DON\u2019T badmouth anyone — teammates, teachers, or the staff',
          'DON\u2019T freeze or go silent — a simple honest answer always beats silence',
          'DON\u2019T ask the GTO about your performance or result — it looks desperate',
        ],
      },
      {
        heading: 'The group setting: how you treat others is the test',
        paragraphs: [
          'The GTO also watches how you behave toward fellow candidates when no task is running: Do you share water? Do you include the quiet candidate in conversation? Do you mock anyone? Officer-like qualities show brightest in unguarded moments — which is exactly why these moments are watched.',
        ],
      },
    ],
    mistakes: [
      'Switching to a fake "impressive" personality when the GTO approaches.',
      'Complaining about the group, the tasks, or the heat.',
      'Asking "Sir, how am I doing?" — never ask about your own assessment.',
      'Contradicting the bio-data form in casual answers.',
    ],
    tips: [
      'Treat every interaction as part of the test — because it is.',
      'Be warm to fellow candidates; it is noticed.',
      'Short, honest, clear answers — every time.',
      'Smile naturally; tension is visible from far.',
    ],
    faqs: [
      {
        q: 'Kya GTO alag se formal interview leta hai?',
        a: 'GTO ka style informal hota hai — tasks ke darmiyan aur group me baat cheet. Formal lamba interview Deputy President ka hota hai. Dono ki tayari alag hai.',
      },
      {
        q: 'Agar GTO ne mujh se zyada sawal poochay to?',
        a: 'Ye achi ya buri alamat nahi — bas natural raho aur consistent jawab do. Zyada sochna band karo, behtareen do.',
      },
    ],
    related: ['gto-tasks', 'gto-tasks-guide', 'interview-guide', 'biodata-form-guide'],
  },
  {
    slug: 'lecturette-guide',
    title: 'Lecturette: The 3-Minute Talk (With Picture)',
    urduLine: 'Lecturette — 3 minute ki speech ka mukammal tareeqa',
    description:
      'How the lecturette works at ISSB: pick a topic, speak for 3 minutes — structure, 10 sample topics, delivery tips, and a picture of the setup.',
    readTime: '7 min read',
    category: 'GTO & Outdoor',
    intro:
      'The lecturette is simple and terrifying in equal measure: you are given a few topics, you pick one, you get a couple of minutes to think, and then you speak to the group for about three minutes. No slides, no notes — just you, your thoughts, and your voice. This note gives you the structure and the practice method that make those three minutes work for you.',
    sections: [
      {
        heading: 'The setup (see picture)',
        paragraphs: [
          'You stand facing your group; the GTO observes from the side. You choose one topic from 3-4 given choices, get 2-3 minutes to collect your thoughts, then speak for about 3 minutes. When time is up, you stop — even mid-sentence if needed. The group may be asked questions, but usually it is just your talk.',
        ],
        image: {
          src: '/images/lecturette.png',
          caption:
            'Lecturette setup: the candidate stands and speaks to the group for about three minutes while the GTO observes confidence, clarity and structure.',
        },
      },
      {
        heading: 'The 4-part structure (memorize this, not a speech)',
        paragraphs: [
          'Do not memorize speeches — memorize the STRUCTURE, then fill it with your own thoughts on any topic:',
        ],
        list: [
          'OPENING (20 sec): name the topic and why it matters — one strong line to grab attention',
          'POINT 1 (40 sec): your first main idea, with one example or fact',
          'POINT 2 (40 sec): your second main idea, with one example',
          'POINT 3 (40 sec): your third angle — a solution, a personal view, a call to thought',
          'CLOSING (20 sec): one memorable concluding line — never trail off with "so... yeah"',
        ],
        urduNote:
          'Speech ratto mat — STRUCTURE yaad rakho: shuruat (topic kyun important), 3 points (har ek me ek misaal), aur ek strong aakhri jumla.',
      },
      {
        heading: '10 sample topics for practice (SAMPLES)',
        paragraphs: [
          'We wrote these ourselves for practice — they are samples, not real ISSB topics. Practice each with the 4-part structure, timed at 3 minutes:',
        ],
        list: [
          'SAMPLE 1: My aim in life — and why',
          'SAMPLE 2: The importance of discipline',
          'SAMPLE 3: My favourite book and what it taught me',
          'SAMPLE 4: Pakistan\u2019s water crisis — causes and solutions',
          'SAMPLE 5: The role of youth in nation-building',
          'SAMPLE 6: Why I want to join the armed forces',
          'SAMPLE 7: Social media — blessing or curse?',
          'SAMPLE 8: My city/village — what makes it special',
          'SAMPLE 9: The value of time',
          'SAMPLE 10: A person who inspires me',
        ],
      },
      {
        heading: 'Delivery tips (how you speak matters as much as what)',
        paragraphs: [
          'Stand straight, feet planted. Look at the group — sweep your eyes across faces, do not stare at the ground or at the GTO. Speak at a natural pace: nervous candidates rush, so consciously slow down. Pause briefly between points — pauses look confident. Use your hands a little, naturally. And if you lose your place: pause, breathe, continue — nobody minds a pause, everybody notices panic.',
        ],
        list: [
          'Eye contact: sweep across the group, 2-3 seconds per face',
          'Pace: slower than you think — nerves speed you up',
          'Pauses between points = confidence',
          'Lost your place? Pause and continue — never apologize repeatedly',
          'End with a clear closing line, then sit down calmly',
        ],
      },
    ],
    mistakes: [
      'Memorizing a full speech — one forgotten line and the whole thing collapses.',
      'Speaking too fast from nervousness (the most common fault).',
      'Reading from mental notes while staring at the ground.',
      'Trailing off at the end with no conclusion.',
      'Picking the "impressive" topic instead of the one you can actually speak on.',
    ],
    tips: [
      'Record yourself on your phone and watch it back — painful but priceless.',
      'Practice one lecturette daily for two weeks; 3 minutes each.',
      'Always pick the topic YOU can speak on, not the one that sounds smart.',
      'Prepare 5 "universal" personal stories — they fit many topics.',
    ],
    faqs: [
      {
        q: 'Kis zuban me lecturette dena hai?',
        a: 'Aam tor par English me, lekin instruction suno — jo zuban kahi jaye usi me do. Dono ki practice rakho.',
      },
      {
        q: '3 minute se pehle khatam ho jaye to?',
        a: 'Koi baat nahi — apna closing line bolo aur calmly baith jao. Time khenchna (filler words) bolna se bura hai.',
      },
    ],
    related: ['group-discussion', 'gto-tasks', 'interview-guide'],
  },
  {
    slug: 'group-discussion',
    title: 'Group Discussion: 15+ Topics & How to Stand Out',
    urduLine: 'Group discussion — topics aur shine karne ka tareeqa',
    description:
      'How ISSB group discussions work, 15+ commonly-discussed topics (labeled as themes, not leaks), the rules of the game, and how to stand out without dominating.',
    readTime: '8 min read',
    category: 'GTO & Outdoor',
    intro:
      'The group discussion is where the GTO first sees you think aloud. A topic is given, the group talks for 15-20 minutes, and there is no chairman — the group organizes itself. Candidates fail here in two opposite ways: staying silent from fear, or dominating from ego. This note shows the middle path — and gives you 15+ topic themes to prepare.',
    sections: [
      {
        heading: 'The rules of the game',
        paragraphs: [
          'One topic, 15-20 minutes, usually in English. Everyone should contribute. You may agree or disagree — but with reasons, not volume. The GTO notes: who starts well, who listens, who builds on others\u2019 points, who brings the group back when it drifts, and who tries to bulldoze.',
        ],
        list: [
          'Contribute 3-4 times with structured points — quality over quantity',
          'Listen visibly: nod, refer to others by name ("As Ahmed said...")',
          'Disagree politely: "I see it differently because..." — never personal',
          'If the group drifts off-topic, gently bring it back — that is leadership',
          'Do not interrupt; do not whisper side-conversations',
        ],
        urduNote:
          '3-4 dafa solid points do. Dusron ki baat suno aur unka naam lekar agree/disagree karo. Chillana leadership nahi — group ko track par rakhna leadership hai.',
      },
      {
        heading: '15+ commonly-discussed topic themes (THEMES, not leaks)',
        paragraphs: [
          'Nobody can give you "the real" GD topics — they change every batch. But the THEMES repeat: current affairs, social issues, youth, and national challenges. Prepare 2-3 points on each theme below and you will never be blank:',
        ],
        list: [
          'THEME 1: Social media — effects on youth (positive vs negative)',
          'THEME 2: Education system of Pakistan — problems and reforms',
          'THEME 3: Climate change and floods in Pakistan',
          'THEME 4: Water crisis — causes and solutions',
          'THEME 5: Youth unemployment',
          'THEME 6: Corruption — how to fight it',
          'THEME 7: Terrorism and national security',
          'THEME 8: Kashmir issue — Pakistan\u2019s stance',
          'THEME 9: CPEC — opportunities for Pakistan',
          'THEME 10: Women empowerment and education',
          'THEME 11: Inflation and the common man',
          'THEME 12: Energy crisis / load shedding',
          'THEME 13: Population growth — challenge or resource?',
          'THEME 14: Role of media — responsible or sensational?',
          'THEME 15: Drug abuse among youth',
          'THEME 16: National unity — how to strengthen it',
        ],
      },
      {
        heading: 'How to stand out without dominating',
        paragraphs: [
          'The candidates GTOs remember are not the loudest — they are the most useful. Open the discussion well if you can (a clear 30-second framing of the topic). Mid-discussion, be the one who organizes: "We have covered causes; let us discuss solutions now." Close with a balanced summary if the chance comes. These three moves — open, organize, summarize — make you visible without a single raised voice.',
        ],
      },
      {
        heading: 'Practice method (with friends, 20 minutes)',
        paragraphs: [
          'You cannot practice GDs alone. Gather 4-6 friends, pick a theme from above, set a 20-minute timer, and discuss in English. Afterward, ask each other: who listened best? Who had the clearest points? Rotate who "opens" each time. Two such sessions a week for a month transforms your confidence.',
        ],
      },
    ],
    mistakes: [
      'Staying completely silent — invisibility is the only guaranteed failure.',
      'Dominating: interrupting, shouting down, repeating the same point.',
      'Speaking in Urdu when English was instructed (or vice versa).',
      'Personal attacks or mocking another candidate\u2019s point.',
      'Side-whispering with a neighbour instead of addressing the group.',
    ],
    tips: [
      'Prepare 2-3 points per theme in advance — never enter blank.',
      'Learn 5-6 connecting phrases: "To add to that...", "On the other hand...", "Summing up..."',
      'Body language: sit upright, face the speaker, nod when listening.',
      'If nervous about English, speak slowly — slow and clear beats fast and muddled.',
    ],
    faqs: [
      {
        q: 'English kamzor hai to kya karun?',
        a: 'Slow aur clear bolo — tez aur ghalat se behtar hai. Roz 10 minute English me bolne ki practice karo; ek mahine me farq nazar aayega.',
      },
      {
        q: 'Topic ka kuch pata na ho to?',
        a: 'Sunno pehle — dusron ke points se idea lo, phir ek simple point do ("I agree with... because..."). Khamosh rehna sab se bura option hai.',
      },
    ],
    related: ['lecturette-guide', 'gto-tasks', 'issb-4-day-routine'],
  },
];

export const notesPart3b: Note[] = [
  {
    slug: 'general-knowledge',
    title: 'General Knowledge Master Pack (Q&A)',
    urduLine: 'General knowledge — Islamiat, Pakistan affairs, armed forces (sawal-jawab)',
    description:
      'The complete GK pack for ISSB interviews: 20 Islamic Q&A, 20 Pakistan affairs Q&A, all three services\u2019 ranks in tables, academies, plus PAF and Navy facts. Every answer verified.',
    readTime: '15 min read',
    category: 'General Knowledge',
    intro:
      'General knowledge appears everywhere at ISSB: the initial academic test, the psychology questionnaires, the GTO\u2019s casual questions, and the Deputy\u2019s rapid-fire round. This master pack covers the four areas interviewers probe most: Islamic knowledge, Pakistan affairs, armed forces knowledge, and service-specific facts. Every Q&A below is a verified fact — revise a few daily, not all at once.',
    sections: [
      {
        heading: 'Part 1 — Islamic GK (20 Q&A)',
        paragraphs: [
          'The most commonly asked Islamic questions in ISSB interviews, with verified answers:',
        ],
        list: [
          'Q: How many Surahs are in the Holy Quran? A: 114.',
          'Q: Which is the longest Surah? A: Surah Al-Baqarah.',
          'Q: Which is the shortest Surah? A: Surah Al-Kausar.',
          'Q: Which Surah does not begin with Bismillah? A: Surah At-Taubah.',
          'Q: Which was the first Surah revealed (first verses)? A: Surah Al-Alaq (in Cave Hira).',
          'Q: How many Pillars of Islam are there? A: Five — Shahadah, Salah, Zakat, Sawm, Hajj.',
          'Q: What are the Faraiz of Wudu? A: Four — washing the face, washing both arms up to the elbows, masah of (one-fourth of) the head, washing both feet up to the ankles.',
          'Q: What are the Faraiz of Ghusl? A: Three — gargling (kulli), putting water in the nose, washing the entire body so no part remains dry.',
          'Q: In which Hijri year was the Battle of Badr fought? A: 2 Hijri (624 CE).',
          'Q: In which Hijri year was Makkah conquered? A: 8 Hijri (630 CE), on 20th Ramadan.',
          'Q: Who was the first martyr in Islam? A: Hazrat Sumayyah (RA).',
          'Q: Who was the first muezzin of Islam? A: Hazrat Bilal (RA).',
          'Q: In which year did the Hijrat (migration to Madinah) take place? A: 622 CE (1 Hijri).',
          'Q: To which tribe did the Holy Prophet (PBUH) belong? A: Quraish, clan of Banu Hashim.',
          'Q: What were the names of the Prophet\u2019s (PBUH) parents? A: Father: Hazrat Abdullah; Mother: Hazrat Amina.',
          'Q: Who was the first wife of the Prophet (PBUH)? A: Hazrat Khadija (RA).',
          'Q: What is the first month of the Islamic calendar? A: Muharram.',
          'Q: To which Prophet was the Injeel revealed? A: Hazrat Isa (AS).',
          'Q: Which Prophets\u2019 names are the Zabur and Torah linked to? A: Zabur — Hazrat Dawud (AS); Torah — Hazrat Musa (AS).',
          'Q: What is the meaning of the word "Islam"? A: Submission/surrender to the will of Allah (from the root s-l-m, also linked to peace).',
        ],
        urduNote:
          'Roz 4-5 sawal yaad karo, ratta nahi — samajh kar. Interview me confidence se jawab do; jo na aaye us par "not sure, Sir".',
      },
      {
        heading: 'Part 2 — Pakistan affairs (20 Q&A)',
        paragraphs: [
          'The essential Pakistan facts every candidate must know:',
        ],
        list: [
          'Q: When did Pakistan come into being? A: 14 August 1947.',
          'Q: Who is the founder of Pakistan? A: Quaid-e-Azam Muhammad Ali Jinnah.',
          'Q: What is the national language? A: Urdu (official language: English).',
          'Q: What is the capital of Pakistan? A: Islamabad.',
          'Q: Which is the largest province by area? A: Balochistan.',
          'Q: Which is the largest province by population? A: Punjab.',
          'Q: Who wrote the national anthem? A: Hafeez Jalandhari (music: Ahmed G. Chagla).',
          'Q: Who is the national poet of Pakistan? A: Allama Muhammad Iqbal.',
          'Q: What is the national animal? A: Markhor.',
          'Q: What is the national bird? A: Chakor (partridge).',
          'Q: What is the national tree? A: Deodar.',
          'Q: What is the national flower? A: Jasmine.',
          'Q: What is the national motto? A: "Faith, Unity, Discipline" (Iman, Ittehad, Nazm).',
          'Q: What is the highest peak in Pakistan? A: K-2 (8,611 metres).',
          'Q: What is the longest river of Pakistan? A: River Indus (approx. 3,180 km).',
          'Q: Who was the first Prime Minister of Pakistan? A: Liaquat Ali Khan.',
          'Q: When was the Objective Resolution passed? A: 1949.',
          'Q: In which year was the current (1973) Constitution adopted? A: 1973.',
          'Q: When did Bangladesh (East Pakistan) separate? A: December 1971.',
          'Q: Which is the deepest seaport of Pakistan? A: Gwadar Port.',
        ],
      },
      {
        heading: 'Part 3 — Armed Forces GK: ranks of all three services',
        paragraphs: [
          'Know all three rank ladders cold — interviewers love asking "what comes after Major?" or cross-service equivalents. Junior ranks first, senior last:',
        ],
        list: [
          'PAKISTAN ARMY (junior \u2192 senior): Second Lieutenant \u2192 Lieutenant \u2192 Captain \u2192 Major \u2192 Lieutenant Colonel \u2192 Colonel \u2192 Brigadier \u2192 Major General \u2192 Lieutenant General \u2192 General.',
          'PAKISTAN NAVY (junior \u2192 senior): Midshipman \u2192 Sub Lieutenant \u2192 Lieutenant \u2192 Lieutenant Commander \u2192 Commander \u2192 Captain \u2192 Commodore \u2192 Rear Admiral \u2192 Vice Admiral \u2192 Admiral.',
          'PAKISTAN AIR FORCE (junior \u2192 senior): Pilot Officer \u2192 Flying Officer \u2192 Flight Lieutenant \u2192 Squadron Leader \u2192 Wing Commander \u2192 Group Captain \u2192 Air Commodore \u2192 Air Vice Marshal \u2192 Air Marshal \u2192 Air Chief Marshal.',
          'Chiefs\u2019 titles: Army \u2014 Chief of Army Staff (COAS); Navy \u2014 Chief of the Naval Staff; PAF \u2014 Chief of the Air Staff.',
          'Training academies: Army \u2014 Pakistan Military Academy (PMA), Kakul, Abbottabad; Navy \u2014 Pakistan Naval Academy, Karachi (Manora); PAF \u2014 PAF Academy, Risalpur.',
          'Headquarters: Army \u2014 General Headquarters (GHQ), Rawalpindi; Navy \u2014 Naval Headquarters, Islamabad; PAF \u2014 Air Headquarters, Islamabad.',
          'ISSB centres: Kohat, Gujranwala, Malir (Karachi), and Quetta.',
        ],
        urduNote:
          'Teenon services ke ranks zubani yaad karo — "Major ke baad kya aata hai?" ye sawal bohat common hai. Junior se senior tak tarteeb yaad rakho.',
      },
      {
        heading: 'Part 4 — PAF: 10 key facts',
        paragraphs: [
          'For candidates applying to the Air Force (and useful for all):',
        ],
        list: [
          '1. The Pakistan Air Force was established on 14 August 1947.',
          '2. PAF motto: "Second to None".',
          '3. PAF Academy is at Risalpur (Khyber Pakhtunkhwa).',
          '4. PAF Day is observed on 7 September (marking the 1965 war air battles).',
          '5. In the 1965 war, PAF pilot M.M. Alam famously downed five Indian aircraft in under a minute — a world record.',
          '6. The JF-17 Thunder is jointly developed by Pakistan and China.',
          '7. PAF entry branches include GD Pilot, Aeronautical Engineering, Air Defence, and others.',
          '8. The first Pakistani Commander-in-Chief of the PAF was Air Marshal Asghar Khan (1957).',
          '9. PAF Headquarters is in Islamabad.',
          '10. The aerobatics team of the PAF is called "Sherdils".',
        ],
      },
      {
        heading: 'Part 5 — Navy: 10 key facts',
        paragraphs: [
          'For candidates applying to the Navy (and useful for all):',
        ],
        list: [
          '1. The Pakistan Navy was established on 14 August 1947.',
          '2. Pakistan Naval Academy is at Manora, Karachi.',
          '3. Navy Day is observed on 8 September (marking Operation Dwarka in the 1965 war).',
          '4. In the 1965 war, Pakistan Navy ships carried out Operation Dwarka, bombarding Indian coastal installations.',
          '5. In the 1971 war, the submarine PNS/M Hangor sank the Indian frigate INS Khukri — the first submarine kill since World War II.',
          '6. Naval Headquarters is in Islamabad.',
          '7. The Navy\u2019s commando unit is the SSG (Navy).',
          '8. PN Cadet entries and Short Service Commission entries are the main officer induction routes.',
          '9. The Marines are the Navy\u2019s shore-combat force.',
          '10. Ranks run from Midshipman up to Admiral (see the table in Part 3).',
        ],
      },
      {
        heading: 'How to revise this pack (without cramming)',
        paragraphs: [
          'Do not try to memorize all 60+ items in one sitting. Take 10 Q&A per day, say each answer aloud once, and move on. Every Sunday, quiz yourself on the week\u2019s 70. Within a month the whole pack is in long-term memory — and more importantly, you will ANSWER like someone who knows, not someone who crammed.',
        ],
      },
    ],
    mistakes: [
      'Cramming 100 facts the night before the interview — it evaporates under pressure.',
      'Learning ranks in the wrong order (senior-to-junior confusion).',
      'Guessing wildly on Islamic questions — wrong religious facts look very bad.',
      'Knowing zero about the OTHER two services (interviewers cross-ask).',
    ],
    tips: [
      '10 Q&A per day, aloud — one month and the pack is yours.',
      'Write the three rank ladders from memory weekly until perfect.',
      'Follow one news source daily for current-affairs GK.',
      'Quiz with a friend: rapid-fire, 10 seconds per answer.',
    ],
    faqs: [
      {
        q: 'Kya interview me Islamiat ke sawal zaroor aatay hain?',
        a: 'Aksar aatay hain — basic Islamic GK (Surahs, Pillars, Seerah) har candidate se expect ki jati hai. Part 1 wali 20 Q&A is ke liye kaafi hain.',
      },
      {
        q: 'Current affairs kahan se parhun?',
        a: 'Roz 15 minute kisi reputable news source se — sirf headlines nahi, 2-3 khabron ki detail. Hamari site ka current affairs section (jald aa raha hai) bhi madad karega.',
      },
    ],
    related: ['interview-questions', 'initial-test-guide', 'group-discussion'],
  },
  {
    slug: 'issb-dates',
    title: 'ISSB Dates & Call Letter: How to Find Your Schedule',
    urduLine: 'Test dates aur call letter — schedule kahan se maloom karein',
    description:
      'How ISSB scheduling works, the official tentative schedule, how to check your call letter online with your CNIC, what the call letter contains, and reporting instructions. No invented dates.',
    readTime: '7 min read',
    category: 'Important Info',
    intro:
      'Every course has its own timeline, and dates change between courses — so this note does NOT give you "the dates" as fixed facts. Instead, it teaches you the system: how scheduling works, where the official schedule is published, and how to check YOUR personal call letter. One honest method beats ten copied date-lists.',
    sections: [
      {
        heading: 'How the cycle works (understand the system)',
        paragraphs: [
          'The flow is always the same: (1) Online registration opens for a course (e.g., PMA Long Course) on the service website; (2) preliminary/initial tests run at AS&RCs over several weeks; (3) candidates who clear are scheduled for ISSB in batches over several months; (4) each candidate gets a call letter with THEIR specific reporting date and centre; (5) after ISSB, recommended candidates get medicals and a final merit list.',
          'PMA Long Course runs twice a year (two courses annually). PAF and Navy have their own entry cycles (e.g., GD Pilot, PN Cadet). Because batches are spread over months, your friend\u2019s ISSB date tells you nothing about yours — only your call letter matters.',
        ],
        urduNote:
          'System samjho: registration \u2192 initial test \u2192 ISSB batches (mahino tak chaltay hain) \u2192 call letter me TUMHARI date. Dost ki date se tumhari date ka andaza mat lagao.',
      },
      {
        heading: 'Official tentative schedule (from issb.gov.pk)',
        paragraphs: [
          'The ISSB publishes a tentative schedule on its official website (issb.gov.pk \u2192 Schedule). As an example of what it looks like, the published schedule for June\u2013November 2026 included: 158 PMA Long Course (5 Jun \u2013 18 Sep 2026), TCC-38 (5 Jun \u2013 5 Jul 2026), LCC-29 (14\u201318 Sep 2026), Navy PN Cadet/SSC courses (4 Sep \u2013 12 Oct 2026), and PAF courses (8 Oct \u2013 11 Nov 2026).',
          'Treat this as an EXAMPLE of the format — always check the live schedule on issb.gov.pk for your course. Schedules are marked tentative and can change.',
        ],
      },
      {
        heading: 'PMA 159: what has been reported (verify officially)',
        paragraphs: [
          'For the 159th PMA Long Course, secondary sources report: online registration from 14 September to 23 October 2026, and preliminary tests from 5 October to 15 December 2026 at AS&RCs (weekdays). These dates are REPORTED, not confirmed here — registration and test windows must be verified at joinpakarmy.gov.pk before you act on them.',
        ],
      },
      {
        heading: 'How to check your call letter online',
        paragraphs: [
          'You do not have to wait for the postman. The official method:',
        ],
        list: [
          'Go to the official ISSB website: issb.gov.pk',
          'Find the call-letter / status section',
          'Enter your CNIC number (without dashes)',
          'The system shows your status: Issued (date confirmed — download/print the letter), Pending (you are in queue — check again later), or not shortlisted',
          'If issued, download the PDF and print it — the printout is valid for entry',
        ],
        urduNote:
          'Dak ka intezar mat karo: issb.gov.pk par apna CNIC (bina dashes) dalo — status maloom ho jayega. "Issued" aaye to letter download karke print kar lo.',
      },
      {
        heading: 'What the call letter contains',
        paragraphs: [
          'Your call letter states: your reporting date, the ISSB centre (Kohat / Gujranwala / Malir / Quetta), reporting time (usually afternoon), the documents to bring (originals), and instructions (dress guidance, prohibited items like mobile phones). Read it twice. Then read it again.',
        ],
      },
      {
        heading: 'Reporting instructions (standard)',
        paragraphs: [
          'Report on the given date by the stated time — late reporting can mean disqualification. Bring ORIGINAL documents (matric certificate from the board, not just the result card; CNIC/B-form; domicile; photographs). Keep photocopies separately. Follow the prohibited-items list exactly.',
        ],
        list: [
          'Original matric certificate (board-issued) — result card alone is not enough',
          'CNIC or B-form, domicile, recent photographs',
          'Printed call letter',
          'No mobile phones / cameras (as instructed)',
          'Reach a day early if travelling from far — never risk the reporting time',
        ],
      },
      {
        heading: 'Where to check what (official links)',
        paragraphs: [
          'Bookmark these — they are the only sources that matter for dates:',
        ],
        list: [
          'ISSB schedule and call letters: issb.gov.pk',
          'Army courses and registration: joinpakarmy.gov.pk',
          'PAF courses and registration: joinpaf.gov.pk',
          'Navy courses and registration: paknavy.gov.pk',
        ],
      },
    ],
    mistakes: [
      'Trusting random websites\u2019 or WhatsApp forwards\u2019 date lists instead of official sites.',
      'Assuming your batch date from someone else\u2019s call letter.',
      'Bringing only photocopies or the result card instead of original documents.',
      'Reporting late — or travelling on the reporting day itself.',
    ],
    tips: [
      'Check your call-letter status weekly once initial tests are done.',
      'Screenshot/save the issued letter AND print two copies.',
      'Keep a folder ready: originals + copies + photographs + call letter.',
      'If the letter does not arrive, contact your AS&RC — do not just wait.',
    ],
    faqs: [
      {
        q: 'Call letter kab aata hai?',
        a: 'Initial test clear karne ke baad, batches me — kuch ko jaldi, kuch ko mahino baad. "Pending" status ka matlab queue me ho, reject nahi.',
      },
      {
        q: 'Kya centre change ho sakta hai?',
        a: 'Centre call letter me fixed hota hai. Change requests aam tor par entertain nahi hoti — jo centre mila hai wahin report karo.',
      },
      {
        q: 'Registration miss ho gayi to?',
        a: 'Us course ke liye chance gaya — aglay course ka intezar karo. Dates ke liye official sites check karte raho.',
      },
    ],
    related: ['what-is-issb', 'initial-test-guide', 'issb-4-day-routine'],
  },
];
