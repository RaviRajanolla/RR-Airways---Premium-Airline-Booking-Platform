import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, Info, CheckCircle, Clock, MapPin, Plane, Shield, Heart, FileText, ExternalLink, ArrowLeft, Calendar, Thermometer, VenetianMask as Mask, Syringe, Globe, Users, Phone, Mail } from 'lucide-react'

const TravelAdvisoryPage = () => {
  const navigate = useNavigate()
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const advisories = [
    {
      id: 1,
      title: 'COVID-19 Travel Requirements Update',
      category: 'health',
      region: 'global',
      severity: 'high',
      lastUpdated: '2025-01-15',
      summary: 'Updated health protocols and vaccination requirements for international travel',
      details: 'All passengers must present valid vaccination certificates or negative PCR tests taken within 72 hours of departure. Mask wearing is mandatory in all airport terminals and aircraft.',
      affectedRoutes: ['All International Routes'],
      icon: Mask,
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Weather Disruptions - European Routes',
      category: 'weather',
      region: 'europe',
      severity: 'medium',
      lastUpdated: '2025-01-14',
      summary: 'Severe winter storms affecting flights to/from major European cities',
      details: 'Heavy snowfall and strong winds are causing delays and cancellations across European airports. Passengers are advised to check flight status before traveling to the airport.',
      affectedRoutes: ['London', 'Paris', 'Amsterdam', 'Frankfurt', 'Rome'],
      icon: Thermometer,
      color: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'New Visa Requirements - UAE',
      category: 'documentation',
      region: 'middle-east',
      severity: 'medium',
      lastUpdated: '2025-01-13',
      summary: 'Updated visa requirements for travelers to United Arab Emirates',
      details: 'New electronic visa system implemented. Travelers must apply online at least 48 hours before departure. Transit passengers with layovers over 8 hours require transit visas.',
      affectedRoutes: ['Dubai', 'Abu Dhabi'],
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Airport Security Enhancement',
      category: 'security',
      region: 'global',
      severity: 'low',
      lastUpdated: '2025-01-12',
      summary: 'Enhanced security screening procedures at all airports',
      details: 'Additional security measures have been implemented. Passengers should arrive 30 minutes earlier than usual. Electronic devices larger than smartphones must be removed from carry-on bags.',
      affectedRoutes: ['All Routes'],
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      id: 5,
      title: 'Baggage Handling Delays - Asian Routes',
      category: 'operations',
      region: 'asia',
      severity: 'medium',
      lastUpdated: '2025-01-11',
      summary: 'Temporary baggage handling delays at major Asian airports',
      details: 'Due to increased passenger volume and staff shortages, baggage delivery may be delayed by 2-4 hours. Passengers are advised to pack essential items in carry-on luggage.',
      affectedRoutes: ['Tokyo', 'Singapore', 'Hong Kong', 'Bangkok'],
      icon: Clock,
      color: 'bg-yellow-500'
    }
  ]

  const healthProtocols = [
    {
      title: 'Vaccination Requirements',
      description: 'Valid COVID-19 vaccination certificate required for most international destinations',
      icon: Syringe,
      details: ['Fully vaccinated (2 doses + booster recommended)', 'WHO-approved vaccines accepted', 'Digital or physical certificates accepted']
    },
    {
      title: 'Testing Requirements',
      description: 'PCR or Antigen tests may be required based on destination',
      icon: Heart,
      details: ['PCR test within 72 hours', 'Rapid antigen test within 24 hours', 'Some destinations accept self-tests']
    },
    {
      title: 'Health Screening',
      description: 'Temperature checks and health declarations at airports',
      icon: Thermometer,
      details: ['Contactless temperature screening', 'Health declaration forms', 'Symptom monitoring apps']
    },
    {
      title: 'Mask Requirements',
      description: 'Face masks mandatory in airports and aircraft',
      icon: Mask,
      details: ['Medical or N95 masks recommended', 'Cloth masks acceptable', 'Masks required throughout journey']
    }
  ]

  const emergencyContacts = [
    {
      region: 'Global',
      phone: '+1-800-RR-AIRWAYS',
      email: 'emergency@rrairways.com',
      hours: '24/7'
    },
    {
      region: 'Asia Pacific',
      phone: '+65-6542-1234',
      email: 'apac-support@rrairways.com',
      hours: '24/7'
    },
    {
      region: 'Europe',
      phone: '+44-20-7946-0958',
      email: 'europe-support@rrairways.com',
      hours: '24/7'
    },
    {
      region: 'Americas',
      phone: '+1-555-123-4567',
      email: 'americas-support@rrairways.com',
      hours: '24/7'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'health', name: 'Health & Safety', icon: Heart },
    { id: 'weather', name: 'Weather', icon: Thermometer },
    { id: 'documentation', name: 'Documentation', icon: FileText },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'operations', name: 'Operations', icon: Plane }
  ]

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'global', name: 'Global' },
    { id: 'asia', name: 'Asia Pacific' },
    { id: 'europe', name: 'Europe' },
    { id: 'americas', name: 'Americas' },
    { id: 'middle-east', name: 'Middle East' },
    { id: 'africa', name: 'Africa' }
  ]

  const filteredAdvisories = advisories.filter(advisory => {
    const categoryMatch = selectedCategory === 'all' || advisory.category === selectedCategory
    const regionMatch = selectedRegion === 'all' || advisory.region === selectedRegion
    return categoryMatch && regionMatch
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-maroon-primary to-maroon-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gold-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 p-3 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-display font-bold">Travel Advisory Center</h1>
                <p className="text-xl text-gray-200">Stay informed with the latest travel updates and requirements</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Info className="h-5 w-5 text-gold-200" />
                <p className="text-gray-200">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="card p-6 text-center">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {advisories.filter(a => a.severity === 'high').length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {advisories.filter(a => a.severity === 'medium').length}
            </div>
            <div className="text-sm text-gray-600">Medium Priority</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {advisories.filter(a => a.severity === 'low').length}
            </div>
            <div className="text-sm text-gray-600">Low Priority</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">150+</div>
            <div className="text-sm text-gray-600">Destinations Monitored</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Advisories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-maroon-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="input-field"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Current Advisories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Current Travel Advisories</h2>
          
          <div className="space-y-6">
            {filteredAdvisories.map((advisory, index) => (
              <motion.div
                key={advisory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${advisory.color} p-3 rounded-lg`}>
                    <advisory.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{advisory.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Updated: {new Date(advisory.lastUpdated).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="capitalize">{advisory.region}</span>
                          </div>
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(advisory.severity)}`}>
                        {advisory.severity.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{advisory.summary}</p>
                    <p className="text-gray-600 text-sm mb-4">{advisory.details}</p>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Affected Routes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {advisory.affectedRoutes.map((route, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Health & Safety Protocols</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-maroon-primary p-3 rounded-lg">
                    <protocol.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{protocol.title}</h3>
                    <p className="text-gray-600 mb-4">{protocol.description}</p>
                    <ul className="space-y-1">
                      {protocol.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Emergency Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h3 className="font-semibold text-gray-900 mb-4">{contact.region}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-maroon-primary" />
                    <a href={`tel:${contact.phone}`} className="text-maroon-primary hover:text-maroon-accent">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-maroon-primary" />
                    <a href={`mailto:${contact.email}`} className="text-maroon-primary hover:text-maroon-accent text-sm">
                      {contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-600">{contact.hours}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Useful Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-maroon-primary" />
              <div>
                <div className="font-medium text-gray-900">WHO Travel Advice</div>
                <div className="text-sm text-gray-600">Official health guidelines</div>
              </div>
            </a>
            
            <a
              href="https://www.iatatravelcentre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-maroon-primary" />
              <div>
                <div className="font-medium text-gray-900">IATA Travel Centre</div>
                <div className="text-sm text-gray-600">Travel requirements by destination</div>
              </div>
            </a>
            
            <button
              onClick={() => navigate('/help')}
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <Users className="h-5 w-5 text-maroon-primary" />
              <div>
                <div className="font-medium text-gray-900">Customer Support</div>
                <div className="text-sm text-gray-600">Get help with your travel</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TravelAdvisoryPage