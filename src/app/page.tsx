import { Contact } from "@/components/Contact";
import { Domains } from "@/components/Domains";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Intro />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Domains />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
