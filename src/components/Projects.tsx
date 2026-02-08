import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Folder, Brain, AudioLines, Clapperboard, Code2, BarChart3, Leaf, Satellite, Briefcase, Play, FileText, Plane, Music } from "lucide-react";

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  techStack: string[];
  githubUrl: string;
  deployedUrl?: string;
  presentationUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: "llm_quant_sense",
    name: "llm_quant_sense",
    icon: <Brain className="w-7 h-7" />,
    description: "Analyzes how different transformer layers react to quantization by measuring accuracy drops when layers are compressed. Helps identify sensitive layers to guide efficient mixed-precision deployment of LLMs.",
    techStack: ["Jupyter", "Python", "LLM"],
    githubUrl: "https://github.com/swaekaa/llm_quant_sense",
  },
  {
    id: "audiosep",
    name: "AudioSep",
    icon: <AudioLines className="w-7 h-7" />,
    description: "Deep-learning based audio source separation system that isolates vocals and background music from mixed audio. Explores neural architectures for better separation quality and real-time inference potential.",
    techStack: ["Python", "Deep Learning", "Audio"],
    githubUrl: "https://github.com/swaekaa/AudioSep",
  },
  {
    id: "kubrick",
    name: "kubrick",
    icon: <Clapperboard className="w-7 h-7" />,
    description: "A knowledge-graph–based semantic search system for movies. It models relationships between actors, directors, genres, and films, enabling intelligent, relationship-aware search and recommendation beyond simple keyword matching.",
    techStack: ["Jupyter", "Python"],
    githubUrl: "https://github.com/swaekaa/kubrick",
  },
  {
    id: "maany",
    name: "maany",
    icon: <Code2 className="w-7 h-7" />,
    description: "A RAG-based chatbot built for college students to answer academic and financial queries. It retrieves relevant institutional documents using vector search and provides LLM-powered, context-aware responses for fee structures, scholarships, policies, and academic rules.",
    techStack: ["TypeScript"],
    githubUrl: "https://github.com/swaekaa/maany",
  },
  {
    id: "shap_vs_gradcam",
    name: "SHAP_VS_GradCam",
    icon: <BarChart3 className="w-7 h-7" />,
    description: "Comparative study between SHAP and Grad-CAM for computer vision interpretability.",
    techStack: ["Python", "SHAP", "GradCAM"],
    githubUrl: "https://github.com/swaekaa/SHAP_VS_GradCam",
  },
  {
    id: "sustainbridge",
    name: "SustainBridge",
    icon: <Leaf className="w-7 h-7" />,
    description: "AI-driven platform for demand forecasting and efficient resource redistribution.",
    techStack: ["AI", "Python", "ML"],
    githubUrl: "https://github.com/swaekaa/SustainBridge",
    presentationUrl: "https://www.youtube.com/watch?v=lpA3nzx4esY",
  },
  {
    id: "visionsat",
    name: "VisionSat",
    icon: <Satellite className="w-7 h-7" />,
    description: "Explainable AI web app for satellite image classification with heatmaps.",
    techStack: ["Python", "XAI", "CNN"],
    githubUrl: "https://github.com/swaekaa/VisionSat",
    deployedUrl: "https://vision-sat.vercel.app",
  },
  {
    id: "intern_project_recc",
    name: "intern_project_recc",
    icon: <Briefcase className="w-7 h-7" />,
    description: "Streamlit internship recommender using scikit-learn and semantic similarity.",
    techStack: ["Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/swaekaa/intern_project_recc",
  },
  {
    id: "now_playing",
    name: "now_playing",
    icon: <Play className="w-7 h-7" />,
    description: "JavaScript tool that detects the currently playing YouTube video across tabs.",
    techStack: ["JavaScript", "Browser Extension"],
    githubUrl: "https://github.com/swaekaa/now_playing",
  },
  {
    id: "hackerzstreet",
    name: "arogayaAI",
    icon: <FileText className="w-7 h-7" />,
    description: "Multilingual RAG system using vector databases and LLMs.",
    techStack: ["RAG", "NLP", "Python"],
    githubUrl: "https://github.com/swaekaa/HackerzStreet-25",
    demoUrl: "https://drive.google.com/drive/folders/10kBcKm-Aj0kcGC5THhuLprZ6pzduNnxA",
  },
  {
    id: "flight_route",
    name: "Flight-Route_Optimization",
    icon: <Plane className="w-7 h-7" />,
    description: "GNN-based flight route optimizer with interactive Folium maps and filters.",
    techStack: ["GNN", "Python", "Maps"],
    githubUrl: "https://github.com/swaekaa/Flight-_Route_Optimization",
  },
  {
    id: "music_recc",
    name: "your_music_recommendation",
    icon: <Music className="w-7 h-7" />,
    description: "Streamlit music recommender using audio features and listening history.",
    techStack: ["Streamlit", "Python", "ML"],
    githubUrl: "https://github.com/swaekaa/your_music_recommendation",
  },
];

