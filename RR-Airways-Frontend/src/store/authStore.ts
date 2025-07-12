import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// import axios from "axios";

// const API = import.meta.env.VITE_API_BASE_URL;

// export const loginUser = async (credentials) => {
//   const response = await axios.post(`${API}/auth/login`, credentials);
//   return response.data; // { token: "...jwt..." }
// };


interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin' | 'agent' | 'super_admin'
  loyaltyTier: 'silver' | 'gold' | 'platinum'
  points: number
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<boolean>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock authentication
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: email.includes('admin') ? 'admin' : 'user',
          loyaltyTier: 'gold',
          points: 15420
        }
        
        const mockToken = 'mock-jwt-token-' + Date.now()
        
        set({
          user: mockUser,
          token: mockToken,
          isAuthenticated: true
        })
        
        return true
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false
        })
      },

      register: async (email: string, password: string, name: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const mockUser: User = {
          id: Date.now().toString(),
          email,
          name,
          role: 'user',
          loyaltyTier: 'silver',
          points: 0
        }
        
        const mockToken = 'mock-jwt-token-' + Date.now()
        
        set({
          user: mockUser,
          token: mockToken,
          isAuthenticated: true
        })
        
        return true
      }
    }),
    {
      name: 'auth-storage',
    }
  )
)