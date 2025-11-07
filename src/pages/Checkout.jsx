import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { clearCart } from '../redux/slices/cartSlice'
import { DELIVERY_OPTIONS } from '../utils/constants'

const Checkout = () => {
  const dispatch = useDispatch()
  const { items, total, deliveryOption } = useSelector(state => state.cart)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isProcessing, setIsProcessing] = useState(false)

  const deliveryPrice = DELIVERY_OPTIONS.find(option => option.value === deliveryOption)?.price || 0
  const finalTotal = total + deliveryPrice

  const onSubmit = async (data) => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      console.log('Order placed:', { items, customer: data, total: finalTotal })
      dispatch(clearCart())
      setIsProcessing(false)
      alert('Commande confirmée! Vous recevrez un email de confirmation.')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-8">Finaliser la commande</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information Form */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Informations de livraison</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  {...register('firstName', { required: 'Prénom requis' })}
                  placeholder="Prénom"
                  className="w-full p-3 border border-border rounded-lg"
                />
                <input
                  {...register('lastName', { required: 'Nom requis' })}
                  placeholder="Nom"
                  className="w-full p-3 border border-border rounded-lg"
                />
              </div>

              <input
                {...register('email', { required: 'Email requis' })}
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-border rounded-lg"
              />

              <input
                {...register('phone', { required: 'Téléphone requis' })}
                placeholder="Téléphone"
                className="w-full p-3 border border-border rounded-lg"
              />

              <input
                {...register('address', { required: 'Adresse requise' })}
                placeholder="Adresse"
                className="w-full p-3 border border-border rounded-lg"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  {...register('city', { required: 'Ville requise' })}
                  placeholder="Ville"
                  className="w-full p-3 border border-border rounded-lg"
                />
                <input
                  {...register('postalCode', { required: 'Code postal requis' })}
                  placeholder="Code postal"
                  className="w-full p-3 border border-border rounded-lg"
                />
                <input
                  {...register('country', { required: 'Pays requis' })}
                  placeholder="Pays"
                  defaultValue="France"
                  className="w-full p-3 border border-border rounded-lg"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isProcessing ? 'Traitement...' : `Confirmer et payer €${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Résumé de commande</h2>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500 ml-2">x{item.quantity}</span>
                  </div>
                  <span>€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>€{deliveryPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>€{finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout