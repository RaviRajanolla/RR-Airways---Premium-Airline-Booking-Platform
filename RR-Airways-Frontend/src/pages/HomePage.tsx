import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen homepage-layout">
      {/* Hero Section - Clean and focused */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/022/456/068/non_2x/white-passenger-airplane-with-air-stairs-at-the-airport-apron-on-the-background-of-high-scenic-mountains-free-photo.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content - Centered and prominent */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-display font-bold text-balance leading-none">
              <span className="block mb-4">Experience the World</span>
              <span className="block text-gold-500">with RR Airways</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto text-balance leading-relaxed font-light">
              Premium service, global destinations, and unforgettable journeys await you
            </p>
            
            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <button
                onClick={() => navigate('/book')}
                className="bg-maroon-primary hover:bg-maroon-accent text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
              >
                Book Your Flight
              </button>
              <button
                onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 border border-white/30 text-lg"
              >
                Discover More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              Why Choose RR Airways?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience premium air travel with our world-class service and amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Premium Comfort',
                description: 'Spacious seats, premium amenities, and exceptional in-flight service for the ultimate travel experience',
                image: 'https://qph.cf2.quoracdn.net/main-qimg-ee04485873b304855b0d62913c3ba2fc-pjlq'
              },
              {
                title: 'Global Network',
                description: 'Fly to over 150 destinations worldwide with our extensive route network and strategic partnerships',
                image: 'https://www.biletik.aero/upload/medialibrary/d8a/d8a98895ddb06ad57626dcc300565ce3.JPG'
              },
              {
                title: 'Award-Winning Service',
                description: 'Recognized globally for our exceptional customer service, hospitality, and commitment to excellence',
                image: 'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2018/07/19/1257171-1541063078.jpg?itok=mux9RRGX'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover amazing places around the world with our extensive route network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: 'London',
                country: 'United Kingdom',
                image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                price: 'from $899'
              },
              {
                city: 'Tokyo',
                country: 'Japan',
                image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                price: 'from $1,299'
              },
              {
                city: 'Paris',
                country: 'France',
                image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                price: 'from $799'
              },
              {
                city: 'Dubai',
                country: 'UAE',
                image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                price: 'from $1,199'
              }
            ].map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => navigate('/book')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.city}</h3>
                    <p className="text-sm text-gray-200">{destination.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Flights</span>
                    <span className="text-maroon-primary font-semibold">{destination.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage