import type { Note } from './notes-part1';

// Phase 3 notes: medical, physical training, girls' entry, repeaters,
// PAF guide, Navy guide, packing list, documents checklist,
// English improvement, after-ISSB. All content original, facts verified
// where stated; variable standards always deferred to the official ad.

export const notesPart4: Note[] = [
  {
    slug: 'medical-test-guide',
    title: 'ISSB Medical: What Gets Checked and How to Prepare',
    urduLine: 'Medical me kya check hota hai — aur pehle se kya tayyar karo',
    description:
      'The complete medical guide: height-weight, eyesight, hearing, feet, knees, and general physical examination — with common rejection causes and honest preparation advice.',
    readTime: '9 min read',
    category: 'Getting Started',
    intro:
      'Many strong candidates clear every written test and then fall at the medical — over things they could have fixed months earlier. The medical happens twice in your journey: a basic medical at the initial stage (AS&RC / I&SC / PNR&SC) and a detailed final medical after ISSB recommendation. This note explains what is generally checked, what commonly causes rejection, and what you can do NOW — because some conditions improve with time and effort, and some need a doctor, not wishful thinking.',
    sections: [
      {
        heading: 'What is generally checked',
        paragraphs: [
          'The examination is head-to-toe. The doctor checks your height and weight (they must be in proportion — there are standard tables), eyesight including colour vision, hearing, nose and throat, chest expansion and lungs, heart, abdomen, spine, and skin. Then the lower body: flat feet, knock knees, bow legs, and varicose veins are specifically examined. For male candidates there is also a check for hernia, hydrocele, and varicocele. A urine and blood test is usually part of the final medical.',
        ],
        urduNote:
          'Seedhi baat: sar se paon tak check hota hai — qad/wazan, nazar, kaan, seena, reedh ki haddi, paon (flat foot), ghutnay (knock knees). Final medical me blood aur urine test bhi hota hai.',
      },
      {
        heading: 'Common causes of rejection (and which are fixable)',
        paragraphs: [
          'Be honest with yourself about this list. Eyesight beyond the allowed limit is the most common rejection — if you wear glasses, get your number checked by an eye specialist now; some limits are acceptable for certain branches, and the exact standard is always in the official ad. Being significantly underweight or overweight is very common and fully fixable with 2-3 months of disciplined diet. Flat feet and knock knees: mild cases often pass, severe cases usually do not — an orthopedic doctor can tell you which one you have. Colour blindness is generally not fixable and disqualifies from most flying and some technical branches. Skin conditions, active infections, and untreated dental problems have caused rejections that a single clinic visit could have prevented.',
        ],
        list: [
          'Eyesight: get your exact number from an eye specialist; compare with the official ad limits',
          'Weight: start fixing 2-3 months early — crash dieting in the last week never works',
          'Feet/knees: see an orthopedic doctor for an honest verdict, not a friend\u2019s opinion',
          'Colour vision: test yourself early so you can choose branches realistically',
          'Teeth/skin/ears: small clinic visits now prevent big rejections later',
        ],
        urduNote:
          'Nazar ka number, wazan, aur paon/ghutnay — ye teen sab se bara wajah hain. Doctor se abhi check karwao, aakhri haftay me kuch theek nahi hota.',
      },
      {
        heading: 'How to prepare in the 30 days before medical',
        paragraphs: [
          'Sleep properly — tired eyes test worse and blood pressure reads higher. Eat clean and stay hydrated; avoid junk food and excess salt in the final week so your weight and BP are stable. If you wear glasses, wear them to the test and carry your prescription. Do not try any "desi totkay" for eyesight or height in the last days — they do not work and some are harmful. Carry any past medical reports honestly; hiding a condition that the doctor will find anyway only damages your credibility.',
        ],
      },
      {
        heading: 'The golden rule: exact standards are in the official ad',
        paragraphs: [
          'Height, weight, and eyesight limits differ between the Army, Navy, and Air Force, between branches, and sometimes between courses. Any website or academy quoting exact numbers may be quoting last year\u2019s ad. Always verify against the current official advertisement on joinpakarmy.gov.pk, joinpaf.gov.pk, or paknavy.gov.pk before you panic — or before you relax.',
        ],
        urduNote:
          'Exact numbers har course me badal sakte hain. Kisi academy ki purani list par yaqeen mat karo — official ad khud parho.',
      },
    ],
    mistakes: [
      'Ignoring the medical until the call letter arrives — then discovering a fixable problem too late.',
      'Trusting random "standards charts" from academies instead of the official ad.',
      'Crash-dieting or dehydrating before the medical — it backfires on BP and general fitness readings.',
      'Hiding a known condition from the doctor — it will be found, and dishonesty is worse than the condition.',
    ],
    tips: [
      'Book one full checkup (eye, weight, feet, general) at least 2 months before your expected medical.',
      'Fix your weight with steady diet + running, not starvation.',
      'Get colour-vision tested early so your branch choices stay realistic.',
      'Sleep 7-8 hours the night before — it measurably affects eyesight and BP readings.',
    ],
    faqs: [
      {
        q: 'Can I join with glasses?',
        a: 'It depends on your number and the branch. Some branches accept corrected vision within limits; flying branches are strictest. Get your exact number and compare with the official ad for your course.',
      },
      {
        q: 'Is flat foot an automatic rejection?',
        a: 'Not always — mild flat foot often passes, severe rigid flat foot usually does not. Only an orthopedic doctor\u2019s examination can tell you which category you fall in.',
      },
      {
        q: 'What if I am declared medically unfit — can I appeal?',
        a: 'Candidates are generally allowed a re-examination/appeal at a designated hospital within a given time. The call letter and centre staff will explain the exact procedure.',
      },
    ],
    related: ['initial-test-guide', 'physical-training-guide', 'issb-dates'],
  },
  {
    slug: 'physical-training-guide',
    title: 'Physical Training: The 1.6 km Run and Fitness Plan',
    urduLine: 'Running aur fitness ka 4-haftay ka asaan plan',
    description:
      'A beginner-friendly 4-week walk-run plan for the 1.6 km initial test, plus pushups, situps, and chin-ups basics — what the physical day looks like and how to peak on time.',
    readTime: '8 min read',
    category: 'Getting Started',
    intro:
      'The physical test at the initial stage is simple and brutal at the same time: a timed run (commonly 1.6 km / 1 mile), plus pushups, situps, and sometimes chin-ups or a ditch crossing. Candidates fail it every single course — not because it is impossible, but because they started running two weeks before the test. Four honest weeks are enough for most beginners. This is your plan.',
    sections: [
      {
        heading: 'What the physical day usually looks like',
        paragraphs: [
          'You report in sports kit (t-shirt, shorts/trouser, joggers). The run comes first — everyone starts together on a measured track or road. Candidates commonly report a time standard around 8 minutes for the 1.6 km at Army initial tests, with similar standards at Navy and PAF centres — but treat this as commonly reported, not official: your centre staff will announce the exact requirement on the day, and the official ad is the final authority. After the run come pushups and situps (commonly reported counts are in the teens, done with correct form), and sometimes chin-ups. Form is counted, not cheating the movement — half pushups do not count.',
        ],
        urduNote:
          'Running sab se pehle hoti hai, phir pushups/situps. Aadhi pushup count nahi hoti — sahi form seekho. Exact standard centre par announce hota hai, official ad final hai.',
      },
      {
        heading: 'The 4-week walk-run plan (for absolute beginners)',
        paragraphs: [
          'Run 4 days a week, never two hard days in a row, and always warm up 5 minutes by brisk walking. If you cannot run at all today, start here — it works.',
        ],
        list: [
          'Week 1: Walk 4 min / jog 1 min, repeat 5 times (25 min total). Goal: finish without stopping.',
          'Week 2: Walk 3 min / jog 2 min, repeat 5 times. Add 10 pushups + 10 situps on alternate days.',
          'Week 3: Walk 2 min / jog 3 min, repeat 5 times. Pushups/situps: 3 sets of 12.',
          'Week 4: Jog 20 minutes continuously, twice this week. Then one timed 1.6 km trial on day 5 — this is your mock test.',
          'Test week: light jogging only (15 min easy) for 3 days, full rest 2 days before the test.',
        ],
        urduNote:
          '4 din hafta, walk-run se shuru karo, har haftay running barhao. Test se 2 din pehle poora rest — thakay huay jism se time kharab hota hai.',
      },
      {
        heading: 'Pushups, situps, chin-ups: form first',
        paragraphs: [
          'For pushups: body in one straight line, chest to near the ground, full lockout at the top. For situps: controlled, no jerking with the arms. For chin-ups: dead hang to chin-over-bar. Three sets every alternate day beats one exhausting daily session. If you cannot do a single chin-up yet, start with dead hangs (hang from the bar as long as you can) — grip strength comes first, pull comes later.',
        ],
      },
      {
        heading: 'Running mistakes that waste your training',
        paragraphs: [
          'New shoes on test day cause blisters — train in the shoes you will wear. Sprinting the first 200 meters then walking the rest always gives a worse time than steady pacing. And skipping rest days does not make you tougher; it makes you injured. Eat a light meal 2-3 hours before the test, hydrate the day before, and reach the centre early so you warm up calmly instead of sprinting from the gate.',
        ],
      },
    ],
    mistakes: [
      'Starting preparation only 1-2 weeks before the test.',
      'Sprinting the start of the run and walking the rest — steady pacing always wins.',
      'Wearing brand-new joggers on test day.',
      'Counting half pushups in practice and being shocked when the checker does not count them.',
    ],
    tips: [
      'Time yourself on a measured 1.6 km at least twice before the real test.',
      'Train in the exact shoes and kit you will wear on test day.',
      'Breathe in rhythm: inhale 3 steps, exhale 2 steps while running.',
      'Full rest 48 hours before the test — fitness is built in rest, not in the last workout.',
    ],
    faqs: [
      {
        q: 'I have never run before. Is 4 weeks really enough?',
        a: 'For most healthy beginners, yes — the walk-run progression builds you up safely. If you are very overweight or have a medical condition, give yourself 8 weeks and check the medical note too.',
      },
      {
        q: 'What if it rains on test day?',
        a: 'Tests usually proceed in light rain. Wear shoes with decent grip and accept a slightly slower time — everyone runs in the same conditions.',
      },
    ],
    related: ['initial-test-guide', 'medical-test-guide', '30-day-plan'],
  },
  {
    slug: 'girls-entry-guide',
    title: 'Girls in the Armed Forces: Entry Routes Explained',
    urduLine: 'Larkiyon ke liye Army, Navy, PAF me entry ke rastay',
    description:
      'Honest guide to female entries: Lady Cadet Course, AFNS nursing, PAF branches, Navy entries — what each route is, general eligibility pointers, and where to verify current courses.',
    readTime: '7 min read',
    category: 'Getting Started',
    intro:
      'Yes — women serve as commissioned officers in Pakistan\u2019s armed forces, and the routes are real and growing. But female entries work differently from the male PMA Long Course: they are announced as separate courses with their own ads, ages, and qualifications. This note maps the main routes honestly, and tells you exactly where to verify what is open right now.',
    sections: [
      {
        heading: 'Lady Cadet Course (Pakistan Army)',
        paragraphs: [
          'The Lady Cadet Course (LCC) is the Army\u2019s dedicated female officer entry, announced periodically through official ads. It is open to unmarried female graduates, with specific age limits and degree requirements stated in each ad — commonly a bachelor\u2019s/master\u2019s degree with a minimum division. Selection follows the same philosophy as male entries: initial tests, ISSB, and medical. Because each LCC ad sets its own criteria, never prepare from last year\u2019s ad alone.',
        ],
        urduNote:
          'Lady Cadet Course Army ki female officers ki entry hai. Har ad me apni age aur degree ki shart hoti hai — puranay ad se tayyari mat karo, naya ad parho.',
      },
      {
        heading: 'AFNS — Armed Forces Nursing Service',
        paragraphs: [
          'AFNS is the nursing entry for female candidates, with its own training and commissioning path. It generally requires nursing qualifications (such as FSc pre-medical leading to nursing training, per the ad) and has its own age criteria. If you are from a medical/nursing background, this is the most established female route in the Army.',
        ],
      },
      {
        heading: 'Pakistan Air Force and Pakistan Navy',
        paragraphs: [
          'The PAF inducts female officers in branches including GD(P) (flying), engineering, education, medical, and others, announced through official PAF ads. The Navy similarly opens Short Service Commission entries for women in branches like education, medical, IT, and logistics, per official Pakistan Navy advertisements. In all three services, the pattern is the same: watch the official websites, read the current ad carefully, and apply only when you meet every criterion.',
        ],
        urduNote:
          'PAF aur Navy me bhi female officers ki entries aati hain — har ad me branch, age, aur qualification likhi hoti hai. Official websites roz check karo.',
      },
      {
        heading: 'Where to verify (do not trust academies on this)',
        paragraphs: [
          'Female courses are announced less frequently than male courses, which makes outdated information especially dangerous. The only reliable sources: joinpakarmy.gov.pk (Women\u2019s entries section), joinpaf.gov.pk, and paknavy.gov.pk. If an academy tells you "LCC is coming next month" but there is no official ad, it is a rumour, not information.',
        ],
      },
    ],
    mistakes: [
      'Preparing for months from an old ad and discovering the new ad changed the age or degree requirement.',
      'Assuming female selection is "easier" — the standards are equally serious.',
      'Trusting academy rumours about upcoming female courses instead of official websites.',
    ],
    tips: [
      'Bookmark all three official sites and check them weekly during induction seasons.',
      'Keep your documents (degrees, CNIC, domicile) ready in advance — female ads often have short application windows.',
      'ISSB preparation (psychology, GTO, interview) is the same for everyone — use the rest of this website fully.',
    ],
    faqs: [
      {
        q: 'Can girls join PMA Long Course?',
        a: 'PMA Long Course is the male entry. Female candidates apply through Lady Cadet Course, AFNS, and the PAF/Navy female entries described above.',
      },
      {
        q: 'Is there ISSB for female candidates too?',
        a: 'Yes — female officer candidates also go through ISSB testing as part of their selection.',
      },
    ],
    related: ['what-is-issb', 'interview-dress', 'documents-checklist'],
  },
  {
    slug: 'repeaters-guide',
    title: 'Not Recommended? The Repeater\u2019s Comeback Guide',
    urduLine: 'Not recommended huay? Wapsi ka mukammal plan',
    description:
      'A practical, honest guide for repeaters: how to analyse what went wrong, fix psychology/GTO/interview weaknesses, attempt rules, and come back stronger.',
    readTime: '8 min read',
    category: 'Important Info',
    intro:
      'Being declared "Not Recommended" feels like the end. It is not — a large share of serving officers cleared ISSB on a second or later attempt. The difference between repeaters who make it and repeaters who fail again is one thing: an honest diagnosis. This note is your diagnostic toolkit and your comeback plan.',
    sections: [
      {
        heading: 'Step 1: diagnose honestly (the hard part)',
        paragraphs: [
          'Within a week of your result, write down everything you remember: which day felt weakest, where you ran out of time, which interview questions made you hesitate, whether you dominated or disappeared in group tasks. Then match it to the three assessors: Psychology (were your WAT/SCT/stories consistent and positive?), GTO (did you cooperate and communicate, or just compete?), Interview (were your bio-data answers consistent and confident?). Most repeaters fail the same assessor twice — because they never identified which one it was.',
        ],
        urduNote:
          'Sab se pehle imandari se likho: kamzori kis din thi? Psychology, GTO, ya interview — teenon me se kaun sa assessor nakhush hua? Aksar repeaters wohi ghalti dohratay hain.',
      },
      {
        heading: 'Step 2: fix the actual weakness (not everything)',
        paragraphs: [
          'Psychology weakness: your written responses need rebuilding — practice WAT and sentence completion daily with a timer, and check every story for a positive, practical hero (see the psychology notes). GTO weakness: join any real team activity — sports, volunteer work, group projects — because GTO behaviour cannot be faked in a room alone; you need live practice with people. Interview weakness: rebuild your bio-data story, prepare every question from the 30-question bank again, and practice speaking aloud. Do not waste months re-studying intelligence tests if screening was never your problem.',
        ],
      },
      {
        heading: 'Attempt rules: what repeaters must know',
        paragraphs: [
          'You can appear before ISSB again — candidates commonly report being allowed to reappear after a waiting period (often cited as around four months), but the exact gap and the maximum number of attempts depend on the course and are stated in the official ad. Read it carefully: some courses limit total chances. Also note that your previous attempt is on record — the bio-data form even asks about it — so the assessors will expect visible improvement, not a repeat performance.',
        ],
        urduNote:
          'Dobara appear ho sakta hai, lekin gap aur max attempts official ad me likhe hote hain. Form me pichli attempt ka poocha jata hai — is liye behtari nazar aani chahiye.',
      },
      {
        heading: 'The repeater\u2019s mindset advantage',
        paragraphs: [
          'Here is the truth nobody tells repeaters: you have an advantage first-timers do not. You have seen the real test halls, felt the real time pressure, and met the real assessors. Fear of the unknown — which silently damages many first attempts — is gone for you. Candidates who convert that familiarity into calm, practised performance are exactly the ones who get recommended on attempt two.',
        ],
      },
    ],
    mistakes: [
      'Reappearing in 2 months with zero changed preparation — and failing the same way.',
      'Blaming "luck" or "the assessor disliked me" instead of diagnosing the real weakness.',
      'Over-preparing the screening tests while ignoring the personality assessment that actually failed you.',
      'Hiding the previous attempt or lying about it — it is on record.',
    ],
    tips: [
      'Write your self-diagnosis within one week, while memories are fresh.',
      'Fix ONE assessor\u2019s area deeply rather than everything shallowly.',
      'Get a trusted teacher or senior to mock-interview you — you cannot spot your own blind spots.',
      'Use the waiting period fully; rushing back unprepared wastes a precious attempt.',
    ],
    faqs: [
      {
        q: 'How many times can I attempt ISSB?',
        a: 'It depends on the course — the official ad states the maximum chances. Read your specific course\u2019s ad; do not rely on what a friend\u2019s course allowed.',
      },
      {
        q: 'Do assessors know I am a repeater? Does it hurt me?',
        a: 'Yes, it is on your record, and no — it does not hurt you by itself. Many officers are second-attempt. What matters is showing genuine improvement.',
      },
    ],
    related: ['issb-4-day-routine', 'interview-questions', 'gto-tasks', 'wat-guide'],
  },
  {
    slug: 'paf-guide',
    title: 'Joining the PAF: Initial Tests and Branches Guide',
    urduLine: 'PAF me entry — initial tests aur branches ki guide',
    description:
      'PAF selection explained: I&SC initial tests (intelligence, academic subjects, medical, interview), ISSB, and the main branches — GD(P), engineering, air defence — in plain words.',
    readTime: '8 min read',
    category: 'Getting Started',
    intro:
      'The Pakistan Air Force selects its officers through Information & Selection Centres (I&SCs) in major cities, followed by ISSB for shortlisted candidates. The academic bar is famously serious — especially in English, Physics, and Mathematics. This note explains the stages, the subjects, and the main branches, so a PAF aspirant knows exactly what to prepare.',
    sections: [
      {
        heading: 'Stage 1: initial tests at I&SC',
        paragraphs: [
          'At the I&SC you face: an intelligence test (verbal + non-verbal, same family as the Army\u2019s), an academic test in subjects relevant to your branch — for GD(P) and engineering branches this commonly means English, Physics, and Mathematics at intermediate level — a basic medical, and an interview. Candidates report that the academic test is the main filter at PAF initials: revise your FSc concepts properly, especially Physics numericals and English grammar.',
        ],
        urduNote:
          'PAF ke initial me academic test sab se bara filter hai — English, Physics, Maths (FSc level) achi tarah revise karo. Intelligence test bhi hota hai.',
      },
      {
        heading: 'Stage 2: ISSB and final medical',
        paragraphs: [
          'Candidates who clear the I&SC are nominated for ISSB — the same four-day selection described elsewhere on this site. After recommendation comes the final medical, which for flying branches includes detailed vision and fitness standards. The exact medical standards for each branch are in the official PAF ad.',
        ],
      },
      {
        heading: 'Main branches (what each one means)',
        paragraphs: [
          'GD(P) — General Duty Pilot: the flying branch, the most competitive, strictest medical and vision standards. Aeronautical Engineering: for those with strong Physics/Maths, working on aircraft systems. Air Defence: operating radar and air defence systems. Other branches include Education, Medical, Accounts, Legal, and IT — each announced with its own qualification requirements in official ads. Choose your branch by your subjects and your medical fitness, not by glamour alone.',
        ],
        list: [
          'GD(P): flying — needs FSc with Physics/Maths (per ad) + strictest medical',
          'Aeronautical Engineering: engineering degrees, technical mind',
          'Air Defence: radar/systems operators',
          'Support branches: Education, Medical, Accounts, Legal, IT — per ad qualifications',
        ],
        urduNote:
          'Branch apne subjects aur medical fitness dekh kar chuno — sirf "pilot ban-na hai" ke jazbaat par nahi.',
      },
      {
        heading: 'How PAF preparation differs from Army preparation',
        paragraphs: [
          'Two differences matter. First, academics: a PAF aspirant must treat FSc Physics and Maths as seriously as ISSB psychology — many strong personalities fail at the I&SC academic test. Second, English: the PAF academic test and later training are English-heavy, so the English improvement note on this site is doubly important for you. Everything else — ISSB psychology, GTO, interview — is the same selection, so the rest of this website applies fully.',
        ],
      },
    ],
    mistakes: [
      'Preparing only ISSB personality tests and failing the I&SC academic paper.',
      'Ignoring English — it is tested academically and used throughout PAF training.',
      'Applying for GD(P) without checking the vision standards first.',
    ],
    tips: [
      'Revise FSc Physics numericals and Maths — speed matters in the academic test.',
      'Practice the same intelligence tests as Army aspirants (the format is the same family).',
      'Check joinpaf.gov.pk for the current ad — branches and criteria change per course.',
      'Keep a second branch option realistic based on your subjects.',
    ],
    faqs: [
      {
        q: 'Is ISSB the same for PAF candidates?',
        a: 'Yes — shortlisted PAF candidates go through the same ISSB four-day selection as Army and Navy candidates.',
      },
      {
        q: 'Can I apply for PAF with pre-medical?',
        a: 'Branch eligibility depends on subject combinations stated in the ad. GD(P) and engineering branches typically require Physics/Maths; medical branch takes medical backgrounds. Check the current ad.',
      },
    ],
    related: ['initial-test-guide', 'english-improvement', 'medical-test-guide', 'what-is-issb'],
  },
  {
    slug: 'navy-guide',
    title: 'Joining the Pakistan Navy: Tests and Branches Guide',
    urduLine: 'Navy me entry — tests aur branches ki guide',
    description:
      'Pakistan Navy officer selection: PNR&SC initial tests, academic subjects, ISSB, and branches — PN Cadet, Marines, Technical, and Short Service Commission routes.',
    readTime: '8 min read',
    category: 'Getting Started',
    intro:
      'The Pakistan Navy selects officers through Pakistan Navy Recruitment & Selection Centres (PNR&SCs), followed by ISSB. The Navy offers some of the most varied careers — from commanding ships to Marines to technical branches. This note explains the test stages and the main entries in plain words.',
    sections: [
      {
        heading: 'Stage 1: initial tests at PNR&SC',
        paragraphs: [
          'The pattern mirrors the other services: an intelligence test (verbal + non-verbal), an academic test, a medical, and an interview. Candidates report the Navy academic test commonly covering English, Mathematics, General Knowledge, and General Science/Physics at matric-intermediate level. As always, the exact syllabus and standards for your course are in the official Pakistan Navy advertisement — that document outranks every academy\u2019s guess.',
        ],
        urduNote:
          'Navy ke initial me intelligence, academic (English, Maths, GK, Science), medical aur interview hota hai. Exact syllabus official ad me hota hai.',
      },
      {
        heading: 'Main entries and branches',
        paragraphs: [
          'PN Cadet: the core permanent-commission entry, leading to training at the Pakistan Naval Academy in Karachi. Marines: the Navy\u2019s fighting arm — physically demanding, for those who want combat roles. Technical branches: for engineering and IT backgrounds, working on ships\u2019 systems and weapons. Short Service Commission (SSC): for graduates in specific fields (education, medical, IT, logistics, and others per ad) joining for a defined service period. Each entry has its own age, qualification, and marital-status criteria — read the ad like a legal document.',
        ],
        list: [
          'PN Cadet: permanent commission via Pakistan Naval Academy, Karachi',
          'Marines: combat arm — highest physical demands',
          'Technical: engineering/IT backgrounds, ships\u2019 systems',
          'SSC: graduates in specific fields, defined service period',
        ],
      },
      {
        heading: 'Stage 2: ISSB and beyond',
        paragraphs: [
          'Shortlisted candidates go to ISSB — the same four-day selection. After recommendation: final medical and a merit list. Naval Academy training is famously tough on discipline and sea training — candidates who love the sea life and can handle regimented routine thrive; those dreaming of a desk job should think twice before applying.',
        ],
        urduNote:
          'ISSB ke baad final medical aur merit list. Naval Academy ki training discipline aur samandari mashq me sakht hai — ye lifestyle samajh kar apply karo.',
      },
      {
        heading: 'What Navy aspirants should prepare differently',
        paragraphs: [
          'General Knowledge with a maritime flavour helps in interviews: know the basics — the Pakistan Navy\u2019s role, its main bases (Karachi is the headquarters), and current naval affairs from reputable news sources. Swimming is not usually a selection test, but learning to swim before academy training is genuinely wise advice seniors give. And the same rule as everywhere: the official ad on paknavy.gov.pk is your syllabus.',
        ],
      },
    ],
    mistakes: [
      'Ignoring the academic test — it filters heavily at PNR&SC initials.',
      'Applying without reading the branch-specific criteria in the ad.',
      'Knowing nothing about the Navy itself when the interviewer asks "why Navy?"',
    ],
    tips: [
      'Prepare a genuine, specific answer to "why the Navy, not the Army?" — interviewers always ask.',
      'Follow naval current affairs from reputable sources for 2 months before your interview.',
      'Learn swimming before academy training — seniors strongly advise it.',
      'Verify everything against the current ad on paknavy.gov.pk.',
    ],
    faqs: [
      {
        q: 'Where is the Pakistan Naval Academy?',
        a: 'In Karachi. PN Cadets do their initial officer training there.',
      },
      {
        q: 'Is the ISSB the same for Navy candidates?',
        a: 'Yes — the same four-day ISSB selection at the same centres.',
      },
    ],
    related: ['initial-test-guide', 'general-knowledge', 'medical-test-guide', 'what-is-issb'],
  },
  {
    slug: 'packing-list',
    title: 'ISSB Packing List: What to Carry (and What Not To)',
    urduLine: 'ISSB ke liye kya pack karo — mukammal checklist',
    description:
      'The practical ISSB packing checklist: clothes, sports kit, toiletries, stationery, cash — plus the banned items that get confiscated at the gate.',
    readTime: '6 min read',
    category: 'Forms & Documents',
    intro:
      'You will live at the ISSB centre for four to five days with no shops and no trips home. Forgetting something essential means borrowing or doing without; bringing something banned means it gets taken at the gate. Pack once, pack right — this is the checklist.',
    sections: [
      {
        heading: 'Clothes: the core kit',
        paragraphs: [
          'Pack for five days plus one spare set. The non-negotiables: formal interview dress (shirt, trousers, tie, polished shoes — see the interview dress note), and sports kit for GTO day (t-shirt, shorts or trouser, joggers, sports socks). Add: 5-6 casual shalwar kameez or shirt-trousers for barracks routine, sleepwear, undergarments for 6 days, a light sweater or jacket in winter (centres in Kohat and Quetta get genuinely cold), and a pair of slippers for the barracks.',
        ],
        list: [
          'Interview dress: 1 complete formal set, ironed, in a garment bag',
          'Sports kit: 2 t-shirts, 2 shorts/trousers, joggers, 3 pairs sports socks',
          'Daily wear: 5-6 shalwar kameez or casual sets',
          'Winter: sweater/jacket (Kohat/Quetta nights are cold)',
          'Slippers + 6 days of undergarments',
        ],
        urduNote:
          '5 din + 1 extra set pack karo. Interview dress alag bag me press kar ke, sports kit GTO day ke liye, aur sardi me garam kapray — Kohat/Quetta me raat thandi hoti hai.',
      },
      {
        heading: 'Toiletries, stationery, and essentials',
        paragraphs: [
          'Toiletries: soap, shampoo, toothbrush and paste, towel (two — one always seems to stay wet), shaving kit, nail cutter, comb, and any personal medication with its prescription. Stationery: 2-3 blue/black ball pens, a small notebook, and a transparent folder for documents. Essentials: a basic wristwatch (you cannot keep your phone — a watch is how you manage time), a small torch, safety pins and a sewing mini-kit for wardrobe emergencies, and a padlock for your locker.',
        ],
        list: [
          'Wristwatch — no phones allowed, this is your only clock',
          'Padlock for the barracks locker',
          'Pens, notebook, transparent document folder',
          'Personal medicines + prescription',
          'Sewing mini-kit + safety pins',
        ],
      },
      {
        heading: 'Documents and money',
        paragraphs: [
          'Original documents plus two sets of attested photocopies (see the documents checklist note for the full list), your call letter printout, and recent photographs. Cash: carry a modest amount for canteen snacks and emergencies — ATMs may not be accessible inside, and digital payments are unreliable without your phone. Keep cash split: some in your wallet, some locked away.',
        ],
      },
      {
        heading: 'BANNED: do not bring these',
        paragraphs: [
          'Mobile phones, smartwatches, cameras, tablets, and laptops are not allowed inside and will be collected at the gate — bringing them only creates hassle. Also avoid: expensive jewellery or watches (theft risk in shared barracks), novels or gaming devices (you will have no free time anyway), and any clothing with large logos or slogans. When in doubt, leave it home.',
        ],
        urduNote:
          'Mobile, smartwatch, camera gate par jama ho jayenge — ghar chhor aao. Qeemti cheezen bhi mat lao, barracks shared hoti hain.',
      },
    ],
    mistakes: [
      'Packing the night before and forgetting the interview tie or sports joggers.',
      'Bringing a phone "just in case" — it gets confiscated and creates a bad first impression.',
      'No padlock — shared barracks with unlocked lockers is asking for trouble.',
      'Forgetting personal medication.',
    ],
    tips: [
      'Pack 2 days early using this checklist, ticking each item.',
      'Iron the interview dress and pack it in a separate garment bag.',
      'Break in your joggers before GTO day — new shoes cause blisters.',
      'Keep documents in one transparent folder, always in the same bag pocket.',
    ],
    faqs: [
      {
        q: 'Is there any shop inside the ISSB centre?',
        a: 'There is usually a small canteen for snacks and basics, but do not depend on it for essentials — carry everything you need.',
      },
      {
        q: 'Can I keep my phone switched off in my bag?',
        a: 'No — phones are collected at reporting. Bring a basic wristwatch instead.',
      },
    ],
    related: ['documents-checklist', 'issb-4-day-routine', 'interview-dress', 'dress-code-guide'],
  },
  {
    slug: 'documents-checklist',
    title: 'Documents Checklist: Every Paper You Need for ISSB',
    urduLine: 'Kaun se kagzat chahiye — poori list attested copies ke saath',
    description:
      'Every document for initial tests and ISSB: CNIC/B-form, matric/inter certificates, domicile, photos, call letter — originals, attested copies, and how to fix missing papers.',
    readTime: '6 min read',
    category: 'Forms & Documents',
    intro:
      'Candidates have been turned away from test centres over a missing domicile or an unattested copy. Documents are the most boring part of preparation — and the easiest marks to lose. Get this done weeks before your test date, not the night before.',
    sections: [
      {
        heading: 'The core list (originals + 2 attested photocopy sets)',
        paragraphs: [
          'For almost every stage you need: your CNIC or B-form (NADRA), matric certificate and detailed marks sheet, intermediate certificate and marks sheet (or hope certificate if result is awaited — check the ad), domicile certificate of your district, 4-6 recent passport-size photographs with blue background (the commonly specified format — confirm from your call letter), and the printed call letter itself. Attestation generally means a gazetted officer\u2019s stamp and signature on each copy — get it done at a bank, school principal\u2019s office, or any gazetted officer you know.',
        ],
        list: [
          'CNIC or NADRA B-form (original + copies)',
          'Matric certificate + detailed marks sheet',
          'Inter certificate + marks sheet (or hope certificate if allowed by ad)',
          'Domicile certificate of your district',
          '4-6 recent passport photos (blue background — confirm from call letter)',
          'Printed call letter',
          'Father\u2019s CNIC copy (sometimes asked)',
        ],
        urduNote:
          'Asal kagzat + 2 attested photocopy sets. Attestation gazetted officer se hoti hai — bank ya school principal se bhi ho jati hai.',
      },
      {
        heading: 'Fix missing papers NOW, not later',
        paragraphs: [
          'Name spelling mismatch between CNIC and certificates? Visit NADRA/board office now — corrections take weeks. Domicile not made yet? Apply immediately; it is one of the slowest documents. Lost a certificate? Boards issue duplicates but the process is slow. Make a single folder today, put everything in it, and check off this list — then recheck one week before reporting.',
        ],
      },
      {
        heading: 'Photos and the call letter',
        paragraphs: [
          'Get fresh photographs — a two-year-old photo that no longer looks like you creates unnecessary questions. Read your call letter line by line when it arrives: it states the reporting date, time, centre, and any course-specific document it wants. Candidates who skim the call letter miss instructions printed plainly on it.',
        ],
      },
    ],
    mistakes: [
      'Discovering a name-spelling mismatch between CNIC and matric certificate at the gate.',
      'Bringing unattested photocopies.',
      'Old photographs that do not match your current appearance.',
      'Not reading the call letter fully — missing a course-specific instruction.',
    ],
    tips: [
      'Prepare the full folder the day you apply — not the day before the test.',
      'Scan everything and keep digital copies in your email as backup.',
      'Carry a few extra photos and extra photocopy sets — someone always needs one.',
      'Check NADRA/board corrections NOW if any spelling differs.',
    ],
    faqs: [
      {
        q: 'My inter result is not out yet. Can I still apply?',
        a: 'Many courses accept a "hope certificate" from your college stating expected passing. The ad will say clearly whether it is allowed for your course.',
      },
      {
        q: 'Who can attest my documents?',
        a: 'Any gazetted officer — bank managers, school/college principals, government officers of grade 17 and above commonly do it.',
      },
    ],
    related: ['packing-list', 'issb-dates', 'initial-test-guide', 'biodata-form-guide'],
  },
  {
    slug: 'english-improvement',
    title: 'English for ISSB: A Practical 30-Day Plan',
    urduLine: '30 din me ISSB wali English behtar karo — asaan plan',
    description:
      'A realistic 30-day English plan for ISSB: reading, writing, and speaking practice targeted at WAT, sentence completion, lecturette, and interview — plus the mistakes Pakistani students must fix.',
    readTime: '8 min read',
    category: 'Study Plan',
    intro:
      'Nobody at ISSB expects Oxford English. What they expect is clear, simple, correct English — in your WAT sentences, your stories, your lecturette, and your interview answers. Most Pakistani students do not have an English problem; they have a practice problem. Thirty focused days fix more than you think.',
    sections: [
      {
        heading: 'The truth about "good English" at ISSB',
        paragraphs: [
          'Assessors penalise neither accent nor simple vocabulary. They notice: broken sentence structure, wrong tense, and memorised "fancy" phrases used incorrectly. A candidate who says "I helped my friend because he was in trouble" beats one who says "I ameliorated my comrade\u2019s predicament" every time. Aim for simple and correct — that is the whole game.',
        ],
        urduNote:
          'Mushkil alfaz ratnay se number nahi miltay — seedhi sahi English bolo. "I helped my friend" fancy ghalat jumlay se behtar hai.',
      },
      {
        heading: 'Daily 45-minute routine (30 days)',
        paragraphs: [
          'Split every day into three 15-minute blocks. Reading (15 min): one Dawn editorial or BBC news article — read aloud, underline 5 new words, use each in your own sentence. Writing (15 min): write 10 WAT-style sentences on random words with a timer, then check each for tense and spelling. Speaking (15 min): stand and speak for 2 minutes on any topic (yesterday\u2019s news, your hobby) — record yourself on your phone once a week and listen back; the cringe you feel is exactly what improves you.',
        ],
        list: [
          'Reading: 15 min aloud daily — one editorial or news article',
          'Writing: 15 min timed WAT-style sentences, then self-check',
          'Speaking: 15 min on any topic; weekly phone recording to hear yourself',
          'New words: 5 a day, each used in YOUR OWN sentence (not memorised definitions)',
        ],
        urduNote:
          'Roz 45 minute: 15 parhna (zor se), 15 likhna (timer ke saath), 15 bolna (kisi bhi topic par). Haftay me ek dafa apni recording suno.',
      },
      {
        heading: 'Fix these 5 mistakes Pakistani students repeat',
        paragraphs: [
          'One: "He go to school" — subject-verb agreement; he GOES. Two: mixing past and present in one story ("I went there and I see him"). Three: "more better" — double comparatives. Four: translating Urdu idioms directly ("eat my brain" for "dimagh khana"). Five: overusing "very" — learn a few precise words instead (tired → exhausted, happy → delighted). Fixing just these five visibly upgrades your writing within two weeks.',
        ],
        list: [
          'He go → He GOES (subject-verb agreement)',
          'One story, one tense — do not mix past and present',
          '"More better" is always wrong — just "better"',
          'Do not translate Urdu idioms word-for-word into English',
          'Replace "very + word" with one precise word',
        ],
      },
      {
        heading: 'English for each ISSB test',
        paragraphs: [
          'WAT: short, positive, grammatically clean sentences — speed matters more than vocabulary. Sentence completion: the stem controls the tense; match it. Picture stories: past tense, simple sentences, one clear hero. Lecturette: spoken English — practice the 10 sample topics from the lecturette note aloud. Interview: conversational English; if you get stuck, a short pause beats a flood of wrong words.',
        ],
      },
    ],
    mistakes: [
      'Memorising fancy vocabulary and using it wrongly — worse than simple words.',
      'Only reading silently — ISSB needs spoken and written English, both active skills.',
      'Studying grammar rules without writing or speaking practice.',
      'Giving up after one week because "no improvement" — visible change needs 3 weeks.',
    ],
    tips: [
      'Think in English for 10 minutes daily — narrate what you are doing.',
      'Keep a small diary: 5 English lines every night about your day.',
      'Watch one English news bulletin daily and repeat 3 sentences aloud.',
      'In the interview, slow down — careful slow English beats fast broken English.',
    ],
    faqs: [
      {
        q: 'My English is very weak. Is 30 days enough?',
        a: 'Enough to become clearly better — which is what matters. You do not need perfect English, just clear and correct simple English. Start today; every week shows.',
      },
      {
        q: 'Should I join an English academy?',
        a: 'Not necessary for ISSB. Daily reading, writing, and speaking practice at home covers it. Spend academy fees only if you need external discipline.',
      },
    ],
    related: ['wat-guide', 'sentence-completion-guide', 'lecturette-guide', 'interview-guide'],
  },
  {
    slug: 'after-issb',
    title: 'After ISSB: Recommended or Not — What Happens Next',
    urduLine: 'ISSB ke baad kya hota hai — recommended aur not recommended dono ka rasta',
    description:
      'The complete after-ISSB roadmap: final medical, merit list, and joining for recommended candidates — plus the smart next steps for not-recommended candidates.',
    readTime: '7 min read',
    category: 'Important Info',
    intro:
      'The conference ends, results are announced, and suddenly the four most intense days of your life are over. Whether you heard "Recommended" or "Not Recommended," what you do in the next weeks matters enormously. Here is the honest roadmap for both outcomes.',
    sections: [
      {
        heading: 'If recommended: final medical and merit list',
        paragraphs: [
          'Recommendation is not the final selection — it is a nomination to the next stage. You will undergo a detailed final medical (usually at a CMH or designated hospital), which is stricter than the initial medical. After that comes the merit list: candidates are ranked on combined performance, and joining letters go out as per vacancies and merit. This waiting period commonly stretches for weeks to months. Stay fit, keep your documents ready, and do not stop your life — continue your studies or work until the letter arrives.',
        ],
        urduNote:
          'Recommended hona final selection nahi — ab final medical (CMH) aur phir merit list. Letter me haftay ya mahine lag sakte hain; parhai/kaam jari rakho.',
      },
      {
        heading: 'If not recommended: the smart response',
        paragraphs: [
          'First: it is a selection decision, not a life verdict. Many serving officers, including senior ones, were not recommended on their first attempt. Second: diagnose before you decide anything — use the repeater\u2019s guide on this site to identify which assessor (psychology, GTO, or interview) was your weak area. Third: check your eligibility for the next course and its attempt limits in the official ad. Candidates who return with a fixed weakness get recommended; candidates who return with only "more motivation" usually repeat the result.',
        ],
        list: [
          'Do not decide anything emotional in the first week — rest first',
          'Diagnose: which of the three assessors was your weak area?',
          'Fix that specific area over 2-3 months (see the repeater\u2019s guide)',
          'Check the next course\u2019s ad for dates and attempt limits',
        ],
        urduNote:
          'Not recommended zindagi ka faisla nahi. Pehle araam karo, phir kamzori pehchano, phir usay theek kar ke wapas aao.',
      },
      {
        heading: 'PMA training: what recommended candidates walk into',
        paragraphs: [
          'PMA Long Course training at Kakul runs for two years — famously tough on physical fitness, discipline, and academics. Cadets train in companies, follow a strict daily routine from early morning, and study military subjects alongside physical conditioning. It is designed to be hard: the training intentionally pressures you so that real service feels manageable. Candidates who arrive fit and mentally prepared adapt fastest — which is another reason your running practice now pays off later.',
        ],
      },
      {
        heading: 'Protecting yourself while you wait',
        paragraphs: [
          'Two warnings. One: no academy or agent can "confirm your merit position" or speed up your joining letter — anyone asking for money for this is running a scam. Two: do not post your ISSB chest number, result screenshots, or joining details publicly on social media; keep your personal selection data private.',
        ],
        urduNote:
          'Koi academy aap ki merit position confirm nahi kar sakti — paisay mangay to scam hai. Apna chest number aur result social media par mat lagao.',
      },
    ],
    mistakes: [
      'Treating "recommended" as final and stopping all fitness and discipline.',
      'Treating "not recommended" as the end and never analysing what went wrong.',
      'Paying agents who promise to "fix" merit or joining letters — pure scam.',
      'Posting selection documents and chest numbers on social media.',
    ],
    tips: [
      'Recommended: stay fit and keep studying — PMA training punishes the unfit.',
      'Not recommended: rest one week, then start honest diagnosis.',
      'Keep copies of every document safe — you will need them again.',
      'Trust only official channels for merit and joining updates.',
    ],
    faqs: [
      {
        q: 'How long after ISSB does the joining letter come?',
        a: 'It varies by course — commonly weeks to a few months, after final medical and merit compilation. Only official channels can confirm your status.',
      },
      {
        q: 'I was not recommended. Should I try a different service (Navy/PAF)?',
        a: 'You can, if you meet that service\u2019s criteria — but first diagnose why ISSB did not recommend you, because the same three assessors test the same qualities everywhere.',
      },
    ],
    related: ['repeaters-guide', 'issb-4-day-routine', 'medical-test-guide', 'physical-training-guide'],
  },
];
