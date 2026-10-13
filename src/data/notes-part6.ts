import type { Note } from './notes-part1';

// Revision notes distilled from the 10 practice papers + 100-question set.
// Every fact here was verified against the corrected answer keys —
// only confirmed-correct answers made it into these notes.

export const notesPart6: Note[] = [
  {
    slug: 'practice-papers-gk-revision',
    title: 'GK Revision: Practice Papers se Nikle Ahem Facts',
    urduLine: 'Papers me aye hue general knowledge ke facts — yaad karo',
    description:
      'Practice papers (Paper 01–10 aur 100-question set) me aye hue general knowledge ke verified facts: darya, samandar, darre, tanzeemain aur capitals.',
    readTime: '6 min read',
    category: 'Initial Test',
    intro:
      'Ye wo general knowledge facts hain jo practice papers me bar bar aye — aur har ek ka jawab verify kiya gaya hai. Inhein yaad kar lo to initial test ka GK hissa mazboot ho jayega. Ghalat ya purane jawab (jaise OIC ka sheher ya Sri Lanka ke president) yahan theek kar ke diye gaye hain.',
    sections: [
      {
        heading: 'Darya, Samandar aur Jheelein',
        paragraphs: [
          'Europe ka sab se bara darya Volga hai. Europe aur Africa ke darmiyan Mediterranean Sea hai. China aur South Korea ko Yellow Sea alag karta hai.',
        ],
        list: [
          'Volga — Europe ka sab se bara darya',
          'Mediterranean Sea — Europe aur Africa ke darmiyan',
          'Yellow Sea — China aur South Korea ke darmiyan',
          'Shandur — Pakistan ka mashhoor polo ground (Gilgit-Baltistan/Chitral)',
        ],
      },
      {
        heading: 'Mumalik aur Capitals',
        paragraphs: [
          'Afghanistan ke maghrib (west) me Iran hai. India ke south me Sri Lanka hai. Turkiye ka capital Ankara hai. Mozambique ka capital Maputo hai. UNO ka headquarters New York City me hai.',
        ],
        list: [
          'Iran — Afghanistan ke maghrib me',
          'Sri Lanka — India ke south me',
          'Ankara — Turkiye ka capital',
          'Maputo — Mozambique ka capital',
          'New York City — UNO headquarters',
          'Rufiyaa — Maldives ki currency',
        ],
      },
      {
        heading: 'Aalmi Tanzeemain (sahi facts)',
        paragraphs: [
          'OIC 1969 me Rabat (Morocco) me bani — Jeddah sirf uska headquarters hai. ECO ka secretariat Tehran me hai. Ababeel missile ki range 2200 km hai. JF-17 ka pehla kharidar Myanmar tha.',
        ],
        list: [
          'OIC — 1969, Rabat (Morocco); HQ Jeddah',
          'ECO Secretariat — Tehran, Iran',
          'Ababeel missile range — 2200 km',
          'JF-17 ka pehla buyer — Myanmar',
          'Duniya ka sab se lamba railway platform — Gorakhpur, India',
        ],
        urduNote: 'OIC wala sawal 3 papers me ghalat tha (Jeddah/Saudi likha tha) — sahi jawab Rabat hai, yaad rakho!',
      },
    ],
    mistakes: [
      'OIC ko Jeddah me bana hua samajhna — wo sirf HQ hai, bunyad Rabat me rakhi gayi.',
      'Volga ki spelling "Rolga" likhna.',
      'UNO HQ ko Geneva samajhna — wo New York me hai.',
    ],
    tips: [
      'Map par ungli rakh kar parho — maghrib/mashriq wale sawal map se yaad hote hain.',
      'Tanzeem ka sheher aur HQ alag alag yaad karo.',
    ],
    related: ['general-knowledge', 'initial-test-guide'],
  },
  {
    slug: 'practice-papers-islamiat-revision',
    title: 'Islamiat Revision: Practice Papers se Nikle Ahem Facts',
    urduLine: 'Papers me aye hue Islamiat ke facts — yaad karo',
    description:
      'Practice papers me aye hue Islamiat ke verified facts: Ghazwat, Surah, Khulafa ke alqabat aur ahem tareekhein.',
    readTime: '6 min read',
    category: 'Initial Test',
    intro:
      'Initial test me Islamiat ke sawal seedhe facts par hote hain — tareekh, naam aur alqabat. Ye wo facts hain jo papers me aye aur jinke jawab verify kiye gaye. Ghalat jawab (jaise "Ahsan-ul-Qasas = Surah Qasas") yahan theek kar ke diye gaye hain.',
    sections: [
      {
        heading: 'Ghazwat aur Ahem Tareekhein',
        paragraphs: [
          'Ghazwa-e-Badr 2 Hijri me hua (13 March 624 AD) — isi me Abu Jahl mara gaya. Dusra Ghazwa Uhud tha. Huzoor (SAW) ne Hajjat-ul-Wida 10 Hijri me ada kiya.',
        ],
        list: [
          'Ghazwa-e-Badr — 2 Hijri (Abu Jahl isi me mara gaya)',
          'Dusra Ghazwa — Uhud',
          'Hajjat-ul-Wida — 10 Hijri',
          'Hazrat Khalid bin Waleed ne Islam qabool kiya — 8 Hijri',
          'Hazrat Hamza (RA) — Huzoor (SAW) ke chacha thay',
        ],
        urduNote: 'Hazrat Hamza "nephew" nahi thay — chacha thay. Ye paper me ghalat tha!',
      },
      {
        heading: 'Quran ke Facts',
        paragraphs: [
          'Surah Yusuf ko "Ahsan-ul-Qasas" (qisson me sab se behtareen) kaha gaya hai. Aakhri mukammal nazil hone wali Surah, Surah An-Nasr hai.',
        ],
        list: [
          'Ahsan-ul-Qasas — Surah Yusuf',
          'Aakhri mukammal nazil Surah — Surah An-Nasr',
          'Islam ke arkaan — 5',
        ],
      },
      {
        heading: 'Alqabat (Titles)',
        paragraphs: [
          'Alqabat wale sawal papers me aye — ye chaar yaad kar lo. Note karo: Kaleemullah Hazrat Musa (A.S.) ka laqab hai, kisi aur ka nahi.',
        ],
        list: [
          'Hazrat Adam (A.S.) — Safiullah',
          'Hazrat Noah (A.S.) — Najiullah',
          'Hazrat Shoaib (A.S.) — Khateeb-ul-Anbiya',
          'Hazrat Abu Bakr (RA) — Siddiq',
          'Hazrat Musa (A.S.) — Kaleemullah',
          'Machli ke pait me — Hazrat Yunus (A.S.) (wo Nabi thay, Sahabi nahi)',
        ],
      },
    ],
    mistakes: [
      'Ahsan-ul-Qasas ko Surah Qasas samajhna — wo Surah Yusuf hai.',
      'Hazrat Hamza ko nephew kehna — wo chacha thay.',
      'Kaleemullah ko ghalat shakhsiyat se jorna — ye Hazrat Musa ka laqab hai.',
    ],
    tips: [
      'Tareekhein Hijri aur AD dono me yaad karo.',
      'Alqabat ko naam ke saath jor kar yaad karo, akelay nahi.',
    ],
    related: ['initial-test-guide', 'practice-papers-gk-revision'],
  },
  {
    slug: 'practice-papers-pakstudies-revision',
    title: 'Pak Studies Revision: Practice Papers se Nikle Ahem Facts',
    urduLine: 'Papers me aye hue Pak Studies ke facts — yaad karo',
    description:
      'Practice papers me aye hue Pakistan Studies ke verified facts: aaeen, tehreekein, muahide aur ahem sheher.',
    readTime: '6 min read',
    category: 'Initial Test',
    intro:
      'Pak Studies ke sawal initial test ka lazmi hissa hain. Ye wo facts hain jo papers me aye aur verify kiye gaye — sath me wo ghaltiyan bhi theek ki gayi hain jo papers ki keys me thin (jaise Muslim League 1985!).',
    sections: [
      {
        heading: 'Aaeen aur Tehreekein',
        paragraphs: [
          'Pakistan ka pehla aaeen 23 March 1956 ko nafiz hua. 1956 ke aaeen me Urdu aur Bengali sarkaari zabanein thin. All India Muslim League 1906 me Dhaka me bani.',
        ],
        list: [
          'Pehla aaeen nafiz — 23 March 1956',
          '1956 ke aaeen ki sarkaari zabanein — Urdu aur Bengali',
          'Muslim League ki bunyad — 1906, Dhaka',
        ],
        urduNote: 'Paper me "1985" likha tha — ye ghalat hai! Sahi 1906 hai.',
      },
      {
        heading: 'Jangein aur Muahide',
        paragraphs: [
          'Tashkent Agreement 1965 ki jang ke baad hua — Ayub Khan aur Lal Bahadur Shastri ne sign kiya, Soviet Union ne sirf darmiyani kirdar ada kiya. 1971 ki jang ke baad Simla Agreement hua.',
        ],
        list: [
          'Tashkent Agreement — 1965 ki jang ke baad; Ayub Khan + Shastri',
          'Simla Agreement — 1971 ki jang ke baad',
        ],
      },
      {
        heading: 'Sheher aur Ilake',
        paragraphs: [
          'Sindh ka sab se ghana abad sheher Karachi hai. Islamabad me sharah-e-khwandagi sab se zyada hai. Khyber Pass Peshawar ko Afghanistan se milata hai. Pak Punjab aur Indian Punjab ke darmiyan Wagah border hai.',
        ],
        list: [
          'Sindh ka sab se bara sheher — Karachi',
          'Sab se zyada literacy — Islamabad',
          'Khyber Pass — Peshawar ko Afghanistan se milata hai',
          'Wagah — Pak Punjab aur Indian Punjab ka border',
        ],
      },
      {
        heading: 'Sports aur Idaray',
        paragraphs: [
          'Pakistan ne Olympic hockey me 3 gold medal jeete (1960, 1968, 1984). NAB ke chairman Nazir Ahmed Butt hain — Sikandar Sultan Raja Chief Election Commissioner hain, NAB chairman nahi.',
        ],
        list: [
          'Olympic hockey gold — 3 (1960, 1968, 1984)',
          'NAB Chairman — Nazir Ahmed Butt',
        ],
      },
    ],
    mistakes: [
      'Tashkent Agreement ko "Soviet Union ne kiya" kehna — unhon ne sirf sulah karwayi thi.',
      'NAB chairman aur Chief Election Commissioner ko mix kar dena.',
      'Muslim League ki tareekh ghalat yaad karna.',
    ],
    tips: [
      'Tareekh ke sath waqia jor kar yaad karo (1965 → Tashkent, 1971 → Simla).',
      'Ohday (chairman waghera) waqt ke sath badalte hain — latest yaad rakho.',
    ],
    related: ['initial-test-guide', 'practice-papers-gk-revision'],
  },
];
