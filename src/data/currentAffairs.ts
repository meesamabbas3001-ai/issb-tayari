export type AffairsCategory = 'Defense' | 'National' | 'International' | 'Sports' | 'Economy';

export interface CurrentAffair {
  id: string;
  date: string;
  category: AffairsCategory;
  headline: string;
  summary: string;
  whyItMatters: string;
  source: string;
}

// Verified October 2026 current affairs for ISSB interview/GK prep.
// Every item below was reported by a named publication in October 2026.
// Summaries are written in our own words. No gossip, no entertainment, no crime.
export const lastUpdated = '12 October 2026';

export const currentAffairs: CurrentAffair[] = [
  {
    id: 'ca-01',
    date: '7 October 2026',
    category: 'Defense',
    headline: 'UN Secretary-General meets COAS & CDF at GHQ Rawalpindi',
    summary:
      'UN Secretary-General Antonio Guterres called on Field Marshal Syed Asim Munir, Chief of Army Staff and Chief of Defence Forces, at GHQ. According to the ISPR press release, they discussed regional security, the Kashmir dispute, India placing the Indus Waters Treaty in abeyance, terrorism from Afghanistan, and Pakistan’s role in UN peacekeeping. The UN chief paid tribute to Pakistan’s sacrifices in the war against terror.',
    whyItMatters:
      'Interviewers love asking about the COAS title (COAS & CDF), Pakistan’s UN peacekeeping role, and the Indus Waters Treaty issue.',
    source: 'ISPR press release (via NewsIn)',
  },
  {
    id: 'ca-02',
    date: '7 October 2026',
    category: 'Defense',
    headline: 'Belarus security chief meets COAS to expand defence cooperation',
    summary:
      'A high-level Belarus delegation led by Lt Gen Aleksandr Volfovich, State Secretary of the Security Council of Belarus, met Field Marshal Asim Munir at GHQ Rawalpindi. Both sides discussed the regional security environment and agreed to broaden bilateral defence and security cooperation.',
    whyItMatters:
      'Shows Pakistan’s growing defence ties beyond traditional partners — a good example if asked about Pakistan’s foreign defence relations.',
    source: 'ISPR (via The Pakistan Times)',
  },
  {
    id: 'ca-03',
    date: '1 October 2026',
    category: 'Defense',
    headline: 'ISPR DG rebuts Indian claim about retired Pakistani soldier',
    summary:
      'ISPR Director General Lt Gen Ahmed Sharif Chaudhry presented retired Havildar Muhammad Asif before the media in Rawalpindi, exposing India’s claim that the soldier had been killed as a terrorist in an encounter in occupied Kashmir. The DG called it a fabricated story, recalling past incidents like Uri, Pulwama and Pahalgam.',
    whyItMatters:
      'Tests your awareness of Pak-India information warfare — interviewers may ask how Pakistan counters false Indian narratives.',
    source: 'The News',
  },
  {
    id: 'ca-04',
    date: 'October 2026',
    category: 'Defense',
    headline: '271st Corps Commanders’ Conference vows action against proxies',
    summary:
      'Field Marshal Asim Munir presided over the 271st Corps Commanders’ Conference at GHQ. The forum reviewed counter-terrorism operations and resolved on decisive action against Indian-backed terrorist proxies, identified as Fitna Al Khawarij and Fitna Al Hindustan. The COAS also shared insights from recent visits to Iran, Turkiye, Azerbaijan, Saudi Arabia, the UAE and the United States.',
    whyItMatters:
      'Know the names Fitna Al Khawarij and Fitna Al Hindustan — these are the terms the state now uses for terrorist proxies.',
    source: 'ISPR (via Emra News)',
  },
  {
    id: 'ca-05',
    date: '29 September 2026',
    category: 'Defense',
    headline: 'PNS/M Hangor submarine test-fires anti-ship missile',
    summary:
      'The Pakistan Navy’s lead Hangor-class submarine, PNS/M Hangor, successfully test-fired a CM-708UNB anti-ship cruise missile in the North Arabian Sea. The Hangor-class (Type 039B) submarines are being inducted to strengthen Pakistan’s sea-denial capability.',
    whyItMatters:
      'Navy GK: the Hangor class is Pakistan’s newest submarine project — interviewers for naval entries often ask about it.',
    source: 'Quwa Defence News',
  },
  {
    id: 'ca-06',
    date: '5 October 2026',
    category: 'Defense',
    headline: 'Makkah Alliance agrees rapid force deployment to Saudi Arabia',
    summary:
      'At an emergency meeting of the Makkah Alliance’s political and defence committee in Riyadh, Pakistan, Saudi Arabia and Turkiye agreed to move toward rapid deployment of agreed forces in the Kingdom after Houthi missile and drone attacks on Saudi airports. The alliance is built on the Makkah Joint Defence Agreement signed on 7 August 2026, under which an attack on one member is treated as an attack on all.',
    whyItMatters:
      'A landmark defence pact — know the three member countries, the signing date, and the collective-defence principle.',
    source: 'Foreign Office joint statement (via PakEra)',
  },
  {
    id: 'ca-07',
    date: '8 October 2026',
    category: 'Defense',
    headline: 'Pakistan rejects NYT report on PAF jets against Houthis',
    summary:
      'Pakistan’s Ministry of Information rejected a New York Times report claiming PAF fighter jets were being used against Yemen’s Houthis, calling it “fake and fabricated”. The ministry urged international media to avoid speculative reporting on Pakistani forces under the Makkah Joint Defence Agreement, and earlier dismissed a Reuters claim of 30,000–40,000 troops deploying to Saudi Arabia as speculation.',
    whyItMatters:
      'Shows how to answer tricky questions: stick to the official position and distinguish verified facts from media speculation.',
    source: 'Ministry of Information (via WE News)',
  },
  {
    id: 'ca-08',
    date: '12 October 2026',
    category: 'Defense',
    headline: 'Army Aviation Mushshak crash near Quetta; two pilots martyred',
    summary:
      'A Pakistan Army Aviation Mushshak training aircraft crashed near Nawan Killi, Quetta, during a routine training mission due to a technical fault. Instructor Pilot Major Husnain Shehzad Humayun and Student Pilot Captain Abdul Samad embraced shahadat. An inquiry will determine the exact cause.',
    whyItMatters:
      'Know the aircraft (Mushshak trainer) and show respectful awareness — martyrdom of servicemen is asked about with sensitivity.',
    source: 'Islamabad Post',
  },
  {
    id: 'ca-09',
    date: '28 September 2026',
    category: 'Defense',
    headline: 'US Afghanistan War Commission delegation calls on COAS',
    summary:
      'A delegation of the US Afghanistan War Commission, led by co-chairs Shamila Chaudhary and Dr Colin Jackson, met Field Marshal Asim Munir at GHQ. The delegation, reviewing America’s 20-year engagement in Afghanistan, acknowledged Pakistan’s longstanding role and sacrifices during the conflict and its contribution to regional peace.',
    whyItMatters:
      'Useful for “Pakistan’s role in the Afghan war” questions — even the US review body acknowledged Pakistan’s sacrifices.',
    source: 'ISPR (via Newsman)',
  },
  {
    id: 'ca-10',
    date: '6–8 October 2026',
    category: 'International',
    headline: 'UN chief’s farewell visit; awarded Nishan-i-Imtiaz',
    summary:
      'UN Secretary-General Antonio Guterres paid a three-day official visit to Pakistan (6–8 October) at the invitation of Foreign Minister Ishaq Dar, meeting the President, Prime Minister, Foreign Minister and the COAS & CDF. President Asif Ali Zardari conferred the Nishan-i-Imtiaz on him at Aiwan-i-Sadr. Guterres leaves office on 31 December 2026 after two terms; Pakistan has contributed over 270,000 personnel to 48 UN peacekeeping missions since 1960.',
    whyItMatters:
      'Nishan-i-Imtiaz, UN peacekeeping numbers, and the SG’s tenure end — all classic interview facts in one event.',
    source: 'Foreign Office (via 99News, Daily Frontier Star)',
  },
  {
    id: 'ca-11',
    date: 'October 2026',
    category: 'International',
    headline: 'UN chief praises Pakistan’s US-Iran mediation role',
    summary:
      'During his Pakistan visit, the UN Secretary-General praised Pakistan’s diplomatic efforts in the Middle East, including its role in supporting negotiations between the United States and Iran and efforts that contributed to a memorandum of understanding establishing a ceasefire. UN spokesman Stephane Dujarric noted Pakistan’s use of diplomacy to bring opposing sides together.',
    whyItMatters:
      'A strong example of Pakistan’s positive diplomatic image — perfect for “Pakistan’s role in world peace” questions.',
    source: 'Voice of Vienna',
  },
  {
    id: 'ca-12',
    date: '6 October 2026',
    category: 'International',
    headline: 'Pakistan raises Indus Waters Treaty issue with UN leadership',
    summary:
      'Foreign Minister Ishaq Dar briefed the UN Secretary-General on Pakistan’s position that the Indus Waters Treaty remains a binding international agreement, rejecting India’s move to hold its obligations in abeyance. Dar also reiterated that the Kashmir dispute should be resolved per UN Security Council resolutions, and discussed Palestine and Afghanistan.',
    whyItMatters:
      'The Indus Waters Treaty dispute is one of the most likely current-affairs questions in any 2026 interview.',
    source: 'Foreign Office (via Islamabad Tribune)',
  },
  {
    id: 'ca-13',
    date: '11 October 2026',
    category: 'National',
    headline: 'Governor’s rule imposed in Khyber Pakhtunkhwa',
    summary:
      'President Asif Ali Zardari approved the imposition of emergency and governor’s rule in Khyber Pakhtunkhwa on the federal cabinet’s recommendation, suspending the PTI-led provincial government. Roads in Peshawar were blocked and the BRT bus service suspended amid heightened political tensions.',
    whyItMatters:
      'Major constitutional development — if asked, describe it factually and neutrally; never take a political side in an interview.',
    source: 'FTN News, Open Chronicle',
  },
  {
    id: 'ca-14',
    date: '7 October 2026',
    category: 'National',
    headline: 'Government proposes housing reform framework',
    summary:
      'Planning Minister Ahsan Iqbal chaired a National Economic Mission meeting presenting a housing and real-estate reform framework: digitised land records and one-window construction approvals by FY2029, targeting 300,000–400,000 new homes annually and mortgage finance reaching 5% of GDP by 2035.',
    whyItMatters:
      'Good for economy-linked national questions — shows you follow development policy, not just politics.',
    source: 'Imlaak News',
  },
  {
    id: 'ca-15',
    date: '7 October 2026',
    category: 'Economy',
    headline: 'Pakistan, IMF reach staff-level deal for about $1.2 billion',
    summary:
      'IMF staff and Pakistan reached agreement on the fourth review of the Extended Fund Facility and the third review of the Resilience and Sustainability Facility. Once the IMF Executive Board approves, Pakistan gets about $1.0 billion under the EFF and $210 million under the RSF, taking total disbursements to about $5.7 billion. The IMF estimated FY26 growth at 3.6%, September inflation at 10.3%, and reserves at about $21.5 billion.',
    whyItMatters:
      'The single most important economy fact of the month — know EFF vs RSF and that Board approval is still pending.',
    source: 'IMF (official press release)',
  },
  {
    id: 'ca-16',
    date: '6 October 2026',
    category: 'Economy',
    headline: 'Petrol price raised despite falling global oil prices',
    summary:
      'The federal government raised petrol by Rs0.88 to Rs393.64 per litre while cutting high-speed diesel by Rs1.88 to Rs397.76 per litre, effective 6 October. The decision came even as Brent crude fell to about $101 per barrel on higher Middle East exports and G7 supply measures.',
    whyItMatters:
      'Everyday-economy awareness — interviewers check whether you follow prices that affect common citizens.',
    source: 'Ghanamma News',
  },
  {
    id: 'ca-17',
    date: '3 October 2026',
    category: 'Sports',
    headline: 'India beat Pakistan in Asian Games cricket final',
    summary:
      'India defeated Pakistan by 19 runs in the Asian Games 2026 men’s cricket final at Nisshin, Japan. India posted 211/6 (Abhishek Sharma 61, Tilak Varma 51*) and Pakistan finished on 192/6 despite Hasan Nawaz’s fighting 96. India completed a golden double in Asian Games cricket.',
    whyItMatters:
      'Pak-India matches are always asked about — know the result, venue, and Pakistan’s top scorer.',
    source: 'Reuters (via TBS News)',
  },
  {
    id: 'ca-18',
    date: '9 October 2026',
    category: 'Sports',
    headline: 'Pakistan beat Sri Lanka in 1st T20I at Rawalpindi',
    summary:
      'Pakistan won the first T20I of Sri Lanka’s tour by 4 wickets at Rawalpindi Cricket Stadium. Chasing 183, Pakistan reached 187/6 in 18.5 overs, led by Sahibzada Farhan’s 89 off 53 balls — he was named Player of the Match. Naseem Shah took 3/36 for Pakistan.',
    whyItMatters:
      'A Pakistan win to balance the Asian Games loss — shows you follow current series, not just headlines.',
    source: 'Khel Now, Saptashwa TV',
  },
];
