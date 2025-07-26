import React from "react";
import { motion } from "framer-motion";
import { Crown, Zap, Sword, Eye } from "lucide-react";

const gods = [
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

const GodsSection = () => {
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
            Divine Pantheon
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the ancient deities who guide our path through darkness and light, 
            each offering their unique wisdom and power to modern practitioners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {gods.map((god, index) => (
            <motion.div
              key={god.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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
                
                <p className="text-white/80 leading-relaxed text-lg">
                  {god.description}
                </p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center text-mystical-gold font-semibold cursor-pointer group-hover:text-amber-400 transition-colors duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default GodsSection;