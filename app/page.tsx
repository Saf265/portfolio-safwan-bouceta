import ContactSection from "./landing/Contact";
import Hero from "./landing/Hero";
// import Nav from "./landing/Nav";
import Project from "./landing/Project";
import SkillsSection from "./landing/Skills";

export default function Home() {
  return (
    <>
    {/* <Nav /> */}
    <Hero />
    <Project />
    <SkillsSection />
    <ContactSection />
    </>
  );
}
