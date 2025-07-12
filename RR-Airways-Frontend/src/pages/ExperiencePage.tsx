import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Plane, MapPin, Calendar, Users, Star, Globe, 
  CreditCard, Gift, ArrowRight, Play,
  Wifi, Coffee, Monitor, Headphones, Shield, Award, Search,
  Crown, Zap, CheckCircle, X
} from 'lucide-react'
import { useBookingStore } from '../store/bookingStore'
import toast from 'react-hot-toast'

const ExperiencePage = () => {
  const navigate = useNavigate()
  const { setSearchParams } = useBookingStore()
  const [selectedDestination, setSelectedDestination] = useState('all')
  const [showAllDestinations, setShowAllDestinations] = useState(false)
  const [showPrivilegeModal, setShowPrivilegeModal] = useState(false)
  const [privilegeFormData, setPrivilegeFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    preferredTier: 'silver'
  })
  
  // Search form state
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    passengers: 1,
    class: 'economy' as 'economy' | 'business' | 'first'
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!searchData.from || !searchData.to || !searchData.departureDate) {
      toast.error('Please fill in all required fields')
      return
    }

    const searchParams = {
      from: searchData.from,
      to: searchData.to,
      departureDate: searchData.departureDate,
      passengers: searchData.passengers,
      class: searchData.class,
      tripType: 'round-trip' as const
    }

    setSearchParams(searchParams)
    navigate('/search')
  }

  const handlePrivilegeJoin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate API call
    toast.loading('Creating your Privilege Club account...')
    
    setTimeout(() => {
      toast.dismiss()
      toast.success('Welcome to RR Airways Privilege Club! Check your email for confirmation.')
      setShowPrivilegeModal(false)
      setPrivilegeFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        nationality: '',
        preferredTier: 'silver'
      })
    }, 2000)
  }

  const destinations = [
    {
      city: 'Malta',
      country: 'Mediterranean',
      price: 'INR 49,577',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tag: 'Best Value'
    },
    {
      city: 'London',
      country: 'United Kingdom', 
      price: 'INR 59,377',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'New York City',
      country: 'United States',
      price: 'INR 75,700',
      economy: 'Economy from', 
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      price: 'INR 56,500',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Manchester',
      country: 'United Kingdom',
      price: 'INR 60,634',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Paris',
      country: 'France',
      price: 'INR 58,900',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tag: 'Popular'
    },
    // Additional destinations for "View more fares"
    {
      city: 'Tokyo',
      country: 'Japan',
      price: 'INR 89,500',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      price: 'INR 45,200',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tag: 'Hot Deal'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      price: 'INR 67,800',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      price: 'INR 95,400',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Rome',
      country: 'Italy',
      price: 'INR 62,300',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      price: 'INR 54,800',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Bangkok',
      country: 'Thailand',
      price: 'INR 38,900',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tag: 'Great Deal'
    },
    {
      city: 'Istanbul',
      country: 'Turkey',
      price: 'INR 52,700',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      city: 'Cape Town',
      country: 'South Africa',
      price: 'INR 57,300',
      economy: 'Economy from',
      image: 'https://resources.formula-e.pulselive.com/photo-resources/2023/02/20/042dd057-7157-4069-beb8-2aa3af8b21ba/Cape-Town.jpg?width=1440&height=810',
      tag: 'Explorer Pick'
    },
    {
      city: 'Hong Kong',
      country: 'China',
      price: 'INR 71,200',
      economy: 'Economy from',
      image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ]

  // Show first 6 destinations initially, then all when expanded
  const displayedDestinations = showAllDestinations ? destinations : destinations.slice(0, 6)

  const privilegeTiers = [
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: ['Earn 1 point per $1 spent', 'Priority check-in', 'Extra baggage allowance', '24/7 customer support'],
      icon: Star
    },
    {
      name: 'Gold',
      color: 'from-gold-400 to-gold-600',
      benefits: ['Earn 1.5 points per $1 spent', 'Lounge access', 'Priority boarding', 'Free seat selection', 'Complimentary upgrades'],
      icon: Crown
    },
    {
      name: 'Platinum',
      color: 'from-purple-400 to-purple-600',
      benefits: ['Earn 2 points per $1 spent', 'Premium lounge access', 'Guaranteed upgrades', 'Personal concierge', 'Free companion tickets'],
      icon: Zap
    }
  ]

  const tripPlanning = [
    {
      title: 'Fly to Toronto with the World\'s Best Airline',
      description: 'Experience award-winning service on your journey to Canada',
      image: 'https://sever-press.ru/images/insecure/rs:fill-down:1920:1080/aHR0cHM6Ly9zdG9yYWdlLnlhbmRleGNsb3VkLm5ldC95bS1zaXRlcy1zdGF0aWMvYmZlNDI2OTYtMWYwLndlYnA.webp',
      action: 'Book now'
    },
    {
      title: 'Mastercard® cardholders special offer',
      description: 'Exclusive benefits and discounts for Mastercard holders',
      image:'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Qatar_Airways_4.jpg',
      action: 'Find out more'
    },
    {
      title: 'Exclusive offer for VISA card holders',
      description: 'Special promotions and privileges for VISA customers',
      image: 'https://i0.wp.com/asm.aero/wp-content/uploads/2025/06/5.jpg?fit=2560%2C1600&quality=89&ssl=1',
      action: 'Know more'
    },
    {
      title: 'Starlink: The fastest Wi-Fi in the sky',
      description: 'Stay connected with high-speed internet at 35,000 feet',
      image: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/brand/business-class/h2-b7879-business-suite-african-male.jpg',
      action: 'Learn More'
    }
  ]

  const travelPackages = [
    {
      title: 'Unforgettable escapes with greater savings',
      description: 'Discover amazing destinations with our exclusive travel packages',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Save up to 40% on Doha holidays',
      description: 'Experience the beauty and culture of Qatar with special offers',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section with Aircraft Background */}
      <section className="relative py-60 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="block text-gold-500">

              Book online and save more
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Enjoy up to 10% savings on flights
            </p>
            <button 
              onClick={() => navigate('/book')}
              className="btn-primary text-lg px-8 py-4"
            >
              Book now
            </button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Booking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16 -mt-32 relative z-10"
        >
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex items-center space-x-2">
              <Plane className="h-5 w-5 text-maroon-primary" />
              <span className="font-medium">Book a flight</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Stopover / Packages</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Manage / Check-in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Monitor className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Flight status</span>
            </div>
          </div>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Departure city"
                    value={searchData.from}
                    onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Destination city"
                    value={searchData.to}
                    onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    value={searchData.departureDate}
                    onChange={(e) => setSearchData({ ...searchData, departureDate: e.target.value })}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({ ...searchData, passengers: parseInt(e.target.value) })}
                    className="input-field pl-10"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} Passenger{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary h-12 flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search flights</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Start Planning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Start planning your next trip
          </h2>
          <p className="text-gray-600 mb-8">
            Thinking of travelling somewhere soon? Here are some options to help you get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripPlanning.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="text-maroon-primary hover:text-maroon-accent font-medium flex items-center space-x-1">
                    <span>{item.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Find Great Fares */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
                Find great fares
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">From</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>Hyderabad (HYD)</option>
                  <option>Mumbai (BOM)</option>
                  <option>Delhi (DEL)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Destinations Grid - Fixed Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedDestinations.map((dest, index) => (
              <motion.div
                key={`${dest.city}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => navigate('/book')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {dest.tag && (
                    <div className="absolute top-4 left-4 bg-maroon-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {dest.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{dest.city}</h3>
                    <p className="text-sm text-gray-200">{dest.country}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">{dest.economy}</p>
                      <p className="font-bold text-maroon-primary">{dest.price}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button 
              onClick={() => setShowAllDestinations(!showAllDestinations)}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>{showAllDestinations ? 'Show Less' : 'View more fares'}</span>
              <ArrowRight className={`h-4 w-4 transition-transform ${showAllDestinations ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </motion.div>

        {/* Enhanced Privilege Club Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gold-600 to-gold-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Crown className="h-8 w-8 text-gold-200" />
                  <h2 className="text-3xl font-display font-bold">
                    Join Privilege Club
                  </h2>
                </div>
                <p className="text-gold-100 mb-6">
                  Enjoy exclusive benefits with RR Airways Privilege Club. 
                  Earn free flights, upgrades, extra baggage, and more 
                  exclusive benefits.
                </p>
                
                {/* Quick Benefits Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-200" />
                    <span className="text-sm">Earn Points</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-200" />
                    <span className="text-sm">Priority Boarding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-200" />
                    <span className="text-sm">Lounge Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-200" />
                    <span className="text-sm">Free Upgrades</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowPrivilegeModal(true)}
                  className="bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join now
                </button>
              </div>
              <div className="relative h-64 lg:h-full">
                <img
                  src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Premium Aircraft Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Travel Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Looking for a travel package?
          </h2>
          <p className="text-gray-600 mb-8">
            Save more and gain greater rewards when you book your flight and hotel package with RR Airways Holidays.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-200 text-sm">{pkg.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="relative h-64 lg:h-full">
                <img
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Business Class Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Never miss an offer
                </h2>
                <p className="text-gray-300 mb-6">
                  Subscribe and be the first to receive exclusive offers.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-800"
                  />
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 rounded border-gray-300"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-300">
                      I would like to get offers and hear from RR Airways. I have read and 
                      understood the Privacy Notice.
                    </label>
                  </div>
                  <button className="btn-primary w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Privilege Club Modal */}
      {showPrivilegeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Crown className="h-8 w-8 text-gold-600" />
                  <h2 className="text-2xl font-display font-bold text-gray-900">
                    Join RR Airways Privilege Club
                  </h2>
                </div>
                <button
                  onClick={() => setShowPrivilegeModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Tier Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Starting Tier</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {privilegeTiers.map((tier) => (
                    <div
                      key={tier.name}
                      onClick={() => setPrivilegeFormData({ ...privilegeFormData, preferredTier: tier.name.toLowerCase() })}
                      className={`card p-4 cursor-pointer transition-all ${
                        privilegeFormData.preferredTier === tier.name.toLowerCase()
                          ? 'ring-2 ring-maroon-primary'
                          : ''
                      }`}
                    >
                      <div className={`bg-gradient-to-r ${tier.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                        <tier.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tier.name}</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tier.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handlePrivilegeJoin} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={privilegeFormData.firstName}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, firstName: e.target.value })}
                      className="input-field"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={privilegeFormData.lastName}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, lastName: e.target.value })}
                      className="input-field"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={privilegeFormData.email}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, email: e.target.value })}
                      className="input-field"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={privilegeFormData.phone}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, phone: e.target.value })}
                      className="input-field"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={privilegeFormData.dateOfBirth}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, dateOfBirth: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <select
                      required
                      value={privilegeFormData.nationality}
                      onChange={(e) => setPrivilegeFormData({ ...privilegeFormData, nationality: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Select nationality</option>
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="SG">Singapore</option>
                      <option value="AE">UAE</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the Terms and Conditions and Privacy Policy. I consent to receive marketing communications from RR Airways.
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowPrivilegeModal(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Join Privilege Club
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ExperiencePage