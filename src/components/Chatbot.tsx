import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, BookOpen } from 'lucide-react';
import type { Navigate, Route } from '../types';
import { findAnswer, SUGGESTED_QUESTIONS, FALLBACK_SUGGESTIONS, type FaqLink } from '../data/chatbotFaq';

interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  link?: FaqLink;
  chips?: string[];
}

interface ChatbotProps {
  navigate: Navigate;
}

let msgId = 0;
const nextId = () => ++msgId;

const GREETING: ChatMessage = {
  id: nextId(),
  from: 'bot',
  text: 'Assalam-o-Alaikum! 👋 Me ISSB Dost hoon — tumhara tayari helper. Neeche ek sawal chuno ya apna sawal likho:',
  chips: SUGGESTED_QUESTIONS,
};

export const Chatbot: React.FC<ChatbotProps> = ({ navigate }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const goRoute = (route: Route) => {
    setOpen(false);
    navigate(route);
  };

  const botReply = (userText: string) => {
    setTyping(true);
    window.setTimeout(() => {
      const { entry } = findAnswer(userText);
      let reply: ChatMessage;
      if (entry) {
        reply = {
          id: nextId(),
          from: 'bot',
          text: entry.answer,
          link: entry.link,
        };
      } else {
        reply = {
          id: nextId(),
          from: 'bot',
          text: 'Hmm, ye sawal meri samajh me nahi aya. 🤔 Neeche in me se ek try karo — ya Notes section me poora guide parho:',
          chips: FALLBACK_SUGGESTIONS,
          link: { label: 'Sab Notes dekho', route: { page: 'notes' } },
        };
      }
      setTyping(false);
      setMessages((m) => [...m, reply]);
    }, 550);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: trimmed }]);
    setInput('');
    botReply(trimmed);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Chat band karo' : 'ISSB Dost se poocho'}
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-400 text-army-950 shadow-lg shadow-black/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="w-6 h-6" strokeWidth={2.5} /> : <MessageCircle className="w-6 h-6" strokeWidth={2.5} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed z-[60] bottom-[5.5rem] right-4 sm:right-5 w-[calc(100vw-2rem)] max-w-sm h-[70vh] max-h-[580px] min-h-[380px] bg-paper border-2 border-army-900 rounded-md shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-army-900 text-khaki-100 px-4 py-3 border-b-2 border-gold-500 shrink-0">
            <p className="font-serif font-bold text-base text-white leading-tight">ISSB Dost</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-khaki-400">Tumhara tayari helper</p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-paper">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-md text-sm leading-relaxed whitespace-pre-line ${
                    m.from === 'user'
                      ? 'bg-army-900 text-khaki-100 rounded-br-none'
                      : 'bg-khaki-100 text-ink border border-khaki-300 rounded-bl-none'
                  }`}
                >
                  {m.text}
                  {m.link && (
                    <button
                      onClick={() => goRoute(m.link!.route)}
                      className="mt-2 w-full flex items-center justify-center gap-1.5 bg-army-900 hover:bg-army-800 text-gold-400 text-xs font-bold px-3 py-2 rounded-sm transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      {m.link.label}
                    </button>
                  )}
                  {m.chips && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.chips.map((c) => (
                        <button
                          key={c}
                          onClick={() => send(c)}
                          className="text-xs font-semibold bg-paper border border-gold-500 text-army-900 px-2.5 py-1.5 rounded-full hover:bg-gold-500 hover:text-army-950 transition-colors"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-khaki-100 border border-khaki-300 px-4 py-3 rounded-md rounded-bl-none">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-army-700 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-army-700 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-army-700 animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="shrink-0 border-t border-khaki-300 bg-paper-dark px-3 py-2.5 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Apna sawal likho..."
              className="flex-1 bg-paper border border-khaki-300 rounded-sm px-3 py-2 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              aria-label="Apna sawal likho"
            />
            <button
              type="submit"
              aria-label="Bhejo"
              className="w-10 h-10 shrink-0 rounded-sm bg-gold-500 hover:bg-gold-400 text-army-950 flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
