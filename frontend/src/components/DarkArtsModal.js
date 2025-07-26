import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Skull, Zap, Shield, AlertTriangle, Eye, Moon } from "lucide-react";

const DarkArtsModal = ({ isOpen, onClose }) => {
  const darkTopics = [
    {
      title: "Understanding Shadow Work",
      icon: Eye,
      description: "Shadow work involves confronting the darker aspects of your psyche. This practice helps integrate suppressed emotions and hidden desires for spiritual wholeness.",
      warning: "Approach with caution and proper mental preparation."
    },
    {
      title: "Hexes & Curses",
      icon: Skull,
      description: "Hexes and curses are forms of negative magic intended to cause harm or misfortune. While part of historical practice, they carry serious karmic consequences.",
      warning: "Remember the threefold law - what you send out returns threefold."
    },
    {
      title: "Baneful Magic",
      icon: Zap,
      description: "Baneful magic encompasses protective spells that may cause harm to those who wish you ill. This includes binding spells, mirror spells, and defensive hexwork.",
      warning: "Should only be used for protection, never for petty revenge."
    },
    {
      title: "Working with Dark Deities",
      icon: Moon,
      description: "Some deities embody death, destruction, and transformation. Working with them requires respect, proper offerings, and understanding of their dual nature.",
      warning: "Never approach dark deities lightly or without proper preparation."
    }
  ];

  const protections = [
    "Always cast protective circles before dark work",
    "Cleanse yourself and space thoroughly afterward", 
    "Use black tourmaline and obsidian for protection",
    "Keep a spiritual mentor or experienced practitioner nearby",
    "Never practice dark arts when emotionally unstable",
    "Understand local laws regarding your practices"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="bg-gradient-to-br from-deep-purple/95 to-mystical-purple/90 backdrop-blur-md rounded-3xl border border-mystical-gold/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 border-b border-mystical-gold/20">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <X size={24} className="text-white/70 hover:text-white" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="p-3 bg-gradient-to-r from-red-600 to-purple-800 rounded-full"
                >
                  <Skull size={32} className="text-white" />
                </motion.div>
                
                <div>
                  <h2 className="text-4xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-mystical-gold">
                    Sacred Dark Arts
                  </h2>
                  <p className="text-purple-glow/80 text-lg">
                    Understanding the Shadow Side of Paganism
                  </p>
                </div>
              </div>
              
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-red-300 font-bold mb-2">Important Warning</h3>
                  <p className="text-red-200/80 text-sm leading-relaxed">
                    The information below is for educational purposes only. Dark arts carry serious spiritual, 
                    psychological, and karmic consequences. Practice only with proper knowledge, protection, and ethical consideration.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Dark Topics Grid */}
              <div>
                <h3 className="text-2xl font-mystical font-bold text-mystical-gold mb-6">
                  Dark Aspects of Pagan Practice
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {darkTopics.map((topic, index) => (
                    <motion.div
                      key={topic.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-deep-purple/40 to-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-mystical-gold/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-gradient-to-r from-red-600 to-purple-700 rounded-lg">
                          <topic.icon size={20} className="text-white" />
                        </div>
                        <h4 className="text-xl font-mystical font-bold text-red-300">
                          {topic.title}
                        </h4>
                      </div>
                      
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {topic.description}
                      </p>
                      
                      <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3">
                        <p className="text-amber-200 text-xs font-medium">
                          ⚠️ {topic.warning}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Protection Guidelines */}
              <div>
                <h3 className="text-2xl font-mystical font-bold text-mystical-gold mb-6">
                  Essential Protection Guidelines
                </h3>
                
                <div className="bg-gradient-to-br from-deep-purple/40 to-mystical-purple/20 backdrop-blur-sm rounded-xl p-6 border border-purple-glow/30">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield size={24} className="text-mystical-gold" />
                    <span className="text-lg font-semibold text-purple-glow">
                      Before Engaging in Any Dark Work
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {protections.map((protection, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-mystical-gold rounded-full flex-shrink-0" />
                        <span className="text-white/80 text-sm">{protection}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ethical Considerations */}
              <div className="bg-gradient-to-r from-mystical-purple/30 to-deep-purple/30 backdrop-blur-sm rounded-xl p-6 border border-mystical-gold/20">
                <h3 className="text-xl font-mystical font-bold text-mystical-gold mb-4">
                  The Ethics of Dark Practice
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  Dark arts are not inherently evil, but they require mature understanding and ethical consideration. 
                  Many practitioners follow the "Rule of Three" - whatever energy you put out returns to you threefold.
                </p>
                
                <p className="text-purple-glow/80 text-sm">
                  Consider your motivations carefully. Is this for protection, justice, or personal growth? 
                  Or is it driven by anger, jealousy, or desire for revenge? The universe responds to intention.
                </p>
              </div>

              {/* Community Support CTA */}
              <div className="text-center">
                <p className="text-white/70 mb-4">
                  Interested in learning more about the complete spectrum of pagan practice?
                </p>
                
                <motion.a
                  href="https://discord.gg/8pe6qCsmWr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-mystical-gold/25 transition-all duration-300"
                >
                  <Skull size={18} />
                  Discuss in Eclipse Rite Community
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DarkArtsModal;