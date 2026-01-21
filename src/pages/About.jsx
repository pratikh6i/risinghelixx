import { motion } from 'framer-motion'
import {
    Target,
    Heart,
    Lightbulb,
    Users,
    Globe,
    Award,
    ArrowRight,
    CheckCircle2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

// Core values
const values = [
    {
        icon: Target,
        title: 'Excellence',
        description: 'We pursue the highest standards in everything we do, from course content to student support.',
    },
    {
        icon: Heart,
        title: 'Passion',
        description: 'We are driven by a genuine love for education and helping students achieve their dreams.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We constantly evolve our teaching methods to stay ahead of industry trends.',
    },
    {
        icon: Users,
        title: 'Community',
        description: 'We foster a supportive environment where learners grow together.',
    },
]

// Milestones
const milestones = [
    { year: '2019', title: 'Founded', description: 'Rising Helixx was born with a vision to democratize quality education.' },
    { year: '2022', title: 'First 1,000 Students', description: 'Reached our first milestone during the global shift to online learning.' },
    { year: '2023', title: 'Global Expansion', description: 'Extended our reach to 50+ countries with multilingual support.' },
    { year: '2024', title: 'Industry Partnerships', description: 'Partnered with leading tech companies for job placement programs.' },
    { year: '2025', title: '10,000+ Graduates', description: 'Celebrated our growing community of successful alumni.' },
    { year: '2026', title: 'AI-Powered Learning', description: 'Launching personalized learning paths powered by artificial intelligence.' },
]

// Team members
const team = [
    {
        name: 'Dr. James Mitchell',
        role: 'CEO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    },
    {
        name: 'Sarah Chen',
        role: 'Chief Learning Officer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
    },
    {
        name: 'Michael Roberts',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300',
    },
    {
        name: 'Emily Watson',
        role: 'Head of Student Success',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
    },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function About() {
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
                            <Globe className="w-4 h-4" />
                            <span>Our Story</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-display font-bold text-dark mb-6"
                        >
                            Shaping the{' '}
                            <span className="gradient-text">Future</span>
                            {' '}of Learning
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600"
                        >
                            We believe that quality education should be accessible to everyone, everywhere.
                            Our mission is to empower individuals to unlock their potential through
                            expert-led, industry-relevant courses.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimatedSection animation="fadeRight">
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    To democratize access to world-class education by providing innovative,
                                    industry-aligned courses that empower learners to achieve their career goals
                                    and make a positive impact in their communities.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeLeft" delay={0.2}>
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center mb-6">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    To become the world's most impactful educational platform, where every
                                    learner—regardless of background—has the tools and support they need
                                    to transform their lives through lifelong learning.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            What Drives Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Our Core{' '}
                            <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            These principles guide everything we do, from course design to student support.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <StaggerItem key={value.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="card card-hover p-8 text-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-gray-600 text-sm">{value.description}</p>
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
                            Join Our{' '}
                            <span className="gradient-text">Mission</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Whether you're looking to learn new skills or share your expertise,
                            there's a place for you at Rising Helixx.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/courses">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-lg px-8 py-4"
                                >
                                    Start Learning
                                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Get in Touch
                                </motion.button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </motion.div>
    )
}
