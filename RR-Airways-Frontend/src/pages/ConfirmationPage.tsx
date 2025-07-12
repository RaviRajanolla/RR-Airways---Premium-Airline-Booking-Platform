import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Download, Calendar, MapPin, Clock, User } from 'lucide-react'
import { useBookingStore } from '../store/bookingStore'

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const { currentBooking } = useBookingStore()

  if (!currentBooking) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            No booking found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Start New Booking
          </button>
        </div>
      </div>
    )
  }

  const passenger = currentBooking.passengers[0]

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-200">
            Your flight has been successfully booked
          </p>
        </motion.div>

        {/* Boarding Pass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-display font-bold">RR Airways</h2>
                <p className="text-primary-100">Boarding Pass</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary-100">Booking Reference</p>
                <p className="text-xl font-bold">{currentBooking.id.slice(-6).toUpperCase()}</p>
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Departure */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBooking.flight.departure}
                </div>
                <div className="text-gray-600 mb-2">{currentBooking.flight.from}</div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(currentBooking.bookingDate).toLocaleDateString()}
                </div>
              </div>

              {/* Flight Info */}
              <div className="text-center border-x border-gray-200 px-6">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{currentBooking.flight.duration}</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {currentBooking.flight.stops === 0 ? 'Non-stop' : `${currentBooking.flight.stops} stop${currentBooking.flight.stops > 1 ? 's' : ''}`}
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {currentBooking.flight.aircraft}
                </div>
              </div>

              {/* Arrival */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBooking.flight.arrival}
                </div>
                <div className="text-gray-600 mb-2">{currentBooking.flight.to}</div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Terminal 1
                </div>
              </div>
            </div>

            {/* Passenger & Seat Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <User className="h-4 w-4 mr-1" />
                    Passenger
                  </div>
                  <div className="font-semibold text-gray-900">
                    {passenger.firstName} {passenger.lastName}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Seat</div>
                  <div className="font-semibold text-gray-900">{passenger.seat}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Class</div>
                  <div className="font-semibold text-gray-900 capitalize">
                    {currentBooking.flight.class}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Gate</div>
                  <div className="font-semibold text-gray-900">A12</div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            {(currentBooking.addOns.meals.length > 0 || currentBooking.addOns.luggage > 0) && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Add-ons</h3>
                <div className="space-y-2">
                  {currentBooking.addOns.meals.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meals: {currentBooking.addOns.meals.join(', ')}</span>
                      <span className="font-medium">${currentBooking.addOns.meals.length * 25}</span>
                    </div>
                  )}
                  {currentBooking.addOns.luggage > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Extra luggage: {currentBooking.addOns.luggage} bag{currentBooking.addOns.luggage > 1 ? 's' : ''}</span>
                      <span className="font-medium">${currentBooking.addOns.luggage * 50}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Total */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total Paid</span>
                <span className="text-2xl font-bold text-primary-600">
                  ${currentBooking.totalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Barcode */}
          <div className="bg-gray-50 p-6 text-center">
            <div className="inline-block">
              <div className="flex space-x-1 mb-2">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-1 ${Math.random() > 0.5 ? 'h-8 bg-gray-800' : 'h-4 bg-gray-400'}`}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-mono">
                {currentBooking.id.toUpperCase()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <button
            onClick={() => {
              // Mock download functionality
              const element = document.createElement('a')
              const file = new Blob(['Boarding Pass - RR Airways'], { type: 'text/plain' })
              element.href = URL.createObjectURL(file)
              element.download = `boarding-pass-${currentBooking.id}.txt`
              document.body.appendChild(element)
              element.click()
              document.body.removeChild(element)
            }}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary"
          >
            View in Dashboard
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default ConfirmationPage