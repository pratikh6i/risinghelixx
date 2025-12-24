import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AdvisorCard({ advisor }) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // On mobile: flip is controlled by click only
    // On desktop: flip is controlled by hover OR click (click toggles a "locked" state)
    const showFlipped = isMobile ? isFlipped : (isFlipped || isHovered)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/4] cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={handleClick}
        >
            <motion.div
                className="relative w-full h-full"
                initial={false}
                animate={{ rotateY: showFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d'
                }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)'
                    }}
                >
                    <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

                    {/* Front Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">
                            {advisor.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                            {advisor.role}
                        </p>
                    </div>

                    {/* Flip Hint - shows tap on mobile, hover/click on desktop */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                        <span className="text-white text-xs font-medium">
                            {isMobile ? 'Tap to flip' : 'Click or hover'}
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-6 flex flex-col"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        WebkitTransform: 'rotateY(180deg)'
                    }}
                >
                    {/* Back Content */}
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                            {advisor.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium mb-4">
                            {advisor.role}
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            {advisor.bio}
                        </p>
                    </div>

                    {/* Tap hint on mobile to flip back */}
                    {isMobile && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                            <span className="text-white text-xs font-medium">Tap to flip back</span>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

