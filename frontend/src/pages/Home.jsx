import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import DesignProcess from "@/components/DesignProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home({ ready }) {
  return (
    <main data-testid="home-page" className="relative">
      <Nav />
      <Hero ready={ready} />
      <EditorialMarquee />
      <About />
      <Skills />
      <FeaturedProject />
      <DesignProcess />
      <EditorialMarquee />
      <Contact />
      <Footer />
    </main>
  );
}
