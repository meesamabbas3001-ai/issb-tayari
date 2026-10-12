export type Route =
  | { page: 'home' }
  | { page: 'notes' }
  | { page: 'note'; slug: string }
  | { page: 'practice' }
  | { page: 'wat' }
  | { page: 'quiz' }
  | { page: 'sentence-completion' }
  | { page: 'picture-story' }
  | { page: 'opi-practice' }
  | { page: 'lecturette' }
  | { page: 'interview-flashcards' }
  | { page: 'plan' }
  | { page: 'videos' }
  | { page: 'current-affairs' }
  | { page: 'psychology' }
  | { page: 'gto' }
  | { page: 'interview' };

export type Navigate = (route: Route) => void;

export function routeToPath(route: Route): string {
  switch (route.page) {
    case 'home':
      return '/';
    case 'notes':
      return '/notes';
    case 'note':
      return `/notes/${route.slug}`;
    case 'practice':
      return '/practice';
    case 'wat':
      return '/practice/wat';
    case 'quiz':
      return '/practice/intelligence-quiz';
    case 'sentence-completion':
      return '/practice/sentence-completion';
    case 'picture-story':
      return '/practice/picture-story';
    case 'opi-practice':
      return '/practice/opi-practice';
    case 'lecturette':
      return '/practice/lecturette';
    case 'interview-flashcards':
      return '/practice/interview-flashcards';
    case 'plan':
      return '/plan';
    case 'videos':
      return '/videos';
    case 'current-affairs':
      return '/current-affairs';
    case 'psychology':
      return '/psychology';
    case 'gto':
      return '/gto';
    case 'interview':
      return '/interview';
  }
}

export function pathToRoute(path: string): Route {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/') return { page: 'home' };
  if (clean === '/notes') return { page: 'notes' };
  if (clean === '/practice') return { page: 'practice' };
  if (clean === '/practice/wat') return { page: 'wat' };
  if (clean === '/practice/intelligence-quiz') return { page: 'quiz' };
  if (clean === '/practice/sentence-completion') return { page: 'sentence-completion' };
  if (clean === '/practice/picture-story') return { page: 'picture-story' };
  if (clean === '/practice/opi-practice') return { page: 'opi-practice' };
  if (clean === '/practice/lecturette') return { page: 'lecturette' };
  if (clean === '/practice/interview-flashcards') return { page: 'interview-flashcards' };
  if (clean === '/plan') return { page: 'plan' };
  if (clean === '/videos') return { page: 'videos' };
  if (clean === '/current-affairs') return { page: 'current-affairs' };
  if (clean === '/psychology') return { page: 'psychology' };
  if (clean === '/gto') return { page: 'gto' };
  if (clean === '/interview') return { page: 'interview' };
  const noteMatch = clean.match(/^\/notes\/([a-z0-9-]+)$/);
  if (noteMatch) return { page: 'note', slug: noteMatch[1] };
  return { page: 'home' };
}
