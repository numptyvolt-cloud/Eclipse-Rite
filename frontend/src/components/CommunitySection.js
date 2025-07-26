import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, Shield, Sparkles, Heart } from "lucide-react";

const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Join hundreds of like-minded practitioners in a safe, supportive environment where all paths are respected."
    },
    {
      icon: MessageCircle,
      title: "Daily Discussions",
      description: "Engage in meaningful conversations about mythology, spellwork, rituals, and spiritual experiences."
    },
    {
      icon: Calendar,
      title: "Seasonal Events",
      description: "Participate in group rituals, moon circles, and seasonal celebrations throughout the year."
    },
    {
      icon: Shield,
      title: "Guided Learning",
      description: "Learn from experienced practitioners with structured lessons on Greek mythology and pagan practices."
    }
  ];

  const testimonials = [
    {
      name: "Luna Nightshade",
      role: "Hecate Devotee",
      text: "This community helped me deepen my connection with Hecate. The guidance and support here is incredible!",
      avatar: "🌙"
    },
    {
      name: "Apollo's Child",
      role: "Greek Mythology Student",
      text: "Amazing resources and discussions about the gods. I've learned so much about authentic Greek practices.",
      avatar: "☀️"
    },
    {
      name: "Sacred Sage",
      role: "Ritual Practitioner",
      text: "The seasonal rituals we do together are transformative. This is truly a sacred space for growth.",
      avatar: "🌿"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple/30 to-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="p-4 bg-gradient-to-r from-mystical-gold to-amber-500 rounded-full"
            >
              <Heart size={40} className="text-dark-bg" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-mystical font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-glow via-mystical-gold to-purple-glow mb-6">
            Sacred Community
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Connect with fellow seekers on the mystical path. Our Discord community is a sanctuary 
            where ancient wisdom meets modern practice, and every voice is valued.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex p-4 bg-gradient-to-r from-deep-purple to-mystical-purple rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-purple-glow/25 transition-all duration-300"
              >
                <feature.icon size={32} className="text-mystical-gold" />
              </motion.div>
              
              <h3 className="text-xl font-mystical font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-mystical font-bold text-center text-mystical-gold mb-12"
          >
            Voices from Our Sacred Circle
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-deep-purple/50 to-mystical-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-glow/20 hover:border-mystical-gold/40 transition-all duration-500"
              >
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                
                <p className="text-white/80 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-mystical font-bold text-mystical-gold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-glow">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-mystical-purple/30 to-deep-purple/30 backdrop-blur-sm rounded-3xl p-12 border border-mystical-gold/20"
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
            Join our thriving community of mystics, seekers, and divine devotees. 
            Your path to ancient wisdom and modern practice starts here.
          </p>
          
          <motion.a
            href="https://discord.gg/8pe6qCsmWr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-mystical-gold to-amber-500 text-dark-bg px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-mystical-gold/25"
          >
            <Users className="group-hover:animate-bounce" size={24} />
            Join Our Discord Community
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.a>
          
          <p className="text-sm text-white/60 mt-4">
            Free to join • 1000+ active members • All paths welcome
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;