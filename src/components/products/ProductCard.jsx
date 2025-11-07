import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Star, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import { addToCart } from '../../redux/slices/cartSlice'
import OptimizedImage from '../common/OptimizedImage'

const ProductCard = memo(({ product }) => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product))
  }, [dispatch, product])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <motion.div 
      className="card hover:shadow-lg transition-all duration-300 group"
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255,140,66,0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square bg-gray-100 rounded-lg mb-4">
        <OptimizedImage
          src={product.image || '/placeholder-product.jpg'}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-accent line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">€{product.price}</span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">{t('products.addToCart')}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard