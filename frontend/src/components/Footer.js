import React from "react";
import { motion } from "framer-motion";
import { Moon, Star, Sparkles, Heart, Shield, Book, Cards, Eye } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Sacred Paths": [
      "Greek Mythology",
      "Norse Traditions", 
      "Egyptian Mysteries",
      "Modern Witchcraft"
    ],
    "Our Services": [
      "Divine Card Readings",
      "Beginner Spell Teaching",
      "Lunar Guidance",
      "Energy Healing"
    ],
    "Community": [
      "Discord Server",
      "Monthly Rituals",
      "Study Groups", 
      "Eclipse Ceremonies"
    ],
    "Resources": [
      "Spell Library",
      "Tarot Meanings", 
      "God Correspondences",
      "Sacred Calendar"
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-dark-bg to-deep-purple/40 relative overflow-hidden">
      {/* Mystical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Cpath d='M20 20l-8-8 8-8 8 8-8 8zm0-16l-6 6 6 6 6-6-6-6z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-12 left-12 text-mystical-gold/20"
      >
        <Star size={24} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-5, 5, -5],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 text-purple-glow/20"
      >
        <Moon size={20} />
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 text-mystical-gold/15"
      >
        <Sparkles size={28} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold to-purple-glow mb-4">
                Eclipse Rite
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Where ancient wisdom meets modern mystical practice. Discover divine guidance through 
                card readings, master spellcraft, and connect with sacred mythologies.
              </p>
              
              {/* Sacred Symbols */}
              <div className="flex gap-4">
                {[Moon, Star, Cards, Eye].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 bg-gradient-to-r from-deep-purple to-mystical-purple rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={20} className="text-mystical-gold" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-mystical font-bold text-mystical-gold mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-purple-glow transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-mystical-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-8 mb-8 bg-gradient-to-r from-deep-purple/30 to-mystical-purple/20 backdrop-blur-sm rounded-2xl border border-purple-glow/20"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full"
            >
              <Heart size={24} className="text-dark-bg" />
            </motion.div>
          </div>
          
          <h4 className="text-2xl font-mystical font-bold text-white mb-2">
            Join the Eclipse Rite Circle
          </h4>
          <p className="text-white/80 mb-4">
            Connect with fellow practitioners, get card readings, and learn the mystical arts
          </p>
          
          <motion.a
            href="https://discord.gg/8pe6qCsmWr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-mystical-gold/25 transition-all duration-300"
          >
            <Sparkles size={16} />
            Enter Our Sacred Discord
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-glow/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Shield size={16} className="text-mystical-gold" />
              <span>Protected by Ancient Wisdom</span>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#F59E0B" }}
              className="flex items-center gap-1 hover:text-mystical-gold transition-colors duration-300"
            >
              <Book size={14} />
              Sacred Laws
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#8B5CF6" }}
              className="flex items-center gap-1 hover:text-purple-glow transition-colors duration-300"
            >
              <Shield size={14} />
              Privacy Oath
            </motion.a>
            <span className="text-white/40">
              © 2025 Eclipse Rite. All mystical rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;