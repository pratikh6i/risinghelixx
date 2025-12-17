import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, BarChart3, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'

export default function CourseCard({
    course,
    currency = 'GBP',
    onSelect,
    isSelected = false
}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const price = currency === 'GBP' ? course.priceGBP : course.priceINR
    const symbol = currency === 'GBP' ? '£' : '₹'

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`card overflow-hidden cursor-pointer transition-all duration-300 ${isSelected
                    ? 'ring-2 ring-primary-500 border-primary-200'
                    : 'hover:shadow-xl'
                }`}
            onClick={() => onSelect?.(course)}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-dark">
                        {course.level}
                    </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4">
                    <motion.div
                        key={currency}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="px-4 py-2 bg-primary-500 rounded-xl text-white font-bold shadow-lg"
                    >
                        {symbol}{price.toLocaleString()}
                    </motion.div>
                </div>

                {/* Selected Indicator */}
                {isSelected && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 line-clamp-2">
                    {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <BarChart3 className="w-4 h-4" />
                        <span>{course.level}</span>
                    </div>
                </div>

                {/* Expand Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsExpanded(!isExpanded)
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                    <span>{isExpanded ? 'Show less' : 'View features'}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </button>

                {/* Expandable Features */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 mt-4 border-t border-gray-100">
                                <div className="grid gap-2">
                                    {course.features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-2 text-sm text-gray-600"
                                        >
                                            <Sparkles className="w-4 h-4 text-accent-500" />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
