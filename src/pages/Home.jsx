import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Play,
    Users,
    BookOpen,
    Award,
    GraduationCap,
    Star,
    Zap,
    School,
    CheckCircle2,
    Calculator,
    Code
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import VideoModal from '../components/VideoModal'
import { keyStages, pythonCourses, mathCourses } from '../config/stripe'

// Stats data
const stats = [
    { value: '500+', label: 'Students Enrolled', icon: Users },
    { value: '15+', label: 'Partner Schools', icon: School },
    { value: '7', label: 'Courses Available', icon: BookOpen },
    { value: 'KS1-KS4', label: 'All Key Stages', icon: GraduationCap },
]

// Features data
const features = [
    {
        icon: Code,
        title: 'Python for Every Age',
        description: 'Age-appropriate Python courses from visual blocks to advanced programming. Perfect for grades 1-11.',
    },
    {
        icon: Calculator,
        title: 'SAT Math Excellence',
        description: 'Comprehensive math program with 50+ mock tests, weekly assessments, and guaranteed score improvement.',
    },
    {
        icon: School,
        title: 'School Partnerships',
        description: 'Bulk enrollment, teacher dashboards, and curriculum mapping for schools. Special pricing available.',
    },
]

// Testimonials
const testimonials = [
    {
        name: 'Mrs. Sharma',
        role: 'Principal, Delhi Public School',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
        quote: 'Rising Helixx transformed how our students learn coding. The key-stage curriculum aligns perfectly with our academic goals.',
        rating: 5,
    },
    {
        name: 'Aarav, Grade 8',
        role: 'Student',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        quote: 'The Python course made coding so fun! I built my own game in just 3 months.',
        rating: 5,
    },
    {
        name: 'Parent',
        role: 'Mother of 2 students',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        quote: 'Both my kids improved their math scores significantly. The SAT prep is excellent value.',
        rating: 5,
    },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in Rising Helixx courses for my school/child.'

export default function Home() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [selectedKeyStage, setSelectedKeyStage] = useState('all')
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    const filteredPythonCourses = selectedKeyStage === 'all'
        ? pythonCourses
        : pythonCourses.filter(c => c.keyStage === selectedKeyStage)

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6"
                            >
                                <School className="w-4 h-4" />
                                <span>For Schools & Students (Grades 1-11)</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark leading-tight mb-6"
                            >
                                <span className="gradient-text">Python</span> & {' '}
                                <span className="gradient-text">Math</span>
                                <br />for Young Minds
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600 mb-8 max-w-xl"
                            >
                                Age-appropriate coding and math courses for Key Stages 1-4.
                                SAT preparation, monthly assessments, and school partnerships.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/courses">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary text-lg px-8 py-4"
                                    >
                                        View Courses
                                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                                    </motion.button>
                                </Link>
                                <Link to="/for-schools">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
                                    >
                                        <School className="w-5 h-5" />
                                        For Schools
                                    </motion.button>
                                </Link>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-12 pt-8 border-t border-gray-200"
                            >
                                <p className="text-sm text-gray-500 mb-4">Trusted by schools across India & UK</p>
                                <div className="flex flex-wrap items-center gap-6">
                                    {['CBSE', 'ICSE', 'IB', 'Cambridge', 'State Boards'].map((board) => (
                                        <span key={board} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                                            {board}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative aspect-square max-w-lg mx-auto">
                                {/* Main Image */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
                                        alt="Students learning"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                                </div>

                                {/* Floating Cards */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                            <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-dark">Python</p>
                                            <p className="text-sm text-gray-500">KS1 - KS4</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="absolute -right-8 bottom-1/4 glass rounded-2xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                                            <Calculator className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-dark">SAT Math</p>
                                            <p className="text-sm text-gray-500">50+ Tests</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <StaggerItem key={stat.label}>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
                                        <stat.icon className="w-7 h-7 text-primary-400" />
                                    </div>
                                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Key Stage Selector */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Choose Your Level
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Courses by{' '}
                            <span className="gradient-text">Key Stage</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Find the perfect course for your child's age and grade level.
                        </p>
                    </AnimatedSection>

                    {/* Key Stage Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setSelectedKeyStage('all')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all ${selectedKeyStage === 'all'
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
                                }`}
                        >
                            All Stages
                        </button>
                        {keyStages.map((stage) => (
                            <button
                                key={stage.id}
                                onClick={() => setSelectedKeyStage(prev => prev === stage.id ? 'all' : stage.id)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${selectedKeyStage === stage.id
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
                                    }`}
                            >
                                <span className="block text-sm">{stage.name}</span>
                                <span className="block text-xs opacity-75">{stage.grades}</span>
                            </button>
                        ))}
                    </div>

                    {/* Course Cards */}
                    {filteredPythonCourses.length > 0 ? (
                        <div key={selectedKeyStage} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredPythonCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ y: -10 }}
                                    className="card overflow-hidden group h-full"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color}`}>
                                            {course.badge}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-dark mb-1">{course.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{course.subtitle}</p>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-bold text-primary-600">₹{course.priceINR.toLocaleString()}</span>
                                            <span className="text-sm text-gray-400">{course.duration}</span>
                                        </div>
                                        <Link to="/courses">
                                            <button className="w-full btn-primary text-sm py-2">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No courses found for this Key Stage.</p>
                            <button
                                onClick={() => setSelectedKeyStage('all')}
                                className="mt-4 text-primary-600 font-medium hover:underline"
                            >
                                View all courses
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Math Subscription Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
                            <Calculator className="w-4 h-4 inline mr-2" />
                            Monthly Subscription
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Math & SAT{' '}
                            <span className="gradient-text">Preparation</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Monthly math subscriptions with weekly tests, SAT prep, and guaranteed improvement.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {mathCourses.map((course) => (
                            <StaggerItem key={course.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className={`card overflow-hidden group h-full relative ${course.popular ? 'ring-2 ring-primary-500' : ''}`}
                                >
                                    {course.popular && (
                                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center text-sm font-bold py-2">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className={`relative h-40 overflow-hidden ${course.popular ? 'mt-8' : ''}`}>
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-dark mb-1">{course.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{course.subtitle}</p>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-3xl font-bold text-primary-600">₹{course.priceINR.toLocaleString()}</span>
                                            <span className="text-gray-400">/month</span>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {course.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/courses">
                                            <button className="w-full btn-primary">
                                                Subscribe Now
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Why Choose{' '}
                            <span className="gradient-text">Rising Helixx?</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <StaggerItem key={feature.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Trusted by Schools &{' '}
                            <span className="gradient-text">Parents</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <StaggerItem key={testimonial.name}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="card p-8"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-dark">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to Transform Your School's Learning?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Partner with Rising Helixx for world-class Python and Math education.
                            Special pricing for schools and bulk enrollments.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/for-schools">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
                                >
                                    <School className="w-5 h-5 mr-2 inline" />
                                    School Partnership
                                </motion.button>
                            </Link>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Chat with Us
                                </motion.button>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="jmoPo11ktN4"
            />
        </motion.div>
    )
}
