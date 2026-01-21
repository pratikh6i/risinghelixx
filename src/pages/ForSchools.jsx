import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    School,
    Users,
    BarChart3,
    Shield,
    Award,
    CheckCircle2,
    ArrowRight,
    Mail,
    Phone,
    Building2,
    GraduationCap,
    BookOpen,
    Percent,
    Send,
    Loader2,
    Zap,
    TrendingUp,
    Globe,
    Clock,
    Star,
    Target,
    Brain,
    Rocket
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

// Why NOW - Urgency triggers
const urgencyPoints = [
    {
        stat: '85%',
        description: 'of jobs in 2030 don\'t exist yet',
        source: 'World Economic Forum'
    },
    {
        stat: '3.5M',
        description: 'tech jobs unfilled globally by 2026',
        source: 'McKinsey Report'
    },
    {
        stat: '₹15L+',
        description: 'average starting salary for Python developers',
        source: 'Industry Data'
    },
]

// Transform benefits into compelling outcomes
const outcomes = [
    {
        icon: Brain,
        title: 'Future-Ready Students',
        description: 'Equip students with AI, coding, and computational thinking skills that employers are desperately seeking.',
        highlight: 'Critical for 2026+',
    },
    {
        icon: TrendingUp,
        title: 'Measurable Results Dashboard',
        description: 'Real-time analytics showing student progress, engagement metrics, and skill development milestones.',
        highlight: 'Data-Driven',
    },
    {
        icon: Shield,
        title: 'Zero Risk for Schools',
        description: 'Start with a FREE pilot program. No upfront costs. See results before any commitment.',
        highlight: 'Free Pilot',
    },
    {
        icon: GraduationCap,
        title: 'Industry-Recognized Certificates',
        description: 'Students receive credentials valued by top universities and tech companies worldwide.',
        highlight: 'Career Advantage',
    },
    {
        icon: Users,
        title: 'Dedicated School Support',
        description: 'Personal account manager, teacher training, and 24/7 technical support for your institution.',
        highlight: 'White-Glove Service',
    },
    {
        icon: BookOpen,
        title: 'Curriculum Integration',
        description: 'Seamlessly aligns with CBSE, ICSE, Cambridge, and IB standards. No disruption to existing academics.',
        highlight: 'Easy Adoption',
    },
]

// Social proof - testimonials
const testimonials = [
    {
        quote: "Rising Helixx transformed how we teach technology. Our students are now winning national coding competitions.",
        author: "Dr. Priya Menon",
        role: "Principal, Delhi Public School",
        metric: "40% improvement in logical reasoning scores"
    },
    {
        quote: "The parent feedback has been phenomenal. They see their children developing real-world skills.",
        author: "Rajesh Kumar",
        role: "Director, Modern International School",
        metric: "95% parent satisfaction rate"
    },
    {
        quote: "What impressed us most is the dedicated support and how the curriculum fits our existing schedule.",
        author: "Sarah Thomas",
        role: "Academic Head, Cambridge School Bangalore",
        metric: "100% teacher adoption in first month"
    },
]

// Scarcity trigger
const partnershipStats = {
    totalSlots: 50,
    filledSlots: 38,
    currentYear: '2026-27',
}

// Success metrics
const metrics = [
    { value: '35+', label: 'Partner Schools', icon: School },
    { value: '5,000+', label: 'Students Trained', icon: Users },
    { value: '40%', label: 'Avg. Score Improvement', icon: TrendingUp },
    { value: '98%', label: 'Renewal Rate', icon: Star },
]

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const CONTACT_EMAIL = 'director@risinghelixx.com'
const CONTACT_PHONE = '+91 9270211791'
const WHATSAPP_NUMBER = '919270211791'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykglqpb'

