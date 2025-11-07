import React, { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCart, Smartphone, Globe } from 'lucide-react'
import { setLanguage } from '../../redux/slices/languageSlice'

const Header = memo(() => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const currentLanguage = useSelector(state => state.language.current)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === 'fr' ? 'en' : 'fr'
    dispatch(setLanguage(newLang))
    i18n.changeLanguage(newLang)
  }, [currentLanguage, dispatch, i18n])

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Phone Life" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-accent hover:text-primary transition-colors relative group">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/accessories" className="text-accent hover:text-primary transition-colors relative group">
              {t('nav.accessories')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-accent hover:text-primary transition-colors relative group">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-accent hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
            </button>

            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-accent hover:text-primary transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-accent hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/accessories"
              className="block px-3 py-2 text-accent hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.accessories')}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-accent hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
})

Header.displayName = 'Header'

export default Header