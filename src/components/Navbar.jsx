import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, User, ShoppingBag } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.jsx'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Advisory Board', path: '/advisory-board' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Industry Certificates', path: '/industry-certificates' }, // Temporarily hidden
]

export default function Navbar({ onLoginClick }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const location = useLocation()
    const { user, logout, isAuthenticated } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsProfileOpen(false)
    }, [location])

    const handleLogout = () => {
        logout()
        setIsProfileOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src="/assets/logo.svg"
                                    alt="Rising Helixx Logo"
                                    className="w-10 h-10"
                                />
                            </motion.div>
                            <span className="text-xl font-display font-bold text-dark group-hover:text-primary-600 transition-colors">
                                Rising Helixx
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons / User Profile */}
                        <div className="hidden md:flex items-center gap-3">
                            {isAuthenticated && user ? (
                                <div className="relative">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors min-h-[44px]"
                                        aria-label="Open user profile menu"
                                        aria-expanded={isProfileOpen}
                                    >
                                        <img
                                            src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff`}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full object-cover border-2 border-primary-500"
                                        />
                                        <span className="text-sm font-medium text-gray-700 max-w-24 truncate">
                                            {user.name}
                                        </span>
                                    </motion.button>

                                    {/* Profile Dropdown */}
                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                                            >
                                                {/* User Info */}
                                                <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-gray-100">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff`}
                                                            alt={user.name}
                                                            className="w-12 h-12 rounded-full object-cover"
                                                        />
                                                        <div>
                                                            <p className="font-semibold text-dark">{user.name}</p>
                                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Menu Items */}
                                                <div className="p-2">
                                                    <Link
                                                        to="/profile"
                                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                                    >
                                                        <User className="w-4 h-4" />
                                                        <span className="text-sm">My Profile</span>
                                                    </Link>
                                                    <Link
                                                        to="/courses"
                                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                                    >
                                                        <ShoppingBag className="w-4 h-4" />
                                                        <span className="text-sm">My Purchases ({user.purchases?.length || 0})</span>
                                                    </Link>
                                                </div>

                                                {/* Logout */}
                                                <div className="p-2 border-t border-gray-100">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        <span className="text-sm">Logout</span>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary text-sm"
                                    >
                                        Enquire Now
                                    </motion.button>
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl lg:hidden"
                    >
                        <div className="container-custom py-6">
                            <div className="flex flex-col gap-2">
                                {/* User info if logged in */}
                                {isAuthenticated && user && (
                                    <div className="flex items-center gap-3 p-4 mb-2 bg-primary-50 rounded-xl">
                                        <img
                                            src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff`}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-dark">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                )}

                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                                                ? 'bg-primary-50 text-primary-600'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-4 mt-2 border-t border-gray-100"
                                >
                                    {isAuthenticated ? (
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-3 rounded-xl text-red-600 bg-red-50 font-medium"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link to="/contact" className="w-full">
                                            <button className="w-full btn-primary">
                                                Enquire Now
                                            </button>
                                        </Link>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
