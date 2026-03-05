import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import PassionsSkills from "@/components/PassionsSkills";
import FunFact from "@/components/FunFact";
import Contact from "@/components/Contact";
import BottomNav from "@/components/BottomNav";
import GrainOverlay from "@/components/GrainOverlay";
import { useScroll } from "framer-motion";

const Index = () => {
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      // Show profile panel after scrolling past landing page (100vh)
      setShowProfilePanel(latest > window.innerHeight);
    });

    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <GrainOverlay />

      {/* Hero is fixed, content scrolls over it */}
      <Hero />

      {/* Spacer for the fixed hero */}
      <div className="h-screen" />

      {/* Main content wrapper with 50-50 split on desktop */}
      <div className="relative z-10 bg-background min-h-full mx-auto w-full overflow-x-hidden">
        {/* Left - Fixed Profile Image Panel (Desktop only, appears after landing page) */}
        {showProfilePanel && (
          <div className="profile-panel hidden lg:block fixed left-0 top-0 h-screen overflow-hidden pointer-events-none">
            <img
              src="/images/post-now.jpeg"
              alt="Ekaansh"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Right - Scrollable content */}
        <main className={`content-panel relative z-20 bg-background w-full px-0 md:px-4 md:container md:mx-0 transition-all duration-300 ${
          showProfilePanel ? "lg:w-1/2 lg:ml-[50%]" : ""
        }`}>
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