const ProjectWindow = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <>
    <motion.div
      className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    />
    <motion.div
      className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg"
      initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
      exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
      transition={{ type: "spring", damping: 25 }}
    >
      <div className="glass-strong rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
              />
              <div className="w-3 h-3 rounded-full bg-accent-orange/50" />
              <div className="w-3 h-3 rounded-full bg-accent-pink/50" />
            </div>
            <span className="text-sm text-foreground/80">{project.name}</span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-pink-orange rounded-xl flex items-center justify-center text-primary-foreground">
              {project.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h3>
          </div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass px-5 py-2.5 rounded-lg text-base md:text-lg text-accent-pink font-semibold flex items-center gap-2 hover:bg-accent-pink/20 transition-colors">
              <Github className="w-4 h-4" /> Source
            </a>
            {project.deployedUrl && (
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="glass px-5 py-2.5 rounded-lg text-base md:text-lg text-accent-pink font-semibold flex items-center gap-2 hover:bg-accent-pink/20 transition-colors">
                <ExternalLink className="w-4 h-4" /> Deployed
              </a>
            )}
            {project.presentationUrl && (
              <a href={project.presentationUrl} target="_blank" rel="noopener noreferrer" className="glass px-5 py-2.5 rounded-lg text-base md:text-lg text-accent-pink font-semibold flex items-center gap-2 hover:bg-accent-pink/20 transition-colors">
                <ExternalLink className="w-4 h-4" /> Presentation
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="glass px-5 py-2.5 rounded-lg text-base md:text-lg text-accent-pink font-semibold flex items-center gap-2 hover:bg-accent-pink/20 transition-colors">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isArcadeMode, setIsArcadeMode] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section id="projects" className="relative min-h-screen bg-background flex items-center justify-center py-20" data-no-splash="true">
      <div ref={ref} className="relative z-10 w-full max-w-5xl px-4">
        <motion.h2
          className="section-heading text-foreground text-center mb-16 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="relative mx-auto max-w-3xl cursor-pointer"
          style={{ scale, opacity }}
          whileHover={{ scale: 1.08 }}
          onClick={() => setIsArcadeMode(!isArcadeMode)}
        >
          <AnimatePresence mode="wait">
            {isArcadeMode ? (
              <motion.div
                key="arcade"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6 }}
                style={{ perspective: 1000 }}
              >
                <div className="bg-gradient-to-b from-red-600 to-red-700 rounded-t-3xl p-8 pt-12 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-96 h-8 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 rounded-lg flex items-center justify-center border-4 border-yellow-300 shadow-lg overflow-hidden">
                    <motion.div
                      className="text-black font-bold text-lg tracking-widest whitespace-nowrap"
                      animate={{ x: [100, -400] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      🎮 PROJECT ARCADE 🎮
                    </motion.div>
                  </div>

                  <div className="bg-black rounded-2xl p-4 relative shadow-2xl mt-4">
                    <div className="arcade-screen rounded-lg relative overflow-hidden border-4 border-yellow-600 shadow-inner" style={{ aspectRatio: "4/3" }}>
                      <div
                        className="absolute inset-0 opacity-20 z-10 pointer-events-none"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />

                      <div className="relative z-20 p-4 grid grid-cols-2 md:grid-cols-4 gap-3 h-full content-start bg-gradient-to-b from-purple-900 to-blue-900 overflow-y-auto">
                        {projects.map((project, index) => (
                          <motion.button
                            key={project.id}
                            className="flex flex-col items-center gap-1 group cursor-pointer p-1.5 rounded-lg transition-colors hover:bg-yellow-400/20 border-2 border-transparent hover:border-yellow-400"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveProject(project);
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                            whileHover={{ scale: 1.1, textShadow: "0 0 10px rgb(250, 204, 21)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-11 h-11 bg-black/50 rounded-xl flex items-center justify-center text-yellow-400 border-2 border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-shadow">
                              {project.icon}
                            </div>
                            <span className="text-[10px] text-yellow-300 text-center leading-tight font-bold text-shadow">
                              {project.name}
                            </span>
                          </motion.button>
                        ))}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black flex items-center justify-center gap-6 z-30 border-t-4 border-yellow-600">
                        <motion.button className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-700 hover:bg-red-400 shadow-lg" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
                        <motion.button className="w-5 h-5 rounded-full bg-blue-500 border-2 border-blue-700 hover:bg-blue-400 shadow-lg" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
                        <motion.button className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-yellow-700 hover:bg-yellow-400 shadow-lg" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
                        <motion.button className="w-5 h-5 rounded-full bg-green-500 border-2 border-green-700 hover:bg-green-400 shadow-lg" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 bg-black rounded-b-3xl h-8 border-t-4 border-yellow-600 flex items-center justify-between px-8">
                    <div className="text-yellow-400 text-xs font-bold">INSERT COIN</div>
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-red-500 rounded-full"
                          animate={{ opacity: [0.3, 1] }}
                          transition={{ delay: i * 0.2, duration: 0.8, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto">
                  <div className="h-6 bg-gradient-to-b from-gray-700 to-gray-900 mx-12 rounded-b-2xl shadow-xl" />
                  <div className="flex gap-8 px-8 py-4 bg-gray-900 rounded-b-3xl">
                    <div className="flex-1 h-20 bg-gray-800 rounded-lg border-4 border-gray-700" />
                    <div className="flex-1 h-20 bg-gray-800 rounded-lg border-4 border-gray-700" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                style={{ perspective: 1000 }}
              >
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl p-6 pt-10 relative shadow-2xl">
                  <div className="bg-gray-800 rounded-xl p-4 relative border-8 border-gray-700">
                    <div className="aspect-video relative overflow-hidden bg-black rounded border-2 border-gray-900 shadow-inner">
                      <div
                        className="absolute inset-0 opacity-30 z-10 pointer-events-none"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)",
                        }}
                      />

                      <div className="relative z-20 p-8 h-full bg-gradient-to-b from-green-900 to-black overflow-y-auto">
                        <div className="font-mono text-green-400 text-xs space-y-2">
                          <div className="text-green-600">C:\&gt;</div>
                          <div className="text-green-400">dir /s projects</div>
                          <div className="text-green-600 mt-4">
                            Volume in drive C is PORTFOLIO
                            <br />
                            Directory of C:\projects
                          </div>
                          <div className="text-green-500 mt-4 space-y-1">
                            {projects.map((project) => (
                              <motion.button
                                key={project.id}
                                className="block text-left hover:bg-green-400/20 px-2 py-1 rounded cursor-pointer transition-colors w-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveProject(project);
                                }}
                                whileHover={{ paddingLeft: 12 }}
                              >
                                &gt; {project.name.toUpperCase()}.EXE
                              </motion.button>
                            ))}
                          </div>
                          <div className="text-green-600 mt-6">C:\&gt;_</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 text-xs">
                      RETRO COMPUTER INC.
                    </div>
                  </div>
                  <div className="relative mx-auto mt-2">
                    <div className="h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full mx-20" />
                    <div className="h-8 bg-gray-700 rounded-b-3xl mx-8 border-4 border-gray-600 flex items-center justify-center">
                      <div className="w-32 h-2 bg-gray-600 rounded" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-muted-foreground text-sm mt-4">
                  Click to return to arcade mode
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectWindow project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
