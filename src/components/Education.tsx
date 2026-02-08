import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0.2, 0.8], [5, -5]);
  const rotateX = useTransform(scrollYProgress, [0.2, 0.8], [3, -3]);

  return (
    <section
      id="education"
      className="relative min-h-screen bg-background flex items-center justify-center py-20"
      data-no-splash="true"
    >
      {/* Gradient glow behind notebook */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full bg-accent-pink/10 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-4xl px-2 md:px-4 mx-auto">
        <motion.h2
          className="section-heading text-foreground text-center mb-16 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Book Style Container */}
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          style={{
            rotateY,
            rotateX,
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Book Wrapper */}
          <div className="relative">
            {/* Book Shadow/3D Effect */}
            <div className="absolute -inset-2 bg-gradient-to-b from-accent-pink/20 to-accent-orange/10 rounded-lg blur-xl -z-10" />

            {/* Book Container - Single Page Book View */}
            <div className="grid grid-cols-1 rounded-lg overflow-hidden shadow-2xl border border-accent-pink/20 bg-gradient-to-br from-accent-pink/5 to-accent-orange/5">
              {/* Book Page Content */}
              <div className="notebook-page p-8 md:p-12 py-16">
                {/* Red margin line */}
                <div className="absolute left-12 top-0 bottom-0 w-px bg-destructive/30" />

                <div className="ml-6">
                  <h3 className="text-xl md:text-2xl font-bold text-background mb-8 border-b-2 border-background/30 pb-3">
                    📚 Academic Journey
                  </h3>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h4 className="text-lg md:text-xl font-extrabold text-background">
                        🏫 Schooling
                      </h4>
                      <div className="space-y-1 ml-2">
                        <p className="text-lg md:text-xl font-semibold text-background">
                          Class 10: 96% — Hiranandani Foundation School, Thane, Maharashtra
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-background">
                          Class 12: 81% — Hiranandani Foundation School, Thane, Maharashtra
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-lg md:text-xl font-extrabold text-background">
                        🎓 College
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-background">
                        B.Tech in Computer Science (Core)
                      </p>
                      <p className="text-lg md:text-xl font-medium text-background">
                        CGPA till 5th semester: 8.44
                      </p>
                    </div>

                    <div className="border-t border-background/20 pt-6 mt-6">
                      <h4 className="text-lg font-bold text-background/90 mb-4">
                        🏆 Certifications
                      </h4>
                      <ul className="text-background/70 text-lg md:text-xl space-y-2 ml-2">
                        <li>• Deep Learning Specialization — Andrew Ng (Coursera)</li>
                        <li>• NPTEL: Design & Analysis of Algorithms (DAA)</li>
                        <li>• NPTEL: Data Structures & Algorithms (DSA)</li>
                        <li>• GeeksForGeeks: OOPS in Java</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book spine effect on right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-pink/30 via-transparent to-accent-orange/30 rounded-r-lg" />
          </div>
        </motion.div>

        {/* Practices Section */}
        <motion.div
          className="relative mx-auto max-w-3xl mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-lg overflow-hidden shadow-2xl border border-accent-pink/20 bg-gradient-to-br from-accent-pink/5 to-accent-orange/5 p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 border-b-2 border-accent-pink/30 pb-3">
              Practices (Learning in Action)
            </h3>
            <ul className="text-foreground/90 text-lg md:text-xl space-y-2 mb-8 ml-4 list-disc">
              <li>Daily GitHub contributions across AI, web, and systems projects.</li>
              <li>Regular LeetCode practice focusing on DSA and algorithms.</li>
            </ul>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <a
                href="https://github.com/swaekaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <img
                  src="https://ghchart.rshah.org/swaekaa"
                  alt="GitHub contribution heatmap"
                  className="w-full max-w-md rounded-lg border border-border/50 bg-card/50 p-2 group-hover:border-accent-pink/50 transition-colors"
                />
                <span className="text-accent-pink font-semibold text-lg md:text-xl hover:underline">
                  View GitHub Profile
                </span>
              </a>
              <a
                href="https://leetcode.com/u/meanturtle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <img
                  src="https://leetcode.card.workers.dev/meanturtle"
                  alt="LeetCode stats"
                  className="w-full max-w-sm rounded-lg border border-border/50 bg-card/50 p-2 group-hover:border-accent-pink/50 transition-colors"
                />
                <span className="text-accent-pink font-semibold text-lg md:text-xl hover:underline">
                  View LeetCode Profile
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
