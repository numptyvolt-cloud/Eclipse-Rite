import React from "react";
import { motion } from "framer-motion";
import { CreditCard, BookOpen, Star, Moon, Sparkles, Eye, Wand2, Heart, MessageSquare } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Divine Card Readings",
      subtitle: "Unlock Your Destiny",
      description: "Experience profound insights through our expert tarot and oracle card readings. Our skilled readers connect with divine energy to reveal your past, present, and future paths.",
      features: [
        "Professional Tarot & Oracle Readings",
        "Love, Career & Spiritual Guidance",
        "Celtic Cross & Custom Spreads",
        "Personalized Interpretations"
      ],
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1705592759103-956f228c255d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx0YXJvdCUyMGNhcmRzfGVufDB8fHxwdXJwbGV8MTc1MzQ3NDU1MXww&ixlib=rb-4.1.0&q=85",
      color: "from-purple-600 to-indigo-700",
      accent: "text-purple-300",
      bookingInstructions: "Join our Discord server and open a ticket in #card-readings channel to book your personalized reading session."
    },
    {
      title: "Beginner Spell Teaching",
      subtitle: "Your Magical Journey Starts Here",
      description: "Learn the ancient art of spellcrafting in a safe, supportive environment. Our experienced practitioners guide newcomers through their first steps into the mystical arts.",
      features: [
        "Step-by-Step Spell Instructions",
        "Safe Practice Guidelines",
        "Herb & Crystal Correspondences",
        "Personal Mentorship Available"
      ],
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1665089144441-9ed25961b149?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx3aXRjaGNyYWZ0fGVufDB8fHxwdXJwbGV8MTc1MzU0ODQwMXww&ixlib=rb-4.1.0&q=85",
      color: "from-mystical-gold to-amber-600",
      accent: "text-amber-300",
      bookingInstructions: "Join our Discord server and create a ticket in #spell-learning channel to start your magical education journey."
    }
  ];

  const additionalServices = [
    {
      icon: Moon,
      title: "Lunar Cycle Guidance",
      description: "Learn to work with moon phases for enhanced magical practice"
    },
    {
      icon: Star,
      title: "Astral Projection Training",
      description: "Safe techniques for exploring beyond the physical realm"
    },
    {
      icon: Eye,
      title: "Third Eye Development",
      description: "Exercises to awaken and strengthen your psychic abilities"
    },
    {
      icon: Wand2,
      title: "Sacred Tool Consecration",
      description: "Proper blessing and activation of your magical implements"
    },
    {
      icon: Heart,
      title: "Energy Healing Methods",
      description: "Reiki, chakra balancing, and aura cleansing techniques"
    },
    {
      icon: Sparkles,
      title: "Manifestation Mastery",
      description: "Advanced techniques for bringing desires into reality"
    }
  ];

  const BookingModal = ({ service, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="bg-gradient-to-br from-deep-purple/95 to-mystical-purple/90 backdrop-blur-md rounded-3xl border border-mystical-gold/30 max-w-md w-full p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-full mb-4`}
            >
              <service.icon size={32} className="text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-mystical font-bold text-mystical-gold mb-4">
              Book {service.title}
            </h3>
            
            <div className="bg-gradient-to-r from-mystical-purple/30 to-deep-purple/30 backdrop-blur-sm rounded-xl p-6 border border-purple-glow/20 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <MessageSquare size={20} className="text-mystical-gold flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-purple-glow mb-2">How to Book:</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.bookingInstructions}
                  </p>
                </div>
              </div>
              
              <div className="bg-mystical-gold/10 border border-mystical-gold/30 rounded-lg p-3">
                <p className="text-mystical-gold text-xs font-medium">
                  💫 Our team will respond within 24 hours to schedule your session
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a
                href="https://discord.gg/8pe6qCsmWr"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
              >
                <MessageSquare size={16} />
                Join & Book Now
              </a>
              
              <button
                onClick={onClose}
                className="px-4 py-3 border border-purple-glow/50 text-purple-glow rounded-full hover:bg-purple-glow/10 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const [selectedService, setSelectedService] = React.useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple/20 to-mystical-purple/10">
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
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="p-4 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full"
            >
              <Star size={40} className="text-dark-bg" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystical-gold via-purple-glow to-mystical-gold mb-6">
            Sacred Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover your path through divine guidance and mystical education. Whether seeking answers 
            or beginning your magical journey, Eclipse Rite provides expert guidance and support.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-6 right-6 p-3 bg-gradient-to-r ${service.color} rounded-full backdrop-blur-sm shadow-lg`}
                  >
                    <service.icon size={24} className="text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-deep-purple/40 to-mystical-purple/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500"
                >
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full text-sm mb-4`}>
                    {service.subtitle}
                  </span>
                  
                  <h3 className="text-4xl font-mystical font-bold text-mystical-gold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                        <span className={`${service.accent} font-medium`}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setSelectedService(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    <service.icon size={18} />
                    Book Your Session
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-mystical font-bold text-purple-glow mb-4">
            Additional Mystical Services
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Expand your magical practice with our comprehensive range of specialized services and teachings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gradient-to-br from-deep-purple/30 to-mystical-purple/20 backdrop-blur-sm rounded-xl p-6 border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex p-3 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-mystical-gold/25 transition-all duration-300"
              >
                <service.icon size={24} className="text-dark-bg" />
              </motion.div>
              
              <h4 className="text-xl font-mystical font-bold text-white mb-3 group-hover:text-mystical-gold transition-colors duration-300">
                {service.title}
              </h4>
              
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-mystical-purple/30 to-deep-purple/30 backdrop-blur-sm rounded-3xl p-12 border border-mystical-gold/20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex p-4 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full mb-6"
          >
            <Sparkles size={32} className="text-dark-bg" />
          </motion.div>
          
          <h3 className="text-4xl font-mystical font-bold text-white mb-4">
            Ready to Begin Your Sacred Journey?
          </h3>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community for personalized guidance, expert teachings, and transformative mystical experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setSelectedService(services[0])}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-mystical-gold/25 transition-all duration-300"
            >
              <CreditCard size={18} />
              Book a Reading
            </motion.button>
            
            <motion.button
              onClick={() => setSelectedService(services[1])}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-purple-glow text-purple-glow px-6 py-3 rounded-full font-semibold hover:bg-purple-glow hover:text-dark-bg transition-all duration-300"
            >
              <BookOpen size={18} />
              Start Learning Spells
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServicesSection;