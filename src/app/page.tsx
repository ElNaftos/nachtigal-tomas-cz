import { Contact } from "@/components/Contact";
import { Domains } from "@/components/Domains";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Projects />
      <Domains />
      <Contact />
      <Footer />
    </main>
  );
}
