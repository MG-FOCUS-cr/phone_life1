import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Clock, Star, Shield, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: whyRef, inView: whyInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-96 bg-gradient-to-r from-primary to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop"
          alt="Phone repair workshop"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Notre Histoire</h1>
            <p className="text-xl">Experts en réparation depuis 2021</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-secondary mb-6">Notre Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chez Phone Life, nous nous engageons à offrir des services de réparation de qualité supérieure 
              pour tous vos appareils électroniques. Notre mission est de prolonger la vie de vos appareils 
              tout en vous proposant les meilleurs accessoires de protection du marché.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Pourquoi Nous Choisir</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-xl shadow-md">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Réparation Rapide</h3>
              <p className="text-gray-600">Réparation en 30 minutes pour la plupart des interventions</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-xl shadow-md">
              <Star className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Pièces d'Origine</h3>
              <p className="text-gray-600">Utilisation exclusive de pièces détachées certifiées</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-xl shadow-md">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Garantie 6 Mois</h3>
              <p className="text-gray-600">Toutes nos réparations sont garanties 6 mois</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Nos Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
                title: "Réparation Téléphones",
                description: "Écran, batterie, caméra",
                price: "À partir de 29€"
              },
              {
                image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop",
                title: "Réparation Tablettes", 
                description: "Écran tactile, connecteurs",
                price: "À partir de 49€"
              },
              {
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
                title: "Réparation Ordinateurs",
                description: "Diagnostic, réparation",
                price: "À partir de 39€"
              },
              {
                image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
                title: "Vente Accessoires",
                description: "Coques, chargeurs, écouteurs",
                price: "À partir de 5€"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white"
          >
            {[
              { icon: Users, number: "5000+", label: "Réparations Effectuées" },
              { icon: Award, number: "98%", label: "Satisfaction Client" },
              { icon: TrendingUp, number: "3", label: "Années d'Expérience" },
              { icon: Clock, number: "30min", label: "Temps Moyen" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About