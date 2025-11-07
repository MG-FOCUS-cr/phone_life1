import React, { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { updateQuantity, removeFromCart, setDeliveryOption } from '../redux/slices/cartSlice'
import { DELIVERY_OPTIONS } from '../utils/constants'
import OptimizedImage from '../components/common/OptimizedImage'

const Cart = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { items, total, deliveryOption } = useSelector(state => state.cart)

  const handleQuantityChange = useCallback((id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }))
    }
  }, [dispatch])

  const handleRemoveItem = useCallback((id) => {
    dispatch(removeFromCart(id))
  }, [dispatch])

  const { deliveryPrice, finalTotal } = useMemo(() => {
    const price = DELIVERY_OPTIONS.find(option => option.value === deliveryOption)?.price || 0
    return {
      deliveryPrice: price,
      finalTotal: total + price
    }
  }, [deliveryOption, total])

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-secondary mb-8">{t('cart.title')}</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Votre panier est vide</p>
            <Link to="/accessories" className="btn-primary">
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-8">{t('cart.title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="card flex items-center space-x-4">
                <OptimizedImage
                  src={item.image || '/placeholder-product.jpg'}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-accent">{item.name}</h3>
                  <p className="text-primary font-bold">€{item.price}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="card">
            <h3 className="text-xl font-semibold text-accent mb-4">Résumé de commande</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>{t('cart.subtotal')}</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">{t('cart.delivery')}</label>
                {DELIVERY_OPTIONS.map(option => (
                  <label key={option.value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="delivery"
                      value={option.value}
                      checked={deliveryOption === option.value}
                      onChange={(e) => dispatch(setDeliveryOption(e.target.value))}
                      className="text-primary"
                    />
                    <span className="text-sm">
                      {option.label} {option.price > 0 && `- €${option.price}`}
                    </span>
                  </label>
                ))}
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>€{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link to="/checkout" className="w-full btn-primary text-center block">
              {t('cart.checkout')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart