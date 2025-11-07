import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

const BottomInfoSection = memo(() => {
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Video Showcase */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
              <Play className="h-5 w-5 text-primary mr-2" />
              Notre Atelier
            </h3>
            <div className="relative bg-gray-200 rounded-lg h-48 flex items-center justify-center group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
                alt="Workshop"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              Découvrez notre processus de réparation professionnel
            </p>
          </motion.div>

          {/* Store Location */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              Notre Magasin
            </h3>
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674084!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1635789012345!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">123 Rue de la Réparation, 75001 Paris</p>
            <button className="text-primary hover:text-orange-600 text-sm font-medium">
              Obtenir l'itinéraire
            </button>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
              <Phone className="h-5 w-5 text-primary mr-2" />
              Contactez-Nous
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-3" />
                <a href="tel:+33123456789" className="text-gray-600 hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-3" />
                <a href="mailto:contact@phonelife.fr" className="text-gray-600 hover:text-primary transition-colors">
                  contact@phonelife.fr
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-3" />
                <span className="text-gray-600">Lun-Sam: 9h-19h</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-primary hover:text-orange-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-orange-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-orange-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

BottomInfoSection.displayName = 'BottomInfoSection'

export default BottomInfoSection