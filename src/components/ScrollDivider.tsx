import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollDivider = ({ label }: { label?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/80 to-background"
      style={{ opacity }}
    >
      {/* Animated top line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-pink to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        }}
      />

      {/* Center content */}
      <motion.div style={{ y, scale }} className="relative z-10 flex flex-col items-center gap-4">
        {/* Animated circle */}
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-pink to-accent-orange"
          animate={{
            boxShadow: [
              "0 0 10px rgba(236, 72, 153, 0.5)",
              "0 0 20px rgba(236, 72, 153, 0.8)",
              "0 0 10px rgba(236, 72, 153, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Label */}
        {label && (
          <motion.span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            {label}
          </motion.span>
        )}

        {/* Animated circle */}
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-orange to-accent-pink"
          animate={{
            boxShadow: [
              "0 0 20px rgba(249, 115, 22, 0.8)",
              "0 0 10px rgba(249, 115, 22, 0.5)",
              "0 0 20px rgba(249, 115, 22, 0.8)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
      </motion.div>

      {/* Animated bottom line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-orange to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        }}
      />

      {/* Vertical connecting lines */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-pink/30 to-transparent"
        style={{
          scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
        }}
      />
      <motion.div
        className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-orange/30 to-transparent"
        style={{
          scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
        }}
      />
    </motion.div>
  );
};

export default ScrollDivider;
