import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="w-full bg-white font-sans text-zinc-900 antialiased selection:bg-black selection:text-white">
      <Hero />
      <About />
      <Carousel />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}
