// Original interview flashcard Q&A pairs for practice.
// Sample questions with approach tips — not from any real interview.
export interface Flashcard {
  q: string;
  tip: string;
}

export const interviewFlashcards: Flashcard[] = [
  { q: 'Apna taaruf karwain / Introduce yourself.', tip: 'Naam, ilaqa, taleem, aur ek khubi — 60 second me, confident aur tartib se. Rata hua na lage.' },
  { q: 'Why do you want to join the armed forces?', tip: 'Honest wajah batao (khidmat, discipline, challenge). "Shauq hai" se aagay ek solid reason do.' },
  { q: 'Aap ke walid kya karte hain?', tip: 'Exact occupation/designation batao. Form me jo likha, wahi bolo — consistency zaroori hai.' },
  { q: 'Your biggest strength?', tip: 'Ek khubi + uski misaal (waqia). Sirf lafz nahi — saboot do.' },
  { q: 'Your biggest weakness?', tip: 'Asal kamzori + usay door karne ki koshish. "Koi weakness nahi" kabhi mat kaho.' },
  { q: 'Aap ke mashghale (hobbies) kya hain?', tip: 'Sirf wahi jo WAQAI karte ho — follow-up sawal usi par hoga. Jhoot pakra jayega.' },
  { q: 'Why should we select you?', tip: 'Apni 2-3 khubiyan fauj ki zaroorat se joro (leadership, mehnat, imandari). Fakhr nahi, confidence.' },
  { q: 'Aap ne pehle kabhi ISSB diya?', tip: 'Sach batao. Repeater ho to kya behtar kiya — yehi tumhari taqat hai.' },
  { q: 'What will you do if not recommended?', tip: 'Himmat wala jawab: kamzori door kar ke dobara aaunga. Haar manne wala jawab nahi.' },
  { q: 'Aap ke dost aap ke baare me kya kehte hain?', tip: 'Positive + honest. "Sab kehte hain mei acha hun" kamzor jawab hai — ek khaas baat batao.' },
  { q: 'Who is your role model and why?', tip: 'Koi bhi (walid, teacher, officer) — wajah important hai: unki kaunsi sifat apnana chahte ho.' },
  { q: 'Aaj kal mulk me kya ho raha hai?', tip: 'Current affairs tayyar rakho — 2-3 bari khabrein (defense, economy). Roz khabar dekho.' },
  { q: 'Aap ki taleem me sab se kamzor mazmoon?', tip: 'Sach + wajah + behtari ki koshish. Bahane nahi.' },
  { q: 'Team me kaam karna pasand ya akelay?', tip: 'Dono ka balance: team me role, akelay zimmedari. Fauj team ka kaam hai — ye zahir karo.' },
  { q: 'Aap gussa kab karte hain?', tip: 'Kabhi kabhi + control ka tareeqa. "Mujhe gussa nahi aata" jhoot lagta hai.' },
  { q: 'Ek waqia jab aap ne mushkil faisla kiya.', tip: 'Asal waqia tayyar rakho: masla, tumhara faisla, nateeja. Chhota waqia bhi chalega.' },
  { q: 'Aap ke bhai/behen kya karte hain?', tip: 'Form wali maloomat yaad rakho — naam, kaam, taleem. Rukna nahi chahiye.' },
  { q: 'Fauj me aap ke liye sab se mushkil cheez kya hogi?', tip: 'Imandari + tayyari: "ghar se doori mushkil hogi, lekin..." — kamzori ko taqat me badlo.' },
  { q: 'Aap ki zindagi ka sab se fakhr ka lamha?', tip: 'Koi bhi asal kamyabi — mehnat se mili ho. Fakhr me takabbur nahi.' },
  { q: 'Agar aap leader banen to pehla kaam?', tip: 'Team ko samajhna, plan banana. "Hukum dunga" nahi — "sath le kar chalunga".' },
  { q: 'Jhoot aur sach me kya farq hai aap ke nazdeek?', tip: 'Seedha jawab: jhoot se aitmad toot-ta hai. Lambi falsafi baat nahi.' },
  { q: 'Aap ne kabhi kisi ajnabi ki madad ki?', tip: 'Asal misaal do. Nahi ki to imandari se kaho — aur ab se karne ka irada batao.' },
  { q: 'Defence Day kab manaya jata hai?', tip: '6 September. Basic GK pakki karo — qomi din, qomi nishan, dar-ul-hukumat.' },
  { q: 'Pakistan ka qomi khel kaunsa hai?', tip: 'Hockey. Aise sawal GK section se tayyar karo — interview me bhi pooche jate hain.' },
  { q: 'Aap ibadat ka ehtimam karte hain?', tip: 'Sach bolo, dikhawa nahi. Deen personal muamla hai — seedha aur mukhtasar jawab.' },
  { q: 'Aap ke shehar/gaon ki khasiyat?', tip: '2-3 asal baatein (mashhoor cheez, logon ka kaam). Apni jaron ko janna achi baat hai.' },
  { q: 'Kamyabi ka matlab aap ke nazdeek?', tip: 'Mehnat + kirdaar. Sirf paisa/ohda nahi — gehra jawab do.' },
  { q: 'Aap ki sehat ka khayal kaise rakhte hain?', tip: 'Khel, warzish, neend. Fauj me fitness zaroori — routine batao.' },
  { q: 'Koi sawal jo aap hum se poochna chahen?', tip: 'Hamesha 1-2 zehni sawal tayyar rakho (training, career). "Koi nahi" kamzor jawab hai.' },
  { q: 'Aap ki zindagi ka maqsad?', tip: 'Wazeh aur buland maqsad — mulk ki khidmat, khandan ka naam. Confusion nahi.' },
];

export function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
