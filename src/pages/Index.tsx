import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import PassionsSkills from "@/components/PassionsSkills";
import FunFact from "@/components/FunFact";
import Contact from "@/components/Contact";
import BottomNav from "@/components/BottomNav";
import GrainOverlay from "@/components/GrainOverlay";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <GrainOverlay />

      {/* Hero is fixed, content scrolls over it */}
      <Hero />

      {/* Spacer for the fixed hero */}
      <div className="h-screen" />

      {/* Main content wrapper with sticky image on left */}
      <div className="relative z-10 bg-background grid grid-cols-1 lg:grid-cols-2 min-h-full">
        {/* Left - Sticky Image */}
        <motion.div
          className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen items-center justify-center overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src="/images/post-now.jpeg"
            alt="Ekaansh"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right - Scrollable content */}
        <main className="relative z-10 bg-background">
          <About />
          <Education />
          <Projects />
          <PassionsSkills />
          <FunFact />
          <Contact />
        </main>
      </div>

      <BottomNav />
    </>
  );
};

export default Index;
