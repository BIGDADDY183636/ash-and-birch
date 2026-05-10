"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Demo: simulate send
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-cream py-28 border-t border-brown/[0.07]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sage mb-4">
                Get in touch
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-cormorant font-light text-brown leading-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
              >
                Let&apos;s talk flowers.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-sans text-[0.9rem] text-brown/60 leading-relaxed mb-10 max-w-sm">
                Tell me about your event, your subscription interest, or just
                say hello. I read every message and respond within a day.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3 font-sans text-[0.82rem] text-brown/55">
                <p>1847 N Milwaukee Ave, Chicago, IL 60647</p>
                <p>Mon – Sat &ensp;·&ensp; 9am – 6pm</p>
                <a
                  href="mailto:hello@ashandbirch.com"
                  className="block text-rose hover:text-brown transition-colors duration-200"
                >
                  hello@ashandbirch.com
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <div>
              {status === "sent" ? (
                <div className="py-12">
                  <h3 className="font-cormorant italic text-[2rem] text-brown font-light mb-2">
                    Thank you.
                  </h3>
                  <p className="font-sans text-[0.9rem] text-brown/55">
                    I&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-sans text-[0.68rem] tracking-[0.18em] uppercase text-brown/40 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent border border-brown/15 rounded-[3px] px-4 py-3 font-sans text-[0.88rem] text-brown placeholder-brown/25 focus:outline-none focus:border-rose transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.68rem] tracking-[0.18em] uppercase text-brown/40 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent border border-brown/15 rounded-[3px] px-4 py-3 font-sans text-[0.88rem] text-brown placeholder-brown/25 focus:outline-none focus:border-rose transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.68rem] tracking-[0.18em] uppercase text-brown/40 mb-2">
                      Tell me about your event or subscription
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Wedding florals for June, weekly subscription, a one-time arrangement..."
                      className="w-full bg-transparent border border-brown/15 rounded-[3px] px-4 py-3 font-sans text-[0.88rem] text-brown placeholder-brown/25 focus:outline-none focus:border-rose transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-rose text-cream font-sans text-[0.8rem] font-medium tracking-wide py-4 rounded-[3px] hover:bg-[#7a3f4d] transition-colors duration-200 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send message →"}
                  </button>
                  {status === "error" && (
                    <p className="font-sans text-[0.78rem] text-rose/80">
                      Something went wrong. Email me at hello@ashandbirch.com
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
