// TAT practice pictures (original AI-generated images, uploaded to Drive).
export interface TatPicture {
  id: string;
  title: string;
  hint: string;
  url: string;
}

export const tatPictures: TatPicture[] = [
  {
    id: 'crossroads',
    title: 'Do Raahay (The Crossroads)',
    hint: 'Dusk time, a boy at a crossroads — who is he? Where is he going? What happens next?',
    url: 'https://drive.google.com/thumbnail?id=1jMyWLwF-T3h7dwB9eE-5a15ji_GG88rv&sz=w1200',
  },
  {
    id: 'lantern',
    title: 'Laltain Wala (The Lantern Man)',
    hint: 'Dark street, an old man with a lantern — why is he out at night? What is he looking for?',
    url: 'https://drive.google.com/thumbnail?id=1ut-lWDCTkrHtm-FMj_SydWkqKcLuqHh3&sz=w1200',
  },
  {
    id: 'rooftop',
    title: 'Chhat Par (On the Rooftop)',
    hint: 'Sunrise, a girl looking at distant mountains — what is she thinking? What will she do today?',
    url: 'https://drive.google.com/thumbnail?id=1RyizMZelU7TofDoonSZjuyjZVg-sau41&sz=w1200',
  },
];
