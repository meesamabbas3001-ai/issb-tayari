// TAT practice pictures — pencil-sketch style (converted from Pexels photos,
// Pexels license: free to use), hosted on Drive in "ISSB Website Images".
// Styled like real ISSB picture-story cards. Practice images only,
// not from any real test.
export interface TatPicture {
  id: string;
  title: string;
  hint: string;
  url: string;
}

const drive = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const tatPictures: TatPicture[] = [
  {
    id: 'sunset-road',
    title: 'Sunsaan Sarak (The Lonely Road)',
    hint: 'Sunset, a lone man walking on an empty road — kahan ja raha hai? Kya soch raha hai? Kahani likho.',
    url: drive('1em57rLk0KVv4hxpqNHiO3oOvDoUCQyxc'),
  },
  {
    id: 'mountain-girl',
    title: 'Paharon Mein (Among the Mountains)',
    hint: 'Sunrise, a girl sitting alone on mountain rocks — wo yahan kyun aayi? Aaj uska kya plan hai?',
    url: drive('1wPV4OTB7hedLTi2ltmB-LfHrDMVac5_9'),
  },
  {
    id: 'serious-talk',
    title: 'Ahem Guftagu (The Serious Talk)',
    hint: 'Two men in a deep discussion — kis baat par behas ho rahi hai? Kya faisla hoga?',
    url: drive('13IF8BSB8zy0ZI3lPaitqIiAvrWjc65fo'),
  },
  {
    id: 'tree-study',
    title: 'Darakht Ke Neeche (Under the Tree)',
    hint: 'A girl reading books under a tree — wo kya parh rahi hai? Uska maqsad kya hai?',
    url: drive('1NMkKAHUNPjAM4ftzRhbhg8X1SjYwj8SV'),
  },
  {
    id: 'campfire',
    title: 'Aag Ke Gird (Around the Fire)',
    hint: 'Night, friends sitting around a campfire — ye log kaun hain? Kya baatein ho rahi hain?',
    url: drive('14gpMbBfOvnib2HICndtHID6Zzx9lZhqX'),
  },
  {
    id: 'night-bus',
    title: 'Raat Ki Bus (The Night Bus)',
    hint: 'A man alone on a night bus — kahan ja raha hai? Uske zehan mein kya chal raha hai?',
    url: drive('1EZnDRhKOvDsJuZ-ToH26l5CrSfVwPn7N'),
  },
  {
    id: 'schoolmates',
    title: 'Hum Jamaat (The Classmates)',
    hint: 'School children studying together — ye kya kar rahe hain? Inka mustaqbil kya hoga?',
    url: drive('1EU-uAiuBcd7PeD2yYCKc_ohkNAtQuja5'),
  },
  {
    id: 'morning-run',
    title: 'Subah Ki Daur (The Morning Run)',
    hint: 'A young man running on a tree-lined road at dawn — wo kyun daur raha hai? Uska maqsad kya hai?',
    url: drive('1ivKe0-1ELiOx8C8pdHB-G_3W6Q-S3gDx'),
  },
  {
    id: 'water-carrier',
    title: 'Paani Wali (The Water Carrier)',
    hint: 'A woman carrying water in a village — uski zindagi kaisi hai? Wo kya sochti hai?',
    url: drive('1M5xKGQXpUBN5GQG_ukzGwGJVlAPc3aEn'),
  },
  {
    id: 'bus-stop',
    title: 'Aakhri Bus (The Last Bus)',
    hint: 'Night, a man alone at a bus stop — kis ka intezar kar raha hai? Aage kya hoga?',
    url: drive('1Fgoc2I0JMn9Lg430Z5l4nCYLjTAJeKwY'),
  },
  {
    id: 'old-man',
    title: 'Buzurg (The Old Man)',
    hint: 'An old man on a night street — wo yahan kyun hai? Uski kahani kya hai?',
    url: drive('185RVfQ5AHuGeVGRqBK-4Piqlp9ukqs9L'),
  },
  {
    id: 'campus-friends',
    title: 'Dost (The Friends)',
    hint: 'Three students talking on campus — kis baat par guftagu ho rahi hai? Kya hoga aage?',
    url: drive('183wRB_5kUHNDEp3hnJkEt95OvdG1EUtk'),
  },
];

// deploy trigger 2
