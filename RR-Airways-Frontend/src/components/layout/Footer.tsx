import React from 'react'
import { Link } from 'react-router-dom'
import { Plane, Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-maroon-primary p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">RR Airways</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience the world with RR Airways. Premium service, global destinations, 
              and unforgettable journeys await you.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/RaviRajanolla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gray-700 transform hover:scale-110 hover:-translate-y-1"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
              >
                <Github className="h-5 w-5 transition-transform duration-200" />
              </a>

              <a 
                href="https://www.linkedin.com/in/contactravir/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gray-700 transform hover:scale-110 hover:-translate-y-1"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-200" />
              </a>

              <a 
                href="#" 
                className="social-icon text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gray-700 transform hover:scale-110 hover:-translate-y-1"
                title="Instagram Profile"
                aria-label="Visit Instagram Profile"
              >
                <Instagram className="h-5 w-5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Book Flight
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Check-in
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Baggage Info
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Travel Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RR Airways. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
