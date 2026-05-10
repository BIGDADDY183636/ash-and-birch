import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bouquets from "@/components/Bouquets";
import Subscription from "@/components/Subscription";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bouquets />
        <Subscription />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
