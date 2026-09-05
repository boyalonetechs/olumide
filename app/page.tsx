import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Insights } from "@/components/insights";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Insights />
      </main>
      <Footer />
    </>
  );
}