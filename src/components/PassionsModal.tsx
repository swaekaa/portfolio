import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PassionsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"music" | "basketball" | "movies" | null>("basketball");

  const albums = [
    { title: "Communiqué", artist: "Dire Straits", cover: "https://via.placeholder.com/200?text=Communique" },
    { title: "Eye in the Sky", artist: "The Alan Parsons Project", cover: "https://via.placeholder.com/200?text=Eye+in+Sky" },
    { title: "Hotel California", artist: "The Eagles", cover: "https://via.placeholder.com/200?text=Hotel+California" },
  ];

  const movies = [
    { title: "Cars", poster: "https://via.placeholder.com/150?text=Cars" },
    { title: "Speed", poster: "https://via.placeholder.com/150?text=Speed" },
    { title: "Real Steel", poster: "https://via.placeholder.com/150?text=Real+Steel" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-background border border-accent-pink/30 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent-pink/20 to-accent-orange/20 p-6 flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">My Passions</h2>
                <button
                  onClick={onClose}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border/30">
                <button
                  onClick={() => setActiveTab("music")}
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                    activeTab === "music"
                      ? "bg-accent-pink/20 text-accent-pink border-b-2 border-accent-pink"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  🎵 Music
                </button>
                <button
                  onClick={() => setActiveTab("basketball")}
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                    activeTab === "basketball"
                      ? "bg-accent-pink/20 text-accent-pink border-b-2 border-accent-pink"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  🏀 Basketball
                </button>
                <button
                  onClick={() => setActiveTab("movies")}
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                    activeTab === "movies"
                      ? "bg-accent-pink/20 text-accent-pink border-b-2 border-accent-pink"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  🎬 Movies
                </button>
              </div>

              {/* Content */}
              <div className="p-8 max-h-96 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {/* Music Tab */}
                  {activeTab === "music" && (
                    <motion.div
                      key="music"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4">Favourite Albums</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {albums.map((album, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-3 group"
                          >
                            <img
                              src={album.cover}
                              alt={album.title}
                              className="w-40 h-40 rounded-lg border border-accent-pink/30 shadow-lg group-hover:border-accent-pink/60 transition-colors"
                            />
                            <div className="text-center">
                              <p className="font-semibold text-foreground">{album.title}</p>
                              <p className="text-sm text-foreground/60">{album.artist}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Basketball Tab */}
                  {activeTab === "basketball" && (
                    <motion.div
                      key="basketball"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4">Basketball Highlights</h3>
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full rounded-lg border border-accent-pink/30 shadow-lg"
                      >
                        <source src="/basketball.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  )}

                  {/* Movies Tab */}
                  {activeTab === "movies" && (
                    <motion.div
                      key="movies"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4">Movies everyone should watch</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {movies.map((movie, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                          >
                            <img
                              src={movie.poster}
                              alt={movie.title}
                              className="w-full h-56 rounded-lg border border-accent-pink/30 shadow-lg object-cover group-hover:border-accent-pink/60 transition-colors"
                            />
                            <p className="mt-2 font-semibold text-foreground text-center">{movie.title}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PassionsModal;
