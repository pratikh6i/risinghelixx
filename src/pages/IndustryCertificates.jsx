import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Clock, ArrowLeft, Bell } from 'lucide-react'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about Rising Helixx Industry Certificates. Please notify me when it launches!'

export default function IndustryCertificates() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm font-medium mb-8 shadow-lg shadow-primary-500/25"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Coming Soon</span>
                        <Clock className="w-4 h-4" />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-6"
                    >
                        Industry{' '}
                        <span className="gradient-text">Certificates</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-4"
                    >
                        Something <span className="font-bold text-primary-600">extraordinary</span> is brewing.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-500 mb-10"
                    >
                        We're partnering with world-class universities to bring you
                        <span className="font-semibold text-secondary-600"> globally recognized certifications</span>.
                    </motion.p>

                    {/* Launch Date */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="inline-flex items-center gap-3 mb-10 px-6 py-3 bg-dark/5 rounded-2xl"
                    >
                        <span className="animate-pulse text-primary-500">●</span>
                        <span className="font-mono text-dark font-medium">Launching Q1 2026</span>
                        <span className="animate-pulse text-secondary-500">●</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4"
                            >
                                <Bell className="w-5 h-5 mr-2 inline" />
                                Notify Me
                            </motion.button>
                        </a>
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary text-lg px-8 py-4"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2 inline" />
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-6xl"
                >
                    🚀
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
