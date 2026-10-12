import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { NotesIndex } from './components/NotesIndex';
import { NotePage } from './components/NotePage';
import { WatSimulator } from './components/WatSimulator';
import { IntelligenceQuiz } from './components/IntelligenceQuiz';
import { Chatbot } from './components/Chatbot';
import type { Route, Navigate } from './types';

export default function App() {
  const [route, setRoute] = useState<Route>({ page: 'home' });

  const navigate: Navigate = useCallback((r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar route={route} navigate={navigate} />
      <main id="main-content" className="flex-1">
        {route.page === 'home' && <HomePage navigate={navigate} />}
        {route.page === 'notes' && <NotesIndex navigate={navigate} />}
        {route.page === 'note' && <NotePage slug={route.slug} navigate={navigate} />}
        {route.page === 'wat' && <WatSimulator />}
        {route.page === 'quiz' && <IntelligenceQuiz />}
        {route.page === 'plan' && <NotePage slug="30-day-plan" navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
      <Chatbot navigate={navigate} />
    </div>
  );
}
