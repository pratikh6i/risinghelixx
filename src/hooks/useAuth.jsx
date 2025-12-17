import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext(null)

// Get user from localStorage/cookies
const getUserFromStorage = () => {
    try {
        const stored = localStorage.getItem('risinghelixx_current_user')
        if (stored) return JSON.parse(stored)

        // Try cookie
        const cookie = document.cookie.split('; ').find(row => row.startsWith('risinghelixx_user='))
        if (cookie) {
            return JSON.parse(decodeURIComponent(cookie.split('=')[1]))
        }
    } catch (e) {
        console.error('Error getting user:', e)
    }
    return null
}

// Save user to localStorage and cookie
const saveUserToStorage = (user) => {
    try {
        const users = JSON.parse(localStorage.getItem('risinghelixx_users') || '[]')
        const existingIndex = users.findIndex(u => u.email === user.email)

        const userData = {
            ...user,
            lastLogin: new Date().toISOString(),
            purchases: user.purchases || [],
            profileImage: user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff`,
        }

        if (existingIndex >= 0) {
            users[existingIndex] = { ...users[existingIndex], ...userData }
        } else {
            userData.createdAt = new Date().toISOString()
            users.push(userData)
        }

        localStorage.setItem('risinghelixx_users', JSON.stringify(users))
        localStorage.setItem('risinghelixx_current_user', JSON.stringify(userData))

        // Set cookie for 30 days
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()
        document.cookie = `risinghelixx_user=${encodeURIComponent(JSON.stringify(userData))}; expires=${expires}; path=/`

        return userData
    } catch (e) {
        console.error('Error saving user:', e)
        return user
    }
}

// Clear user from storage
const clearUserFromStorage = () => {
    localStorage.removeItem('risinghelixx_current_user')
    document.cookie = 'risinghelixx_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Check for existing session on mount
    useEffect(() => {
        const storedUser = getUserFromStorage()
        if (storedUser) {
            setUser(storedUser)
        }
        setLoading(false)
    }, [])

    const login = async (email, password) => {
        // Check if user exists
        const users = JSON.parse(localStorage.getItem('risinghelixx_users') || '[]')
        const existingUser = users.find(u => u.email === email)

        if (existingUser) {
            const userData = saveUserToStorage(existingUser)
            setUser(userData)
            return userData
        } else {
            // Create new user for demo
            const newUser = {
                id: 'user_' + Date.now(),
                name: email.split('@')[0],
                email,
                authMethod: 'email',
            }
            const userData = saveUserToStorage(newUser)
            setUser(userData)
            return userData
        }
    }

    const register = async (name, email, password) => {
        const newUser = {
            id: 'user_' + Date.now(),
            name,
            email,
            authMethod: 'email',
        }
        const userData = saveUserToStorage(newUser)
        setUser(userData)
        return userData
    }

    const loginWithGoogle = async () => {
        // Simulated Google auth
        const googleUser = {
            id: 'google_' + Date.now(),
            name: 'Google User',
            email: 'user' + Math.floor(Math.random() * 1000) + '@gmail.com',
            authMethod: 'google',
        }
        const userData = saveUserToStorage(googleUser)
        setUser(userData)
        return userData
    }

    const logout = () => {
        clearUserFromStorage()
        setUser(null)
    }

    const updateUser = (updates) => {
        if (user) {
            const updatedUser = saveUserToStorage({ ...user, ...updates })
            setUser(updatedUser)
            return updatedUser
        }
    }

    const addPurchase = (course) => {
        if (user) {
            const purchases = user.purchases || []
            if (!purchases.find(p => p.id === course.id)) {
                purchases.push({
                    ...course,
                    purchasedAt: new Date().toISOString(),
                })
                updateUser({ purchases })
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            loginWithGoogle,
            logout,
            updateUser,
            addPurchase,
            isAuthenticated: !!user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        return {
            user: null,
            loading: false,
            login: async () => { },
            register: async () => { },
            loginWithGoogle: async () => { },
            logout: () => { },
            updateUser: () => { },
            addPurchase: () => { },
            isAuthenticated: false,
        }
    }
    return context
}

export default useAuth
