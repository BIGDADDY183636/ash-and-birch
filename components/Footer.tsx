export default function Footer() {
  return (
    <footer className="bg-surface border-t border-brown/[0.07] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-cormorant italic text-[1.2rem] text-brown font-semibold mb-2">
              Ash &amp; Birch
            </p>
            <p className="font-sans text-[0.8rem] text-brown/50 leading-relaxed">
              Independent florist.<br />
              Logan Square, Chicago.
            </p>
          </div>
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-sage/70 mb-3">
              Visit
            </p>
            <p className="font-sans text-[0.8rem] text-brown/55 leading-relaxed">
              1847 N Milwaukee Ave<br />
              Chicago, IL 60647<br />
              Mon – Sat, 9am – 6pm
            </p>
          </div>
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-sage/70 mb-3">
              Contact
            </p>
            <a
              href="mailto:hello@ashandbirch.com"
              className="font-sans text-[0.8rem] text-rose hover:text-brown transition-colors duration-150"
            >
              hello@ashandbirch.com
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-brown/[0.06]">
          <p className="font-sans text-[0.68rem] text-brown/25 tracking-wide">
            © 2025 Ash &amp; Birch Design Studio &ensp;·&ensp; Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  );
}
