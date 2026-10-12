export type Route =
  | { page: 'home' }
  | { page: 'notes' }
  | { page: 'note'; slug: string }
  | { page: 'wat' }
  | { page: 'quiz' }
  | { page: 'plan' };

export type Navigate = (route: Route) => void;

export function routeToPath(route: Route): string {
  switch (route.page) {
    case 'home':
      return '/';
    case 'notes':
      return '/notes';
    case 'note':
      return `/notes/${route.slug}`;
    case 'wat':
      return '/practice/wat';
    case 'quiz':
      return '/practice/intelligence-quiz';
    case 'plan':
      return '/plan';
  }
}

export function pathToRoute(path: string): Route {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/') return { page: 'home' };
  if (clean === '/notes') return { page: 'notes' };
  if (clean === '/practice/wat') return { page: 'wat' };
  if (clean === '/practice/intelligence-quiz') return { page: 'quiz' };
  if (clean === '/plan') return { page: 'plan' };
  const noteMatch = clean.match(/^\/notes\/([a-z0-9-]+)$/);
  if (noteMatch) return { page: 'note', slug: noteMatch[1] };
  return { page: 'home' };
}
