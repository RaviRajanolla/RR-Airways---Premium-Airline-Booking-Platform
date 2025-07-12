import React from 'react'
import { motion } from 'framer-motion'

interface SeatMapProps {
  selectedSeat: string
  onSeatSelect: (seat: string) => void
  flightClass: 'economy' | 'business' | 'first'
}

const SeatMap: React.FC<SeatMapProps> = ({ selectedSeat, onSeatSelect, flightClass }) => {
  // Generate seat layout based on class
  const getSeatLayout = () => {
    switch (flightClass) {
      case 'first':
        return {
          rows: 4,
          seatsPerRow: ['A', 'B', '', 'E', 'F'],
          seatWidth: 'w-12 h-12'
        }
      case 'business':
        return {
          rows: 8,
          seatsPerRow: ['A', 'B', 'C', '', 'D', 'E', 'F'],
          seatWidth: 'w-10 h-10'
        }
      default:
        return {
          rows: 20,
          seatsPerRow: ['A', 'B', 'C', '', 'D', 'E', 'F'],
          seatWidth: 'w-8 h-8'
        }
    }
  }

  const layout = getSeatLayout()
  const occupiedSeats = ['1A', '1B', '3C', '5D', '7E', '9F', '12A', '15C'] // Mock occupied seats

  const getSeatStatus = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return 'occupied'
    if (selectedSeat === seatId) return 'selected'
    return 'available'
  }

  const getSeatColor = (status: string) => {
    switch (status) {
      case 'occupied':
        return 'bg-red-500 cursor-not-allowed'
      case 'selected':
        return 'bg-maroon-primary text-white'
      case 'available':
        return 'bg-gray-200 hover:bg-gold-100 cursor-pointer'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Aircraft Front */}
      <div className="text-center mb-6">
        <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-t-full">
          Front of Aircraft
        </div>
      </div>

      {/* Seat Map */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-2">
          {Array.from({ length: layout.rows }, (_, rowIndex) => {
            const rowNumber = rowIndex + 1
            return (
              <motion.div
                key={rowNumber}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                className="flex items-center justify-center space-x-2"
              >
                {/* Row Number */}
                <div className="w-8 text-center text-sm font-medium text-gray-600">
                  {rowNumber}
                </div>

                {/* Seats */}
                <div className="flex space-x-1">
                  {layout.seatsPerRow.map((seatLetter, seatIndex) => {
                    if (seatLetter === '') {
                      return <div key={seatIndex} className="w-4" /> // Aisle space
                    }

                    const seatId = `${rowNumber}${seatLetter}`
                    const status = getSeatStatus(seatId)

                    return (
                      <button
                        key={seatId}
                        onClick={() => {
                          if (status === 'available') {
                            onSeatSelect(seatId)
                          }
                        }}
                        disabled={status === 'occupied'}
                        className={`
                          ${layout.seatWidth} 
                          ${getSeatColor(status)}
                          rounded-lg flex items-center justify-center text-xs font-medium
                          transition-all duration-200 transform hover:scale-105
                          ${status === 'occupied' ? 'opacity-50' : ''}
                        `}
                        title={`Seat ${seatId} - ${status}`}
                      >
                        {seatLetter}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-maroon-primary rounded"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span>Occupied</span>
        </div>
      </div>

      {selectedSeat && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gold-50 border border-gold-200 rounded-lg text-center"
        >
          <p className="text-maroon-primary">
            Selected seat: <span className="font-semibold">{selectedSeat}</span>
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default SeatMap