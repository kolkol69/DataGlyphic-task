import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from './useLocalStorage'

interface AuthContextType {
  isAuthenticated: boolean
  login: (sessionId: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = (sessionId: string) => {
    setUser(sessionId)
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: user != null, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
