import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText } from "lucide-react";
import resume from "../../public/Ekaansh_Sawaria_cv.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="relative min-h-screen bg-background" ref={ref}>
      <div className="flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-20 py-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-heading text-foreground mb-8">
            About Me
          </h2>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          a third-year student who lives somewhere between code, curiosity, and controlled chaos. I'm drawn to how systems think, how data flows, and how AI can turn messy information into something meaningful. My sweet spot is backend engineering and AI, where I get to build smart pipelines, experiment with models, and design systems that feel as clever as they are useful. I love breaking things just enough to understand them better, then rebuilding them stronger.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-white font-semibold leading-relaxed max-w-xl mt-4"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          When I'm not coding, you'll probably find me experimenting with new AI tools, or disappearing into deep tech rabbit holes. And if I'm really not at my laptop, I'm most likely playing sports, catching up on sleep, or dramatically singing in my shower like it's a sold out concert.
        </motion.p>

        <motion.div
          className="flex items-center gap-3 mt-8 max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <span className="text-lg md:text-xl text-white font-semibold">
            Check out my resume
          </span>
          <button
            onClick={() => window.open(resume, '_blank')}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 group cursor-pointer"
            aria-label="Open resume in new tab"
          >
            <FileText className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
