const links = [
  { label: "Subscriptions", href: "#subscriptions" },
  { label: "Our Work",      href: "#work" },
  { label: "About",         href: "#about" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-brown/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-cormorant italic text-[1.35rem] font-semibold text-brown tracking-wide"
        >
          Ash &amp; Birch
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[0.8rem] text-brown/60 hover:text-brown transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-[0.8rem] font-medium text-rose border border-rose/40 px-4 py-1.5 rounded-full hover:bg-rose hover:text-cream transition-all duration-200"
          >
            Order now
          </a>
        </nav>
        {/* Mobile: just the CTA */}
        <a
          href="#contact"
          className="md:hidden font-sans text-[0.78rem] font-medium text-rose border border-rose/40 px-4 py-1.5 rounded-full"
        >
          Order now
        </a>
      </div>
    </header>
  );
}
