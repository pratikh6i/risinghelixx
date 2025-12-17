import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen, Code, Calculator, ArrowRight, School, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { pythonCourses, mathCourses, keyStages, formatPrice } from '../config/stripe'

// Course type tabs
const courseTabs = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'python', name: 'Python', icon: Code },
    { id: 'math', name: 'Math & SAT', icon: Calculator },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I need help choosing the right Rising Helixx course for my child.'

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [selectedKeyStage, setSelectedKeyStage] = useState('all')
    const [currency, setCurrency] = useState('INR')

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    // Get courses based on type
    const allCourses = useMemo(() => {
        if (selectedType === 'python') return pythonCourses
        if (selectedType === 'math') return mathCourses
        return [...pythonCourses, ...mathCourses]
    }, [selectedType])

    // Filter courses based on search and key stage
    const filteredCourses = useMemo(() => {
        return allCourses.filter((course) => {
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                course.name.toLowerCase().includes(searchLower) ||
                course.description.toLowerCase().includes(searchLower) ||
                course.ageRange.toLowerCase().includes(searchLower)

            const matchesKeyStage = selectedKeyStage === 'all' ||
                course.keyStage === selectedKeyStage ||
                course.keyStage?.includes(selectedKeyStage)

            return matchesSearch && matchesKeyStage
        })
    }, [allCourses, searchQuery, selectedKeyStage])

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6"
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>{pythonCourses.length + mathCourses.length} Courses for Grades 1-11</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-display font-bold text-dark mb-6"
                        >
                            <span className="gradient-text">Python</span> & {' '}
                            <span className="gradient-text">Math</span> Courses
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Age-appropriate courses from Key Stage 1 to 4.
                            Learn coding and ace your SAT Math scores.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative max-w-xl mx-auto"
                        >
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by course name, age group..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all text-lg shadow-lg shadow-gray-200/50"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 border-b border-gray-100 sticky top-20 bg-white/90 backdrop-blur-lg z-30">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        {/* Course Type Tabs */}
                        <div className="flex items-center gap-2">
                            {courseTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedType(prev => prev === tab.id && tab.id !== 'all' ? 'all' : tab.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${selectedType === tab.id
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Key Stage Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Key Stage:</span>
                            <select
                                value={selectedKeyStage}
                                onChange={(e) => setSelectedKeyStage(e.target.value)}
                                className="px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none"
                            >
                                <option value="all">All Stages</option>
                                {keyStages.map((stage) => (
                                    <option key={stage.id} value={stage.id}>
                                        {stage.name} ({stage.grades})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Currency Toggle */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Currency:</span>
                            <div className="flex gap-1 p-1 bg-gray-100 rounded-xl">
                                {['INR', 'GBP'].map((curr) => (
                                    <button
                                        key={curr}
                                        onClick={() => setCurrency(curr)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currency === curr
                                            ? 'bg-white text-primary-600 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {curr === 'GBP' ? '£ GBP' : '₹ INR'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-gray-500">
                            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                            {searchQuery && <span> for "{searchQuery}"</span>}
                        </p>
                    </div>

                    {filteredCourses.length > 0 ? (
                        <div key={`${selectedType}-${selectedKeyStage}-${searchQuery}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    whileHover={{ y: -10 }}
                                    className={`card overflow-hidden group h-full flex flex-col ${course.popular ? 'ring-2 ring-primary-500' : ''}`}
                                >
                                    {course.popular && (
                                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center text-sm font-bold py-2">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color}`}>
                                            {course.badge}
                                        </div>
                                        {course.isSubscription && (
                                            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white text-primary-600">
                                                Monthly
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-dark mb-1">{course.name}</h3>
                                        <p className="text-sm text-primary-600 font-medium mb-2">{course.subtitle}</p>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>

                                        {/* Course Meta */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span>{course.ageRange}</span>
                                            <span>•</span>
                                            <span>{course.level}</span>
                                            {course.duration && (
                                                <>
                                                    <span>•</span>
                                                    <span>{course.duration}</span>
                                                </>
                                            )}
                                        </div>

                                        {/* Features Preview */}
                                        <ul className="space-y-2 mb-6 flex-grow">
                                            {course.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Price & CTA */}
                                        <div className="mt-auto">
                                            <div className="flex items-baseline gap-2 mb-4">
                                                <span className="text-3xl font-bold text-primary-600">
                                                    {formatPrice(course.priceGBP, course.priceINR, currency)}
                                                </span>
                                                {course.isSubscription && (
                                                    <span className="text-gray-400">/month</span>
                                                )}
                                            </div>
                                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                                <button className="w-full btn-primary">
                                                    {course.isSubscription ? 'Subscribe Now' : 'Enroll Now'}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <AnimatedSection className="text-center py-16">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                <Search className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">No courses found</h3>
                            <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedType('all')
                                    setSelectedKeyStage('all')
                                }}
                                className="text-primary-600 font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </AnimatedSection>
                    )}
                </div>
            </section>

            {/* School CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <School className="w-16 h-16 mx-auto mb-6 text-primary-500" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                            School or Institution?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Get up to 25% off with bulk enrollment. Dedicated dashboards,
                            progress tracking, and curriculum alignment for your school.
                        </p>
                        <Link to="/for-schools">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4"
                            >
                                School Partnership
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </motion.div>
    )
}
