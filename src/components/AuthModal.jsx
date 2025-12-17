import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    X,
    Mail,
    Lock,
    User,
    Eye,
    EyeOff,
    Loader2,
    CheckCircle
} from 'lucide-react'

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
}

// Helper to save user to localStorage
const saveUserToStorage = (user) => {
    const users = JSON.parse(localStorage.getItem('risinghelixx_users') || '[]')
    const existingIndex = users.findIndex(u => u.email === user.email)
    if (existingIndex >= 0) {
        users[existingIndex] = { ...users[existingIndex], ...user, lastLogin: new Date().toISOString() }
    } else {
        users.push({ ...user, createdAt: new Date().toISOString(), lastLogin: new Date().toISOString() })
    }
    localStorage.setItem('risinghelixx_users', JSON.stringify(users))
    localStorage.setItem('risinghelixx_current_user', JSON.stringify(user))

    // Set cookie for 30 days
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()
    document.cookie = `risinghelixx_user=${encodeURIComponent(JSON.stringify(user))}; expires=${expires}; path=/`
}

export default function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            const user = {
                id: 'user_' + Date.now(),
                name: formData.name || formData.email.split('@')[0],
                email: formData.email,
                authMethod: 'email',
            }

            // Save user data
            saveUserToStorage(user)

            setIsSuccess(true)

            setTimeout(() => {
                setIsSuccess(false)
                onClose()
                setFormData({ name: '', email: '', password: '' })
            }, 2000)

        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        setError('')

        try {
            // Simulate Google OAuth
            await new Promise(resolve => setTimeout(resolve, 1000))

            const user = {
                id: 'google_' + Date.now(),
                name: 'Google User',
                email: 'user' + Date.now() + '@gmail.com',
                authMethod: 'google',
            }

            saveUserToStorage(user)

            setIsSuccess(true)

            setTimeout(() => {
                setIsSuccess(false)
                onClose()
            }, 2000)

        } catch (err) {
            setError('Google sign-in failed. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const toggleMode = () => {
        setIsLogin(!isLogin)
        setError('')
        setFormData({ name: '', email: '', password: '' })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                        className="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-3 mb-2">
                                    <img src="/assets/logo.svg" alt="Rising Helixx" className="w-10 h-10" />
                                    <h2 className="text-2xl font-display font-bold">
                                        {isLogin ? 'Welcome Back!' : 'Join Rising Helixx'}
                                    </h2>
                                </div>
                                <p className="text-white/80">
                                    {isLogin
                                        ? 'Sign in to continue your learning journey'
                                        : 'Create an account to start learning today'
                                    }
                                </p>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-accent-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark mb-2">
                                            {isLogin ? 'Welcome back!' : 'Account Created!'}
                                        </h3>
                                        <p className="text-gray-600">Redirecting...</p>
                                    </motion.div>
                                ) : (
                                    <>
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
                                            >
                                                {error}
                                            </motion.div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name Field (Register only) */}
                                            {!isLogin && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Full Name
                                                    </label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            placeholder="John Doe"
                                                            required={!isLogin}
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* Email Field */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="you@example.com"
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Password Field */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Password
                                                </label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        placeholder="••••••••"
                                                        required
                                                        minLength={6}
                                                        className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <motion.button
                                                type="submit"
                                                disabled={isLoading}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full btn-primary py-3 disabled:opacity-50"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                                ) : (
                                                    isLogin ? 'Sign In' : 'Create Account'
                                                )}
                                            </motion.button>
                                        </form>

                                        {/* Divider */}
                                        <div className="relative my-6">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-200" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                            </div>
                                        </div>

                                        {/* Google Sign In */}
                                        <motion.button
                                            type="button"
                                            onClick={handleGoogleSignIn}
                                            disabled={isLoading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                />
                                                <path
                                                    fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                />
                                                <path
                                                    fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                />
                                                <path
                                                    fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                />
                                            </svg>
                                            <span className="font-medium text-gray-700">Google</span>
                                        </motion.button>

                                        {/* Toggle Mode */}
                                        <p className="text-center text-sm text-gray-600 mt-6">
                                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                                            <button
                                                type="button"
                                                onClick={toggleMode}
                                                className="text-primary-600 font-semibold hover:underline"
                                            >
                                                {isLogin ? 'Sign up' : 'Sign in'}
                                            </button>
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
