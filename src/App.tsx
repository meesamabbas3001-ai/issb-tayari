import { useState, useCallback, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { NotesIndex } from './components/NotesIndex';
import { NotePage } from './components/NotePage';
import { WatSimulator } from './components/WatSimulator';
import { SrtSimulator } from './components/SrtSimulator';
import { SelfDescription } from './components/SelfDescription';
import { IntelligenceQuiz } from './components/IntelligenceQuiz';
import { PracticeIndex } from './components/PracticeIndex';
import { SentenceCompletion } from './components/SentenceCompletion';
import { PictureStory } from './components/PictureStory';
import { PointerStory } from './components/PointerStory';
import { MechanicalAptitude } from './components/MechanicalAptitude';
import { OpiPractice } from './components/OpiPractice';
import { LecturettePractice } from './components/LecturettePractice';
import { GroupDiscussion } from './components/GroupDiscussion';
import { InterviewFlashcards } from './components/InterviewFlashcards';
import { NonVerbal } from './components/NonVerbal';
import { Chatbot } from './components/Chatbot';
import { CurrentAffairs } from './components/CurrentAffairs';
import { VideoLectures } from './components/VideoLectures';
import { PsychologySection } from './components/PsychologySection';
import { GtoSection } from './components/GtoSection';
import { InterviewSection } from './components/InterviewSection';
import InitialMcqs from './components/InitialMcqs';
import { VoiceInterview } from './components/VoiceInterview';
import { InterviewExperiences } from './components/InterviewExperiences';
import { PracticePapers } from './components/PracticePapers';
import type { Route, Navigate } from './types';
import { pathToRoute, routeToPath } from './types';

export default function App() {
  const [route, setRoute] = useState<Route>(() => pathToRoute(window.location.pathname));

  const navigate: Navigate = useCallback((r: Route) => {
    setRoute(r);
    const p = routeToPath(r);
    if (window.location.pathname !== p) window.history.pushState({}, '', p);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(pathToRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar route={route} navigate={navigate} />
      <main id="main-content" className="flex-1">
        {route.page === 'home' && <HomePage navigate={navigate} />}
        {route.page === 'notes' && <NotesIndex navigate={navigate} />}
        {route.page === 'note' && <NotePage slug={route.slug} navigate={navigate} />}
        {route.page === 'practice' && <PracticeIndex navigate={navigate} />}
        {route.page === 'wat' && <WatSimulator />}
        {route.page === 'srt' && <SrtSimulator />}
        {route.page === 'self-description' && <SelfDescription />}
        {route.page === 'quiz' && <IntelligenceQuiz />}
        {route.page === 'sentence-completion' && <SentenceCompletion />}
        {route.page === 'picture-story' && <PictureStory />}
        {route.page === 'pointer-story' && <PointerStory />}
        {route.page === 'mechanical-aptitude' && <MechanicalAptitude />}
        {route.page === 'opi-practice' && <OpiPractice />}
        {route.page === 'lecturette' && <LecturettePractice />}
        {route.page === 'group-discussion' && <GroupDiscussion />}
        {route.page === 'interview-flashcards' && <InterviewFlashcards />}
        {route.page === 'non-verbal' && <NonVerbal navigate={navigate} />}
        {route.page === 'plan' && <NotePage slug="30-day-plan" navigate={navigate} />}
        {route.page === 'videos' && <VideoLectures navigate={navigate} />}
        {route.page === 'current-affairs' && <CurrentAffairs />}
        {route.page === 'psychology' && <PsychologySection navigate={navigate} />}
        {route.page === 'gto' && <GtoSection navigate={navigate} />}
        {route.page === 'interview' && <InterviewSection navigate={navigate} />}
        {route.page === 'initial-mcqs' && <InitialMcqs />}
        {route.page === 'voice-interview' && <VoiceInterview />}
        {route.page === 'interview-experiences' && <InterviewExperiences />}
        {route.page === 'practice-papers' && <PracticePapers navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
      <Chatbot navigate={navigate} />
    </div>
  );
}
