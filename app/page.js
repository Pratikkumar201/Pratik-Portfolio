import Hero from './components/hero';
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from './components/projects';
import Contact from './components/contact';
import ShareButton from './components/ShareButton';

export default function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-accent-cyan/30">
      <main className="space-y-0">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating Utilities */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <ShareButton />
      </div>
    </div>
  );
}




