import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  PhoneOff,
  Play,
  Loader2,
  TriangleAlert,
  Volume2,
  RotateCcw,
  KeyRound,
  Chrome,
} from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

type Phase = 'idle' | 'starting' | 'live' | 'ended';

function getRecognition(): any | null {
  if (typeof window === 'undefined') return null;
  const w = window as any;
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

const SETUP_STEPS = [
  'aistudio.google.com kholein → "Get API key" → nayi free key banayein.',
  'Vercel.com → issb-tayari project → Settings → Environment Variables.',
  'Naam likhein: GEMINI_API_KEY — value me key paste kar ke Save karein.',
  'Deployments tab → ... → Redeploy dabayein. Bas!',
];

export const VoiceInterview: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [apiReady, setApiReady] = useState<boolean | null>(null);
  const [listening, setListening] = useState(false);
  const [speechOn, setSpeechOn] = useState(true);

  const supported =
    typeof window !== 'undefined' &&
    getRecognition() !== null &&
    'speechSynthesis' in window;

  const phaseRef = useRef<Phase>('idle');
  const recogRef = useRef<any | null>(null);
  const historyRef = useRef<Message[]>([]);
  const speechOnRef = useRef(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  phaseRef.current = phase;
  speechOnRef.current = speechOn;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  useEffect(() => {
    fetch('/api/interview')
      .then((r) => r.json())
      .then((d) => setApiReady(!!d.configured))
      .catch(() => setApiReady(false));
    const loadVoices = () => window.speechSynthesis?.getVoices();
    loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      stopAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopAll() {
    try {
      recogRef.current?.abort();
    } catch {
      /* noop */
    }
    recogRef.current = null;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setListening(false);
  }

  function pickMaleVoice(): SpeechSynthesisVoice | null {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const en = voices.filter((x) => /^en/i.test(x.lang));
    if (en.length === 0) return null;
    // 1. Naam me "male" likha ho
    let v = en.find((x) => /male/i.test(x.name) && !/female/i.test(x.name));
    // 2. Mashhoor mardana voice naam (Google/Microsoft/Apple)
    if (!v)
      v = en.find(
        (x) =>
          /david|daniel|mark|alex|fred|george|james|john|mike|michael|paul|peter|robert|thomas|william/i.test(
            x.name
          ) && !/female|woman|girl|samantha|zira|aria|jenny/i.test(x.name)
      );
    // 3. "Google US English" aksar zanana lagti hai — koi aur English voice lein
    if (!v) v = en.find((x) => !/google us english/i.test(x.name));
    // 4. Aakhri hal: pehli English voice
    if (!v) v = en[0];
    return v || null;
  }

  function speak(text: string, onDone?: () => void) {
    if (!('speechSynthesis' in window) || !speechOnRef.current) {
      onDone?.();
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.92;
    u.pitch = 0.8;
    const v = pickMaleVoice();
    if (v) u.voice = v;
    u.onend = () => onDone?.();
    u.onerror = () => onDone?.();
    setStatus('AI bol raha hai…');
    window.speechSynthesis.speak(u);
  }

  async function sendToAI(history: Message[]): Promise<string | null> {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 25000);
    try {
      const r = await fetch('/api/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history }),
        signal: controller.signal,
      });
      window.clearTimeout(timer);
      const d = await r.json();
      if (!r.ok) {
        if (d.error === 'not_configured') {
          setError('AI key nahi lagi — neeche setup steps dekhein.');
        } else if (d.error === 'model_busy') {
          setError(
            'AI model abhi busy hai (zyada load). Ghabrayein nahi — neeche "Dobara Koshish Karein" dabayein, aksar dusri baar me jawab a jata hai.'
          );
        } else if (d.error === 'quota_exceeded') {
          setError(
            'AI ki free limit khatam ho gayi hai (daily quota). Thodi der baad ya kal dobara try karein — abhi retry ka faida nahi hoga.'
          );
        } else {
          const detail = d.detail ? ` Wajah: ${d.detail}` : '';
          setError(
            `AI se jawab nahi aya.${detail} Ye message mujhe bhejo taake theek kar sakun.`
          );
        }
        return null;
      }
      return d.reply as string;
    } catch (e: any) {
      window.clearTimeout(timer);
      setError(
        e && e.name === 'AbortError'
          ? 'AI ne zyada der laga di — dobara koshish karein.'
          : 'Internet ya server ka masla — dobara koshish karein.'
      );
      return null;
    }
  }

  function listen() {
    const Rec = getRecognition();
    if (!Rec || phaseRef.current !== 'live') return;
    try {
      recogRef.current?.abort();
    } catch {
      /* noop */
    }
    const rec = new Rec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recogRef.current = rec;
    setListening(true);
    setStatus('Sun raha hun — jawab bolein…');
    setError(null);
    rec.onresult = (e: any) => {
      const res = e.results[e.resultIndex];
      const t = (res[0].transcript as string) || '';
      if (res.isFinal && t.trim()) {
        handleUserText(t.trim());
      }
    };
    rec.onerror = (e: any) => {
      setListening(false);
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        setError('Mic ki permission dein — browser ke address bar me mic wala icon dabayein.');
      } else if (e.error !== 'aborted' && e.error !== 'no-speech') {
        setError('Awaz saaf samajh nahi ayi — mic ka button daba kar dobara bolein.');
      }
      setStatus('');
    };
    rec.onend = () => {
      setListening(false);
    };
    try {
      rec.start();
    } catch {
      /* noop */
    }
  }

  async function handleUserText(text: string) {
    try {
      recogRef.current?.abort();
    } catch {
      /* noop */
    }
    setListening(false);
    const next: Message[] = [...historyRef.current, { role: 'user', text }];
    historyRef.current = next;
    setMessages(next);
    setStatus('Jawab tayyar ho raha hai…');
    setError(null);
    const reply = await sendToAI(next);
    if (reply === null || phaseRef.current !== 'live') {
      setStatus('');
      return;
    }
    const next2: Message[] = [...next, { role: 'assistant', text: reply }];
    historyRef.current = next2;
    setMessages(next2);
    speak(reply, () => {
      if (phaseRef.current === 'live') listen();
    });
  }

  async function start() {
    setError(null);
    setMessages([]);
    historyRef.current = [];
    setPhase('starting');
    setStatus('Interview tayyar ho raha hai…');
    const reply = await sendToAI([]);
    if (reply === null) {
      setPhase('idle');
      setStatus('');
      return;
    }
    const m: Message[] = [{ role: 'assistant', text: reply }];
    historyRef.current = m;
    setMessages(m);
    setPhase('live');
    speak(reply, () => {
      if (phaseRef.current === 'live') listen();
    });
  }

  function toggleMic() {
    if (listening) {
      try {
        recogRef.current?.abort();
      } catch {
        /* noop */
      }
      setListening(false);
      setStatus('');
    } else if (phaseRef.current === 'live') {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      listen();
    }
  }

  function endInterview() {
    stopAll();
    setPhase('ended');
    setStatus('');
  }

  // Dobara koshish: last user message ko dobara bhejein baghair duplicate kiye.
  async function retryAI() {
    if (phaseRef.current !== 'live' || historyRef.current.length === 0) return;
    setError(null);
    setStatus('Dobara koshish ho rahi hai…');
    const reply = await sendToAI(historyRef.current);
    if (reply === null || phaseRef.current !== 'live') {
      setStatus('');
      return;
    }
    const next2: Message[] = [...historyRef.current, { role: 'assistant', text: reply }];
    historyRef.current = next2;
    setMessages(next2);
    speak(reply, () => {
      if (phaseRef.current === 'live') listen();
    });
  }

  function restart() {
    stopAll();
    setMessages([]);
    historyRef.current = [];
    setError(null);
    setStatus('');
    setPhase('idle');
  }

  // ---------------- idle ----------------
  if (phase === 'idle' || phase === 'starting') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="rule-double mb-6" />
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-army-900 text-gold-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-4">
            <Mic className="w-4 h-4" /> AI Voice Interview
          </span>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-army-950 mb-3">
            AI Officer Se <span className="text-gold-600">Interview Dein</span>
          </h1>
          <p className="text-army-700 font-medium max-w-2xl mx-auto">
            Ye <strong>initial interview</strong> ki practice hai — mic par English me jawab
            dein, AI officer agla sawal poochega. Bilkul free, jitni baar chahen.
          </p>
        </div>

        <div className="mb-8 rounded-sm overflow-hidden border-2 border-army-900">
          <img
            src="https://drive.google.com/thumbnail?id=1cArX-RPAmJ9AtJdNMMx4moX5dZVCK5U3&sz=w1200"
            alt="Asal interview room — officer candidate se sawal pooch raha hai"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <p className="bg-army-900 text-gold-400 text-xs font-bold text-center px-4 py-2">
            Asal interview aisa hota hai — officer samne, aap jawab dein. Yahan practice karein!
          </p>
        </div>

        {!supported && (
          <div className="mb-6 bg-red-50 border-2 border-red-300 rounded-sm p-5 flex gap-3">
            <Chrome className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-900 leading-relaxed">
              <strong>Browser support nahi:</strong> awaz wali practice ke liye{' '}
              <strong>Chrome ya Edge</strong> browser use karein. Mic aur awaz dono
              browser me hi chalte hain — koi app download nahi karni.
            </p>
          </div>
        )}

        {apiReady === false && (
          <div className="mb-6 bg-khaki-100 border-2 border-gold-500 rounded-sm p-5">
            <p className="flex items-center gap-2 font-bold text-army-950 mb-3">
              <KeyRound className="w-5 h-5 text-gold-600" /> Pehle free AI key lagayein (2 minute)
            </p>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-ink-soft leading-relaxed">
              {SETUP_STEPS.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="text-xs text-ink-soft mt-3">
              Key bilkul free hai (Google AI Studio) aur sirf site ke server par rehti hai —
              kisi ko nazar nahi ati.
            </p>
          </div>
        )}

        <div className="bg-paper border-2 border-army-900 rounded-sm p-6 mb-6">
          <h2 className="font-bold text-army-950 mb-3">Kaise kaam karega?</h2>
          <ul className="space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>• AI officer sawal <strong>bol kar</strong> poochega — jawab mic par bolein.</li>
            <li>• 8–10 sawal: taaruf, family, "why army?", taleem, mashghala, mulk ke halaat.</li>
            <li>• End par AI aap ko <strong>feedback</strong> dega — khubiyan aur behtari ki jagah.</li>
            <li>• Ghabrayein nahi — ye practice hai, asal interview nahi.</li>
          </ul>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-300 rounded-sm p-4 flex gap-2 text-sm text-red-900">
            <TriangleAlert className="w-5 h-5 shrink-0" /> {error}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={start}
            disabled={phase === 'starting' || !supported}
            className="inline-flex items-center gap-3 bg-army-900 hover:bg-army-800 disabled:opacity-50 text-gold-400 font-black text-lg px-10 py-4 rounded-sm transition-colors"
          >
            {phase === 'starting' ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Play className="w-6 h-6" />
            )}
            {phase === 'starting' ? 'Tayyar ho raha hai…' : 'Interview Shuru Karein'}
          </button>
          <p className="text-xs text-ink-soft mt-3">
            Mic ki permission mangay ga — "Allow" dabana na bhoolein.
          </p>
        </div>
      </div>
    );
  }

  // ---------------- ended ----------------
  if (phase === 'ended') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="rule-double mb-6" />
        <div className="text-center mb-8">
          <h1 className="font-serif font-black text-3xl text-army-950 mb-2">
            Interview <span className="text-gold-600">Khatam</span>
          </h1>
          <p className="text-army-700 font-medium">
            Neeche aap ki poori guftagu hai — ise parh kar apni ghaltiyan note karein.
          </p>
        </div>
        <Transcript messages={messages} />
        <div className="text-center mt-8">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-gold-400 font-bold px-8 py-3 rounded-sm transition-colors"
          >
            <RotateCcw className="w-5 h-5" /> Dobara Interview Dein
          </button>
        </div>
      </div>
    );
  }

  // ---------------- live ----------------
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="rule-double mb-6" />
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-serif font-black text-2xl text-army-950">
          AI Interview <span className="text-gold-600">— Live</span>
        </h1>
        <button
          onClick={() => setSpeechOn((s) => !s)}
          className="inline-flex items-center gap-2 text-xs font-bold text-army-800 border border-army-300 rounded-sm px-3 py-2"
        >
          <Volume2 className="w-4 h-4" /> Awaz: {speechOn ? 'On' : 'Off'}
        </button>
      </div>

      <div className="mb-4 rounded-sm overflow-hidden border-2 border-army-900">
        <img
          src="https://drive.google.com/thumbnail?id=1cArX-RPAmJ9AtJdNMMx4moX5dZVCK5U3&sz=w800"
          alt="Asal interview room — officer candidate ka interview le raha hai"
          className="w-full h-32 sm:h-44 object-cover"
          loading="lazy"
        />
      </div>

      <Transcript messages={messages} />
      <div ref={bottomRef} />

      {(status || listening) && (
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-army-800 my-4">
          <Loader2 className="w-4 h-4 animate-spin" /> {status || 'Sun raha hun…'}
        </div>
      )}

      {error && (
        <div className="my-4 bg-red-50 border border-red-300 rounded-sm p-4">
          <div className="flex gap-2 text-sm text-red-900">
            <TriangleAlert className="w-5 h-5 shrink-0" /> {error}
          </div>
          <button
            onClick={retryAI}
            className="mt-3 inline-flex items-center gap-2 bg-army-900 hover:bg-army-800 text-gold-400 text-sm font-bold px-5 py-2 rounded-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Dobara Koshish Karein
          </button>
        </div>
      )}

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={toggleMic}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            listening
              ? 'bg-red-600 text-white animate-pulse'
              : 'bg-army-900 text-gold-400 hover:bg-army-800'
          }`}
          aria-label={listening ? 'Mic band karein' : 'Mic kholein'}
        >
          {listening ? <MicOff className="w-9 h-9" /> : <Mic className="w-9 h-9" />}
        </button>
        <button
          onClick={endInterview}
          className="inline-flex items-center gap-2 bg-khaki-200 hover:bg-khaki-300 text-army-950 font-bold px-6 py-3 rounded-sm transition-colors"
        >
          <PhoneOff className="w-5 h-5" /> Khatam Karein
        </button>
      </div>
      <p className="text-center text-xs text-ink-soft mt-3">
        {listening
          ? 'Bolna khatam ho to khamosh ho jayein — AI khud agla sawal poochega.'
          : 'Jawab dene ke liye mic ka button dabayein.'}
      </p>
    </div>
  );
};

const Transcript: React.FC<{ messages: Message[] }> = ({ messages }) => (
  <div className="bg-paper border-2 border-army-900 rounded-sm p-5 space-y-4 max-h-[50vh] overflow-y-auto">
    {messages.length === 0 && (
      <p className="text-sm text-ink-soft text-center">Guftagu yahan nazar ayegi…</p>
    )}
    {messages.map((m, i) => (
      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div
          className={`max-w-[85%] rounded-sm px-4 py-3 text-sm leading-relaxed ${
            m.role === 'user'
              ? 'bg-army-900 text-paper'
              : 'bg-khaki-100 text-ink border border-khaki-400'
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-wider mb-1 opacity-70">
            {m.role === 'user' ? 'Aap' : 'AI Officer'}
          </p>
          {m.text}
        </div>
      </div>
    ))}
  </div>
);
