import { motion } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import AdvisorCard from '../components/AdvisorCard'

// Advisory board members
const advisors = [
    {
        name: 'Dr. Elizabeth Harper',
        role: 'Education Strategy Advisor',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        bio: 'Former Dean of Stanford\'s School of Education. 25+ years experience in curriculum design and educational technology innovation.',
        expertise: ['EdTech', 'Curriculum Design', 'Higher Education'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'elizabeth@risinghelix.com',
    },
    {
        name: 'Marcus Williams',
        role: 'Technology Advisor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        bio: 'Ex-Google Engineering Director. Led teams building AI-powered learning platforms reaching millions of users globally.',
        expertise: ['AI/ML', 'Platform Architecture', 'Scalability'],
        linkedin: 'https://linkedin.com',
        email: 'marcus@risinghelix.com',
    },
    {
        name: 'Dr. Priya Sharma',
        role: 'Learning Science Advisor',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
        bio: 'PhD in Cognitive Psychology from MIT. Pioneering researcher in adaptive learning and personalized education pathways.',
        expertise: ['Cognitive Science', 'Adaptive Learning', 'Research'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
    },
    {
        name: 'James O\'Connor',
        role: 'Industry Partnerships Advisor',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: 'Former VP at Microsoft. Built strategic partnerships with 500+ organizations for workforce development programs.',
        expertise: ['Corporate Training', 'Partnerships', 'Strategy'],
        linkedin: 'https://linkedin.com',
        email: 'james@risinghelix.com',
    },
    {
        name: 'Dr. Aisha Mohammed',
        role: 'Diversity & Inclusion Advisor',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
        bio: 'Champion of accessible education. Led initiatives bringing quality education to underserved communities across 30+ countries.',
        expertise: ['DEI', 'Global Education', 'Accessibility'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
    },
    {
        name: 'Robert Chen',
        role: 'Finance & Growth Advisor',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
        bio: 'Partner at Sequoia Capital. Invested in 20+ successful EdTech startups with combined valuation exceeding $10B.',
        expertise: ['Venture Capital', 'EdTech Investment', 'Growth Strategy'],
        linkedin: 'https://linkedin.com',
    },
]

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function AdvisoryBoard() {
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
                            <Users className="w-4 h-4" />
                            <span>World-Class Expertise</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-display font-bold text-dark mb-6"
                        >
                            Our{' '}
                            <span className="gradient-text">Advisory Board</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600"
                        >
                            Meet the visionary leaders guiding Rising Helix's mission to transform education.
                            Our advisors bring decades of experience from the world's leading institutions
                            and organizations.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Advisors Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advisors.map((advisor) => (
                            <StaggerItem key={advisor.name}>
                                <AdvisorCard advisor={advisor} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Join Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                            Interested in Joining Our Board?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We're always looking for passionate leaders who share our vision of
                            making quality education accessible to everyone. If you'd like to
                            contribute to our mission, we'd love to hear from you.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StaggerItem>
                            <p className="text-4xl font-bold text-white mb-2">150+</p>
                            <p className="text-gray-400">Years Combined Experience</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-4xl font-bold text-white mb-2">6</p>
                            <p className="text-gray-400">Industry Verticals</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-4xl font-bold text-white mb-2">30+</p>
                            <p className="text-gray-400">Countries Represented</p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-4xl font-bold text-white mb-2">$10B+</p>
                            <p className="text-gray-400">Portfolio Value</p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </motion.div>
    )
}
