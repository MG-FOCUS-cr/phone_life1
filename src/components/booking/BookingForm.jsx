import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { setDevice, setRepairs, setAppointmentDateTime, setServiceType, setCustomerInfo } from '../../redux/slices/appointmentsSlice'
import { DEVICE_TYPES, BRANDS, MODELS, REPAIR_TYPES } from '../../utils/constants'
import "react-datepicker/dist/react-datepicker.css"

const BookingForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const booking = useSelector(state => state.appointments.currentBooking)
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedRepairs, setSelectedRepairs] = useState([])

  const handleDeviceChange = (field, value) => {
    const updatedDevice = { ...booking.device, [field]: value }
    if (field === 'type') {
      updatedDevice.brand = ''
      updatedDevice.model = ''
    }
    if (field === 'brand') {
      updatedDevice.model = ''
    }
    dispatch(setDevice(updatedDevice))
  }

  const handleRepairToggle = (repair) => {
    const updated = selectedRepairs.find(r => r.id === repair.id)
      ? selectedRepairs.filter(r => r.id !== repair.id)
      : [...selectedRepairs, repair]
    setSelectedRepairs(updated)
    dispatch(setRepairs(updated))
  }

  const handleDateTimeSubmit = () => {
    dispatch(setAppointmentDateTime({ date: selectedDate, time: selectedTime }))
    setStep(4)
  }

  const handleServiceTypeChange = (type) => {
    dispatch(setServiceType(type))
    setStep(5)
  }

  const onSubmit = (data) => {
    dispatch(setCustomerInfo(data))
    // Proceed to payment
    console.log('Booking completed:', { ...booking, customer: data })
  }

  const totalPrice = selectedRepairs.reduce((sum, repair) => sum + repair.price, 0) + 
    (booking.serviceType === 'vip' ? 20 : 0)

  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center text-secondary mb-8">
        {t('booking.title')}
      </h2>

      {/* Step 1: Device Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-accent">{t('booking.step1')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="w-full p-3 border border-border rounded-lg"
              value={booking.device?.type || ''}
              onChange={(e) => handleDeviceChange('type', e.target.value)}
            >
              <option value="">{t('booking.deviceType')}</option>
              {DEVICE_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>

            <select
              className="w-full p-3 border border-border rounded-lg"
              value={booking.device?.brand || ''}
              onChange={(e) => handleDeviceChange('brand', e.target.value)}
              disabled={!booking.device?.type}
            >
              <option value="">{t('booking.brand')}</option>
              {booking.device?.type && BRANDS[booking.device.type]?.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <select
              className="w-full p-3 border border-border rounded-lg"
              value={booking.device?.model || ''}
              onChange={(e) => handleDeviceChange('model', e.target.value)}
              disabled={!booking.device?.brand}
            >
              <option value="">{t('booking.model')}</option>
              {booking.device?.brand && MODELS[booking.device.brand]?.[booking.device.type]?.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!booking.device?.model}
            className="w-full btn-primary disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      )}

      {/* Step 2: Repair Selection */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-accent">{t('booking.step2')}</h3>
          
          <div className="space-y-3">
            {REPAIR_TYPES.map(repair => (
              <label key={repair.id} className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedRepairs.some(r => r.id === repair.id)}
                    onChange={() => handleRepairToggle(repair)}
                    className="h-5 w-5 text-primary"
                  />
                  <span>{t(`booking.repairTypes.${repair.id}`)}</span>
                </div>
                <span className="font-semibold">€{repair.price}</span>
              </label>
            ))}
          </div>

          <div className="text-right">
            <span className="text-xl font-bold">{t('booking.total')}: €{totalPrice}</span>
          </div>

          <div className="flex space-x-4">
            <button onClick={() => setStep(1)} className="flex-1 btn-secondary">
              Retour
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={selectedRepairs.length === 0}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Date & Time */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-accent">{t('booking.step3')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                minDate={new Date()}
                className="w-full p-3 border border-border rounded-lg"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Heure</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-3 border border-border rounded-lg"
              >
                <option value="">Sélectionner une heure</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <button onClick={() => setStep(2)} className="flex-1 btn-secondary">
              Retour
            </button>
            <button
              onClick={handleDateTimeSubmit}
              disabled={!selectedDate || !selectedTime}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Service Type */}
      {step === 4 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-accent">{t('booking.step4')}</h3>
          
          <div className="space-y-4">
            <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="serviceType"
                value="classic"
                checked={booking.serviceType === 'classic'}
                onChange={(e) => handleServiceTypeChange(e.target.value)}
                className="h-5 w-5 text-primary"
              />
              <span className="ml-3">{t('booking.serviceTypes.classic')}</span>
            </label>

            <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="serviceType"
                value="vip"
                checked={booking.serviceType === 'vip'}
                onChange={(e) => handleServiceTypeChange(e.target.value)}
                className="h-5 w-5 text-primary"
              />
              <span className="ml-3">{t('booking.serviceTypes.vip')}</span>
            </label>
          </div>

          <div className="flex space-x-4">
            <button onClick={() => setStep(3)} className="flex-1 btn-secondary">
              Retour
            </button>
            <button onClick={() => setStep(5)} className="flex-1 btn-primary">
              Suivant
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Customer Info */}
      {step === 5 && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-xl font-semibold text-accent">{t('booking.step5')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register('name', { required: 'Nom requis' })}
              placeholder="Nom complet"
              className="w-full p-3 border border-border rounded-lg"
            />
            <input
              {...register('email', { required: 'Email requis' })}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>

          <input
            {...register('phone', { required: 'Téléphone requis' })}
            placeholder="Téléphone"
            className="w-full p-3 border border-border rounded-lg"
          />

          <textarea
            {...register('notes')}
            placeholder="Notes additionnelles (optionnel)"
            rows={3}
            className="w-full p-3 border border-border rounded-lg"
          />

          <div className="text-right">
            <span className="text-xl font-bold">Total: €{totalPrice}</span>
          </div>

          <div className="flex space-x-4">
            <button type="button" onClick={() => setStep(4)} className="flex-1 btn-secondary">
              Retour
            </button>
            <button type="submit" className="flex-1 btn-primary">
              {t('booking.bookAndPay')}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default BookingForm