import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scroll, TreePine, Sun, Sparkles } from "lucide-react";
import LearnMoreModal from "./LearnMoreModal";

const PaganHistorySection = () => {
  const [learnMoreModal, setLearnMoreModal] = useState({ isOpen: false, topic: "", type: "" });

  const historyCards = [
    {
      title: "Ancient Origins",
      period: "3000 BCE - 500 CE",
      description: "Paganism emerged from humanity's earliest spiritual connections to nature, with Greek polytheism developing sophisticated theological systems around 1200 BCE.",
      icon: TreePine,
      image: "https://images.pexels.com/photos/11732676/pexels-photo-11732676.jpeg"
    },
    {
      title: "Greek Golden Age",
      period: "800 - 146 BCE",
      description: "The classical period saw the flourishing of Greek religious practices, with elaborate temples, mystery cults, and philosophical schools exploring divine nature.",
      icon: Sun,
      image: "https://images.pexels.com/photos/6075004/pexels-photo-6075004.jpeg"
    },
    {
      title: "Modern Revival",
      period: "1960s - Present",
      description: "Contemporary paganism draws from ancient wisdom while adapting to modern spiritual needs, creating inclusive communities that honor both tradition and innovation.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1649297152475-a231aec801c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbXlzdGljYWx8ZW58MHx8fHB1cnBsZXwxNzUzNTQ3NjA5fDA&ixlib=rb-4.1.0&q=85"
    }
  ];

  const handleLearnMore = (era) => {
    setLearnMoreModal({
      isOpen: true,
      topic: `${era} Era`,
      type: "general"
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple/20 to-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full"
            >
              <Scroll size={40} className="text-dark-bg" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-glow via-mystical-gold to-purple-glow mb-6">
            Sacred Timeline
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Journey through the ages and discover how ancient pagan traditions have shaped 
            spiritual practices from prehistoric times to our modern mystical renaissance.
          </p>
        </motion.div>

        <div className="space-y-12">
          {historyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 p-3 bg-mystical-gold/90 rounded-full backdrop-blur-sm"
                  >
                    <card.icon size={24} className="text-dark-bg" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-deep-purple/30 to-mystical-purple/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500"
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg font-semibold rounded-full text-sm mb-4">
                    {card.period}
                  </span>
                  
                  <h3 className="text-3xl font-mystical font-bold text-mystical-gold mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    {card.description}
                  </p>

                  <motion.button
                    onClick={() => handleLearnMore(card.title)}
                    whileHover={{ x: 5 }}
                    className="mt-6 inline-flex items-center text-purple-glow font-semibold cursor-pointer hover:text-mystical-gold transition-colors duration-300"
                  >
                    Explore This Era
                    <Sparkles className="ml-2 hover:animate-spin" size={16} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mystical-gold via-purple-glow to-mystical-gold transform -translate-x-1/2 opacity-30" />
      </div>

      {/* Learn More Modal */}
      <LearnMoreModal
        isOpen={learnMoreModal.isOpen}
        onClose={() => setLearnMoreModal({ isOpen: false, topic: "", type: "" })}
        topic={learnMoreModal.topic}
        type={learnMoreModal.type}
      />
    </section>
  );
};

export default PaganHistorySection;