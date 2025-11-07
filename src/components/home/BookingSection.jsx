import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Wrench } from 'lucide-react'
import BookingForm from '../booking/BookingForm'

const BookingSection = memo(() => {
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Wrench className="h-8 w-8 text-primary mr-3" />
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            {t('booking.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  )
})

BookingSection.displayName = 'BookingSection'

export default BookingSection