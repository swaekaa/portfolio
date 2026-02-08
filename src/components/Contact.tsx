import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/swaekaa", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sawaria-ekaansh/", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/moanturtle/", label: "Instagram" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:sawariaekaansh@gmail.com", label: "Email" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-background flex items-center justify-center py-20"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent-pink/5 blur-[120px]" />

      <div ref={ref} className="relative z-10 w-full max-w-lg px-4 md:px-6">
        <motion.h2
          className="section-heading text-foreground text-center mb-4 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's build something amazing together.
        </motion.p>



        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-full flex items-center justify-center neon-border-pink text-accent-pink hover:text-primary-foreground hover:gradient-pink-orange transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-muted-foreground/50 text-base mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
