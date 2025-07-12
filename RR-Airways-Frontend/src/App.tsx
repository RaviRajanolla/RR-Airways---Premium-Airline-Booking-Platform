import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ProtectedRoute from './components/auth/ProtectedRoute'

// Pages
import HomePage from './pages/HomePage'
import BookingForm from './components/booking/BookingForm'
import SearchResults from './pages/SearchResults'
import ExperiencePage from './pages/ExperiencePage'
import BookingPage from './pages/BookingPage'
import ConfirmationPage from './pages/ConfirmationPage'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HelpPage from './pages/HelpPage'
import TravelAdvisoryPage from './pages/TravelAdvisoryPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/confirm" element={<ConfirmationPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/travel-advisory" element={<TravelAdvisoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute adminOnly>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App