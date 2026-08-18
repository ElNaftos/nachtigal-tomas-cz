"use client";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { FormEvent, useState } from "react";

const starters = [
  "Na čem Tomáš pracoval?",
  "S čím mi může pomoci?",
  "Jak ho mohu kontaktovat?",
];

export function PortfolioChat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const [input, setInput] = useState("");
  const isBusy = status !== "ready";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || isBusy) return;
    sendMessage({ text });
    setInput("");
  };

  const ask = (text: string) => {
    if (!isBusy) sendMessage({ text });
  };

  return (
    <section aria-label="Zeptat se Tomáše" className="py-24 max-md:py-16">
      <div className="max-w-[760px] mx-auto px-[clamp(24px,5vw,96px)]">
        <div className="border border-[var(--rule)] bg-[var(--ink)] p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--cream)] mb-4">
            Portfolio asistent
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,58px)] leading-none tracking-[-0.025em] mb-4">
            Zeptejte se na mou práci.
          </h2>
          <p className="font-sans text-[16px] leading-[1.5] font-light text-[var(--ink-dim)] mb-6">
            Odpovědi vycházejí jen z obsahu tohoto portfolia.
          </p>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {starters.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={() => ask(starter)}
                  disabled={isBusy}
                  className="border border-[var(--rule)] px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-[var(--ink-dim)] hover:border-[var(--cream)] hover:text-[var(--cream)] disabled:opacity-50 transition-colors"
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          {messages.length > 0 && (
            <div className="space-y-4 mb-6 max-h-[420px] overflow-y-auto pr-2" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={message.role === "user" ? "text-right" : "text-left"}>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)]">
                    {message.role === "user" ? "Vy" : "Tomášův asistent"}
                  </span>
                  <div className="mt-1 font-sans text-[15px] leading-[1.55] text-[var(--ink)]">
                    {message.parts.map((part, index) =>
                      part.type === "text" ? <p key={index}>{part.text}</p> : null,
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={submit} className="flex gap-3 border-t border-[var(--rule)] pt-5">
            <label className="sr-only" htmlFor="portfolio-question">Vaše otázka</label>
            <input
              id="portfolio-question"
              value={input}
              maxLength={800}
              onChange={(event) => setInput(event.target.value)}
              disabled={isBusy}
              placeholder="Např. Jaké weby Tomáš staví?"
              className="min-w-0 flex-1 bg-transparent font-sans text-[15px] text-[var(--ink)] outline-none placeholder:text-[var(--ink-mute)] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isBusy || !input.trim()}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--cream)] disabled:opacity-40"
            >
              {isBusy ? "Píše…" : "Odeslat"}
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-red-300">Odpověď se nepodařilo načíst. Zkuste to prosím znovu.</p>}
        </div>
      </div>
    </section>
  );
}
