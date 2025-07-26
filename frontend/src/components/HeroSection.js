import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Moon, Stars } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649297152475-a231aec801c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbXlzdGljYWx8ZW58MHx8fHB1cnBsZXwxNzUzNTQ3NjA5fDA&ixlib=rb-4.1.0&q=85')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/80 via-mystical-purple/70 to-dark-bg/90" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-20 text-mystical-gold/30"
      >
        <Stars size={40} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-32 text-purple-glow/40"
      >
        <Moon size={32} />
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-40 text-mystical-gold/25"
      >
        <Sparkles size={28} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold via-purple-glow to-mystical-gold mb-6"
        >
          Eclipse Rite
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-3xl font-serif text-purple-glow/90 mb-8"
        >
          Master Ancient Wisdom • Divine Card Readings • Beginner-Friendly Spell Teaching
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Journey through Greek, Norse, and Egyptian mythologies while learning the sacred arts of tarot, 
          divination, and spellcraft. From beginners to advanced practitioners, all paths are welcome in our eclipse.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://discord.gg/8pe6qCsmWr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-mystical-gold/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="group-hover:animate-spin" size={20} />
              Join Eclipse Rite Community
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-mystical-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <button className="group px-8 py-4 border-2 border-purple-glow text-purple-glow font-semibold text-lg rounded-full hover:bg-purple-glow hover:text-dark-bg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-glow/25">
            <span className="flex items-center gap-2">
              <Moon className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              Explore Sacred Arts
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;