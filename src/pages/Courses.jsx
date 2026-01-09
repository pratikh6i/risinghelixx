import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, Code, Calculator, ArrowRight, School, CheckCircle2, Radio, Users, Sparkles, Zap, Video, MessageCircle, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { pythonCourses, mathCourses, roboticsCourses, keyStages } from '../config/stripe'

// Course type tabs
const courseTabs = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'python', name: 'Python', icon: Code },
    { id: 'sat', name: 'SAT Maths', icon: Calculator },
    { id: 'robotics', name: 'Robotics', icon: Cpu },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

// Live class highlights
const liveFeatures = [
    {
        icon: Radio,
        title: 'Real-Time Learning',
        description: 'Join live sessions with expert instructors - not boring recorded videos',
        color: 'from-red-500 to-pink-500',
    },
    {
        icon: MessageCircle,
        title: 'Instant Doubt Clearing',
        description: 'Ask questions and get answers on the spot - no waiting around',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Users,
        title: 'Interactive Sessions',
        description: 'Learn with peers, collaborate on projects, build connections',
        color: 'from-purple-500 to-indigo-500',
    },
    {
        icon: Sparkles,
        title: 'Personalized Attention',
        description: 'Small batch sizes mean you actually matter to your instructor',
        color: 'from-amber-500 to-orange-500',
    },
]

const WHATSAPP_NUMBER = '919270211791'
const WHATSAPP_MESSAGE = 'Hi! I need help choosing the right Rising Helixx course for my child.'

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [selectedKeyStage, setSelectedKeyStage] = useState('all')

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    // Get courses based on type
    const allCourses = useMemo(() => {
        if (selectedType === 'python') return pythonCourses
        if (selectedType === 'sat') return mathCourses
        if (selectedType === 'robotics') return roboticsCourses
        return [...pythonCourses, ...mathCourses, ...roboticsCourses]
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
            {/* Hero Section - Gen Z Style */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />
                    {/* Animated grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Live Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white mb-8 border border-white/20"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="font-medium">100% LIVE Interactive Classes</span>
                            <Zap className="w-4 h-4 text-yellow-400" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">Different.</span>
                            <br />
                            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Live.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
                        >
                            Forget boring recorded lectures. Join real classes with real instructors
                            who actually care about your progress. 🚀
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative max-w-xl mx-auto"
                        >
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Find your perfect course..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all text-lg text-white placeholder-white/50"
                            />
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-8 mt-12"
                        >
                            {[
                                { value: '500+', label: 'Students' },
                                { value: '7', label: 'Live Courses' },
                                { value: '15+', label: 'Schools' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-white/60 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Live Classes Section */}
            <section className="py-16 bg-gradient-to-b from-dark to-gray-900">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-pink-400 text-sm font-medium mb-4 border border-pink-500/30">
                            ✨ The Rising Helixx Difference
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">LIVE</span> beats recorded
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We're not another boring LMS. No skip buttons, no "watch at 2x speed" vibes.
                            Real learning happens in real time.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {liveFeatures.map((feature) => (
                            <StaggerItem key={feature.title}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 border-b border-gray-100 sticky top-20 bg-white/95 backdrop-blur-lg z-30">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        {/* Course Type Tabs */}
                        <div className="flex items-center gap-2">
                            {courseTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedType(prev => prev === tab.id && tab.id !== 'all' ? 'all' : tab.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${selectedType === tab.id
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
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
                                className="px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none"
                            >
                                <option value="all">All Stages</option>
                                {keyStages.map((stage) => (
                                    <option key={stage.id} value={stage.id}>
                                        {stage.name} ({stage.grades})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-gray-500">
                            Showing {filteredCourses.length} live course{filteredCourses.length !== 1 ? 's' : ''}
                            {searchQuery && <span> for "{searchQuery}"</span>}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {filteredCourses.length > 0 ? (
                            <motion.div
                                key={`${selectedType}-${selectedKeyStage}-${searchQuery}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.08, duration: 0.4 }}
                                        whileHover={{ y: -10 }}
                                        className={`bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 group h-full flex flex-col ${course.popular ? 'ring-2 ring-purple-500' : ''}`}
                                    >
                                        {course.popular && (
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center text-sm font-bold py-2">
                                                🔥 Most Popular
                                            </div>
                                        )}

                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Live Badge */}
                                            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                </span>
                                                <span className="text-xs font-bold text-white">LIVE</span>
                                            </div>
                                            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color}`}>
                                                {course.badge}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-dark mb-1">{course.name}</h3>
                                            <p className="text-sm text-purple-600 font-medium mb-2">{course.subtitle}</p>
                                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>

                                            {/* Course Meta */}
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
                                                <span className="px-2 py-1 bg-gray-100 rounded-full">{course.ageRange}</span>
                                                <span className="px-2 py-1 bg-gray-100 rounded-full">{course.level}</span>
                                                {course.duration && (
                                                    <span className="px-2 py-1 bg-gray-100 rounded-full">{course.duration}</span>
                                                )}
                                            </div>

                                            {/* Features Preview */}
                                            <ul className="space-y-2 mb-6 flex-grow">
                                                {course.features.slice(0, 3).map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* CTA */}
                                            <div className="mt-auto">
                                                <Link to="/contact">
                                                    <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                                                        Know More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
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
                                    className="text-purple-600 font-medium hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </AnimatedSection>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">differently?</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Join hundreds of students who chose real learning over passive watching.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
                                >
                                    Enquire Now
                                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                                </motion.button>
                            </Link>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Chat with Us
                                </motion.button>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* School CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <School className="w-16 h-16 mx-auto mb-6 text-purple-500" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                            School or Institution?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Special packages for schools with dedicated dashboards,
                            progress tracking, and curriculum alignment.
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
