import type { Route } from '../types';

export interface FaqLink {
  label: string;
  route: Route;
}

export interface FaqEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  link?: FaqLink;
}

const note = (slug: string, label: string): FaqLink => ({
  label,
  route: { page: 'note', slug },
});

/**
 * Rule-based FAQ knowledge base for the ISSB Tayari chatbot.
 * REAL DATA ONLY: no invented dates, numbers, merit figures, or success rates.
 * Where a fact varies by course, the answer says so and points to official sources.
 */
export const FAQ: FaqEntry[] = [
  // ---------- Greetings ----------
  {
    id: 'greeting',
    keywords: ['salam', 'assalam', 'hello', 'hi', 'aoa', 'hey'],
    question: 'Salam!',
    answer:
      'Walaikum Assalam! 👋 Me ISSB Tayari ka helper hoon. ISSB, initial test, interview, ya tayari ke baare me kuch bhi poocho — ya neeche diye sawalon me se ek chuno.',
  },
  {
    id: 'thanks',
    keywords: ['shukriya', 'thanks', 'thank', 'meherbani'],
    question: 'Shukriya!',
    answer:
      'Khush aamdeed! 😊 Tayari jari rakho — roz thodi practice ISSB me bohat farq dalti hai. Aur koi sawal ho to poochte raho.',
  },

  // ---------- What is ISSB ----------
  {
    id: 'what-is-issb',
    keywords: ['issb kya', 'what is issb', 'issb hai kya', 'issb matlab'],
    question: 'ISSB kya hai?',
    answer:
      'ISSB (Inter Services Selection Board) Pakistan Army, Navy aur PAF me officer banne ke liye selection ka 4–5 din ka test hai. Is me tumhari personality, intelligence, leadership aur officer-like qualities check hoti hain.',
    link: note('what-is-issb', 'ISSB kya hai? — poora note'),
  },
  {
    id: 'issb-centers',
    keywords: ['kahan hota', 'center', 'centre', 'kohat', 'gujranwala', 'malir', 'quetta', 'jagah'],
    question: 'ISSB kahan hota hai?',
    answer:
      'ISSB ke 4 centers hain: Kohat, Gujranwala, Malir (Karachi) aur Quetta. Tumhara center call letter me likha hota hai — wahi final samjho.',
  },
  {
    id: 'issb-days',
    keywords: ['kitne din', 'how many days', 'duration', 'days', 'din lagtay'],
    question: 'ISSB kitne din ka hota hai?',
    answer:
      'Aam tor par 4 din (reporting day mila kar 5). Day 1: screening, Day 2: psychology tests, Day 3: GTO tasks, Day 4: interview aur conference. Har center ka schedule thoda mukhtalif ho sakta hai.',
    link: note('what-is-issb', '4 din ka routine — detail'),
  },
  {
    id: 'initial-vs-issb',
    keywords: ['farq', 'difference', 'initial', 'as&rc', 'asrc', 'pehlay kya'],
    question: 'Initial test aur ISSB me farq?',
    answer:
      'Initial test PEHLE hota hai — apne qareebi AS&RC (Army Selection & Recruitment Centre) me: intelligence, academic, physical, medical aur interview. Ye clear karne ke BAAD (mahino baad) ISSB ki call ati hai. Dono alag steps hain!',
    link: note('initial-test-guide', 'Initial Test Guide'),
  },

  // ---------- Eligibility ----------
  {
    id: 'age-limit',
    keywords: ['age', 'umar', 'limit', 'kitni umar'],
    question: 'Age limit kya hai?',
    answer:
      'Age limit har course ke hisaab se mukhtalif hoti hai (aam tor par 17–23 saal intermediate walon ke liye). Exact limit hamesha official advertisement me check karo — wahi final hoti hai.',
  },
  {
    id: 'education',
    keywords: ['education', 'taleem', 'fsc', 'fa', 'ics', 'qualification', 'parha', 'degree', 'inter'],
    question: 'Kitni taleem chahiye?',
    answer:
      'PMA Long Course ke liye kam az kam FA/FSc ya equivalent (55% marks aam tor par). Har course ki apni requirement hoti hai — official ad me zaroor dekho.',
  },
  {
    id: 'marital',
    keywords: ['married', 'shadi', 'unmarried', 'kunwara', 'shaadi'],
    question: 'Shadi-shuda apply kar sakte hain?',
    answer:
      'PMA Long Course ke liye aam tor par unmarried hona zaroori hai. Kuch courses me married candidates allowed hote hain — apne course ki ad check karo.',
  },
  {
    id: 'girls-entry',
    keywords: ['larki', 'girl', 'female', 'lcc', 'khawateen', 'aurat', 'lady'],
    question: 'Larkiyan apply kar sakti hain?',
    answer:
      'Ji haan! Larkiyon ke liye Lady Cadet Course (LCC) Army me, aur PAF/Navy me bhi mukhtalif branches me entries hoti hain. Eligibility har ad me likhi hoti hai.',
  },
  {
    id: 'height',
    keywords: ['height', 'qad', 'kad', 'lambai'],
    question: 'Height kitni chahiye?',
    answer:
      'Minimum height ki requirement hoti hai aur ye course ke hisaab se farq ho sakti hai. Exact figure official ad ya medical criteria me check karo — andaze par mat chalo.',
  },
  {
    id: 'weight',
    keywords: ['weight', 'wazan', 'vazan', 'mota', 'patla'],
    question: 'Weight ka kya standard hai?',
    answer:
      'Weight height ke mutabiq hona chahiye (medical board check karta hai). Zyada overweight ya underweight dono masla ban sakte hain — balanced diet aur exercise se pehle se tayari karo.',
  },
  {
    id: 'eyesight',
    keywords: ['eyesight', 'nazar', 'ankh', 'glasses', 'chashma', 'aankh', 'vision'],
    question: 'Nazar kamzor ho to?',
    answer:
      'Eyesight ke medical standards hain jo course ke hisaab se mukhtalif hote hain. Halki kamzori kuch branches me acceptable hoti hai. Exact standard official medical criteria me dekho — khud andaza mat lagao.',
  },
  {
    id: 'repeater',
    keywords: ['repeat', 'repeater', 'dobara', 'fail ho', 'dusri bar', 'second time'],
    question: 'Fail ho jayein to dobara de sakte hain?',
    answer:
      'Ji haan, repeaters dobara appear ho sakte hain (aam tor par kuch mah baad, aur chances limited hote hain). Pehli attempt me jo kamzori thi, us par mehnat karo — repeaters ka experience unka plus point bhi ban sakta hai.',
  },
  {
    id: 'domicile',
    keywords: ['domicile', 'province', 'sooba', 'punjab', 'sindh', 'kpk', 'balochistan'],
    question: 'Domicile ka masla?',
    answer:
      'Pakistan ke kisi bhi province ka domicile holder apply kar sakta hai. Domicile aur PRC documents me hona zaroori hai — call letter me list check karo.',
  },
  {
    id: 'gap-year',
    keywords: ['gap', 'saal zaya', 'drop'],
    question: 'Study gap ho to masla?',
    answer:
      'Gap apne aap me disqualify nahi karta — lekin interview me poocha jayega ke gap me kya kiya. Imaandari se jawab do: koi kaam, skill ya tayari ki ho to batao.',
  },

  // ---------- Initial test ----------
  {
    id: 'initial-test-what',
    keywords: ['initial test', 'preliminary'],
    question: 'Initial test me kya hota hai?',
    answer:
      'AS&RC me 5 cheezein hoti hain: (1) Intelligence test (verbal + non-verbal MCQs), (2) Academic test, (3) Physical (running waghera), (4) Medical, (5) Initial interview. Sab clear karo to ISSB ki call ati hai.',
    link: note('initial-test-guide', 'Initial Test — poora guide'),
  },
  {
    id: 'intelligence-test',
    keywords: ['intelligence', 'verbal', 'non-verbal', 'nonverbal', 'mcq', 'zahanat'],
    question: 'Intelligence test kaisa hota hai?',
    answer:
      'Time-based MCQs hote hain: verbal (alfaz, number series, rishte) aur non-verbal (shaklein, pattern). Speed + accuracy dono chahiye — roz practice se behtar hota hai.',
    link: { label: 'Intelligence Quiz try karo', route: { page: 'quiz' } },
  },
  {
    id: 'academic-test',
    keywords: ['academic', 'subject', 'parhai wala test', 'syllabus'],
    question: 'Academic test me kya ata hai?',
    answer:
      'FA/FSc level ke subjects: English, Maths, Physics, Pakistan Studies, Islamiat aur GK. Apne parhe hue subjects revise karo — ye test yaad-dasht ka hai, rocket science nahi.',
  },
  {
    id: 'physical-test',
    keywords: ['physical', 'running', 'run', 'dor', 'daud', 'pull', 'pushup', 'push-up'],
    question: 'Physical test me kya hota hai?',
    answer:
      'Aam tor par 1.6 km running (time limit ke saath), pull-ups, push-ups aur basic fitness check. Roz running ki adat banao — test wale din pehli dafa mat daudo!',
    link: note('initial-test-guide', 'Physical ki tayari'),
  },
  {
    id: 'initial-interview',
    keywords: ['initial interview', 'pehla interview'],
    question: 'Initial interview kaisa hota hai?',
    answer:
      'AS&RC me chhota sa interview: tumhara taaruf, taleem, family, aur "fauj me kyun ana chahte ho". Pur-sukoon raho, seedhe jawab do — ye confidence ka test hai.',
  },

  // ---------- ISSB days / screening ----------
  {
    id: 'screening-day',
    keywords: ['screening', 'day 1', 'day1', 'pehla din', 'ppdt'],
    question: 'Screening day pe kya hota hai?',
    answer:
      'Day 1 pe intelligence test (dobara) aur PPDT hota hai — ek tasveer dekh kar kahani likhni aur group me discuss karni hoti hai. Isi din kuch candidates screen-out ho jate hain, is liye is din ki tayari sab se zaroori hai.',
  },
  {
    id: 'psychology-day',
    keywords: ['psychology', 'psychologist', 'dimaghi test', 'nafsiyati'],
    question: 'Psychology day pe kya hota hai?',
    answer:
      'Day 2 pe 4 tests: WAT (word association), Sentence Completion (English + Urdu), Picture Stories (TAT), aur OPI/SRT. Ye sab tumhari soch aur personality ko zahir karte hain — natural raho, ratta mat lagao.',
  },
  {
    id: 'wat-tips',
    keywords: ['wat', 'word association', 'lafz'],
    question: 'WAT ke tips?',
    answer:
      'Har lafz par chand seconds me MUSBBAT (positive) jumla banao. Negative ya khaali jumle se bacho. Speed ke liye roz practice karo — hamara WAT simulator isi liye bana hai!',
    link: { label: 'WAT Simulator kholo', route: { page: 'wat' } },
  },
  {
    id: 'sct-tips',
    keywords: ['sct', 'sentence completion', 'jumlay mukammal'],
    question: 'Sentence Completion ke tips?',
    answer:
      'Adhoore jumlon ko foran mukammal karo — English aur Urdu dono me. Pehla khayal jo aye wahi likho, zyada socho ge to time nikal jayega. Jumlay positive aur mukammal hone chahiye.',
    link: note('sentence-completion-guide', 'SCT Guide'),
  },
  {
    id: 'tat-tips',
    keywords: ['tat', 'picture story', 'tasveer', 'kahani', 'pointer story'],
    question: 'Picture story kaise likhein?',
    answer:
      'Tasveer me ek hero chuno, usay koi masla do, phir usay hal karte hue POSITIVE ending likho. 3–4 minute me mukammal kahani — hero hamesha kuch acha karta hua dikhao.',
    link: note('picture-story-guide', 'Picture Story Guide'),
  },
  {
    id: 'opi-srt',
    keywords: ['opi', 'srt', 'situation'],
    question: 'OPI / SRT kya hai?',
    answer:
      'Situation Reaction Test: roz-marra ki situations di jati hain aur tumhara reaction likhna hota hai. Seedha, imaandar aur zimmedarana jawab do — hero banne ki acting mat karo.',
  },

  // ---------- GTO ----------
  {
    id: 'gto-day',
    keywords: ['gto', 'group task', 'outdoor'],
    question: 'GTO day pe kya hota hai?',
    answer:
      'Day 3 outdoor hota hai: group discussion, group tasks (rukawatein mil kar paar karna), command task, individual obstacles aur lecturette. Yahan teamwork aur leadership dekhi jati hai — chillana ya sab par hukam chalana leadership NAHI.',
    link: note('gto-tasks-guide', 'GTO Tasks Guide'),
  },
  {
    id: 'group-discussion',
    keywords: ['group discussion', 'behess', 'discussion'],
    question: 'Group discussion me kya karein?',
    answer:
      'Mauzu par apni raye wazeh aur tehzeeb se rakho, doosron ko bolo — beech me mat kato. Current affairs aur Pakistan ke masail par raye pehle se bana kar jao.',
  },
  {
    id: 'lecturette',
    keywords: ['lecturette', 'speech', 'taqreer', 'lecture'],
    question: 'Lecturette kya hota hai?',
    answer:
      'Tumhe ek topic milta hai, 2–3 minute sochne ka time, phir group ke samne 3 minute bolna hota hai. Shuruwat, 2–3 points, aur khatma — seedhi zubaan, pur-etemad lehja.',
  },
  {
    id: 'command-task',
    keywords: ['command task', 'commander'],
    question: 'Command task me kya hota hai?',
    answer:
      'Tumhe leader bana kar ek rukawat paar karni hoti hai — 2–3 helpers milte hain. Plan batao, kaam taqseem karo, khud bhi haath lagao. Ghabrao mat, socho aur bolo.',
  },
  {
    id: 'obstacles',
    keywords: ['obstacle', 'rukawat', 'individual'],
    question: 'Individual obstacles?',
    answer:
      '10 ke qareeb rukawatein hoti hain jinhe waqt me paar karna hota hai — deewar, rassi, khaai waghera. Fitness yahan kaam ati hai. Himmat mat haro, har rukawat par koshish karo.',
  },
  {
    id: 'gto-interview',
    keywords: ['gto interview', 'gto ka interview'],
    question: 'GTO interview kaisa hota hai?',
    answer:
      'GTO tum se halki-phulki guftagu karta hai — tumhari dilchaspiyan, parhai, aur group tasks ke bare me. Relax raho, wahi bolo jo bio-data form me likha tha (consistency zaroori hai!).',
  },

  // ---------- Interview ----------
  {
    id: 'interview-day',
    keywords: ['interview', 'deputy', 'president'],
    question: 'ISSB interview kaisa hota hai?',
    answer:
      'Senior officer tum se tumhari zindagi, parhai, family, dilchaspiyon aur "officer kyun banna hai" par sawal karta hai. Ratte hue jawab nahi — apne alfaaz me imaandar jawab do.',
    link: note('interview-guide', 'Interview Guide'),
  },
  {
    id: 'interview-questions',
    keywords: ['interview questions', 'sawal', 'poochte', 'kya poocha'],
    question: 'Interview me kya poochte hain?',
    answer:
      'Aam themes: apna taaruf, family, taleem, hobbies, Pakistan ke bare me raye, current affairs, aur "fauj kyun?". Jawab pehle se ratto mat — har sawal ka apna seedha jawab do.',
    link: note('interview-guide', 'Sawal + jawab ka tareeqa'),
  },
  {
    id: 'interview-dress',
    keywords: ['dress', 'kapray', 'wardi', 'suit', 'tie', 'pehn', 'pehanna', 'pehnein', 'pehno', 'libas', 'pent', 'shirt'],
    question: 'Interview me kya pehnein?',
    answer:
      'Halki (light) dress shirt, gehri (dark) pant, matching tie, polish kiye hue joote. Baal saaf-suthre, clean shave. Larkiyan simple aur tehzeeb wala libas pehnein. Bhadkeele kapray ya tez khushbu se bacho.',
    link: note('dress-code-guide', 'Dress Code Guide'),
  },
  {
    id: 'biodata-form',
    keywords: ['bio data', 'biodata', 'form', 'bio-data'],
    question: 'Bio-data form kaise bharein?',
    answer:
      'Bilkul IMAANDARI se bharo — psychologist, GTO aur interviewer teeno cross-check karte hain. Jhoot pakra gaya to khel khatam. Merits me asal khoobiyan, demerits me chhoti kamzori + usay door karne ki koshish likho.',
    link: note('biodata-form-guide', 'Form bharne ka tareeqa'),
  },
  {
    id: 'conference-day',
    keywords: ['conference', 'aakhri din', 'final'],
    question: 'Conference kya hoti hai?',
    answer:
      'Aakhri din sab assessors (psychologist, GTO, interviewer) mil kar har candidate ka faisla karte hain. Tumhe bhi 1 minute ke liye bulaya jata hai — seedhe khade raho, pur-etemad jawab do.',
  },

  // ---------- Medical ----------
  {
    id: 'medical-test',
    keywords: ['medical', 'sehat', 'doctor', 'checkup'],
    question: 'Medical me kya check hota hai?',
    answer:
      'Poori body ka checkup: height, weight, eyesight, hearing, daant, aur general fitness. Koi chhupi hui bemari ho to pehle ilaj karwao — medical me chhupana mushkil hai.',
  },
  {
    id: 'medical-issues',
    keywords: ['flat feet', 'knock knee', 'elbow', 'carrying angle', 'unfit'],
    question: 'Flat feet / knock knee ka masla?',
    answer:
      'Ye faisla medical board karta hai — har case alag hota hai. Halki kharabi aksar acceptable hoti hai, shadeed nahi. Khud diagnose mat karo, official medical hi final hai.',
  },

  // ---------- Dates / fees / admin ----------
  {
    id: 'issb-dates',
    keywords: ['date', 'tareekh', 'kab hai', 'schedule', 'kab hogi', 'apply date'],
    question: 'ISSB ki dates kab hain?',
    answer:
      'Dates har course ke saath badalti hain — me tumhe purani ya ghalat date nahi bata sakta. Taza tareekhein hamesha issb.gov.pk aur joinpakarmy.gov.pk par check karo.',
  },
  {
    id: 'fees',
    keywords: ['fees', 'fee', 'paisay', 'kitne paisay', 'kharcha'],
    question: 'Fees kitni hai?',
    answer:
      'Fees har course me mukhtalif ho sakti hai aur waqt ke saath badalti hai. Exact fees official advertisement me likhi hoti hai — wahi check karo.',
  },
  {
    id: 'how-to-apply',
    keywords: ['apply', 'registration', 'online', 'form bharna', 'kaise apply'],
    question: 'Apply kaise karein?',
    answer:
      'Online registration hoti hai: Army ke liye joinpakarmy.gov.pk, aur ISSB ki maloomat issb.gov.pk par. Ad me di hui tareekh se pehle apply karo, aur form ehtiyat se bharo.',
  },
  {
    id: 'documents',
    keywords: ['documents', 'kagazat', 'dastavezat', 'cnic', 'certificate', 'sanad'],
    question: 'Kaun se documents chahiye?',
    answer:
      'Aam tor par: CNIC ya B-form, taleemi asnaad, domicile/PRC, aur tasaveer. Poori list call letter ya ad me hoti hai — wahi final samjho, koi kagaz mat bhoolo.',
  },
  {
    id: 'phone-allowed',
    keywords: ['phone', 'mobile', 'cell'],
    question: 'ISSB me phone le ja sakte hain?',
    answer:
      'Tests ke doran phone aam tor par allowed nahi hota — jama karwa liya jata hai. Call letter me jo hidayaat hon, unhi par amal karo.',
  },
  {
    id: 'stay-hostel',
    keywords: ['rehaish', 'hostel', 'stay', 'rehna', 'kahan rahenge'],
    question: 'Rehaish kahan hoti hai?',
    answer:
      'ISSB ke doran candidates wahin rehte hain — rehaish aur khana ISSB ki taraf se hota hai. Apna samaan call letter ki list ke mutabiq pack karo.',
  },

  // ---------- Preparation ----------
  {
    id: 'how-to-prepare',
    keywords: ['tayari', 'preparation', 'prepare', 'kaise parhein', 'kaise karein', 'start'],
    question: 'Tayari kaise shuru karein?',
    answer:
      'Teen cheezon par kaam karo: (1) Dimagh — roz intelligence MCQs aur WAT practice, (2) Jism — roz running/exercise, (3) Personality — current affairs parho aur bolne ki practice karo. Hamara 30-day plan follow karo!',
    link: { label: '30-Day Plan dekho', route: { page: 'plan' } },
  },
  {
    id: 'prep-duration',
    keywords: ['kitne mahine', 'months', 'kitna time', 'kitna arsa', 'time lagega'],
    question: 'Kitne mahine tayari karein?',
    answer:
      'Koi fixed muddat nahi — lekin 2–3 mah ki musalsal tayari ideal hai. Roz 1–2 ghante: thodi parhai, thodi practice, thodi exercise. Aakhri hafton me ratta nahi, revision karo.',
  },
  {
    id: 'books',
    keywords: ['book', 'kitab', 'konsi kitab', 'parhne ke liye'],
    question: 'Kaun si books parhein?',
    answer:
      'Apne FA/FSc ke subjects revise karo (English, Maths, Pak Studies, Islamiat). Intelligence ke liye koi bhi achi practice book ya online MCQs. Mehngi guides se zyada roz ki practice kaam ati hai.',
  },
  {
    id: 'current-affairs',
    keywords: ['current affairs', 'news', 'khabrein', 'halat'],
    question: 'Current affairs ki tayari?',
    answer:
      'Roz 15 minute khabrein dekho/parho: Pakistan ki siyasat, maeeshat, aur duniya ke bare khabrein. Interview aur group discussion dono me kaam ayegi. Sirf headlines nahi, wajah bhi samjho.',
  },
  {
    id: 'gk-prep',
    keywords: ['gk', 'general knowledge', 'maloomat'],
    question: 'General Knowledge kya parhein?',
    answer:
      'Pakistan Studies (tareekh, geography), Islamiat (buniyadi maloomat), aur afwaj-e-Pakistan ke bare me (ranks, wars). Hamari site par notes aa rahe hain — notes section check karte raho.',
    link: { label: 'Notes dekho', route: { page: 'notes' } },
  },
  {
    id: 'english-weak',
    keywords: ['english', 'angrezi', 'kamzor'],
    question: 'English kamzor hai to?',
    answer:
      'Ghabrao mat — roz thodi English parho aur bolo. WAT aur sentence completion me simple, sahi jumlay hi kaafi hain. Mushkil alfaz ki bajaye SAHI jumlay likho.',
  },
  {
    id: 'language',
    keywords: ['urdu', 'zuban', 'language', 'bolna'],
    question: 'Urdu ya English me jawab dein?',
    answer:
      'Dono chalte hain! Jis zubaan me tum pur-etemad ho, usi me bolo. Wazeh aur seedha jawab achi angrezi se behtar hai.',
  },
  {
    id: 'negative-marking',
    keywords: ['negative marking', 'ghalat jawab'],
    question: 'Negative marking hoti hai?',
    answer:
      'Har test ki apni hidayaat hoti hain — test shuru hone se pehle woh ghor se parho aur unhi par amal karo. Andaza lagane se behtar hai jo ata ho wahi karo.',
  },

  // ---------- Ranks / forces GK (stable facts) ----------
  {
    id: 'army-ranks',
    keywords: ['army rank', 'fauj rank', 'army ke rank'],
    question: 'Army ke ranks?',
    answer:
      'Chhote se bara: Second Lieutenant → Lieutenant → Captain → Major → Lt Colonel → Colonel → Brigadier → Major General → Lt General → General. Ye buniyadi maloomat interview me kaam ati hai.',
  },
  {
    id: 'navy-ranks',
    keywords: ['navy rank', 'bahria rank', 'navy ke rank'],
    question: 'Navy ke ranks?',
    answer:
      'Midshipman → Sub Lieutenant → Lieutenant → Lt Commander → Commander → Captain → Commodore → Rear Admiral → Vice Admiral → Admiral. Navy join karne walon ko ye yaad hone chahiye.',
  },
  {
    id: 'paf-ranks',
    keywords: ['paf rank', 'air force rank', 'fizaiya rank'],
    question: 'PAF ke ranks?',
    answer:
      'Pilot Officer → Flying Officer → Flight Lieutenant → Squadron Leader → Wing Commander → Group Captain → Air Commodore → Air Vice Marshal → Air Marshal → Air Chief Marshal.',
  },
  {
    id: 'coas-name',
    keywords: ['coas', 'army chief', 'chief ka naam', 'sarbarah'],
    question: 'Army chief kaun hai?',
    answer:
      'Ye waqt ke saath badalta rehta hai — me purana naam bata kar tumhe ghalat maloomat nahi dunga. Taza naam current affairs se check karo, interview me ye sawal aa sakta hai!',
  },
  {
    id: 'pma-training',
    keywords: ['pma', 'training', 'kitne saal', 'kakul', 'academy'],
    question: 'PMA training kitne arse ki?',
    answer:
      'PMA Long Course ki training aam tor par 2 saal hoti hai (PMA Kakul, Abbottabad me). Training sakht hoti hai — jisamani aur zehni dono tor par tayyar jao.',
  },
  {
    id: 'salary',
    keywords: ['salary', 'tankhwah', 'pay', 'kitni milti'],
    question: 'Officer ki tankhwah kitni?',
    answer:
      'Tankhwah government pay scales ke mutabiq hoti hai aur waqt ke saath badalti hai — me koi figure bata kar ghalat nahi kahunga. Official ad ya pay scale chart check karo.',
  },

  // ---------- Results ----------
  {
    id: 'not-recommended',
    keywords: ['not recommended', 'reject', 'fail ho gaya', 'nikal diya', 'screen out'],
    question: 'Recommend na hon to?',
    answer:
      'Dil chhota mat karo — bohat se officers pehli dafa me recommend nahi hote. Apni kamzori pehchano, us par mehnat karo, aur repeater ke tor par dobara ao. Haar manna option nahi!',
  },
  {
    id: 'recommended-next',
    keywords: ['recommended', 'select ho', 'pass ho', 'kamyab'],
    question: 'Recommend hone ke baad kya?',
    answer:
      'Mubarak ho! Iske baad final medical aur merit list hoti hai. Merit par ana zaroori hai — recommend hona akhri step nahi. Allah se dua aur sabar rakho.',
  },

  // ---------- Fallback-adjacent ----------
  {
    id: 'best-tip',
    keywords: ['tip', 'nuskha', 'secret', 'kamyabi', 'best'],
    question: 'Kamyabi ka sab se bara nuskha?',
    answer:
      'Natural raho! ISSB acting pakar leta hai. Imaandar jawab, positive soch, team ke saath kaam, aur pur-sukoon rehna — yehi asal "nuskha" hai. Ratta aur jhoot dono nuqsan dete hain.',
  },
  {
    id: 'nervous',
    keywords: ['ghabrahat', 'nervous', 'dar', 'tension', 'pareshani'],
    question: 'Ghabrahat hoti hai!',
    answer:
      'Bilkul normal hai — har candidate ghabrata hai! Gehre saans lo, apni tayari par bharosa rakho. Yaad rakho: assessors tumhe fail karne nahi, sahi officer chunne aye hain.',
  },
];

