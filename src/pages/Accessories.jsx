import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/products/ProductCard'
import ProductCardSkeleton from '../components/common/ProductCardSkeleton'
import { useDebounce } from '../hooks/useDebounce'
import { featuredProducts, protectionProducts, audioProducts } from '../data/products'

const Accessories = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const debouncedSearch = useDebounce(searchTerm, 300)
  const categories = ['All', 'protection', 'chargers', 'audio', 'accessories']

  const allProducts = [...featuredProducts, ...protectionProducts, ...audioProducts]
  
  const sortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch = !debouncedSearch || product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [selectedCategory, sortBy, debouncedSearch])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-8">{t('nav.accessories')}</h1>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Rechercher des produits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-border rounded-lg"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-accent hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg"
          >
            <option value="name">Trier par nom</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!isLoading && sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun produit trouvé.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accessories