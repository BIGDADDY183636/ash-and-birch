import Reveal from "@/components/Reveal";

const bouquets = [
  {
    name: "The Wildling",
    price: "$45 / week",
    description:
      "Wild-gathered stems in a loose, garden-fresh arrangement. Seasonal blooms, nothing repeated twice.",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc8c?w=800&q=80",
    alt: "Loose wildflower bouquet",
  },
  {
    name: "Petite Posy",
    price: "$28 / week",
    description:
      "A small, curated handful — perfect for a bedside table or a desk that needs a little life.",
    img: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=800&q=80",
    alt: "Petite pastel bouquet",
  },
  {
    name: "The Studio Special",
    price: "$65 / week",
    description:
      "Our signature arrangement — large, layered, unmistakable. For homes that deserve a statement.",
    img: "https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?w=800&q=80",
    alt: "Large white studio arrangement",
  },
];

export default function Bouquets() {
  return (
    <section id="work" className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sage mb-4">
            What we make
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="font-cormorant font-light text-brown leading-tight mb-3"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
          >
            Three ways to subscribe.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="font-sans text-[0.9rem] text-brown/55 mb-16 max-w-md leading-relaxed">
            Each arrangement is tied by hand. No two are exactly alike.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bouquets.map((b, i) => (
            <Reveal key={b.name} delay={0.1 + i * 0.1}>
              <div className="group">
                <div className="overflow-hidden rounded-[3px] aspect-[3/4] mb-5">
                  <img
                    src={b.img}
                    alt={b.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-cormorant italic text-brown text-[1.3rem] font-medium">
                    {b.name}
                  </h3>
                  <span className="font-sans text-[0.78rem] text-rose font-medium">
                    {b.price}
                  </span>
                </div>
                <p className="font-sans text-[0.82rem] text-brown/55 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 pt-10 border-t border-brown/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-[0.82rem] text-brown/50">
              All subscriptions pause or cancel anytime. No contracts.
            </p>
            <a
              href="#contact"
              className="font-sans text-[0.82rem] font-medium text-rose hover:text-brown transition-colors duration-200"
            >
              Start a subscription →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
