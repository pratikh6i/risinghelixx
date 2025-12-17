import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CourseCard from '../components/CourseCard'
import PaymentCalculator from '../components/PaymentCalculator'
import { courses } from '../config/stripe'

// Categories
const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'cloud', name: 'Cloud & DevOps' },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [currency, setCurrency] = useState('GBP')
    const [selectedCourse, setSelectedCourse] = useState(null)

    // Filter courses based on search and category
    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase())

        // For demo, all courses match any category
        const matchesCategory = selectedCategory === 'all' || true

        return matchesSearch && matchesCategory
    })

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
                            <span>100+ Courses Available</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-display font-bold text-dark mb-6"
                        >
                            Explore Our{' '}
                            <span className="gradient-text">Courses</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Find the perfect course to advance your career. Expert-led,
                            industry-recognized, and designed for success.
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
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all text-lg shadow-lg shadow-gray-200/50"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filters & Currency Toggle */}
            <section className="py-8 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-lg z-30">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Categories */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${selectedCategory === category.id
                                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Currency Toggle */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Currency:</span>
                            <div className="flex gap-1 p-1 bg-gray-100 rounded-xl">
                                {['GBP', 'INR'].map((curr) => (
                                    <button
                                        key={curr}
                                        onClick={() => setCurrency(curr)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${currency === curr
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
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Course Cards - 2 columns */}
                        <div className="lg:col-span-2">
                            {filteredCourses.length > 0 ? (
                                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                                    {filteredCourses.map((course) => (
                                        <StaggerItem key={course.id}>
                                            <CourseCard
                                                course={course}
                                                currency={currency}
                                                onSelect={setSelectedCourse}
                                                isSelected={selectedCourse?.id === course.id}
                                            />
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            ) : (
                                <AnimatedSection className="text-center py-16">
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                        <Search className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">No courses found</h3>
                                    <p className="text-gray-500">Try adjusting your search or filters</p>
                                </AnimatedSection>
                            )}
                        </div>

                        {/* Sidebar - Payment Calculator */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-40">
                                <PaymentCalculator />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our learning advisors can help you find the perfect course based on
                            your goals, experience level, and schedule.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </motion.div>
    )
}
