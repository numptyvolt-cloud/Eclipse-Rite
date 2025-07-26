import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Zap, Sword, Eye, Hammer, Feather, Ankh, Scroll } from "lucide-react";

const GodsSection = () => {
  const [activeTab, setActiveTab] = useState("greek");

  const greekGods = [
    {
      name: "Zeus",
      title: "King of the Gods",
      domain: "Sky & Thunder",
      description: "The mighty ruler of Mount Olympus, wielding thunderbolts and commanding the heavens. Zeus governs justice, law, and divine order.",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1628508438706-6e6a19853e1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxncmVlayUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDc2MTd8MA&ixlib=rb-4.1.0&q=85",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Hecate",
      title: "Goddess of Magic",
      domain: "Witchcraft & Crossroads",
      description: "The powerful goddess of magic, necromancy, and the moon. Hecate guides those who seek mystical knowledge and guards the boundaries between worlds.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbXlzdGljYWx8ZW58MHx8fHB1cnBsZXwxNzUzNTQ3NjA5fDA&ixlib=rb-4.1.0&q=85",
      color: "from-purple-600 to-indigo-800"
    },
    {
      name: "Ares",
      title: "God of War",
      domain: "Battle & Courage",
      description: "The fierce god of warfare and battle rage. Ares embodies the brutal and violent aspects of war, inspiring courage in warriors.",
      icon: Sword,
      image: "https://images.unsplash.com/photo-1718138981824-df284b686db2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxncmVlayUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDc2MTd8MA&ixlib=rb-4.1.0&q=85",
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Apollo",
      title: "God of Light",
      domain: "Music, Poetry & Prophecy",
      description: "The radiant god of the sun, music, and prophecy. Apollo brings light to darkness and inspires artistic creation and divine insight.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1717958785772-12c9b9ca2af1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxncmVlayUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDc2MTd8MA&ixlib=rb-4.1.0&q=85",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const norseGods = [
    {
      name: "Odin",
      title: "The All-Father",
      domain: "Wisdom & War",
      description: "The chief of the Æsir gods, sacrificed his eye for wisdom and knowledge. Odin commands the ravens and wolves, seeking all knowledge of the nine realms.",
      icon: Eye,
      image: "https://images.pexels.com/photos/6075004/pexels-photo-6075004.jpeg",
      color: "from-gray-600 to-blue-700"
    },
    {
      name: "Thor",
      title: "God of Thunder",
      domain: "Strength & Protection",
      description: "Wielder of Mjolnir, the mighty hammer. Thor protects Midgard from giants and chaos, representing strength, thunder, and the protection of humanity.",
      icon: Hammer,
      image: "https://images.pexels.com/photos/6075004/pexels-photo-6075004.jpeg",
      color: "from-red-600 to-blue-600"
    },
    {
      name: "Freya",
      title: "Goddess of Love",
      domain: "Love, Fertility & War",
      description: "The beautiful goddess of love and fertility, also a fierce warrior who leads the Valkyries. Freya teaches seidr magic and receives half of those who die in battle.",
      icon: Feather,
      image: "https://images.pexels.com/photos/6075004/pexels-photo-6075004.jpeg",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Loki",
      title: "The Trickster",
      domain: "Mischief & Change",
      description: "The shape-shifting trickster god who brings both gifts and chaos to the gods. Loki represents transformation, cunning, and the necessary catalyst for change.",
      icon: Zap,
      image: "https://images.pexels.com/photos/6075004/pexels-photo-6075004.jpeg",
      color: "from-green-500 to-red-500"
    }
  ];

  const egyptianGods = [
    {
      name: "Anubis",
      title: "Guardian of the Dead",
      domain: "Death & Mummification",
      description: "The jackal-headed god who guides souls through the afterlife. Anubis weighs hearts against the feather of Ma'at and protects the sacred burial process.",
      icon: Ankh,
      image: "https://images.unsplash.com/photo-1576766691319-e50fa1922ffc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDgzODh8MA&ixlib=rb-4.1.0&q=85",
      color: "from-black to-gold"
    },
    {
      name: "Isis",
      title: "Goddess of Magic",
      domain: "Magic, Motherhood & Healing",
      description: "The great mother goddess and powerful sorceress. Isis mastered all forms of magic and is revered as the divine mother who protects and heals.",
      icon: Feather,
      image: "https://images.unsplash.com/photo-1718647405773-572eb4f6a7da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxFZ3lwdGlhbiUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDgzODh8MA&ixlib=rb-4.1.0&q=85",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Thoth",
      title: "God of Wisdom",
      domain: "Knowledge, Writing & Moon",
      description: "The ibis-headed god of wisdom, writing, and the moon. Thoth records the deeds of the dead and maintains the universe through his knowledge of divine words.",
      icon: Scroll,
      image: "https://images.unsplash.com/photo-1653806957258-d90d942c0150?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxFZ3lwdGlhbiUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDgzODh8MA&ixlib=rb-4.1.0&q=85",
      color: "from-emerald-500 to-blue-600"
    },
    {
      name: "Bastet",
      title: "Goddess of Cats",
      domain: "Protection, Joy & Cats",
      description: "The cat goddess who protects homes and brings joy. Bastet represents the protective and nurturing aspects of femininity, as well as music and dance.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1718727950483-ff792ea909c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxFZ3lwdGlhbiUyMG15dGhvbG9neXxlbnwwfHx8cHVycGxlfDE3NTM1NDgzODh8MA&ixlib=rb-4.1.0&q=85",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const getCurrentGods = () => {
    switch(activeTab) {
      case "greek": return greekGods;
      case "norse": return norseGods;
      case "egyptian": return egyptianGods;
      default: return greekGods;
    }
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case "greek": return "Olympian Deities";
      case "norse": return "Nordic Pantheon";
      case "egyptian": return "Ancient Egyptian Gods";
      default: return "Divine Pantheon";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-deep-purple/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold to-purple-glow mb-6">
            Divine Pantheons
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Explore the sacred wisdom of three great mythological traditions. Each pantheon offers unique 
            insights into the divine forces that shape our mystical practice.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-deep-purple/50 backdrop-blur-sm rounded-full p-2 border border-purple-glow/30">
              <div className="flex gap-2">
                {[
                  { key: "greek", label: "Greek" },
                  { key: "norse", label: "Norse" },
                  { key: "egyptian", label: "Egyptian" }
                ].map((tab) => (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.key
                        ? "bg-mystical-gold text-dark-bg shadow-lg shadow-mystical-gold/25"
                        : "text-white/70 hover:text-white hover:bg-purple-glow/20"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <motion.h3
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-mystical font-bold text-mystical-gold mb-8"
          >
            {getTabTitle()}
          </motion.h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {getCurrentGods().map((god, index) => (
              <motion.div
                key={god.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-deep-purple/50 to-mystical-purple/30 backdrop-blur-sm border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${god.image}')` }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 rounded-full bg-gradient-to-r ${god.color} shadow-lg`}
                    >
                      <god.icon size={32} className="text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-3xl font-mystical font-bold text-mystical-gold mb-2">
                        {god.name}
                      </h3>
                      <p className="text-lg text-purple-glow font-semibold mb-1">
                        {god.title}
                      </p>
                      <p className="text-sm text-white/70 uppercase tracking-wider">
                        {god.domain}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed text-lg mb-6">
                    {god.description}
                  </p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-mystical-gold font-semibold cursor-pointer group-hover:text-amber-400 transition-colors duration-300"
                  >
                    Learn More About {god.name}
                    <Zap className="ml-2 group-hover:animate-pulse" size={16} />
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${god.color} opacity-5`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GodsSection;