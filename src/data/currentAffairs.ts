export type AffairsCategory = 'Defense' | 'National' | 'International' | 'Sports' | 'Economy';

export interface CurrentAffair {
  id: string;
  date: string;
  category: AffairsCategory;
  headline: string;
  summary: string;
  whyItMatters: string;
  source: string;
  sourceUrl?: string;
}

// Verified October 2026 current affairs for ISSB interview/GK prep.
// Every item below was reported by a named publication in October 2026.
// Summaries are written in our own words. No gossip, no entertainment, no crime.
// sourceUrl is the direct article link; the UI renders the source as a clickable link.
export const lastUpdated = '18 October 2026';

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
  {
    id: 'ca-19',
    date: '11 October 2026',
    category: 'Defense',
    headline: 'Security forces foil infiltration bid in Kurram; soldier martyred',
    summary:
      'Security forces detected a group attempting to cross into Pakistan from Afghanistan near Kurram on 10 October and engaged them. According to ISPR, 12 khwarij and Afghan Taliban personnel were killed while Naib Subedar Hidayat Aman, 40, embraced shahadat during the exchange of fire. The military said Afghan Taliban posts opened fire to support the infiltration attempt, and a sanitisation operation is under way in the area.',
    whyItMatters:
      'Border-security questions are common — know what ISPR said and why the Pakistan-Afghanistan border stays tense.',
    source: 'The News',
    sourceUrl:
      'https://www.thenews.pk/story/1442395-security-forces-kill-12-terrorists-afghan-taliban-personnel-in-foiled-kurram-infiltration-bid',
  },
  {
    id: 'ca-20',
    date: '11 October 2026',
    category: 'International',
    headline: 'Pakistan condemns Houthi attack on Riyadh airport',
    summary:
      'Pakistan strongly condemned the Houthi attack on the passenger terminal at King Khalid International Airport in Riyadh on 10 October, calling the targeting of a civilian airport a violation of international law. Deputy Prime Minister and Foreign Minister Ishaq Dar said Pakistan remains firmly committed to Saudi Arabia’s sovereignty and security under the Makkah Joint Defence Agreement.',
    whyItMatters:
      'Shows Pakistan’s defence diplomacy in action — link it to the Makkah Joint Defence Agreement of 7 August 2026.',
    source: 'WE News',
    sourceUrl: 'https://wenewsenglish.com/pakistan-concerned-over-houthi-attack/',
  },
  {
    id: 'ca-21',
    date: '12 October 2026',
    category: 'Economy',
    headline: 'Petrol price cut by Rs2.93, diesel up 61 paisas from 13 October',
    summary:
      'The federal government reduced petrol by Rs2.93 per litre to Rs395.37 and raised high-speed diesel by Rs0.61 to Rs396.85 per litre, effective 13 October 2026. The Petroleum Division said the revision reflects movements in international oil prices and related costs.',
    whyItMatters:
      'Everyday-economy awareness — interviewers check whether you follow prices that affect ordinary citizens.',
    source: 'Mettis Link News',
    sourceUrl:
      'https://mettisglobal.news/Petrol-price-cut-by-Rs293-diesel-rises-by-Rs061-64147',
  },
  {
    id: 'ca-22',
    date: '13 October 2026',
    category: 'Defense',
    headline: 'Pakistan Army test-fires Fatah-2 Extended Range hypersonic ballistic missile',
    summary:
      'The Pakistan Army successfully test-fired the extended-range version of the Fatah-2 hypersonic ballistic missile on 13 October, ISPR announced. The system carries advanced navigation and modern avionics, hits targets with high precision, and is designed to defeat enemy missile defence systems through its unique trajectory and manoeuvrability. The launch was witnessed by the Commander of the Army Rocket Force Command, and the President, Prime Minister, COAS & CDF and Services Chiefs congratulated the scientists and engineers.',
    whyItMatters:
      'Missile-program GK: know the Fatah-2 ER, the Army Rocket Force Command, and why a manoeuvrable trajectory matters against missile defences.',
    source: 'Sabah News',
    sourceUrl:
      'https://sabahnews.net/english/news/pakistan-army-conducts-successful-test-launch-of-hypersonic-ballistic-missile-fatah2-extended-range-er-ispr/',
  },
  {
    id: 'ca-23',
    date: '13 October 2026',
    category: 'International',
    headline: 'First Makkah Alliance Secretary General calls on President Zardari',
    summary:
      'Lieutenant General (retired) Nauman Mahmood, the first Secretary General of the Makkah Alliance for Defence, called on President Asif Ali Zardari at Aiwan-i-Sadr. He will lead the Alliance’s General Secretariat being set up in Riyadh. President Zardari said the Makkah Joint Defence Agreement, signed by Pakistan, Saudi Arabia and Turkiye on 7 August 2026, is purely defensive in nature, is not directed against any country, and does not amount to a new bloc.',
    whyItMatters:
      'Key foreign-policy fact: the Makkah pact’s three members, the 7 August 2026 signing date, and its purely defensive character.',
    source: 'WE News',
    sourceUrl:
      'https://wenewsenglish.com/pakistan-reaffirms-commitment-to-regional-peace-defensive-cooperation-under-makkah-defence-agreement/',
  },
  {
    id: 'ca-24',
    date: '13 October 2026',
    category: 'International',
    headline: 'Oman Foreign Minister arrives for 8th Pakistan-Oman Joint Ministerial Commission',
    summary:
      'Oman’s Foreign Minister Sayyid Badr bin Hamad bin Hamood Albusaidi arrived in Islamabad on a two-day official visit (13–14 October) to lead Oman’s delegation at the 8th Pakistan-Oman Joint Ministerial Commission. The JMC, co-chaired by the two foreign ministers, covers trade, defence, energy, maritime security, labour and other fields, and the Omani minister will also meet Deputy Prime Minister Ishaq Dar and call on Prime Minister Shehbaz Sharif.',
    whyItMatters:
      'Classic “Pakistan’s relations with Gulf states” material — know what the JMC covers and why Oman matters for maritime security.',
    source: 'WE News',
    sourceUrl:
      'https://wenewsenglish.com/oman-foreign-minister-arrives-in-pakistan-on-official-visit/',
  },
  {
    id: 'ca-25',
    date: '12 October 2026',
    category: 'International',
    headline: 'Asim Iftikhar Ahmad takes charge as Pakistan’s 34th Foreign Secretary',
    summary:
      'Ambassador Asim Iftikhar Ahmad formally assumed charge as Pakistan’s 34th Foreign Secretary and called on Deputy Prime Minister and Foreign Minister Ishaq Dar at the Foreign Office. He previously served as Pakistan’s Permanent Representative to the United Nations in New York. He succeeds Ambassador Amna Baloch, who retired from government service after leading the Foreign Office since September 2024.',
    whyItMatters:
      '“Who is Pakistan’s Foreign Secretary?” is a classic interview GK question — keep this name current.',
    source: 'Ghanamma News',
    sourceUrl:
      'https://www.ghanamma.com/2026/10/13/asim-iftikhar-assumes-charge-as-foreign-secretary-calls-on-ishaq-dar/',
  },
  {
    id: 'ca-26',
    date: '9–13 October 2026',
    category: 'Sports',
    headline: 'Pakistan win T20I series 2–1 against Sri Lanka at Rawalpindi',
    summary:
      'Pakistan won the three-match T20I series against Sri Lanka 2–1 at Rawalpindi Cricket Stadium. Pakistan took the first T20I by 4 wickets and the second by 82 runs on 11 October (Maaz Sadaqat 96 off 51, Sahibzada Farhan 73 off 44), while Sri Lanka won the final T20I by 8 wickets on 13 October through Kusal Mendis’s unbeaten 87. Captain Sahibzada Farhan, in his first series in charge, scored 89, 73 and 76 and was named Player of the Series.',
    whyItMatters:
      'A Pakistan home series win to balance the Asian Games final loss — know the series result and standout performers.',
    source: 'Cricket Daily',
    sourceUrl:
      'https://cricketdaily.net/article/t20/pakistan-vs-sri-lanka-3rd-t20i-2026-kusal-mendis-87-consolation-win',
  },
  {
    id: 'ca-27',
    date: '14 October 2026',
    category: 'Defense',
    headline: 'PM Shehbaz reaffirms full defence support for Saudi Arabia under Makkah pact',
    summary:
      'Prime Minister Shehbaz Sharif met Lieutenant General (retired) Nauman Mahmood, the first Secretary General of the Makkah Defence Alliance, in Islamabad on 14 October. According to the Prime Minister’s Office, he pledged that Pakistan stands shoulder to shoulder with Saudi Arabia and will defend its sovereignty and territorial integrity, backing the Kingdom’s right to self-defence. Mahmood briefed the Prime Minister on plans to deepen defence and strategic cooperation under the Makkah Joint Defence Agreement signed on 7 August 2026.',
    whyItMatters:
      'A follow-up to yesterday’s item on the Alliance’s Secretary General — interviewers often ask for the latest step in Pakistan–Saudi defence ties.',
    source: 'WE News',
    sourceUrl:
      'https://wenewsenglish.com/pm-shehbaz-reaffirms-pakistans-support-for-saudi-arabia/',
  },
  {
    id: 'ca-28',
    date: '14 October 2026',
    category: 'International',
    headline: 'Houthi missile strikes batter Saudi Arabia; one Pakistani resident killed in Riyadh',
    summary:
      'A weekend series of Houthi missile and drone strikes heavily disrupted Saudi Arabia. King Khalid International Airport in Riyadh was hit on Saturday, killing 13 people and suspending civil aviation, and was struck again on Sunday, killing one Pakistani resident and wounding 11 other nationals. The attacks continued into late Tuesday, with a strike on a Saudi Aramco administrative building in Dhahran causing a limited fire and intercepted-missile debris wounding four people in Riyadh.',
    whyItMatters:
      'Shows why the Makkah defence pact matters — and the safety of Pakistanis working in the Gulf is a classic interview topic.',
    source: 'Pakistan TV',
    sourceUrl:
      'https://pakistantv.com/article/pakistan-pledges-full-support-for-saudi-arabia-under-makkah-defense-pact',
  },
  {
    id: 'ca-29',
    date: '14 October 2026',
    category: 'International',
    headline: 'Russian Interior Minister visits Pakistan; MoU on combating organised crime signed',
    summary:
      'Russian Interior Minister Vladimir Kolokoltsev, on an official visit to Pakistan on 14 October, met Prime Minister Shehbaz Sharif, Deputy Prime Minister Ishaq Dar and Chief of Defence Forces Field Marshal Asim Munir at GHQ Rawalpindi. Both sides agreed to deepen cooperation in trade, investment, energy, culture and tourism, and a memorandum of understanding on strengthening cooperation in combating organised crime was signed. The Russian minister acknowledged the professionalism and sacrifices of Pakistan’s armed forces in the fight against terrorism.',
    whyItMatters:
      'Pakistan–Russia security ties keep growing — a good example for “Pakistan’s defence relations” questions.',
    source: 'Sabah News, WE News',
    sourceUrl:
      'https://sabahnews.net/english/news/pm-shehbaz-reaffirms-pakistans-commitment-to-further-deepening-its-friendly-relations-with-the-russian-federation/',
  },
  {
    id: 'ca-30',
    date: '14 October 2026',
    category: 'National',
    headline: 'PTI challenges KP emergency rule in Peshawar High Court',
    summary:
      'The PTI on Wednesday challenged the governor’s rule in Khyber Pakhtunkhwa at the Peshawar High Court, days after President Asif Ali Zardari suspended the PTI-led provincial government on the federal cabinet’s recommendation, citing failure to tackle militancy. The court challenge keeps the constitutional dispute over the province’s administration in play.',
    whyItMatters:
      'A continuing constitutional story — if asked, stick to the facts and stay neutral, as yesterday’s interview tip advised.',
    source: 'Sowetan (South Africa)',
    sourceUrl:
      'https://www.sowetan.co.za/news/world/2026-10-14-imran-khans-woes-compound-as-pakistan-suspends-his-provincial-government/',
  },
  {
    id: 'ca-31',
    date: '15 October 2026',
    category: 'Defense',
    headline: 'Security forces kill five Fitna al-Hindustan terrorists in Washuk IBO',
    summary:
      'Security forces killed five terrorists affiliated with the Indian proxy Fitna al-Hindustan during an intelligence-based operation in Balochistan’s Washuk district on the night of 12-13 October. According to ISPR, a terrorist hideout was busted in swift action and a huge cache of weapons, ammunition and explosives was recovered. Sanitisation operations are continuing in the area under the vision of Azm-e-Istehkam.',
    whyItMatters:
      'Know the state’s terminology — Fitna al-Hindustan for India-backed proxies — and Azm-e-Istehkam, the counter-terrorism vision driving such operations.',
    source: 'Islamabad Post',
    sourceUrl:
      'https://islamabadpost.com.pk/security-forces-kill-five-india-backed-terrorists-in-balochistan-ibo-ispr/',
  },
  {
    id: 'ca-32',
    date: '14 October 2026',
    category: 'International',
    headline: 'Pakistan and Oman sign six agreements at 8th Joint Ministerial Commission',
    summary:
      'Pakistan and Oman signed six agreements and MoUs at the 8th session of the Pakistan-Oman Joint Ministerial Commission in Islamabad, co-chaired by Deputy Prime Minister Ishaq Dar and Omani Foreign Minister Sayyid Badr Al Busaidi. The documents cover diplomatic coordination, visa exemption for diplomatic and official passport holders, IT and telecommunications, media cooperation, and archives. Prime Minister Shehbaz Sharif witnessed the signing and called Oman a brotherly maritime neighbour.',
    whyItMatters:
      'A good example of bilateral diplomacy for “Pakistan’s relations with Gulf countries” — note the JMC is the key mechanism, and the visa exemption applies only to diplomatic and official passports.',
    source: 'The Diplomatic Insight',
    sourceUrl:
      'https://thediplomaticinsight.com/pakistan-oman-sign-six-agreements-expand-cooperation/',
  },
  {
    id: 'ca-33',
    date: '15 October 2026',
    category: 'International',
    headline: 'Dar speaks to Turkish and Egyptian foreign ministers on regional developments',
    summary:
      'Deputy Prime Minister and Foreign Minister Ishaq Dar held separate phone conversations with the foreign ministers of Turkiye and Egypt to discuss regional and international developments. The calls covered the situation in Gaza and Palestine, and the agenda of the OIC Council of Ministers meeting scheduled for 17-18 October in Iraq. All sides agreed to stay closely engaged on dialogue and de-escalation.',
    whyItMatters:
      'Shows Pakistan’s active Middle East diplomacy — the OIC Council of Ministers meeting in Iraq (17-18 October) is a date worth remembering.',
    source: 'WE News English',
    sourceUrl:
      'https://wenewsenglish.com/pakistan-deputy-pm-discusses-regional-developments-with-turkish-egyptian-foreign-ministers/',
  },
  {
    id: 'ca-34',
    date: '12 October 2026',
    category: 'Economy',
    headline: 'Pakistan assumes chair of Borrowers’ Platform Governing Council',
    summary:
      'Finance Minister Muhammad Aurangzeb accepted the chairmanship of the Governing Council of the Borrowers’ Platform on behalf of Pakistan during the IMF-World Bank Annual Meetings in Bangkok. The UN-supported platform helps developing countries share expertise on debt management and development financing — it is meant for cooperation, not collective bargaining against creditors. Pakistan set a 2026-27 work plan focused on stronger debt-management practices and innovative financing instruments.',
    whyItMatters:
      'A landmark economic-diplomacy moment: Pakistan moves from borrower to chair of a debtor-country forum — and know its stated purpose is cooperation, not bargaining.',
    source: 'The Pakistan Today',
    sourceUrl:
      'https://pakistanstoday.com.pk/today-news/pakistan-takes-lead-role-in-global-borrowers-platform/',
  },
  {
    id: 'ca-35',
    date: '14 October 2026',
    category: 'National',
    headline: 'Parliament endorses KP emergency and governor’s rule',
    summary:
      'Both houses of Parliament adopted resolutions endorsing President Asif Ali Zardari’s October 11 proclamation of emergency under Article 232 and governor’s rule under Article 234 in Khyber Pakhtunkhwa. The National Assembly approved the emergency resolution by majority vote after a debate opened by Law Minister Azam Nazeer Tarar, and the Senate followed; opposition PTI members walked out in protest.',
    whyItMatters:
      'Know Articles 232 and 234 and the sequence — presidential proclamation, then parliamentary approval within ten days — a classic constitutional current-affairs question.',
    source: 'WE News English',
    sourceUrl:
      'https://wenewsenglish.com/pakistans-parliament-endorses-imposition-of-emergency-in-khyber-pakhtunkhwa/',
  },
  {
    id: 'ca-36',
    date: '16 October 2026',
    category: 'Defense',
    headline: 'FO warns India of “forceful response” to any aggression',
    summary:
      'At the weekly media briefing, Foreign Office spokesperson Sajjad Haider Khan condemned recent remarks by India’s Defence Minister Rajnath Singh as provocative, warned that any aggression would be met with a forceful response, and said Pakistan’s restraint should not be mistaken for weakness. He pointed to the May 2025 military confrontation as proof of Pakistan’s capability and resolve to defend its sovereignty.',
    whyItMatters:
      'The May 2025 conflict is now a standard interview reference — know how Pakistan’s Foreign Office frames its deterrence posture.',
    source: 'WE News English',
    sourceUrl:
      'https://wenewsenglish.com/pakistan-warns-india-of-forceful-response-to-any-military-aggression/',
  },
  {
    id: 'ca-37',
    date: '17 October 2026',
    category: 'International',
    headline: 'FO stays neutral on Saudi-Iran Houthi blame while backing Makkah pact',
    summary:
      'At the weekly press briefing, the Foreign Office spokesperson declined to endorse Saudi Arabia’s accusation that Iran arms Yemen’s Houthis, saying disputes can only be settled through negotiation and peaceful means. At the same time, Pakistan reaffirmed its commitment to Saudi Arabia’s security under the Makkah Joint Defence Agreement, said one Pakistani was killed and six injured in the recent attacks on the Kingdom, and gave no timeline for any operational move under the pact.',
    whyItMatters:
      'A textbook example of Pakistan balancing ties with two regional powers — exactly the kind of foreign-policy question ISSB discussion rounds probe.',
    source: 'Khabarwire (citing Express Tribune, Geo News)',
    sourceUrl: 'https://khabarwire.com/blog/fo-saudi-iran-balancing-act-2026-10-17/',
  },
  {
    id: 'ca-38',
    date: '16 October 2026',
    category: 'Economy',
    headline: 'Aurangzeb: economy back on growth path; 3.7% GDP in FY26, near 4% in FY27',
    summary:
      'Finance Minister Muhammad Aurangzeb told the Atlantic Council in Bangkok that Pakistan’s economy is back on a growth path, with GDP expanding 3.7% in FY26 and around 4% expected in FY27 as industry and agriculture recover. He said tax collection has risen 40% in two years, lifting the tax-to-GDP ratio to about 10.3%, while the government pushes ahead with privatising power distribution companies, outsourcing airport operations, and a new Panda Bond issue.',
    whyItMatters:
      'Growth rate, tax-to-GDP ratio and the privatisation list are staple economic current-affairs questions for ISSB interviews.',
    source: 'Mettis Global News',
    sourceUrl:
      'https://mettisglobal.news/Senator-Aurangzeb-Atlantic-Council-discuss-Pakistans-path-to-sustainable-growth-64246',
  },
  {
    id: 'ca-39',
    date: '17 October 2026',
    category: 'Defense',
    headline: 'Pakistani forces clash with Afghan Taliban at northwestern border',
    summary:
      'Pakistani forces and Afghan Taliban personnel exchanged fire at several locations along Pakistan\u2019s northwestern border on Saturday, the Associated Press reported. Pakistani security officials said troops backed by artillery destroyed Taliban posts and killed an unspecified number of Pakistani Taliban militants trying to cross into Pakistan from eastern Afghanistan.',
    whyItMatters:
      'Border security with Afghanistan keeps coming up \u2014 know the difference between the Afghan Taliban and the Pakistani Taliban (TTP), and why infiltration attempts keep sparking clashes.',
    source: 'Associated Press',
    sourceUrl:
      'https://www.ottumwacourier.com/news/national_news/pakistani-forces-afghan-taliban-exchange-fire-after-militants-attempt-to-infiltrate-pakistan/article_4b352992-4707-5957-9b1a-1493ebb896bb.html',
  },
  {
    id: 'ca-40',
    date: '16 October 2026',
    category: 'International',
    headline: 'Pakistan says talks with Afghanistan cannot be unconditional',
    summary:
      'Foreign Office spokesperson Sajjad Haider Khan said at the weekly briefing that Pakistan is ready for state-level talks with Afghanistan, but any dialogue must be tied to verifiable action against terrorist groups operating from Afghan soil. He named the Tehreek-i-Taliban Pakistan and the Balochistan Liberation Army as Pakistan\u2019s main concerns, and said Islamabad would welcome sincere mediation by friendly countries while noting no formal Russian mediation proposal is currently on the table.',
    whyItMatters:
      'Foreign-policy questions often test whether you know Pakistan\u2019s exact position \u2014 the key phrases here are \u201cverifiable action\u201d and the TTP and BLA.',
    source: 'The Diplomatic Insight',
    sourceUrl: 'https://thediplomaticinsight.com/pakistan-says-talks-with-afghanistan-cannot-be-unconditional/',
  },
  {
    id: 'ca-41',
    date: '17 October 2026',
    category: 'Economy',
    headline: 'Pakistan IT exports hit $435 million in September \u2014 second-highest ever',
    summary:
      'Pakistan\u2019s IT and technology exports rose 18% year-on-year to $435 million in September, the second-highest monthly figure on record, Adviser to the Finance Minister Khurram Schehzad announced. The figure sits just $2 million below the all-time high of $437 million set in December 2025, while first-quarter FY27 IT exports reached $1.25 billion, up about 18% from last year.',
    whyItMatters:
      'The IT sector is Pakistan\u2019s fastest-growing export engine \u2014 know the numbers and why they matter for earning foreign exchange without borrowing.',
    source: 'TechJuice',
    sourceUrl: 'https://www.techjuice.pk/pakistans-ict-exports-reach-435-million-in-september-2026/',
  },
  {
    id: 'ca-42',
    date: '16 October 2026',
    category: 'Economy',
    headline: 'July\u2013September exports rise 11.13% to $8.445 billion, but gains uneven',
    summary:
      'Pakistan\u2019s merchandise exports grew 11.13% to $8.445 billion in July\u2013September 2026, with September alone rising to $2.961 billion, the Pakistan Bureau of Statistics reported. Analysts noted the gains were concentrated in a few sectors \u2014 textiles grew while fruit, vegetable and pharmaceutical exports declined \u2014 and warned the recovery needs sector-specific government action.',
    whyItMatters:
      'Shows honest economic awareness: a headline number can hide weak sectors \u2014 interviewers respect candidates who see the whole picture.',
    source: 'Energy Update',
    sourceUrl:
      'https://www.energyupdate.com.pk/pakistans-exports-rise-11-13-to-8-445-billion-decline-in-fruit-vegetable-and-pharmaceutical-sectoral-based-government-action-needed-internationally-accredited-testing-laboratories/',
  },
  {
    id: 'ca-43',
    date: '18 October 2026',
    category: 'Defense',
    headline: 'Four Fitna al-Hindustan terrorists killed in Kalat IBO; Major Wajahat Waheed martyred in Gwadar',
    summary:
      'Security forces killed four members of the Indian-backed Fitna al-Hindustan during an intelligence-based operation in Jhatakabad, Kalat, and recovered a large cache of weapons and ammunition, ISPR said. During a clearance operation in Shadi Kaur, Gwadar, Major Wajahat Waheed, 34, of Lahore embraced martyrdom when an IED hit the detachment he was leading.',
    whyItMatters:
      'Martyrdom of officers and the Fitna al-Hindustan terminology are frequent interview topics — know the facts and show respectful awareness.',
    source: 'ISPR (via Khyber Chronicles)',
    sourceUrl:
      'https://khyberchronicles.pk/balochistan-4-fitna-al-hindustan-operatives-killed-in-kalat-pakistan-army-major-martyred-in-gwadar-ied-blast-ispr/',
  },
  {
    id: 'ca-44',
    date: '18 October 2026',
    category: 'International',
    headline: 'Maldives President Muizzu to make state visit to Pakistan, 20–22 October',
    summary:
      'President Dr Mohamed Muizzu will undertake a state visit to Pakistan from 20 to 22 October at the invitation of Prime Minister Shehbaz Sharif, accompanied by the First Lady and cabinet ministers. It is the first state visit by a Maldivian president in 11 years and coincides with 60 years of diplomatic relations between the two countries, established in 1966. Several MoUs and a Pakistan–Maldives Business Forum are expected during the visit.',
    whyItMatters:
      'State visits are classic interview GK — know the guest, the dates, the 11-year gap and the 60th anniversary of diplomatic relations.',
    source: 'Sabah News',
    sourceUrl:
      'https://sabahnews.net/english/news/president-of-maldives-to-undertake-a-state-visit-to-pakistan/',
  },
  {
    id: 'ca-45',
    date: '18 October 2026',
    category: 'International',
    headline: 'Dar speaks to Iranian FM Araghchi; Pakistan urges diplomacy on US-Iran tensions',
    summary:
      'Deputy Prime Minister and Foreign Minister Ishaq Dar called Iranian Foreign Minister Abbas Araghchi to discuss rising regional tensions, including the US-Iran standoff and renewed hostilities in Yemen. Dar stressed that dialogue and diplomacy remain the only way forward, and both sides agreed to stay in close contact ahead of the OIC foreign ministers’ meeting in Baghdad. Dar also discussed the Houthi attacks with his Egyptian counterpart.',
    whyItMatters:
      'Shows Pakistan’s balancing diplomacy in a volatile region — interviewers probe how Pakistan manages ties with the US, Iran and Saudi Arabia at once.',
    source: 'ADN News English',
    sourceUrl:
      'https://english.adnnews.tv/pakistan-urges-diplomacy-as-iran-dismisses-us-threats-amid-regional-tensions/',
  },
  {
    id: 'ca-46',
    date: '18 October 2026',
    category: 'Sports',
    headline: 'Pakistan beat Sri Lanka by 37 runs in ODI tri-series clash',
    summary:
      'Pakistan posted 305, anchored by Salman Ali Agha’s 107 off 90 balls, and bowled Sri Lanka out for 268 in an ODI tri-series match. Babar Azam’s 45 took him past 16,000 international runs — only the fifth Pakistani to reach that mark — and a Faheem Ashraf relay catch completed a spill by debutant keeper Saad Baig for the fielding highlight.',
    whyItMatters:
      'Know the result, the standout innings and Babar’s 16,000-run milestone — Pak-SL results and batting records are common interview questions.',
    source: 'Sports Now',
    sourceUrl:
      'https://www.sports-now.com/cricket/pakistan-beat-sri-lanka-odi-tri-series-highlights-article-156363173',
  },
  {
    id: 'ca-47',
    date: '17 October 2026',
    category: 'Sports',
    headline: 'Pakistan hosts first international women’s W15 tennis tournament in Islamabad',
    summary:
      'Thirty female players from 17 countries competed in the Junaid Family Foundation Women’s W15 Futures tournament in Islamabad — the first women’s tournament at this level ever held in Pakistan. US Chargé d’Affaires Natalie Baker called it a milestone for women’s sports and sports diplomacy at the closing ceremony on 17 October.',
    whyItMatters:
      'A first for Pakistan in women’s sport — landmarks like this are easy, impressive interview facts.',
    source: 'Islamabad Post',
    sourceUrl:
      'https://islamabadpost.com.pk/us-charge-daffaires-commends-jff-for-organizing-historic-womens-tennis-tournament-in-pakistan/',
  },
];
