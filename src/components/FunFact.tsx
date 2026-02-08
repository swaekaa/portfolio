import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const FUN_FACTS = [
  "I won a district-level skating competition at 12 — and quit right after because I got bored.",
  "I once scored 6 runs off 69 balls… and still got a standing ovation.",
  "I was undefeated in obstacle course races throughout my school years.",
  "Proud member of my college Dean's List.",
  "My favorite language is Java — I've been learning it since class 8.",
  "I built this site because I was stuck doing backend work and needed a creative outlet.",
  "Currently contributing to open source — so if you have an issue, contact me 😉",
  "I love to optimize and fine-tune models… okay maybe a little.",
  "I once spent 42 hours optimizing for a 0.13% accuracy boost. Totally worth it (not).",
];

const FunFact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [fact, setFact] = useState<string>(() => {
    const i = Math.floor(Math.random() * FUN_FACTS.length);
    return FUN_FACTS[i];
  });

  useEffect(() => {
    const i = Math.floor(Math.random() * FUN_FACTS.length);
    setFact(FUN_FACTS[i]);
  }, []);

  return (
    <section
      id="funfact"
      className="relative min-h-[60vh] bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 spotlight" />

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-pink/40"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 text-center px-4 max-w-3xl">
        <motion.p
          className="section-heading text-foreground leading-relaxed"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Fun fact: {fact}
        </motion.p>
      </div>
    </section>
  );
};

export default FunFact;
