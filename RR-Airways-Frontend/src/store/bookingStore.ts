import { create } from 'zustand'

export interface Flight {
  id: string
  airline: string
  aircraft: string
  from: string
  to: string
  departure: string
  arrival: string
  duration: string
  stops: number
  class: 'economy' | 'business' | 'first'
  price: number
  availableSeats: number
}

export interface SearchParams {
  from: string
  to: string
  departureDate: string
  returnDate?: string
  passengers: number
  class: 'economy' | 'business' | 'first'
  tripType: 'one-way' | 'round-trip' | 'multi-city'
}

export interface Booking {
  id: string
  flight: Flight
  passengers: Array<{
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    seat?: string
  }>
  addOns: {
    meals: string[]
    luggage: number
  }
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled'
  bookingDate: string
}

interface BookingState {
  searchParams: SearchParams | null
  searchResults: Flight[]
  selectedFlight: Flight | null
  currentBooking: Booking | null
  bookingHistory: Booking[]
  setSearchParams: (params: SearchParams) => void
  setSearchResults: (flights: Flight[]) => void
  setSelectedFlight: (flight: Flight) => void
  createBooking: (booking: Omit<Booking, 'id' | 'bookingDate' | 'status'>) => void
  confirmBooking: () => void
}

export const useBookingStore = create<BookingState>((set, get) => ({
  searchParams: null,
  searchResults: [],
  selectedFlight: null,
  currentBooking: null,
  bookingHistory: [],

  setSearchParams: (params) => set({ searchParams: params }),
  
  setSearchResults: (flights) => set({ searchResults: flights }),
  
  setSelectedFlight: (flight) => set({ selectedFlight: flight }),
  
  createBooking: (bookingData) => {
    const booking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      bookingDate: new Date().toISOString(),
      status: 'pending'
    }
    set({ currentBooking: booking })
  },
  
  confirmBooking: () => {
    const { currentBooking, bookingHistory } = get()
    if (currentBooking) {
      const confirmedBooking = { ...currentBooking, status: 'confirmed' as const }
      set({
        currentBooking: confirmedBooking,
        bookingHistory: [...bookingHistory, confirmedBooking]
      })
    }
  }
}))