export default function ForSchools() {
    const [formData, setFormData] = useState({
        schoolName: '',
        principalName: '',
        email: '',
        phone: '',
        city: '',
        studentCount: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'School Partnership Inquiry',
                    ...formData,
                }),
            })

            if (response.ok) {
                setIsSubmitted(true)
                setTimeout(() => setIsSubmitted(false), 5000)
            } else {
                alert('Failed to submit. Please try again.')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            alert('Failed to submit. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const remainingSlots = partnershipStats.totalSlots - partnershipStats.filledSlots

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero Section - Problem-Agitation */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Urgency Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-sm font-medium mb-6"
                        >
                            <Clock className="w-4 h-4" />
                            <span>Only {remainingSlots} partnership slots remaining for {partnershipStats.currentYear}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Is Your School Preparing Students for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                The Jobs of Tomorrow?
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            While other schools wait, forward-thinking institutions are already equipping students
                            with Python, AI, and computational thinking skills.
                            <span className="text-white font-semibold"> Don't let your students fall behind.</span>
                        </motion.p>

                        {/* Urgency Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
                        >
                            {urgencyPoints.map((point) => (
                                <div key={point.stat} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
                                    <p className="text-3xl font-bold text-primary-400 mb-1">{point.stat}</p>
                                    <p className="text-sm text-gray-300">{point.description}</p>
                                    <p className="text-xs text-gray-500 mt-1">— {point.source}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a href="#contact-form">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold shadow-xl shadow-primary-500/25 flex items-center gap-2"
                                >
                                    <Rocket className="w-5 h-5" />
                                    Start Free Pilot Program
                                </motion.button>
                            </a>
                            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Speak to an Expert
                                </motion.button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social Proof - Metrics */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric) => (
                            <StaggerItem key={metric.label}>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 mb-3">
                                        <metric.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <p className="text-4xl font-bold text-primary-600 mb-1">{metric.value}</p>
                                    <p className="text-gray-500">{metric.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Why Schools Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Transform Your School Into a{' '}
                            <span className="gradient-text">Tech Education Leader</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join 35+ schools that are already preparing their students for the future.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {outcomes.map((outcome) => (
                            <StaggerItem key={outcome.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="card card-hover p-8 h-full relative overflow-hidden"
                                >
                                    {/* Highlight Badge */}
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                                        {outcome.highlight}
                                    </span>

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                        <outcome.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{outcome.title}</h3>
                                    <p className="text-gray-600">{outcome.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Hear From Schools{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                Like Yours
                            </span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <StaggerItem key={index}>
                                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-white/90 mb-6 text-lg leading-relaxed">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="font-semibold text-white">{testimonial.author}</p>
                                        <p className="text-white/60 text-sm">{testimonial.role}</p>
                                        <p className="text-primary-400 text-sm mt-2 font-medium">
                                            📈 {testimonial.metric}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Risk Reversal + Contact Form */}
            <section id="contact-form" className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <AnimatedSection animation="fadeRight">
                            <div className="max-w-lg">
                                {/* Risk Reversal */}
                                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8 border-2 border-primary-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md">
                                            <Shield className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-dark mb-2">Zero-Risk Pilot Program</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
                                                    <span>Start with 20 students FREE for 1 month</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
                                                    <span>No credit card or upfront payment needed</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
                                                    <span>See results before any commitment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                                    Get Started Today
                                </span>
                                <h2 className="text-4xl font-display font-bold text-dark mb-6">
                                    Claim Your{' '}
                                    <span className="gradient-text">Free Pilot</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Fill out this form and our partnership team will contact you within
                                    <span className="font-semibold text-dark"> 24 hours </span>
                                    to set up your free trial.
                                </p>

                                {/* Urgency reminder */}
                                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <Clock className="w-5 h-5 text-amber-600" />
                                    <p className="text-sm text-amber-800">
                                        <span className="font-semibold">Limited availability:</span> Only {remainingSlots} slots remaining for this academic year.
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email us directly</p>
                                            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-dark hover:text-primary-600">
                                                {CONTACT_EMAIL}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Call or WhatsApp</p>
                                            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="font-semibold text-dark hover:text-primary-600">
                                                {CONTACT_PHONE}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeLeft" delay={0.2}>
                            <div className="card p-8">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-accent-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                                        <p className="text-gray-600">Our partnership team will contact you within 24 hours to set up your free pilot.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    School Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="schoolName"
                                                    value={formData.schoolName}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Delhi Public School"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="principalName"
                                                    value={formData.principalName}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Dr. Sharma"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="principal@school.edu"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    placeholder="Mumbai"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Estimated Students
                                                </label>
                                                <select
                                                    name="studentCount"
                                                    value={formData.studentCount}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                >
                                                    <option value="">Select range</option>
                                                    <option value="1-20">1-20 students (Pilot)</option>
                                                    <option value="21-50">21-50 students</option>
                                                    <option value="51-100">51-100 students</option>
                                                    <option value="101-200">101-200 students</option>
                                                    <option value="200+">200+ students</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Any Questions? (Optional)
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Tell us about your school's requirements..."
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    <Rocket className="w-5 h-5" />
                                                    Start My Free Pilot
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-center text-sm text-gray-500">
                                            🔒 Your information is secure and will never be shared.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
