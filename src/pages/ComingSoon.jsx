import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
    Construction,
    Rocket,
    Coffee,
    ArrowLeft,
    Sparkles,
    Clock
} from 'lucide-react'

const funnyMessages = {
    '/careers': {
        emoji: '👷',
        title: 'Careers',
        subtitle: 'We\'re Building Something Amazing',
        message: 'Our HR team is still deciding if "Professional Snack Taster" is a valid job title. Check back soon!',
    },
    '/press': {
        emoji: '📰',
        title: 'Press Room',
        subtitle: 'Headlines Loading...',
        message: 'Our press releases are currently being reviewed by our team of highly trained carrier pigeons. Stay tuned!',
    },
    '/blog': {
        emoji: '✍️',
        title: 'Blog',
        subtitle: 'Writers at Work',
        message: 'Our content team is fueled by coffee and determination. Great articles brewing!',
    },
    '/popular': {
        emoji: '🔥',
        title: 'Popular Courses',
        subtitle: 'Trending Soon',
        message: 'These courses are so hot, we\'re still installing fire extinguishers. Coming soon!',
    },
    '/new-releases': {
        emoji: '🆕',
        title: 'New Releases',
        subtitle: 'Fresh Content Incoming',
        message: 'Our latest courses are getting their final polish. Think of it as the "new course smell."',
    },
    '/help': {
        emoji: '🆘',
        title: 'Help Center',
        subtitle: 'Support Squad Assembling',
        message: 'Our support heroes are training to answer your questions at superhuman speed!',
    },
    '/privacy': {
        emoji: '🔒',
        title: 'Privacy Policy',
        subtitle: 'Legal Magic in Progress',
        message: 'Our lawyers are making sure this is both comprehensive AND readable. That\'s the real challenge!',
    },
    '/terms': {
        emoji: '📜',
        title: 'Terms of Service',
        subtitle: 'The Fine Print',
        message: 'We\'re writing terms that won\'t put you to sleep. Revolutionary, we know!',
    },
    default: {
        emoji: '🚧',
        title: 'Coming Soon',
        subtitle: 'Under Construction',
        message: 'Our team of highly caffeinated developers is working on this. Check back soon!',
    }
}

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I have a question about Rising Helixx.'

export default function ComingSoon() {
    const location = useLocation()
    const pageData = funnyMessages[location.pathname] || funnyMessages.default
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Animated Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="text-8xl mb-8"
                    >
                        {pageData.emoji}
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm font-medium mb-6"
                    >
                        <Clock className="w-4 h-4" />
                        <span>Coming Soon</span>
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-display font-bold text-dark mb-4"
                    >
                        {pageData.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl text-gray-600 mb-6"
                    >
                        {pageData.subtitle}
                    </motion.h2>

                    {/* Message */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-500 mb-10 max-w-md mx-auto"
                    >
                        {pageData.message}
                    </motion.p>

                    {/* Fun Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center gap-4 mb-10"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        >
                            <Construction className="w-8 h-8 text-primary-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        >
                            <Coffee className="w-8 h-8 text-secondary-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        >
                            <Rocket className="w-8 h-8 text-accent-500" />
                        </motion.div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 inline" />
                                Back to Home
                            </motion.button>
                        </Link>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                            >
                                Chat with Us
                            </motion.button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
