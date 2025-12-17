import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Play,
    Users,
    BookOpen,
    Award,
    TrendingUp,
    Star,
    Zap,
    Globe,
    CheckCircle2
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import PaymentCalculator from '../components/PaymentCalculator'
import VideoModal from '../components/VideoModal'

// Stats data
const stats = [
    { value: '500+', label: 'Students Enrolled', icon: Users },
    { value: '10+', label: 'Expert Instructors', icon: Award },
    { value: '5', label: 'Courses Available', icon: BookOpen },
    { value: '95%', label: 'Success Rate', icon: TrendingUp },
]

// Features data
const features = [
    {
        icon: Zap,
        title: 'Learn at Your Pace',
        description: 'Flexible learning schedules that fit your lifestyle. Access content anytime, anywhere.',
    },
    {
        icon: Globe,
        title: 'Global Community',
        description: 'Join thousands of learners worldwide. Network, collaborate, and grow together.',
    },
    {
        icon: Award,
        title: 'Industry Certificates',
        description: 'Earn recognized certifications that boost your resume and career prospects.',
    },
]

// Testimonials
const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Software Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        quote: 'Rising Helixx transformed my career. The bootcamp gave me skills that landed me my dream job.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Data Scientist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        quote: 'The Data Science course was incredibly comprehensive. The mentorship was invaluable.',
        rating: 5,
    },
    {
        name: 'Emily Williams',
        role: 'UX Designer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        quote: 'Best investment in my career. The design course exceeded all my expectations.',
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
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about Rising Helixx courses.'

export default function Home() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

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
                                <Zap className="w-4 h-4" />
                                <span>The Future of Education is Here</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark leading-tight mb-6"
                            >
                                Unlock Your{' '}
                                <span className="gradient-text">Potential</span>
                                {' '}Today
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600 mb-8 max-w-xl"
                            >
                                Transform your career with world-class courses taught by industry experts.
                                Join hundreds of learners achieving their goals with Rising Helixx.
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
                                        Explore Courses
                                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsVideoOpen(true)}
                                    className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                        <Play className="w-4 h-4 text-primary-600 ml-0.5" />
                                    </div>
                                    Watch Demo
                                </motion.button>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-12 pt-8 border-t border-gray-200"
                            >
                                <p className="text-sm text-gray-500 mb-4">Trusted by learners from</p>
                                <div className="flex flex-wrap items-center gap-8 opacity-50">
                                    {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                                        <span key={company} className="text-lg font-semibold text-gray-400">
                                            {company}
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
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
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
                                        <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-dark">95%</p>
                                            <p className="text-sm text-gray-500">Success Rate</p>
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
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <img
                                                    key={i}
                                                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                                    alt="Student"
                                                    className="w-8 h-8 rounded-full border-2 border-white"
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark">500+</p>
                                            <p className="text-xs text-gray-500">Active Students</p>
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

            {/* Features Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Everything You Need to{' '}
                            <span className="gradient-text">Succeed</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Our platform provides all the tools and resources you need to master new skills
                            and advance your career.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <StaggerItem key={feature.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="card card-hover p-8"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Payment Calculator Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeRight">
                            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                                Flexible Pricing
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                                Invest in Your{' '}
                                <span className="gradient-text">Future</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Choose your course and preferred currency. Our transparent pricing means
                                no hidden fees – just quality education at fair prices.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Flexible payment options',
                                    'Money-back guarantee',
                                    'Lifetime access to course materials',
                                    'Free updates and new content',
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-500" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeLeft" delay={0.2}>
                            <PaymentCalculator />
                        </AnimatedSection>
                    </div>
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
                            Hear From Our{' '}
                            <span className="gradient-text">Graduates</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join hundreds of successful professionals who transformed their careers with Rising Helixx.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <StaggerItem key={testimonial.name}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="card p-8"
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

                                    {/* Author */}
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
            <section className="section-padding bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to Start Your{' '}
                            <span className="gradient-text">Journey?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join our community of learners and take the first step towards your new career today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/courses">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-lg px-8 py-4"
                                >
                                    Browse Courses
                                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                                </motion.button>
                            </Link>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
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
