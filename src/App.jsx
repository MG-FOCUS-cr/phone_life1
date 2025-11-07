import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/common/Header'
import ErrorBoundary from './components/common/ErrorBoundary'
import PageTransition from './components/common/PageTransition'

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Accessories = lazy(() => import('./pages/Accessories'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const About = lazy(() => import('./pages/About'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/accessories" element={<PageTransition><Accessories /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
                <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App