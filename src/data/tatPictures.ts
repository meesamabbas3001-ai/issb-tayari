// TAT practice pictures — real photographs (Pexels license: free to use,
// hotlink-friendly CDN). Practice images only, not from any real test.
export interface TatPicture {
  id: string;
  title: string;
  hint: string;
  url: string;
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const tatPictures: TatPicture[] = [
  {
    id: 'sunset-road',
    title: 'Sunsaan Sarak (The Lonely Road)',
    hint: 'Sunset, a lone man walking on an empty road — kahan ja raha hai? Kya soch raha hai? Kahani likho.',
    url: px(24531542),
  },
  {
    id: 'mountain-girl',
    title: 'Paharon Mein (Among the Mountains)',
    hint: 'Sunrise, a girl sitting alone on mountain rocks — wo yahan kyun aayi? Aaj uska kya plan hai?',
    url: px(24994450),
  },
  {
    id: 'serious-talk',
    title: 'Ahem Guftagu (The Serious Talk)',
    hint: 'Two men in a deep discussion — kis baat par behas ho rahi hai? Kya faisla hoga?',
    url: px(8349339),
  },
  {
    id: 'tree-study',
    title: 'Darakht Ke Neeche (Under the Tree)',
    hint: 'A girl reading books under a tree — wo kya parh rahi hai? Uska maqsad kya hai?',
    url: px(35774740),
  },
  {
    id: 'campfire',
    title: 'Aag Ke Gird (Around the Fire)',
    hint: 'Night, friends sitting around a campfire — ye log kaun hain? Kya baatein ho rahi hain?',
    url: px(36729444),
  },
  {
    id: 'night-bus',
    title: 'Raat Ki Bus (The Night Bus)',
    hint: 'A man alone on a night bus — kahan ja raha hai? Uske zehan mein kya chal raha hai?',
    url: px(17720891),
  },
  {
    id: 'schoolmates',
    title: 'Hum Jamaat (The Classmates)',
    hint: 'School children studying together — ye kya kar rahe hain? Inka mustaqbil kya hoga?',
    url: px(9090818),
  },
  {
    id: 'morning-run',
    title: 'Subah Ki Daur (The Morning Run)',
    hint: 'A young man running on a tree-lined road at dawn — wo kyun daur raha hai? Uska maqsad kya hai?',
    url: px(37046061),
  },
  {
    id: 'water-carrier',
    title: 'Paani Wali (The Water Carrier)',
    hint: 'A woman carrying water in a village — uski zindagi kaisi hai? Wo kya sochti hai?',
    url: px(30370979),
  },
  {
    id: 'bus-stop',
    title: 'Aakhri Bus (The Last Bus)',
    hint: 'Night, a man alone at a bus stop — kis ka intezar kar raha hai? Aage kya hoga?',
    url: px(11344370),
  },
  {
    id: 'old-man',
    title: 'Buzurg (The Old Man)',
    hint: 'An old man on a night street — wo yahan kyun hai? Uski kahani kya hai?',
    url: px(15161086),
  },
  {
    id: 'campus-friends',
    title: 'Dost (The Friends)',
    hint: 'Three students talking on campus — kis baat par guftagu ho rahi hai? Kya hoga aage?',
    url: px(7683740),
  },
];
