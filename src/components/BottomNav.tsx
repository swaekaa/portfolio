import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, User, GraduationCap, Code, Sparkles, Lightbulb, MessageCircle } from "lucide-react";

const navItems = [
  { id: "hero", icon: <Home className="w-4 h-4" />, label: "Home" },
  { id: "about", icon: <User className="w-4 h-4" />, label: "About" },
  { id: "education", icon: <GraduationCap className="w-4 h-4" />, label: "Edu" },
  { id: "projects", icon: <Code className="w-4 h-4" />, label: "Projects" },
  { id: "skills", icon: <Sparkles className="w-4 h-4" />, label: "Skills" },
  { id: "funfact", icon: <Lightbulb className="w-4 h-4" />, label: "Fun Fact" },
  { id: "contact", icon: <MessageCircle className="w-4 h-4" />, label: "Contact" },
];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const activeSectionRef = useRef("hero");

  useEffect(() => {
    // Track which sections are visible and their intersection ratios
    const visibleSections = new Map<string, number>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          visibleSections.set(id, entry.intersectionRatio);
        } else {
          visibleSections.delete(id);
        }
      });

      // Find the section with the highest intersection ratio
      let bestId = "";
      let bestRatio = 0;
      visibleSections.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId && bestId !== activeSectionRef.current) {
        activeSectionRef.current = bestId;
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      // Use multiple thresholds for finer-grained ratio tracking
      threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
    });

    // Detect hero via scroll position since it's fixed
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) {
        if (activeSectionRef.current !== "hero") {
          activeSectionRef.current = "hero";
          setActiveSection("hero");
        }
      }
    };

    // Observe all sections except hero (which is fixed)
    navItems.forEach((item) => {
      if (item.id === "hero") return;
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-6 z-[999] glass-strong rounded-full px-3 py-3 flex-col items-center justify-center hidden lg:flex"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, type: "spring", damping: 20 }}
    >
      <div className="flex flex-col items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              title={item.label}
              className={`relative flex items-center justify-center p-2 rounded-full text-base transition-all duration-300 ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 gradient-pink-orange rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">{item.icon}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
