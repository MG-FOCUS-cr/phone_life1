import { memo } from 'react'

const ProductCardSkeleton = memo(() => (
  <div className="border rounded-lg p-4 animate-pulse">
    <div className="bg-gray-200 h-48 rounded mb-4"></div>
    <div className="bg-gray-200 h-4 rounded mb-2"></div>
    <div className="bg-gray-200 h-4 rounded w-2/3 mb-4"></div>
    <div className="bg-gray-200 h-8 rounded"></div>
  </div>
))

ProductCardSkeleton.displayName = 'ProductCardSkeleton'

export default ProductCardSkeleton