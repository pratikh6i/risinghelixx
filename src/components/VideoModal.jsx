import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function VideoModal({ isOpen, onClose, videoId = 'jmoPo11ktN4' }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-5xl aspect-video bg-dark rounded-2xl overflow-hidden shadow-2xl">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute -top-12 right-0 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/80 hover:text-white transition-colors z-10"
                                aria-label="Close video"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* YouTube Embed */}
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title="Rising Helixx Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
