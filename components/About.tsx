import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[3px] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=80"
                alt="Ash & Birch studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brown/20 to-transparent" />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={0.06}>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sage mb-4">
                The story
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2
                className="font-cormorant font-light text-brown leading-tight mb-8"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
              >
                About the studio.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-sans text-[0.92rem] text-brown/65 leading-[1.85] mb-5">
                I&apos;m Clara Ashworth. I&apos;ve been arranging flowers in Logan
                Square since 2019, sourcing from local growers, the
                Green City Market, and my own small plot on Milwaukee Avenue.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-sans text-[0.92rem] text-brown/65 leading-[1.85] mb-5">
                Every arrangement is made to order. Nothing sits in a cooler.
                I tie each stem the morning it goes out, which means what
                arrives at your door is as fresh as anything I could hand you.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="font-sans text-[0.92rem] text-brown/65 leading-[1.85] mb-10">
                I take on event work in small batches — weddings, dinners,
                corporate installations — because I&apos;d rather do five things
                beautifully than fifty things fine.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-6">
                {["Sourced locally", "Arranged by hand", "Delivered with care"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[0.72rem] tracking-[0.14em] uppercase text-sage/80 border border-sage/25 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
