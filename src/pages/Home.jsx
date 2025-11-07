import React from 'react'
import { motion } from 'framer-motion'
import HeroSlider from '../components/home/HeroSlider'
import BookingSection from '../components/home/BookingSection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import ProtectionProducts from '../components/home/ProtectionProducts'
import BottomInfoSection from '../components/home/BottomInfoSection'

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Slider */}
      <HeroSlider />

      {/* Booking Section */}
      <BookingSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Protection Products */}
      <ProtectionProducts />

      {/* Bottom Info Section */}
      <BottomInfoSection />
    </motion.div>
  )
}

export default Home