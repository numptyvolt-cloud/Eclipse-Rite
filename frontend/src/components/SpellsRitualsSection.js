import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Moon, Flame, Leaf, Star, Wand2 } from "lucide-react";
import LearnMoreModal from "./LearnMoreModal";

const SpellsRitualsSection = () => {
  const [activeTab, setActiveTab] = useState("spells");
  const [learnMoreModal, setLearnMoreModal] = useState({ isOpen: false, topic: "", type: "" });

  const spells = [
    {
      name: "Lunar Protection Circle",
      difficulty: "Beginner",
      purpose: "Protection & Purification",
      materials: ["White candles", "Sea salt", "Moonwater", "Sage"],
      steps: [
        "Cast your circle with sea salt under moonlight",
        "Light white candles at each cardinal direction",
        "Sprinkle moonwater while chanting protection words",
        "Close with gratitude to the lunar goddess"
      ],
      icon: Moon,
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Hecate's Crossroads Blessing",
      difficulty: "Intermediate",
      purpose: "Guidance & Decision Making",
      materials: ["Black candle", "Key", "Crossroads dirt", "Lavender"],
      steps: [
        "Visit a crossroads at midnight",
        "Light black candle and hold the key",
        "Ask Hecate for guidance on your path",
        "Leave offerings of honey and bread"
      ],
      icon: Star,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Fire of Transformation",
      difficulty: "Advanced",
      purpose: "Change & Renewal",
      materials: ["Red candle", "Dragon's blood incense", "Paper", "Cauldron"],
      steps: [
        "Write what you wish to transform on paper",
        "Light dragon's blood incense for power",
        "Burn the paper in your cauldron safely",
        "Visualize your transformation complete"
      ],
      icon: Flame,
      color: "from-red-500 to-orange-500"
    }
  ];

  const rituals = [
    {
      name: "Full Moon Manifestation",
      season: "Any Full Moon",
      purpose: "Manifesting Desires",
      duration: "1-2 hours",
      description: "Harness the full moon's energy to manifest your deepest desires through meditation, visualization, and sacred offerings.",
      icon: Moon,
      color: "from-silver to-white"
    },
    {
      name: "Seasonal Equinox Balance",
      season: "Spring & Autumn",
      purpose: "Balance & Harmony",
      duration: "30 minutes",
      description: "Align with nature's balance during equinoxes to find harmony in your life through meditation and elemental honoring.",
      icon: Leaf,
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Divine Connection Rite",
      season: "New Moon",
      purpose: "Spiritual Connection",
      duration: "45 minutes",
      description: "Deepen your connection with chosen deities through prayer, offerings, and meditative communion in sacred space.",
      icon: Wand2,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const handleLearnMore = (itemName, type) => {
    setLearnMoreModal({
      isOpen: true,
      topic: itemName,
      type: type
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-deep-purple/30">
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
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="p-4 bg-gradient-to-r from-purple-glow to-mystical-purple rounded-full"
            >
              <BookOpen size={40} className="text-white" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold via-purple-glow to-mystical-gold mb-6">
            Sacred Practices
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover ancient spells and rituals passed down through generations, 
            each carrying the wisdom of our ancestors and the power of divine connection.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-deep-purple/50 backdrop-blur-sm rounded-full p-2 border border-purple-glow/30">
            <div className="flex gap-2">
              {["spells", "rituals"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-mystical-gold text-dark-bg shadow-lg shadow-mystical-gold/25"
                      : "text-white/70 hover:text-white hover:bg-purple-glow/20"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === "spells" ? spells : rituals).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-deep-purple/40 to-mystical-purple/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} mb-4`}
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-mystical font-bold text-mystical-gold mb-2">
                  {item.name}
                </h3>

                {/* Metadata */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeTab === "spells" ? (
                    <>
                      <span className="px-3 py-1 bg-purple-glow/20 text-purple-glow text-sm rounded-full">
                        {item.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-mystical-gold/20 text-mystical-gold text-sm rounded-full">
                        {item.purpose}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-purple-glow/20 text-purple-glow text-sm rounded-full">
                        {item.season}
                      </span>
                      <span className="px-3 py-1 bg-mystical-gold/20 text-mystical-gold text-sm rounded-full">
                        {item.duration}
                      </span>
                    </>
                  )}
                </div>

                {/* Description/Content */}
                {activeTab === "spells" ? (
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-white/80 mb-2">Materials:</h4>
                      <ul className="text-sm text-white/70 space-y-1">
                        {item.materials.map((material, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-mystical-gold rounded-full" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Learn More Button */}
                <motion.button
                  onClick={() => handleLearnMore(item.name, activeTab === "spells" ? "spell" : "ritual")}
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center gap-2 text-mystical-gold font-semibold text-sm group-hover:text-amber-400 transition-colors duration-300"
                >
                  Learn Full Practice
                  <Star className="group-hover:animate-pulse" size={14} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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

export default SpellsRitualsSection;