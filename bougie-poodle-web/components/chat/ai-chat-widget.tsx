"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Message = { role: "assistant" | "user"; text: string };

const WELCOME: Message = {
  role: "assistant",
  text: `Hi, I'm the Bougie Concierge 🐩 Ask me about services, hours, or how to book — and for anything I can't answer, I'll connect you straight to the studio at ${BUSINESS.phone}.`,
};

const CANNED_RESPONSE =
  "Thank you! A member of our concierge team will follow up shortly. For anything urgent, please call the studio directly — we're always happy to help.";

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: CANNED_RESPONSE }]);
    }, 700);
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-24">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-[0_20px_60px_rgba(27,24,21,0.18)]">
          <div className="flex items-center justify-between bg-ink px-4 py-3.5 text-cream">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-bougie-bright" />
              <span className="font-display text-sm">Bougie Concierge</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-cream/60 px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  m.role === "assistant"
                    ? "bg-white text-ink shadow-sm"
                    : "ml-auto bg-bougie text-cream",
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-sand/70 bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, hours…"
              aria-label="Message"
              className="h-10 flex-1 rounded-full border border-sand bg-cream/50 px-4 text-sm text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-bougie/40"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bougie text-cream transition-colors hover:bg-bougie-bright"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-bougie text-cream shadow-[0_8px_30px_rgba(232,65,44,0.35)] transition-transform duration-300 hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
