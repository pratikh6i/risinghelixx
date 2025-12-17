import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Demo mode - simulated auth
    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Demo: Create a mock user
        const mockUser = {
            uid: 'demo-user-' + Date.now(),
            email: email,
            displayName: email.split('@')[0],
        }

        setUser(mockUser)
        setLoading(false)
        return mockUser
    }

    const register = async (email, password, displayName) => {
        setLoading(true)
        setError(null)

        await new Promise(resolve => setTimeout(resolve, 1500))

        const mockUser = {
            uid: 'demo-user-' + Date.now(),
            email: email,
            displayName: displayName || email.split('@')[0],
        }

        setUser(mockUser)
        setLoading(false)
        return mockUser
    }

    const loginWithGoogle = async () => {
        setLoading(true)
        setError(null)

        await new Promise(resolve => setTimeout(resolve, 1000))

        const mockUser = {
            uid: 'google-demo-' + Date.now(),
            email: 'demo@gmail.com',
            displayName: 'Demo User',
        }

        setUser(mockUser)
        setLoading(false)
        return mockUser
    }

    const logout = async () => {
        setUser(null)
    }

    const clearError = () => setError(null)

    const value = {
        user,
        loading,
        error,
        login,
        register,
        loginWithGoogle,
        logout,
        clearError
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        // Return default values if used outside provider
        return {
            user: null,
            loading: false,
            error: null,
            login: async () => { },
            register: async () => { },
            loginWithGoogle: async () => { },
            logout: async () => { },
            clearError: () => { }
        }
    }
    return context
}

export default useAuth
