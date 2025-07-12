import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, Plane, Star, TrendingUp } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useBookingStore } from '../store/bookingStore'

const Dashboard = () => {
  const { user } = useAuthStore()
  const { bookingHistory } = useBookingStore()

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'from-gray-400 to-gray-600'
      case 'gold':
        return 'from-gold-400 to-gold-600'
      default:
        return 'from-gray-300 to-gray-500'
    }
  }

  const getTierBenefits = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return ['Priority boarding', 'Lounge access', 'Free upgrades', 'Extra baggage']
      case 'gold':
        return ['Priority boarding', 'Lounge access', 'Seat selection']
      default:
        return ['Earn points', 'Special offers']
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-gray-800 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Manage your flights, track your loyalty status, and explore new destinations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Loyalty Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold text-gray-800">
                  Loyalty Status
                </h2>
                <div className={`bg-gradient-to-r ${getTierColor(user?.loyaltyTier || 'silver')} text-white px-4 py-2 rounded-full text-sm font-medium capitalize`}>
                  {user?.loyaltyTier} Member
                </div>
              </div>

              {/* Points Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Points to next tier</span>
                  <span className="text-sm text-gray-500">
                    {user?.points || 0} / {user?.loyaltyTier === 'silver' ? 25000 : 50000}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-maroon-primary h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${((user?.points || 0) / (user?.loyaltyTier === 'silver' ? 25000 : 50000)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Your Benefits</h3>
                <div className="grid grid-cols-2 gap-3">
                  {getTierBenefits(user?.loyaltyTier || 'silver').map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="card p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-maroon-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{user?.points?.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Points</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{bookingHistory.length}</p>
                  <p className="text-sm text-gray-600">Flights Booked</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 capitalize">{user?.loyaltyTier}</p>
                  <p className="text-sm text-gray-600">Member Tier</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="card p-6">
            <h2 className="text-xl font-display font-semibold text-gray-800 mb-6">
              Recent Bookings
            </h2>

            {bookingHistory.length > 0 ? (
              <div className="space-y-4">
                {bookingHistory.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="border border-gray-300 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="bg-gold-100 p-2 rounded-lg">
                            <Plane className="h-5 w-5 text-maroon-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {booking.flight.from} → {booking.flight.to}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {booking.flight.airline} • {booking.flight.aircraft}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Seat {booking.passengers[0].seat}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-800">
                          ${booking.totalPrice}
                        </div>
                        <div className={`text-sm px-2 py-1 rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Plane className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No bookings yet
                </h3>
                <p className="text-gray-600 mb-4">
                  Start your journey by booking your first flight
                </p>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="btn-primary"
                >
                  Book a Flight
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Lifestyle Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Airport Lounge"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">Premium Lounges</h3>
                  <p className="text-sm text-gray-200">Relax in comfort before your flight</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Luxury Travel"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">Luxury Experience</h3>
                  <p className="text-sm text-gray-200">Premium service at 35,000 feet</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard