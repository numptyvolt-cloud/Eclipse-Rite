import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import GodsSection from "./GodsSection";
import ServicesSection from "./ServicesSection";
import PaganHistorySection from "./PaganHistorySection";
import SpellsRitualsSection from "./SpellsRitualsSection";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <HeroSection />
      <GodsSection />
      <ServicesSection />
      <PaganHistorySection />
      <SpellsRitualsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default HomePage;