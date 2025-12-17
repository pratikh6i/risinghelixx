import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Award,
    Globe,
    Building2,
    GraduationCap,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Clock,
    Zap
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

// Partner Universities (Coming Soon)
const universities = [
    { name: 'Oxford University', country: 'UK', logo: '🎓' },
    { name: 'MIT', country: 'USA', logo: '🏛️' },
    { name: 'IIT Delhi', country: 'India', logo: '🇮🇳' },
    { name: 'Stanford University', country: 'USA', logo: '🌟' },
    { name: 'Cambridge University', country: 'UK', logo: '📚' },
    { name: 'National University of Singapore', country: 'Singapore', logo: '🦁' },
]

// Certificate Features
const features = [
    {
        icon: Award,
        title: 'Globally Recognized',
        description: 'Our certificates are recognized by leading employers worldwide.',
    },
    {
        icon: Globe,
        title: 'University Partnerships',
        description: 'Collaborating with top universities across the globe.',
    },
    {
        icon: Building2,
        title: 'Industry Validated',
        description: 'Curriculum designed with input from industry leaders.',
    },
    {
        icon: GraduationCap,
        title: 'Academic Excellence',
        description: 'Rigorous assessments ensuring quality outcomes.',
    },
]

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about Rising Helixx Industry Certificates.'

export default function IndustryCertificates() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

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
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Coming Soon</span>
                            <Clock className="w-4 h-4" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-6"
                        >
                            Industry{' '}
                            <span className="gradient-text">Certificates</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 mb-8"
                        >
                            Something <span className="font-bold text-primary-600">extraordinary</span> is brewing.
                            We're partnering with world-class universities to bring you
                            <span className="font-bold text-secondary-600"> globally recognized certifications</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-lg px-8 py-4"
                                >
                                    <Zap className="w-5 h-5 mr-2 inline" />
                                    Get Early Access
                                </motion.button>
                            </a>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary text-lg px-8 py-4"
                                >
                                    Stay Updated
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stranger Things Style Mystery Section */}
            <section className="py-20 bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark to-dark" />
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                            className="text-6xl mb-6"
                        >
                            🔮
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            The <span className="text-red-500">Upside Down</span> of Education
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Just like Eleven discovered her powers, you're about to unlock yours.
                            We're turning the education world <span className="text-primary-400 font-bold">upside down</span> —
                            bringing you certificates that actually matter, from universities that shape the future.
                        </p>
                        <div className="inline-flex items-center gap-2 text-gray-400">
                            <span className="animate-pulse">●</span>
                            <span className="font-mono">Launching Q2 2025</span>
                            <span className="animate-pulse">●</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* University Partners Preview */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Partner Universities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            World-Class{' '}
                            <span className="gradient-text">Partnerships</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            We're in talks with leading universities across the globe.
                            Stay tuned for official announcements.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {universities.map((uni) => (
                            <StaggerItem key={uni.name}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="card p-6 text-center group cursor-pointer"
                                >
                                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                                        {uni.logo}
                                    </div>
                                    <p className="font-semibold text-dark text-sm">{uni.name}</p>
                                    <p className="text-xs text-gray-500">{uni.country}</p>
                                    <div className="mt-2 text-xs text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        Coming Soon
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            What to{' '}
                            <span className="gradient-text">Expect</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <StaggerItem key={feature.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="card card-hover p-8 text-center h-full"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-dark mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <div className="text-5xl mb-6">🚀</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Be the First to{' '}
                            <span className="gradient-text">Know</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join our waitlist and get exclusive early access when we launch.
                        </p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Join the Waitlist
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </motion.button>
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </motion.div>
    )
}
