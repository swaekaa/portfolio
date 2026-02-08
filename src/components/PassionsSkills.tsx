import { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
const passions = [
  { icon: "🎧", label: "Music" },
  { icon: "🏀", label: "Basketball" },
  { icon: "🎬", label: "Movies" },
  { icon: "🏃", label: "Sprinting" },
  { icon: "🎾", label: "Tennis" },
  { icon: "🛠️", label: "Building / Creating" },
];

const skills = [
  { name: "Machine Learning", level: 92 },
  { name: "Deep Learning", level: 90 },
  { name: "NLP", level: 88 },
  { name: "Computer Vision", level: 86 },
  { name: "Backend (Node.js / FastAPI)", level: 84 },
  { name: "Data Engineering & MLOps", level: 80 },
];

const PassionsSkills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "30%", "0%"]
  );
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0, 0.12, 0.18, 0]
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        left: `${5 + (i * 47 + 13) % 90}%`,
        top: `${5 + (i * 31 + 7) % 90}%`,
        size: 1 + (i % 3),
        duration: 12 + (i % 8) * 2,
        delay: 0,
        yRange: -30 - (i % 5) * 10,
        xRange: (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 5),
      })),
    []
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-background py-20 overflow-hidden"
      data-no-splash="true"
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[200%] gradient-pink-orange pointer-events-none"
        style={{ y: gradientY, opacity: 0 }}
      />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-pink/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, p.yRange, 0],
            x: [0, p.xRange, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
      ))}

      <div ref={sectionRef} className="relative z-10 w-full">
        <motion.h2
          className="section-heading text-foreground text-center mb-24 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Passions & Skills
        </motion.h2>

        {/* TRAIN SECTION */}
        <div className="relative mb-40 py-20">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent-pink/60 to-transparent opacity-60 transform -translate-y-1/2" />

          <motion.div
            className="absolute top-1/2 flex items-center gap-0 transform -translate-y-1/2"
            animate={{ x: ["calc(-200px)", "calc(100vw + 200px)"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {/* Shared gradients */}
            <svg width="0" height="0">
              <defs>
                <linearGradient id="engineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </svg>

            {/* Engine */}
            <svg
              width="120"
              height="90"
              viewBox="0 0 100 80"
              className="flex-shrink-0 drop-shadow-2xl"
            >
              <rect x="5" y="20" width="30" height="35" rx="2" fill="url(#engineGradient)" />
              <circle cx="12" cy="60" r="6" fill="#ec4899" />
              <circle cx="28" cy="60" r="6" fill="#ec4899" />
              <rect x="10" y="10" width="20" height="12" rx="1" fill="#f97316" />
              <rect x="20" y="5" width="4" height="6" fill="#ec4899" />
            </svg>

            {[0, 1, 2].map((i) => (
              <svg
                key={`car-${i}`}
                width="80"
                height="90"
                viewBox="0 0 70 80"
                className="flex-shrink-0 drop-shadow-lg"
              >
                <rect x="5" y="25" width="60" height="30" rx="2" fill="url(#carGradient)" />
                <circle cx="15" cy="60" r="6" fill="#f97316" />
                <circle cx="55" cy="60" r="6" fill="#f97316" />
                <rect x="12" y="32" width="10" height="8" fill="rgba(255,255,255,0.4)" rx="1" />
                <rect x="28" y="32" width="10" height="8" fill="rgba(255,255,255,0.4)" rx="1" />
                <rect x="44" y="32" width="10" height="8" fill="rgba(255,255,255,0.4)" rx="1" />
              </svg>
            ))}
          </motion.div>

          {/* Passions */}
          <div className="relative h-40 flex items-center justify-center">
            <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap max-w-5xl mx-auto">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.label}
                  className="flex flex-col items-center gap-4 group/passion"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.1 + index * 0.03,
                    duration: 1,
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <motion.div
                    className="w-20 h-20 glass rounded-full flex items-center justify-center text-3xl shadow-lg border-2 border-accent-pink/40 cursor-pointer group-hover/passion:passion-glow transition-all duration-300"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 4 + index * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {passion.icon}
                  </motion.div>
                  <span className="text-base font-semibold text-accent-pink text-center">
                    {passion.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mx-auto px-4 max-w-7xl">
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Technical Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + index * 0.04, duration: 1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-accent-orange/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative glass rounded-xl p-6 border border-accent-pink/20 group-hover:border-accent-pink/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-foreground text-xl font-bold">{skill.name}</span>
                    <motion.span
                      className="text-2xl md:text-3xl font-bold gradient-text"
                      animate={isInView ? { opacity: [0.7, 1, 1] } : {}}
                      transition={{ delay: 0.25 + index * 0.04, duration: 1.4 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="h-3 bg-secondary/40 rounded-full overflow-hidden backdrop-blur-sm border border-accent-pink/20">
                    <motion.div
                      className="h-full skill-fill rounded-full shadow-lg shadow-accent-pink/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        delay: 0.25 + index * 0.04,
                        duration: 2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-accent-pink/10">
                    <motion.p
                      className="text-sm text-muted-foreground group-hover:text-accent-pink/80 transition-colors"
                      animate={isInView ? { opacity: [0.5, 1] } : {}}
                      transition={{ delay: 0.35 + index * 0.04, duration: 1.2 }}
                    >
                      Proficiency:{" "}
                      {skill.level > 90
                        ? "Expert"
                        : skill.level > 75
                        ? "Advanced"
                        : "Intermediate"}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionsSkills;
