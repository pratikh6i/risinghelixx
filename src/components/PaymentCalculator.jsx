import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    CreditCard,
    CircleDollarSign,
    PoundSterling,
    IndianRupee,
    ChevronDown,
    Loader2,
    CheckCircle2,
    Sparkles
} from 'lucide-react'
import { courses, EXCHANGE_RATE } from '../config/stripe'

export default function PaymentCalculator() {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [currency, setCurrency] = useState('GBP')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    // Calculate price based on currency
    const calculatedPrice = useMemo(() => {
        if (!selectedCourse) return 0
        return currency === 'GBP' ? selectedCourse.priceGBP : selectedCourse.priceINR
    }, [selectedCourse, currency])

    const symbol = currency === 'GBP' ? '£' : '₹'
    const CurrencyIcon = currency === 'GBP' ? PoundSterling : IndianRupee

    const handlePayment = async () => {
        if (!selectedCourse) return

        setIsProcessing(true)

        try {
            // Simulate API call - in production, call your backend to create Stripe session
            await new Promise(resolve => setTimeout(resolve, 2000))

            // In production:
            // const { url } = await createCheckoutSession(selectedCourse.id, currency)
            // window.location.href = url

            alert(`Demo: Would redirect to Stripe checkout for ${selectedCourse.name} - ${symbol}${calculatedPrice.toLocaleString()}`)
        } catch (error) {
            console.error('Payment error:', error)
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6 md:p-8"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <CircleDollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-dark">Payment Calculator</h3>
                    <p className="text-sm text-gray-500">Select course and currency</p>
                </div>
            </div>

            {/* Currency Toggle */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Currency
                </label>
                <div className="flex gap-2">
                    {['GBP', 'INR'].map((curr) => (
                        <motion.button
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${currency === curr
                                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {curr === 'GBP' ? <PoundSterling className="w-4 h-4" /> : <IndianRupee className="w-4 h-4" />}
                            <span>{curr === 'GBP' ? 'British Pound' : 'Indian Rupee'}</span>
                        </motion.button>
                    ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    Exchange rate: £1 ≈ ₹{EXCHANGE_RATE.GBP_TO_INR}
                </p>
            </div>

            {/* Course Selection */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Course
                </label>
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all bg-white"
                    >
                        <span className={selectedCourse ? 'text-dark' : 'text-gray-400'}>
                            {selectedCourse ? selectedCourse.name : 'Choose a course...'}
                        </span>
                        <motion.div
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-10 top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                            >
                                {courses.map((course) => (
                                    <button
                                        key={course.id}
                                        onClick={() => {
                                            setSelectedCourse(course)
                                            setIsDropdownOpen(false)
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${selectedCourse?.id === course.id ? 'bg-primary-50' : ''
                                            }`}
                                    >
                                        <div className="text-left">
                                            <p className="font-medium text-dark">{course.name}</p>
                                            <p className="text-xs text-gray-500">{course.duration}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-primary-600">
                                                {symbol}{(currency === 'GBP' ? course.priceGBP : course.priceINR).toLocaleString()}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Price Display */}
            <AnimatePresence mode="wait">
                {selectedCourse && (
                    <motion.div
                        key={`${selectedCourse.id}-${currency}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="mb-6 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-600">Selected Course</span>
                            <CheckCircle2 className="w-5 h-5 text-accent-500" />
                        </div>
                        <p className="text-lg font-semibold text-dark mb-2">{selectedCourse.name}</p>
                        <div className="flex items-baseline gap-2">
                            <motion.span
                                key={calculatedPrice}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl font-bold gradient-text"
                            >
                                {symbol}{calculatedPrice.toLocaleString()}
                            </motion.span>
                            <span className="text-gray-500 text-sm">/ one-time</span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedCourse.features.slice(0, 3).map((feature) => (
                                <span
                                    key={feature}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-lg text-xs text-gray-600"
                                >
                                    <Sparkles className="w-3 h-3 text-accent-500" />
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Payment Button */}
            <motion.button
                onClick={handlePayment}
                disabled={!selectedCourse || isProcessing}
                whileHover={{ scale: selectedCourse ? 1.02 : 1 }}
                whileTap={{ scale: selectedCourse ? 0.98 : 1 }}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-lg transition-all ${selectedCourse
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
            >
                {isProcessing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <>
                        <CreditCard className="w-5 h-5" />
                        <span>Pay with Stripe</span>
                    </>
                )}
            </motion.button>

            {/* Secure Payment Note */}
            <p className="text-center text-xs text-gray-400 mt-4">
                🔒 Secured by Stripe. 256-bit encryption.
            </p>
        </motion.div>
    )
}
