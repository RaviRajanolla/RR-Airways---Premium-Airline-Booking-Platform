import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock, MapPin, Plane, Filter } from 'lucide-react'
import { useBookingStore, Flight } from '../store/bookingStore'

const SearchResults = () => {
  const navigate = useNavigate()
  const { searchParams, searchResults, setSearchResults, setSelectedFlight } = useBookingStore()
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    maxPrice: 2000,
    stops: 'any',
    airline: 'any',
    sortBy: 'price'
  })

  // Mock flight data
  const mockFlights: Flight[] = [
    {
      id: '1',
      airline: 'RR Airways',
      aircraft: 'Boeing 787',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'London',
      departure: '08:30',
      arrival: '20:45',
      duration: '7h 15m',
      stops: 0,
      class: searchParams?.class || 'economy',
      price: 899,
      availableSeats: 23
    },
    {
      id: '2',
      airline: 'RR Airways',
      aircraft: 'Airbus A350',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'London',
      departure: '14:20',
      arrival: '02:35+1',
      duration: '7h 15m',
      stops: 0,
      class: searchParams?.class || 'economy',
      price: 1299,
      availableSeats: 15
    },
    {
      id: '3',
      airline: 'Partner Airlines',
      aircraft: 'Boeing 777',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'London',
      departure: '11:45',
      arrival: '06:30+1',
      duration: '9h 45m',
      stops: 1,
      class: searchParams?.class || 'economy',
      price: 749,
      availableSeats: 8
    }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchFlights = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSearchResults(mockFlights)
      setLoading(false)
    }

    fetchFlights()
  }, [searchParams, setSearchResults])

  const handleBookFlight = (flight: Flight) => {
    setSelectedFlight(flight)
    navigate(`/book/${flight.id}`)
  }

  const filteredFlights = searchResults.filter(flight => {
    if (filters.maxPrice && flight.price > filters.maxPrice) return false
    if (filters.stops !== 'any' && flight.stops.toString() !== filters.stops) return false
    if (filters.airline !== 'any' && flight.airline !== filters.airline) return false
    return true
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price':
        return a.price - b.price
      case 'duration':
        return a.duration.localeCompare(b.duration)
      case 'departure':
        return a.departure.localeCompare(b.departure)
      default:
        return 0
    }
  })

  if (!searchParams) {
    return (
      <div className="min-h-screen page-content flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            No search parameters found
          </h2>
          <button
            onClick={() => navigate('/book')}
            className="btn-primary"
          >
            Start New Search
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen page-content bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="font-medium">{searchParams.from}</span>
                <span className="text-gray-400">→</span>
                <span className="font-medium">{searchParams.to}</span>
              </div>
              <div className="text-gray-600">
                {searchParams.departureDate}
              </div>
              <div className="text-gray-600">
                {searchParams.passengers} passenger{searchParams.passengers > 1 ? 's' : ''}
              </div>
              <div className="text-gray-600 capitalize">
                {searchParams.class}
              </div>
            </div>
            <button
              onClick={() => navigate('/book')}
              className="btn-secondary"
            >
              Modify Search
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="input-field"
                  >
                    <option value="price">Price (Low to High)</option>
                    <option value="duration">Duration</option>
                    <option value="departure">Departure Time</option>
                  </select>
                </div>

                {/* Max Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price: ${filters.maxPrice}
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="3000"
                    step="50"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>

                {/* Stops */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stops
                  </label>
                  <select
                    value={filters.stops}
                    onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
                    className="input-field"
                  >
                    <option value="any">Any</option>
                    <option value="0">Non-stop</option>
                    <option value="1">1 Stop</option>
                    <option value="2">2+ Stops</option>
                  </select>
                </div>

                {/* Airlines */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Airlines
                  </label>
                  <select
                    value={filters.airline}
                    onChange={(e) => setFilters({ ...filters, airline: e.target.value })}
                    className="input-field"
                  >
                    <option value="any">Any Airline</option>
                    <option value="RR Airways">RR Airways</option>
                    <option value="Partner Airlines">Partner Airlines</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flight Results */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                        <div className="h-6 bg-gray-200 rounded w-48"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFlights.map((flight, index) => (
                  <motion.div
                    key={flight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Flight Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-primary-100 p-2 rounded-lg">
                            <Plane className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
                            <p className="text-sm text-gray-600">{flight.aircraft}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Departure */}
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{flight.departure}</div>
                            <div className="text-sm text-gray-600">{flight.from}</div>
                          </div>

                          {/* Duration */}
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-1">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{flight.duration}</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </div>
                          </div>

                          {/* Arrival */}
                          <div className="text-right md:text-left">
                            <div className="text-2xl font-bold text-gray-900">{flight.arrival}</div>
                            <div className="text-sm text-gray-600">{flight.to}</div>
                          </div>
                        </div>
                      </div>

                      {/* Price and Book */}
                      <div className="text-center lg:text-right">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          ${flight.price}
                        </div>
                        <div className="text-sm text-gray-600 mb-4">
                          {flight.availableSeats} seats left
                        </div>
                        <button
                          onClick={() => handleBookFlight(flight)}
                          className="btn-primary w-full lg:w-auto"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filteredFlights.length === 0 && (
                  <div className="text-center py-12">
                    <Plane className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No flights found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                      onClick={() => navigate('/book')}
                      className="btn-primary"
                    >
                      New Search
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults