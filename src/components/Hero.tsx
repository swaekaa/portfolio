import { motion } from "framer-motion";

// split into words so mobile can stack them on separate lines
const nameWords = ["EKAANSH", "SAWARIA"];

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.06,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="fixed inset-0 w-full h-screen z-0" data-no-splash="true">
      {/* GIF Background (centered to match content width on desktop) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full h-full overflow-hidden relative">
            <img
              src="/images/hero-bg.gif"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-background/40" />
          </div>
        </div>
      </div>

      {/* Centered Name — letter-by-letter */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-primary-foreground font-gaegu tracking-wider text-center text-shadow-glow flex flex-wrap justify-center">
          {nameWords.map((word, wi) => {
            const charIndexOffset = nameWords.slice(0, wi).reduce((sum, w) => sum + w.length, 0);
            return (
              <span key={wi} className="inline">
                {word.split("").map((char, i) => (
                  <motion.span
                    key={wi + "-" + i}
                    custom={charIndexOffset + i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ perspective: 600 }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wi < nameWords.length - 1 && (
                  <span>&nbsp;</span>
                )}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-primary-foreground/60 text-base tracking-widest uppercase">
          Scroll Down
        </span>
        <motion.div
          className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary-foreground/60 rounded-full mt-1"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
