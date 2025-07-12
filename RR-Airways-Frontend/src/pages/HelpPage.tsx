import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, ChevronDown, ChevronRight, Phone, Mail, MessageCircle,
  Plane, Luggage, CreditCard, Users, Clock, MapPin, Shield,
  Star, Globe, Headphones, FileText, AlertCircle, CheckCircle
} from 'lucide-react'

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const helpCategories = [
    {
      id: 'booking',
      title: 'Booking & Reservations',
      description: 'Manage your bookings and reservations',
      icon: Plane,
      color: 'bg-maroon-primary'
    },
    {
      id: 'checkin',
      title: 'Check-in & Boarding',
      description: 'Online check-in and boarding information',
      icon: CheckCircle,
      color: 'bg-gold-500'
    },
    {
      id: 'baggage',
      title: 'Baggage Information',
      description: 'Baggage allowances and restrictions',
      icon: Luggage,
      color: 'bg-maroon-accent'
    },
    {
      id: 'payment',
      title: 'Payment & Refunds',
      description: 'Payment methods and refund policies',
      icon: CreditCard,
      color: 'bg-gold-600'
    },
    {
      id: 'loyalty',
      title: 'Loyalty Program',
      description: 'RR Airways loyalty benefits and rewards',
      icon: Star,
      color: 'bg-maroon-primary'
    },
    {
      id: 'travel',
      title: 'Travel Information',
      description: 'Travel requirements and guidelines',
      icon: Globe,
      color: 'bg-gold-500'
    }
  ]

  const quickHelp = [
    {
      title: 'Change Flight',
      description: 'Modify your existing booking',
      icon: Plane
    },
    {
      title: 'Check-in Online',
      description: 'Complete your check-in process',
      icon: CheckCircle
    },
    {
      title: 'Baggage Policy',
      description: 'View baggage allowances',
      icon: Luggage
    },
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      icon: Headphones
    }
  ]

  const travelServices = [
    {
      title: 'Travel Assistance',
      description: 'Get help with travel planning, visa requirements, and destination information',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Special Services',
      description: 'Assistance for passengers with special needs, unaccompanied minors, and pet travel',
      image: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Premium Support',
      description: 'Priority assistance for Business and First Class passengers',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ]

  const faqs = [
    {
      question: 'How can I change or cancel my booking?',
      answer: 'You can change or cancel your booking online through our website or mobile app. Go to "Manage Booking" and enter your booking reference and last name. Changes may be subject to fare differences and fees.',
      category: 'booking',
      keywords: ['change', 'cancel', 'booking', 'modify', 'reservation']
    },
    {
      question: 'What is the baggage allowance for my flight?',
      answer: 'Baggage allowances vary by destination and fare type. Economy passengers typically get 23kg checked baggage, while Business and First Class passengers get higher allowances. Check your booking confirmation for specific details.',
      category: 'baggage',
      keywords: ['baggage', 'luggage', 'allowance', 'weight', 'carry-on']
    },
    {
      question: 'When can I check in for my flight?',
      answer: 'Online check-in opens 24 hours before departure for most flights. You can check in via our website, mobile app, or at the airport. We recommend checking in early to secure your preferred seat.',
      category: 'checkin',
      keywords: ['check-in', 'online', 'boarding', 'seat', 'departure']
    },
    {
      question: 'How do I request a refund?',
      answer: 'Refund eligibility depends on your fare type. Flexible fares are generally refundable, while basic fares may have restrictions. Submit refund requests through our website or contact customer service.',
      category: 'payment',
      keywords: ['refund', 'money', 'payment', 'cancel', 'fare']
    },
    {
      question: 'What are the loyalty program benefits?',
      answer: 'RR Airways loyalty members enjoy benefits like priority boarding, lounge access, extra baggage allowance, and earning points for future travel. Benefits increase with tier status.',
      category: 'loyalty',
      keywords: ['loyalty', 'points', 'benefits', 'tier', 'rewards']
    },
    {
      question: 'What travel documents do I need?',
      answer: 'Travel document requirements vary by destination. Generally, you need a valid passport and may require a visa. Check destination-specific requirements on our website or with relevant embassies.',
      category: 'travel',
      keywords: ['passport', 'visa', 'documents', 'travel', 'requirements']
    },
    {
      question: 'How early should I arrive at the airport?',
      answer: 'We recommend arriving 2 hours early for domestic flights and 3 hours early for international flights. This allows time for check-in, security screening, and boarding.',
      category: 'travel',
      keywords: ['airport', 'arrival', 'time', 'early', 'security']
    },
    {
      question: 'Can I select my seat in advance?',
      answer: 'Yes, you can select your seat during booking or later through "Manage Booking". Some seats may have additional fees. Premium seats and exit rows typically require extra payment.',
      category: 'booking',
      keywords: ['seat', 'selection', 'advance', 'premium', 'booking']
    },
    {
      question: 'What meals are available on my flight?',
      answer: 'Meal service varies by flight duration and class. Short flights may offer snacks, while long-haul flights include full meals. Special dietary requirements can be requested during booking.',
      category: 'travel',
      keywords: ['meals', 'food', 'dietary', 'special', 'service']
    },
    {
      question: 'How can I upgrade my seat or class?',
      answer: 'Upgrades can be purchased during booking, through "Manage Booking", or at the airport subject to availability. Loyalty members may receive complimentary upgrades based on tier status.',
      category: 'booking',
      keywords: ['upgrade', 'class', 'business', 'first', 'premium']
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      const results = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  const filteredFAQs = searchQuery && searchResults.length >= 0 
    ? searchResults 
    : selectedCategory === 'all' 
      ? faqs 
      : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[700px] bg-transparent">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: 'url(https://www.evaair.com/en-us/images/PEUA_f0661b_tcm35-93472.jpg)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gold-800">
              How can we help
            </h1>
            
              {/* <p className="text-xl md:text-2xl text-black font-bold mb-6 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need for your journey
              </p>
            */}

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              {/* <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search for help topics, booking issues, or travel information..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-20 py-4 text-lg rounded-xl border-0 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-maroon-primary hover:bg-maroon-accent text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {isSearching ? 'Searching...' : 'Search'}
                </button>
              </form> */}
              
              {/* Search Results Summary */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-gray-200"
                >
                  {isSearching ? (
                    <p>Searching for "{searchQuery}"...</p>
                  ) : (
                    <p>
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                      {searchResults.length > 0 && (
                        <button
                          onClick={() => {
                            setSearchQuery('')
                            setSearchResults([])
                          }}
                          className="ml-2 text-gold-500 hover:text-gold-400 underline"
                        >
                          Clear search
                        </button>
                      )}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Travel Advisory Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-maroon-primary text-white rounded-xl p-6 mb-12"
        >
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-gold-500" />
            <div>
              <h3 className="font-semibold text-gold-500">Travel Advisory</h3>
              <p className="text-gray-200">
                Important updates on travel requirements, health protocols, and flight schedules. 
                <a href="https://usecases.vfirst.com/use-case-encyclopedia/convey-any-travel-guidelines-aviation-whatsapp.php" className="text-gold-500 hover:text-gold-400 ml-2 underline">
                  Click here for details
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center">
            Quick Help
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors">
                  <item.icon className="h-8 w-8 text-maroon-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`card p-6 cursor-pointer hover:shadow-xl transition-all duration-300 group ${
                  selectedCategory === category.id ? 'ring-2 ring-maroon-primary' : ''
                }`}
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
                <ChevronRight className="h-5 w-5 text-gray-400 mt-3 group-hover:text-maroon-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center">
            More for your trip
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {travelServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-maroon-primary hover:text-maroon-accent font-medium">
                    Learn more →
                  </button>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/previews/032/489/094/large_2x/a-women-tourists-waiting-for-scheduled-departure-with-two-suitcases-generative-ai-photo.jpg"
                alt="Customer Service"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2 text-gold-500">How much can I carry?</h3>
                  <p className="text-gray-200">
                    Find out how our different baggage allowances can help you pack for your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* Category Filter */}
          {!searchQuery && (
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-maroon-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Topics
              </button>
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-maroon-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            {filteredFAQs.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try searching with different keywords or browse our categories above
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSearchResults([])
                  }}
                  className="btn-primary"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center">
            Get in touch with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-maroon-primary" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call us</h3>
              <p className="text-gray-600 mb-4">Speak with our customer service team</p>
              <p className="text-maroon-primary font-semibold">+1 (800) 123-4567</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-maroon-primary" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support agents</p>
              {/* <button className="btn-primary">Start Chat</button> */}
            </div>
            
            <div className="card p-6 text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-maroon-primary" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <p className="text-maroon-primary font-semibold">support@rrairways.com</p>
            </div>
          </div>
        </motion.div>

        {/* Live Chat Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="card p-6 bg-gradient-to-r from-maroon-primary to-maroon-accent text-white"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://media.istockphoto.com/id/1485085174/photo/woman-airport-and-passenger-assistant-with-arms-crossed-standing-ready-with-smile-in-faq-help.jpg?s=612x612&w=0&k=20&c=HnIb4LadKwS3j2rRObJ0UiV8Mj4NqTvmK1tVpOoltpc="
                alt="Customer Service Agent"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gold-500">Get help with live chat</h3>
                <p className="text-gray-200">
                  If you still need help, you can get in touch with one of our agents.
                </p>
              </div>
            </div>
            <button className="bg-white text-maroon-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Let's chat
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HelpPage