export const SUGGESTED_QUESTIONS: string[] = [
  'ISSB kya hai?',
  'Initial test me kya hota hai?',
  'Interview me kya pehnein?',
  'Larkiyan apply kar sakti hain?',
];

export const FALLBACK_SUGGESTIONS: string[] = [
  'ISSB kitne din ka hota hai?',
  'WAT ke tips?',
  'Interview me kya poochte hain?',
];

export interface MatchResult {
  entry: FaqEntry | null;
}

/** Normalize user input for keyword matching (handles Urdu + English). */
function normalize(input: string): string {
  return input.toLowerCase().replace(/[؟?؟!.,،:;'"()\-_]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Keyword hit test. Short keywords (<=3 chars) must match on word boundaries
 * so "hi" doesn't fire inside "which", "age" inside "message", etc.
 * Multi-word phrases use plain substring matching.
 */
function keywordHit(text: string, kw: string): boolean {
  if (kw.includes(' ')) return text.includes(kw);
  if (kw.length <= 3) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${escaped}\\b`).test(text);
  }
  return text.includes(kw);
}

/**
 * Score-based keyword matching. Each entry scores +1 per keyword found in the
 * input; the highest scorer wins. Ties go to the earlier (more general) entry.
 */
export function findAnswer(input: string): MatchResult {
  const text = normalize(input);
  if (!text) return { entry: null };

  let best: FaqEntry | null = null;
  let bestScore = 0;

  for (const entry of FAQ) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (keywordHit(text, kw)) score += 1;
    }
    // Bonus: exact question match gets a strong boost
    if (text === normalize(entry.question)) score += 10;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return { entry: best };
}
