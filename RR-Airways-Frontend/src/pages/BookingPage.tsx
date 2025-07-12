import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CreditCard, User, Plane, Check } from 'lucide-react'
import { useBookingStore } from '../store/bookingStore'
import SeatMap from '../components/booking/SeatMap'
import toast from 'react-hot-toast'

interface PassengerForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
}

const BookingPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { selectedFlight, createBooking, confirmBooking } = useBookingStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSeat, setSelectedSeat] = useState<string>('')
  const [addOns, setAddOns] = useState({
    meals: [] as string[],
    luggage: 0
  })

  const { register, handleSubmit, formState: { errors } } = useForm<PassengerForm>()

  if (!selectedFlight) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Flight not found
          </h2>
          <button
            onClick={() => navigate('/search')}
            className="btn-primary"
          >
            Back to Search
          </button>
        </div>
      </div>
    )
  }

  const steps = [
    { number: 1, title: 'Passenger Info', icon: User },
    { number: 2, title: 'Seat Selection', icon: Plane },
    { number: 3, title: 'Add-ons & Payment', icon: CreditCard }
  ]

  const onSubmit = (data: PassengerForm) => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (!selectedSeat) {
        toast.error('Please select a seat')
        return
      }
      setCurrentStep(3)
    } else {
      // Create booking
      const booking = {
        flight: selectedFlight,
        passengers: [{
          ...data,
          seat: selectedSeat
        }],
        addOns,
        totalPrice: calculateTotal()
      }
      
      createBooking(booking)
      confirmBooking()
      toast.success('Booking confirmed!')
      navigate('/confirm')
    }
  }

  const calculateTotal = () => {
    let total = selectedFlight.price
    total += addOns.luggage * 50 // $50 per extra bag
    total += addOns.meals.length * 25 // $25 per meal
    return total
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-primary-600 border-primary-600 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flight Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Flight Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">{selectedFlight.departure}</div>
              <div className="text-sm text-gray-600">{selectedFlight.from}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">{selectedFlight.duration}</div>
              <div className="text-xs text-gray-500">
                {selectedFlight.stops === 0 ? 'Non-stop' : `${selectedFlight.stops} stop${selectedFlight.stops > 1 ? 's' : ''}`}
              </div>
            </div>
            <div className="text-right md:text-left">
              <div className="text-2xl font-bold text-gray-900">{selectedFlight.arrival}</div>
              <div className="text-sm text-gray-600">{selectedFlight.to}</div>
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Passenger Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Passenger Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className="input-field"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className="input-field"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    className="input-field"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    {...register('dateOfBirth', { required: 'Date of birth is required' })}
                    className="input-field"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button type="submit" className="btn-primary">
                  Continue to Seat Selection
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Seat Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Select Your Seat</h3>
              
              <SeatMap
                selectedSeat={selectedSeat}
                onSeatSelect={setSelectedSeat}
                flightClass={selectedFlight.class}
              />

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button type="submit" className="btn-primary">
                  Continue to Payment
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Add-ons & Payment */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Add-ons */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Add-ons</h3>
                
                <div className="space-y-6">
                  {/* Meals */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">In-flight Meals (+$25 each)</h4>
                    <div className="space-y-2">
                      {['Vegetarian', 'Chicken', 'Beef', 'Seafood'].map((meal) => (
                        <label key={meal} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={addOns.meals.includes(meal)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAddOns({ ...addOns, meals: [...addOns.meals, meal] })
                              } else {
                                setAddOns({ ...addOns, meals: addOns.meals.filter(m => m !== meal) })
                              }
                            }}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-gray-700">{meal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Luggage */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Extra Luggage (+$50 per bag)</h4>
                    <select
                      value={addOns.luggage}
                      onChange={(e) => setAddOns({ ...addOns, luggage: parseInt(e.target.value) })}
                      className="input-field max-w-xs"
                    >
                      <option value={0}>No extra luggage</option>
                      <option value={1}>1 extra bag</option>
                      <option value={2}>2 extra bags</option>
                      <option value={3}>3 extra bags</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base fare</span>
                    <span>${selectedFlight.price}</span>
                  </div>
                  {addOns.meals.length > 0 && (
                    <div className="flex justify-between">
                      <span>Meals ({addOns.meals.length})</span>
                      <span>${addOns.meals.length * 25}</span>
                    </div>
                  )}
                  {addOns.luggage > 0 && (
                    <div className="flex justify-between">
                      <span>Extra luggage ({addOns.luggage})</span>
                      <span>${addOns.luggage * 50}</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    This is a demo booking. No actual payment will be processed.
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button type="submit" className="btn-primary">
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  )
}

export default BookingPage