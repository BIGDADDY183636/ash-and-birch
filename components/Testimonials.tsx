import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "I've been a subscriber for two years. The weekly arrangement on my kitchen table has become a ritual I didn't know I needed. Clara has never once sent me something I didn't love.",
    name: "Sarah M.",
    location: "Lincoln Square",
    photo: null,
  },
  {
    quote:
      "Clara did the florals for my daughter's wedding. We cried. The flowers were exactly what I had dreamed of but never knew how to describe. She just knew.",
    name: "Margaret K.",
    location: "Evanston",
    photo: null,
  },
  {
    quote:
      "I send my mother a bouquet every month through Ash & Birch. She calls me every single time it arrives. Worth every penny.",
    name: "Rachel F.",
    location: "Wicker Park",
    photo: null,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sage mb-4">
            What people say
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="font-cormorant font-light text-brown leading-tight mb-16"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
          >
            From people who order every week.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.1}>
              <div className="bg-cream rounded-[3px] p-8 border border-brown/[0.07] h-full flex flex-col">
                <p className="font-cormorant italic text-[1.1rem] text-brown/75 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-brown/[0.07]">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-rosedim/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-cormorant italic text-rose text-[0.7rem] tracking-tight">
                        {t.name.split(" ").map((w: string) => w[0]).join("")}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-sans text-[0.78rem] font-medium text-brown">
                      {t.name}
                    </p>
                    <p className="font-sans text-[0.7rem] text-brown/45">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
