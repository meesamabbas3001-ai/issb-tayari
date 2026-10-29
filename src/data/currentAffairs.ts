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
export const lastUpdated = '29 October 2026';

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
  {
    id: 'ca-48',
    date: '19 October 2026',
    category: 'Defense',
    headline: 'DG ISPR: Pakistan may review Yemen request for military help; warns of Makkah pact collective deterrence',
    summary:
      'ISPR Director General Lt Gen Ahmed Sharif Chaudhry told Independent Arabia that Pakistan was not aware of any formal Yemeni request for military support, but any such request would be evaluated by the government. He warned that if Middle East negotiations fail and military confrontation follows, the Makkah Joint Defence Agreement’s collective deterrence between Pakistan, Saudi Arabia and Turkiye could come into play, calling the defence of Saudi Arabia and the holy sites a foremost priority.',
    whyItMatters:
      'Know what the MJDA (Makkah Joint Defence Agreement) is and who the DG ISPR is — interviewers ask about Pakistan’s defence pacts and the military’s media role.',
    source: 'DNA News Agency',
    sourceUrl:
      'https://dnanews.com.pk/pakistan-may-review-military-help-to-yemen-if-requested-says-ispr-chief-amid-houthi-attacks-on-saudi-arabia/',
  },
  {
    id: 'ca-49',
    date: '19 October 2026',
    category: 'Defense',
    headline: 'Field Marshal Asim Munir meets new Saudi envoy; reviews defence pact progress',
    summary:
      'Chief of Defence Staff and Chief of Army Staff Field Marshal Syed Asim Munir met Saudi Arabia’s newly appointed ambassador Rajeh Al-Buqami at GHQ Rawalpindi. According to the ISPR, both sides expressed satisfaction over progress under the Pakistan-Saudi joint defence agreement and discussed strengthening defence cooperation, institutional ties and the regional security situation.',
    whyItMatters:
      'The COAS title (COAS & CDS) and the Pak-Saudi defence agreement are interview staples — know who met whom and what pact was reviewed.',
    source: 'Bloom Pakistan',
    sourceUrl:
      'https://bloompakistan.com/asim-munir-saudi-envoy-defence-pact/',
  },
  {
    id: 'ca-50',
    date: '19 October 2026',
    category: 'International',
    headline: 'Ishaq Dar in Dushanbe; Pakistan, Tajikistan vow stronger ties at SCO meeting',
    summary:
      'Deputy Prime Minister and Foreign Minister Ishaq Dar met Tajikistan’s Prime Minister Qohir Rasulzoda in Dushanbe, where he leads Pakistan’s delegation to the SCO Council of Heads of Government meeting on 19–20 October. Both sides agreed to strengthen cooperation in trade, investment, energy, connectivity, defence and culture, and Tajikistan’s prime minister appreciated Pakistan’s mediation efforts in the US-Iran tensions.',
    whyItMatters:
      'Know what the SCO is and Pakistan’s role in it — regional organisations and Pakistan’s diplomacy are classic interview topics.',
    source: 'Pakistan TV',
    sourceUrl:
      'https://pakistantv.com/article/pakistan-s-fm-dar-to-attend-sco-council-of-heads-of-government-meeting-in-dushanbe',
  },
  {
    id: 'ca-51',
    date: '19 October 2026',
    category: 'International',
    headline: 'Pakistan, Egypt FMs condemn Houthi attacks on Saudi Arabia; seek early quadrilateral meeting',
    summary:
      'Ishaq Dar and Egypt’s Foreign Minister Badr Abdelatty condemned Houthi attacks on Saudi Arabia in a phone call, affirming full solidarity with Saudi Arabia’s sovereignty, security and territorial integrity. They discussed strengthening cooperation in the quadrilateral group of Saudi Arabia, Pakistan, Egypt and Turkiye and hoped its next meeting would be held as soon as possible.',
    whyItMatters:
      'Shows how Pakistan coordinates with the Muslim world on regional crises — useful for questions on Pakistan’s foreign policy priorities.',
    source: 'Twasl News',
    sourceUrl:
      'https://twaslnews1.twaslnews.com/6201619/',
  },
  {
    id: 'ca-52',
    date: '19 October 2026',
    category: 'Economy',
    headline: 'National Accounts Committee trims FY26 GDP growth to 3.65%; Q4 slows to 2%',
    summary:
      'The National Accounts Committee approved revised national accounts showing Pakistan’s economy grew 3.65% in FY26, slightly below the earlier 3.70% estimate, with fourth-quarter growth slowing to 2%. The economy’s size was put at Rs126.4 trillion ($450.4 billion), with per capita income at Rs531,897 ($1,896); the committee also revised FY25 growth down to 3.11%.',
    whyItMatters:
      'Economic awareness matters in interviews — know the current GDP figure, per capita income and who approves national accounts (NAC at Pakistan Bureau of Statistics).',
    source: 'Mettis Global News',
    sourceUrl:
      'https://mettisglobal.news/Pakistans-economy-grows-2-in-Q4-FY26-64312',
  },
  {
    id: 'ca-53',
    date: '20 October 2026',
    category: 'International',
    headline: 'Türkiye sends Mecca defence pact to parliament for ratification',
    summary:
      'Türkiye has submitted the Mecca Joint Defence Agreement with Pakistan and Saudi Arabia to parliament for ratification, Reuters reported, citing three parliamentary sources. Signed in August, the pact treats an armed attack on any one member as an attack on all; the parliamentary foreign affairs commission could debate it as early as Friday.',
    whyItMatters:
      "Know how defence alliances actually get made — ratification, NATO-style Article 5 clauses, and Pakistan's place in a new collective-deterrence bloc are classic interview material.",
    source: 'Reuters',
    sourceUrl:
      'https://965wtou.com/2026/10/20/turkey-submits-saudi-pakistan-defence-pact-to-parliament-for-ratification-sources-say/',
  },
  {
    id: 'ca-54',
    date: '19 October 2026',
    category: 'International',
    headline: 'Army chief Asim Munir in Tehran as Pakistan mediates between US and Iran',
    summary:
      "Field Marshal Asim Munir was due to visit Tehran, according to a Pakistani official and Iranian media, in the latest sign of Pakistan's mediating role between the United States and Iran this year. The visit follows summer talks focused on preventing further escalation, reopening the Strait of Hormuz and ending the conflict quickly.",
    whyItMatters:
      "Pakistan's mediator role in a major international crisis is a strong foreign-policy point — know the Strait of Hormuz angle and the name and rank of Pakistan's army chief.",
    source: 'Reuters',
    sourceUrl:
      'https://www.mix929.com/2026/10/19/pakistan-army-chief-asim-munir-to-visit-tehran-on-tuesday/',
  },
  {
    id: 'ca-55',
    date: '20 October 2026',
    category: 'Sports',
    headline: 'Pakistan thrash England by 87 runs to make it two from two in ODI tri-series',
    summary:
      "All-rounder Arafat Minhas starred with bat and ball as Pakistan beat England by 87 runs in Rawalpindi, their second straight win in the ODI tri-series. After Hasan Nawaz's 79 and Minhas's 59 lifted Pakistan to 302 for 9, Minhas took a career-best 6 for 40 to bowl England out for 215 in 38.4 overs.",
    whyItMatters:
      'Sports achievements are common GK questions in interviews — know the player of the match, the score and what a tri-series means.',
    source: 'The News',
    sourceUrl:
      'https://www.thenews.pk/story/1444076-pakistan-outclass-england-to-claim-second-odi-tri-series-win',
  },
  {
    id: 'ca-56',
    date: '21 October 2026',
    category: 'International',
    headline: 'Dar confirms Pakistan relaying messages in indirect US-Iran talks; Washington shared 15 points',
    summary:
      'Deputy Prime Minister and Foreign Minister Ishaq Dar has confirmed that indirect talks between the United States and Iran are underway through messages relayed by Pakistan, aimed at de-escalating the Middle East conflict. He said Washington has shared a set of 15 points that are now under consideration by Tehran, with Turkiye and Egypt supporting the effort. Prime Minister Shehbaz Sharif has separately offered to host direct US-Iran talks subject to mutual agreement.',
    whyItMatters:
      'Pakistan acting as the official channel between two major powers is a classic foreign-policy question - know the 15-points detail and the regional support angle.',
    source: 'The South Asia Times',
    sourceUrl:
      'https://thesouthasiatimes.com/story/Pakistan-IshaqDar-March26',
  },
  {
    id: 'ca-57',
    date: '21 October 2026',
    category: 'International',
    headline: 'Pakistan, Maldives sign 20 MoUs; agree to raise two-way trade to $200m',
    summary:
      'Pakistan and the Maldives signed 20 memorandums of understanding covering defence, IT, education, health and fisheries during the three-day state visit of President Mohamed Muizzu to Pakistan. The two sides agreed to raise bilateral trade from $13.9 million to $200 million within two years. Deputy Prime Minister Ishaq Dar and Field Marshal Asim Munir held separate meetings with the visiting president.',
    whyItMatters:
      'State visits and bilateral agreements are standard GK - remember the country, the 20 MoUs and the $200m trade target.',
    source: 'KhabarWire',
    sourceUrl:
      'https://khabarwire.com/blog/pakistan-maldives-mou-signing-trade-200m-2026-10-21/',
  },
  {
    id: 'ca-58',
    date: '21 October 2026',
    category: 'Economy',
    headline: 'IMF director Jihad Azour calls for fairer tax system at Islamabad reform workshop',
    summary:
      'IMF Middle East and Central Asia director Jihad Azour said Pakistan must turn its stabilisation gains into durable growth through a simpler and fairer tax system, addressing a two-day tax reform workshop in Islamabad organised with the Finance Ministry. He called for broadening the tax base, cutting concessions and protecting public spending. The Express Tribune reported that the tax system has grown more unequal under the IMF programme, with salaried workers bearing a rising burden while retail, agriculture and real estate contribute little.',
    whyItMatters:
      'IMF-related questions are frequent in interviews - know who Azour is, what he asked for, and how tax fairness links to the EFF and RSF review debate.',
    source: 'KhabarWire',
    sourceUrl:
      'https://khabarwire.com/blog/imf-tax-reform-workshop-pakistan-2026-10-21/',
  },
  {
    id: 'ca-59',
    date: '21 October 2026',
    category: 'International',
    headline: 'Pakistan urges UN to strengthen safeguards for human rights defenders',
    summary:
      'Pakistan called on the United Nations to strengthen national protection mechanisms for human rights defenders during an interactive dialogue with the Special Rapporteur. Acting Permanent Representative Usman Jadoon said particular attention should go to women defenders and those working in remote or conflict-affected settings. The statement also highlighted the urgency of protection in situations of foreign occupation.',
    whyItMatters:
      'Pakistani positions at the UN are fair game in interviews - know the forum, the envoy name and the foreign-occupation framing used by Islamabad.',
    source: 'The News',
    sourceUrl:
      'https://www.thenews.pk/print/1444437-pakistan-urges-un-to-strengthen-safeguards-for-hr-defenders',
  },
  {
    id: 'ca-60',
    date: '21 October 2026',
    category: 'Defense',
    headline: 'Pakistan, Türkiye, Qatar and Indonesia sign Badr defence-industry MoU in Doha',
    summary:
      'On 21 October 2026 in Doha, Pakistan, Türkiye, Qatar and Indonesia signed the Badr Memorandum of Understanding on defence industry cooperation. The framework covers joint military production, defence research and development, technology sharing and technical training, with an Executive Board to propose projects and a Strategic Board to approve them. It follows the Makkah Joint Defence Agreement of August 2026 and is open to other friendly countries joining later.',
    whyItMatters:
      'A four-country defence-industry pact — know the member states, the signing place and date, and what Badr covers (production, R&D, training) versus the Makkah pact’s collective-defence role.',
    source: 'Asia Daily',
    sourceUrl: 'https://asiadaily.org/news/16107/',
  },
  {
    id: 'ca-61',
    date: '22 October 2026',
    category: 'Sports',
    headline: 'Harry Brook’s 202 sets record for highest ODI score on Pakistani soil',
    summary:
      'England captain Harry Brook smashed 202 off 116 balls against Sri Lanka in the ODI tri-series at Rawalpindi on 22 October, as England posted 429/4. It was the first ODI double century by an England batter, the fastest ODI double hundred ever (200 in 114 balls), and the highest individual ODI score made in Pakistan, passing Gary Kirsten’s 188 at Rawalpindi in 1996 and Ben Stokes’ 182 as England’s record.',
    whyItMatters:
      'A landmark sporting record made on Pakistani soil — interviewers ask about famous sports moments and records linked to Pakistan.',
    source: 'Islamabad Post',
    sourceUrl:
      'https://islamabadpost.com.pk/harry-brooks-202-sets-new-record-for-highest-odi-score-in-pakistan/',
  },
  {
    id: 'ca-62',
    date: '22 October 2026',
    category: 'International',
    headline: 'Pakistan and EU agree to deepen counterterrorism cooperation at 10th dialogue',
    summary:
      'Pakistan and the European Union held the 10th round of their bilateral counterterrorism dialogue in Islamabad on 22 October, led by Dr Fareha Bugti for Pakistan and EEAS Special Envoy Anna Strzaska for the EU. Both sides agreed to strengthen cooperation at multilateral forums including the UN, covering violent extremism, terrorist financing and misuse of cyberspace, and expressed concern over the security implications of the situation in Afghanistan. The EU condemned recent terrorist attacks in Pakistan and expressed solidarity with the victims.',
    whyItMatters:
      'Shows Pakistan’s counterterrorism diplomacy with Europe — link it to the Afghanistan situation, a classic foreign-policy discussion topic.',
    source: 'The News',
    sourceUrl:
      'https://www.thenews.pk/print/1444612-pakistan-eu-to-strengthen-counterterror-cooperation',
  },
  {
    id: 'ca-63',
    date: '22 October 2026',
    category: 'International',
    headline: 'President Zardari on official visit to Germany, 22–24 October',
    summary:
      'President Asif Ali Zardari began an official visit to Germany on 22 October, running through 24 October, focused on expanding bilateral trade, investment and economic cooperation. He is scheduled to meet the German President, senior government leadership and business leaders, as the two countries mark 75 years of diplomatic relations in 2026.',
    whyItMatters:
      'A high-level foreign-policy event — know the purpose (trade and investment) and the 75-year diplomatic anniversary angle.',
    source: 'Daily Islamabad Today',
    sourceUrl: 'https://islamabadtoday.news/archives/25115',
  },
  {
    id: 'ca-64',
    date: '20 October 2026',
    category: 'Economy',
    headline: 'Pakistan, US report substantial progress on reciprocal trade agreement',
    summary:
      'Pakistan and the United States reported substantial progress on a proposed bilateral reciprocal trade agreement at a meeting in Islamabad on 20 October between Commerce Minister Jam Kamal Khan and US Chargé d’Affaires Natalie A. Baker. Officials said only a few technical issues remain to be settled with the US Trade Representative. The talks also covered market access for Pakistani mangoes and dates, and US cotton and soybean imports.',
    whyItMatters:
      'The biggest pending Pakistan-US economic file — know what a reciprocal trade agreement means and which products are on the table.',
    source: 'Sub News English',
    sourceUrl: 'https://subnewsenglish.com/news/46076',
  },
  {
    id: 'ca-65',
    date: '23 October 2026',
    category: 'Defense',
    headline: 'CDF Munir pledges “total defeat” of terrorists on Peshawar visit',
    summary:
      'Field Marshal Syed Asim Munir, Chief of Army Staff and Chief of Defence Forces, visited the Corps Headquarters in Peshawar, where he was briefed on the security situation in Khyber Pakhtunkhwa, ongoing counterterrorism operations, border management and the operational readiness of troops in the province. He pledged that the campaign against what the ISPR describes as Indian-sponsored terrorist outfits would continue and that they would be hit hard wherever they were, praising the morale and professionalism of the troops and paying tribute to the sacrifices of the people of Pakistan and its security forces.',
    whyItMatters:
      'A live counterterrorism posture from the very top — expect interview questions on the CDF role, Azm-e-Istehkam and the state’s stance on terrorist proxies.',
    source: 'The News',
    sourceUrl: 'https://www.thenews.pk/print/1444817-total-defeat-to-be-inflicted-on-terrorists-cdf',
  },
  {
    id: 'ca-66',
    date: '22 October 2026',
    category: 'Defense',
    headline: 'Ten militants killed after three attacks in Gwadar, says ISPR',
    summary:
      'Security forces killed 10 militants, including a woman, in engagements that followed attacks at the Gabd border crossing and in Gwadar city on 22 October, according to an ISPR statement. The military said one civilian was killed and several vehicles damaged with no losses to security personnel, adding that the attacks aimed to harm the people of Balochistan and obstruct the province’s development.',
    whyItMatters:
      'Know how Balochistan’s security situation links to CPEC and Gwadar — a classic group-discussion topic on internal security.',
    source: 'Terror Monitor',
    sourceUrl: 'https://terrormonitor.com/post/10-militants-including-a-suicide-bomber-killed-after-three-attacks-in-pakistans-gwadar',
  },
  {
    id: 'ca-67',
    date: '23 October 2026',
    category: 'International',
    headline: 'Dar joins first joint R-4 and E-3 foreign ministers’ meeting in Istanbul',
    summary:
      'Deputy Prime Minister and Foreign Minister Ishaq Dar travelled to Istanbul for the first joint meeting of the R-4 group (Pakistan, Türkiye, Saudi Arabia and Egypt) and the E-3 group (the UK, France and Germany), where the seven foreign ministers are set to discuss US-Iran tensions, support for Saudi Arabia against Houthi threats, Red Sea security and stopping regional conflicts from spilling across borders. Dar was also scheduled to call on Turkish President Recep Tayyip Erdogan and hold bilateral talks with his Turkish counterpart.',
    whyItMatters:
      'A landmark multilateral diplomatic event — know the R-4 and E-3 compositions and what de-escalation means for regional security.',
    source: 'The Diplomatic Insight',
    sourceUrl: 'https://thediplomaticinsight.com/pakistan-first-r4-e3-fms-meeting-istanbul/',
  },
  {
    id: 'ca-68',
    date: '20 October 2026',
    category: 'Economy',
    headline: 'NAC revises FY26 GDP growth down to 3.65% on import-data correction',
    summary:
      'The National Accounts Committee approved revised national accounts on 19 October, putting FY26 GDP growth at 3.65%, slightly below the 3.70% estimated in May, with fourth-quarter growth at just 2% as industry contracted. The committee also revised five years of import data upward by a cumulative $14.8 billion after gaps emerged between the statistics bureau and the Pakistan Single Window system, putting the size of the economy at $450.4 billion and per capita income at $1,896.',
    whyItMatters:
      'Economic literacy matters in interviews — know the GDP figure, what a base effect is and why import data changes GDP.',
    source: 'KhabarWire',
    sourceUrl: 'https://khabarwire.com/blog/pakistan-fy26-gdp-growth-q4-revision-2026-10-20/',
  },
  {
    id: 'ca-69',
    date: '23 October 2026',
    category: 'Economy',
    headline: 'Privatisation Commission proposes opening retail electricity market to competition',
    summary:
      'Pakistan’s Privatisation Commission has proposed separating electricity distribution networks from supply and opening retail supply to licensed competitive suppliers ahead of the planned privatisation of the state-owned distribution companies in early 2027, a step required under the country’s IMF programme. Under the plan, the networks would be run by regulated monopoly operators under NEPRA, while competitive suppliers take over legacy contracts from the Central Power Purchasing Agency, with a supplier-of-last-resort safeguard in every region.',
    whyItMatters:
      'Power-sector reform is a favourite economy topic — know DISCO privatisation, circular debt and what unbundling means.',
    source: 'Enerdata (via Business Recorder)',
    sourceUrl: 'https://www.enerdata.net/publications/daily-energy-news/pakistan-proposes-open-retail-electricity-market-competition.html',
  },
  {
    id: 'ca-70',
    date: '24 October 2026',
    category: 'Defense',
    headline: 'Six terrorists killed, two soldiers martyred in Dera Ismail Khan operation',
    summary:
      'Security forces conducted an intelligence-based operation in the Zarkani area of Dera Ismail Khan on 24 October after reports of militants linked to the Indian proxy Fitna al-Khwarij being present there. Six militants were killed and a large cache of weapons and ammunition was recovered, while Naik Ghulam Murtaza and Sepoy Taseer Ahmed embraced martyrdom in the exchange of fire. A sanitisation operation followed to clear the area of any remaining militants under the Azm-e-Istehkam campaign.',
    whyItMatters:
      'A current example of intelligence-based operations in KP — know what an IBO is and why Azm-e-Istehkam keeps coming up in security questions.',
    source: 'The Standard',
    sourceUrl: 'https://thestandard.com.pk/six-terrorists-slain-two-soldiers-martyred-in-d-i-khan-ibo-ispr/',
  },
  {
    id: 'ca-71',
    date: '26 October 2026',
    category: 'International',
    headline: 'Pakistan, Iran, Saudi Arabia and Turkiye hold four-way security talks in Tehran',
    summary:
      'Senior security officials from Iran, Pakistan, Saudi Arabia and Turkiye met in Tehran on 26 October for a four-way meeting on regional security, proposed by Pakistan and hosted by Iran. Pakistan was represented by Field Marshal Asim Munir, alongside Saudi Defence Minister Prince Khalid bin Salman and Turkish intelligence chief Ibrahim Kalin, with Iranian officials including Foreign Minister Abbas Araghchi also attending. The delegations discussed regional security, support for the Palestinians and Lebanese, and agreed to keep the dialogue going.',
    whyItMatters:
      'Shows Pakistan acting as a regional bridge-builder — a strong example for questions on Pakistan’s foreign policy and defence diplomacy.',
    source: 'Press TV',
    sourceUrl: 'https://www.presstv.co.uk/Detail/2026/10/26/779241/iran-pakistan-turkey-saudi-arabia-hold-security-meeting-in-tehran',
  },
  {
    id: 'ca-72',
    date: '26 October 2026',
    category: 'Economy',
    headline: 'State Bank raises policy rate to 12% in first hike since April',
    summary:
      'The State Bank of Pakistan raised its benchmark policy rate by 50 basis points to 12% at its Monetary Policy Committee meeting on 26 October, the first increase since April, with the new rate taking effect on 27 October. The central bank pointed to rising inflation risks from higher global energy prices and Middle East tensions, with headline inflation at 10.3% in September against its 5–7% medium-term target range. Nine of the committee’s ten members voted for the increase.',
    whyItMatters:
      'The policy rate is a classic economy question — know the new rate, why it moved, and how it links to inflation and the common man.',
    source: 'The News',
    sourceUrl: 'https://www.thenews.pk/print/1445230-businesses-divided-over-sbp-s-50bps-rate-hike',
  },
  {
    id: 'ca-73',
    date: '24 October 2026',
    category: 'Economy',
    headline: 'Pakistan and Qatar agree to deepen trade and investment cooperation',
    summary:
      'Pakistan and Qatar held the second meeting of their Joint Task Force on Trade and Investment in Doha on 24 October, co-chaired by Commerce Minister Jam Kamal Khan and Qatar’s Minister of State for Foreign Trade Affairs Dr Ahmad bin Mohammed Al-Sayed. The two sides reviewed progress in economic cooperation and explored new business opportunities, including agricultural exports and industrial development. Pakistan also raised restrictions on its bone-in meat exports to Qatar and asked for an early resolution.',
    whyItMatters:
      'Trade diplomacy with Gulf states is a recurring interview theme — know what Pakistan sells to Qatar and why export markets matter.',
    source: 'Pakistani News',
    sourceUrl: 'https://pakistaninews.net/pakistan-and-qatar-agree-to-strengthen-trade-and-investment/',
  },
  {
    id: 'ca-74',
    date: '26 October 2026',
    category: 'International',
    headline: 'Pakistan rejects Afghan Taliban claims on civilian casualties',
    summary:
      'Pakistan’s Foreign Office on 26 October rejected claims by Afghanistan’s Taliban government that Pakistani military operations caused civilian casualties, calling them unfounded and unverified. The ministry said Pakistan has the right to defend itself against terrorist attacks launched from Afghan soil and urged the international community to hold the Taliban government to its responsibility to prevent Afghan territory being used for cross-border terrorism. It said such attacks had caused more than 3,500 casualties in Pakistan during 2026.',
    whyItMatters:
      'A live example of Pak-Afghan tensions for group discussion — practise stating Pakistan’s official position factually and calmly.',
    source: 'NAM News',
    sourceUrl: 'https://namnews.tv/2026/10/26/pakistan-dismisses-afghan-taliban-allegations-of-civilian-casualties/',
  },
  {
    id: 'ca-75',
    date: '26 October 2026',
    category: 'Defense',
    headline: 'Former army chief Gen (retd) Abdul Waheed Kakar passes away',
    summary:
      'Former Chief of Army Staff General (retd) Abdul Waheed Kakar passed away in Rawalpindi on 26 October, the ISPR announced. Field Marshal Syed Asim Munir, Chief of Army Staff and Chief of Defence Forces, along with all ranks of the Pakistan Army, expressed deep sorrow and paid tribute to his distinguished military career, leadership and services to the Army. President Asif Ali Zardari and Prime Minister Shehbaz Sharif also expressed grief and offered condolences to his family.',
    whyItMatters:
      'Know the former chiefs of the Pakistan Army — interviewers may ask about past COAS names and their place in military history.',
    source: 'The Public Purview',
    sourceUrl: 'https://thepublicpurview.com/field-marshal-asim-munir-tribute-general-abdul-waheed-kakar/',
  },
  {
    id: 'ca-76',
    date: '27 October 2026',
    category: 'National',
    headline: 'PM reaffirms support for Kashmiris on Jammu and Kashmir Black Day',
    summary:
      'Prime Minister Shehbaz Sharif, in his message on Jammu and Kashmir Black Day observed on 27 October, reaffirmed Pakistan’s solidarity with the people of Indian Illegally Occupied Jammu and Kashmir. He said lasting peace in South Asia is not possible without a just resolution of the dispute in line with UN Security Council resolutions, and pledged continued moral, diplomatic and political support for the Kashmiri people’s right to self-determination.',
    whyItMatters:
      'Kashmir Black Day (27 October 1947) is a fixed-date question — know the date, why it is observed, and Pakistan’s stated position.',
    source: 'The Europe Today',
    sourceUrl: 'https://theeuropetoday.com/2026/10/27/pm-shehbaz-reaffirms-pakistans-unwavering-support-for-kashmiris-on-black-day/',
  },
  {
    id: 'ca-77',
    date: '28 October 2026',
    category: 'Economy',
    headline: 'Petrol price cut by Rs3.19, diesel up Rs2.25 from 28 October',
    summary:
      'The government revised fuel prices from 28 October, cutting petrol by Rs3.19 per litre to Rs376.06 while raising high-speed diesel by Rs2.25 to Rs398.07. The change reverses the previous day’s petrol increase and takes diesel closer to Rs400 per litre, which matters for transport and goods prices. Fuel prices are now revised daily by OGRA under the government’s pricing mechanism.',
    whyItMatters:
      'Fuel prices link the economy to daily life — a good example when asked how inflation and transport costs affect the common man.',
    source: 'PakWheels',
    sourceUrl: 'https://www.pakwheels.com/blog/petrol-price-drops-diesel-moves-closer-to-rs-400-mark/',
  },
  {
    id: 'ca-78',
    date: '28 October 2026',
    category: 'International',
    headline: 'Pakistan urges restraint and diplomacy on Iran at UN Security Council',
    summary:
      'At a UN Security Council session on Iran and nuclear non-proliferation, Pakistan’s Acting Permanent Representative Ambassador Usman Jadoon urged all sides to avoid escalating actions and to seek a peaceful resolution through dialogue. Pakistan said technical issues around Iran’s nuclear programme should be handled by the International Atomic Energy Agency, and thanked partners including Qatar, Saudi Arabia, Turkiye, Egypt and China for supporting de-escalation efforts.',
    whyItMatters:
      'Pakistan’s UN diplomacy is a strong interview topic — know its stance on dialogue over conflict and the IAEA’s role.',
    source: 'Dawn (via Beflaz)',
    sourceUrl: 'https://beflaz.com/news/2026-10-28-pakistan-warns-against-escalation-in-iran-crisis-urges-diplo-065ad8.html',
  },
  {
    id: 'ca-79',
    date: '28 October 2026',
    category: 'Defense',
    headline: 'Nine terrorists killed in Balochistan IBOs in Kachhi and Wadh',
    summary:
      'Security forces killed nine terrorists in two intelligence-based operations in Balochistan’s Kachhi and Wadh districts on 26 October, the ISPR said. Seven terrorists were killed when a hideout in Kachhi was busted after an exchange of fire, and two more were killed in Wadh after their movement was intercepted. Weapons and ammunition were recovered, and sanitisation operations are under way under the Azm-e-Istehkam campaign.',
    whyItMatters:
      'Another current IBO example for security questions — know what an IBO is, the name Fitna al-Hindustan, and the Azm-e-Istehkam campaign.',
    source: 'Centreline (ISPR statement)',
    sourceUrl: 'https://centreline.com.pk/2026/10/28/security-forces-kill-nine-india-sponsored-terrorists-in-balochistan-ibos-ispr/',
  },
  {
    id: 'ca-80',
    date: '28 October 2026',
    category: 'Defense',
    headline: 'Afghan firing kills one civilian in South Waziristan border area',
    summary:
      'One person was killed and five injured after firing from the Afghan side hit civilian houses and a market in the Angoor Adda area of South Waziristan on 27 October, a Pakistani regional official said. Pakistani forces responded heavily to what officials called unprovoked firing, while the Afghan defence ministry claimed Pakistan had carried out drone attacks in Paktika province. Reuters reported it could not verify the claims of either side.',
    whyItMatters:
      'A live Pak-Afghan border example for group discussion — practise stating the facts and both claims neutrally, without taking a partisan line.',
    source: 'Reuters',
    sourceUrl: 'https://katcountry989.com/2026/10/28/pakistan-says-afghan-firing-kills-one-in-border-district/',
  },
  {
    id: 'ca-81',
    date: '28 October 2026',
    category: 'International',
    headline: 'Pakistan bars Taiwanese airlines from its airspace in One-China move',
    summary:
      'Pakistan has barred Taiwanese airlines from using its airspace in support of Beijing’s One-China policy, Bloomberg reported, with Defence Minister Khawaja Asif saying only mainland Chinese airlines are permitted to fly over Pakistan. China Airlines and Eva Air stopped using Pakistani airspace from the morning of 25 October and have rerouted Asia–Europe flights over Russia. Pakistan severed official relations with Taiwan in 1951 in favour of closer ties with China.',
    whyItMatters:
      'A clear example of Pakistan–China ties in action — know what the One-China policy means and why airspace decisions are a foreign-policy signal.',
    source: 'Bloomberg (via Centreline)',
    sourceUrl: 'https://centreline.com.pk/2026/10/28/pak-bars-taiwan-airlines/',
  },
  {
    id: 'ca-82',
    date: '27 October 2026',
    category: 'Defense',
    headline: 'Kuwait naval chief holds strategic talks at Naval Headquarters',
    summary:
      'Commander of the Kuwait Naval Force, Major General (Navy) Saif Abdulhadi Alhamlan, met Chief of the Naval Staff Admiral Naveed Ashraf at Naval Headquarters in Islamabad on 27 October. The two sides discussed regional maritime security, professional training and deeper institutional cooperation, and the visiting commander was presented a Guard of Honour by a Pakistan Navy contingent.',
    whyItMatters:
      'Naval diplomacy is a good interview example — know the naval chief’s name and how Pakistan builds defence ties with Gulf states.',
    source: 'Commerce News',
    sourceUrl: 'https://commercenews.pk/commander-kuwait-naval-force-islamabad/',
  },
];
