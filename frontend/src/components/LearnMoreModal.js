import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Users, BookOpen, Sparkles } from "lucide-react";

const LearnMoreModal = ({ isOpen, onClose, topic, type = "general" }) => {
  const getModalContent = () => {
    switch (type) {
      case "god":
        return {
          title: `Learn More About ${topic}`,
          description: `Dive deeper into the myths, stories, and spiritual practices related to ${topic}. Our community experts and fellow practitioners share detailed knowledge, personal experiences, and guided discussions.`,
          channelSuggestion: `Ask questions in #mythology-discussion or #deity-work channels`,
          icon: BookOpen
        };
      case "spell":
        return {
          title: `Advanced ${topic} Information`,
          description: `Get detailed instructions, variations, safety tips, and troubleshooting help for ${topic}. Our experienced practitioners provide step-by-step guidance and answer all your questions.`,
          channelSuggestion: `Visit #spell-help or #beginner-practice channels`,
          icon: Sparkles
        };
      case "ritual":
        return {
          title: `${topic} Ritual Details`,
          description: `Learn the complete ritual process, timing, required materials, and variations for ${topic}. Connect with others who have performed this ritual and share experiences.`,
          channelSuggestion: `Discuss in #ritual-practice or #seasonal-celebrations channels`,
          icon: BookOpen
        };
      default:
        return {
          title: `Learn More About ${topic}`,
          description: `Get comprehensive information, expert insights, and community discussions about ${topic}. Our knowledgeable members are always happy to share their wisdom and experiences.`,
          channelSuggestion: `Ask questions in our relevant discussion channels`,
          icon: BookOpen
        };
    }
  };

  const content = getModalContent();

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
            className="bg-gradient-to-br from-deep-purple/95 to-mystical-purple/90 backdrop-blur-md rounded-3xl border border-mystical-gold/30 max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative mb-6">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <X size={20} className="text-white/70 hover:text-white" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="p-3 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full"
                >
                  <content.icon size={24} className="text-dark-bg" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-mystical font-bold text-mystical-gold">
                    {content.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                {content.description}
              </p>
              
              <div className="bg-gradient-to-r from-mystical-purple/30 to-deep-purple/30 backdrop-blur-sm rounded-xl p-6 border border-purple-glow/20">
                <div className="flex items-start gap-3 mb-4">
                  <MessageCircle size={20} className="text-mystical-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-glow mb-2">Where to Ask:</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Join our Discord community and {content.channelSuggestion.toLowerCase()}. 
                      Our knowledgeable members and moderators are active daily and love sharing their expertise!
                    </p>
                  </div>
                </div>
                
                <div className="bg-mystical-gold/10 border border-mystical-gold/30 rounded-lg p-3">
                  <p className="text-mystical-gold text-xs font-medium">
                    💫 Get detailed answers from experienced practitioners
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-purple-glow/80 text-sm">
                  <Users size={16} />
                  <span>1000+ active community members ready to help</span>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href="https://discord.gg/8pe6qCsmWr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-4 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-mystical-gold/25 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Join & Ask Now
                  </a>
                  
                  <button
                    onClick={onClose}
                    className="px-4 py-3 border border-purple-glow/50 text-purple-glow rounded-full hover:bg-purple-glow/10 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LearnMoreModal;