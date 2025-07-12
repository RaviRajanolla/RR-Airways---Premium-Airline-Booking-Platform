import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, Plane, Search } from 'lucide-react'
import { useBookingStore, SearchParams } from '../../store/bookingStore'
import toast from 'react-hot-toast'

const BookingForm = () => {
  const navigate = useNavigate()
  const { setSearchParams } = useBookingStore()
  
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('round-trip')
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy' as 'economy' | 'business' | 'first'
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!searchData.from || !searchData.to || !searchData.departureDate) {
      toast.error('Please fill in all required fields')
      return
    }

    const searchParams: SearchParams = {
      from: searchData.from,
      to: searchData.to,
      departureDate: searchData.departureDate,
      returnDate: tripType === 'round-trip' ? searchData.returnDate : undefined,
      passengers: searchData.passengers,
      class: searchData.class,
      tripType
    }

    setSearchParams(searchParams)
    navigate('/search')
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Book Your Flight
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search and book flights to destinations worldwide with RR Airways
          </p>
        </motion.div>

        {/* Main Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-300 p-8 md:p-12"
        >
          {/* Trip Type Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {(['one-way', 'round-trip', 'multi-city'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  tripType === type
                    ? 'bg-maroon-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="space-y-8">
            {/* From/To Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Departure city or airport"
                    value={searchData.from}
                    onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Destination city or airport"
                    value={searchData.to}
                    onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departure Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    value={searchData.departureDate}
                    onChange={(e) => setSearchData({ ...searchData, departureDate: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>
              {tripType === 'round-trip' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      value={searchData.returnDate}
                      onChange={(e) => setSearchData({ ...searchData, returnDate: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Passengers and Class Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({ ...searchData, passengers: parseInt(e.target.value) })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} Passenger{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class
                </label>
                <div className="relative">
                  <Plane className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={searchData.class}
                    onChange={(e) => setSearchData({ ...searchData, class: e.target.value as any })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-accent focus:border-transparent text-lg"
                  >
                    <option value="economy">Economy Class</option>
                    <option value="business">Business Class</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-maroon-primary hover:bg-maroon-accent text-white font-semibold py-5 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xl flex items-center justify-center space-x-3"
              >
                <Search className="h-6 w-6" />
                <span>Search Flights</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Flexible Booking',
              description: 'Change or cancel your booking up to 24 hours before departure',
              icon: Calendar
            },
            {
              title: 'Best Price Guarantee',
              description: 'Find a lower price? We\'ll match it and give you an extra 10% off',
              icon: Plane
            },
            {
              title: '24/7 Support',
              description: 'Our customer service team is available around the clock',
              icon: Users
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-300">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-maroon-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BookingForm