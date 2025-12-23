import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

// Helper function to format path to title
const formatPathToTitle = (path) => {
    const segment = path.split('/').filter(Boolean).pop() || 'Page'
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export default function ComingSoon() {
    const location = useLocation()
    const pageTitle = formatPathToTitle(location.pathname)

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
                </div>
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="max-w-xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Coming Soon</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
                    >
                        {pageTitle}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-white/60 mb-12"
                    >
                        We're crafting something special. Stay tuned.
                    </motion.p>

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
