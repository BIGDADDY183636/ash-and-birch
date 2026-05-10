export default function Hero() {
  return (
    <section className="min-h-screen bg-cream flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-sage mb-8">
              Est. 2019 &ensp;·&ensp; Logan Square, Chicago
            </p>
            <h1
              className="font-cormorant italic font-light text-brown leading-[1.05]"
              style={{ fontSize: "clamp(3.2rem, 6vw, 5.6rem)" }}
            >
              The neighborhood<br />florist.
            </h1>
            <p className="font-sans text-[1rem] text-brown/60 leading-relaxed mt-6 max-w-sm">
              Hand-tied stems, weekly subscriptions,<br className="hidden sm:block" />
              custom event florals.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-10">
              <a
                href="#subscriptions"
                className="font-sans text-[0.82rem] font-medium bg-rose text-cream px-7 py-3.5 rounded-full hover:bg-[#7a3f4d] transition-colors duration-200"
              >
                Order weekly →
              </a>
              <a
                href="#work"
                className="font-sans text-[0.82rem] text-brown/50 hover:text-brown transition-colors duration-200"
              >
                See our work
              </a>
            </div>
            <p className="font-sans text-[0.72rem] text-brown/30 mt-12 tracking-wide">
              Delivering to Chicago&apos;s North Side every Thursday
            </p>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[3px] aspect-[3/4] lg:aspect-auto lg:h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80"
                alt="Florist arranging flowers"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-brown/[0.04]" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-surface border border-brown/[0.08] px-5 py-4 rounded-[3px] shadow-sm">
              <p className="font-cormorant italic text-brown/70 text-[0.9rem]">
                &ldquo;Tied by hand, every week.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
