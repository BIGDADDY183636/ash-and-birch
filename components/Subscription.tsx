import Reveal from "@/components/Reveal";

const features = [
  "Seasonal blooms sourced from Illinois growers each week",
  "Hand-tied and wrapped, ready to place in a vase",
  "Delivered to your door every Thursday",
  "Pause, modify, or cancel anytime — no fees",
];

export default function Subscription() {
  return (
    <section
      id="subscriptions"
      className="bg-surface py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sage mb-4">
                Fresh stems, weekly
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-cormorant font-light text-brown leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
              >
                Delivered every<br />
                <em>Thursday.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-sans text-[0.92rem] text-brown/60 leading-relaxed mb-10 max-w-sm">
                Your home should always have flowers. A weekly subscription is
                the easiest way to make that happen — without a second thought.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-rose mt-0.5 flex-shrink-0">—</span>
                    <span className="font-sans text-[0.85rem] text-brown/65 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="#contact"
                className="inline-block font-sans text-[0.82rem] font-medium bg-rose text-cream px-7 py-3.5 rounded-full hover:bg-[#7a3f4d] transition-colors duration-200"
              >
                Start your subscription →
              </a>
              <p className="mt-4 font-sans text-[0.72rem] text-brown/40">
                Subscriptions from $28 / week
              </p>
            </Reveal>
          </div>

          {/* Right: visual */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="bg-cream rounded-[3px] p-10 border border-brown/[0.07]">
                <p className="font-cormorant italic text-[2rem] font-light text-brown/80 leading-snug mb-8">
                  &ldquo;I started Ash &amp; Birch because flowers should feel like a
                  love letter, not a transaction.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-rose/50" />
                  <p className="font-sans text-[0.75rem] text-brown/50 tracking-wide">
                    Clara Ashworth, Founder
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
