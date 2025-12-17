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
    Loader2
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { schoolPricing, keyStages } from '../config/stripe'

// Benefits for schools
const benefits = [
    {
        icon: BarChart3,
        title: 'Progress Dashboard',
        description: 'Real-time analytics on student performance, attendance, and course completion.',
    },
    {
        icon: Users,
        title: 'Teacher Admin Access',
        description: 'Dedicated portal for teachers to track class progress and assign coursework.',
    },
    {
        icon: BookOpen,
        title: 'Curriculum Mapping',
        description: 'Courses aligned with CBSE, ICSE, Cambridge, and IB curriculum standards.',
    },
    {
        icon: Shield,
        title: 'Safe Learning',
        description: 'Child-safe platform with no ads, secure data handling, and parent controls.',
    },
    {
        icon: Award,
        title: 'Certificates',
        description: 'Official completion certificates for students recognized by partner universities.',
    },
    {
        icon: Percent,
        title: 'Volume Discounts',
        description: 'Up to 25% discount for bulk enrollments. Special pricing for schools.',
    },
]

// Success metrics
const metrics = [
    { value: '15+', label: 'Partner Schools' },
    { value: '500+', label: 'Students Enrolled' },
    { value: '40%', label: 'Score Improvement' },
    { value: '98%', label: 'Satisfaction Rate' },
]

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const CONTACT_EMAIL = 'director@risinghelixx.com'
const CONTACT_PHONE = '+91 7972711924'
const WHATSAPP_NUMBER = '917972711924'

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

        // Create email body
        const emailBody = `
School Partnership Inquiry

School Name: ${formData.schoolName}
Principal/Contact: ${formData.principalName}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Estimated Students: ${formData.studentCount}

Message:
${formData.message}

---
Sent from Rising Helixx For Schools page
    `.trim()

        // Open mail client
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=School Partnership Inquiry - ${formData.schoolName}&body=${encodeURIComponent(emailBody)}`

        // Also open WhatsApp
        setTimeout(() => {
            const whatsappMessage = `New School Inquiry:\n\nSchool: ${formData.schoolName}\nContact: ${formData.principalName}\nPhone: ${formData.phone}\nStudents: ${formData.studentCount}`
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
        }, 1000)

        setIsSubmitted(true)
        setIsSubmitting(false)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium mb-6"
                        >
                            <School className="w-4 h-4" />
                            <span>School Partnership Program</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
                        >
                            Transform Your School's{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">
                                Digital Education
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Partner with Rising Helixx for world-class Python and Math education.
                            Dedicated dashboards, curriculum alignment, and up to 25% bulk discounts.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a href={`mailto:${CONTACT_EMAIL}?subject=School Partnership Inquiry`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-xl"
                                >
                                    <Mail className="w-5 h-5 mr-2 inline" />
                                    Email Principal Team
                                </motion.button>
                            </a>
                            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                                >
                                    <Phone className="w-5 h-5 mr-2 inline" />
                                    {CONTACT_PHONE}
                                </motion.button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                                <p className="text-4xl font-bold text-primary-600 mb-2">{metric.value}</p>
                                <p className="text-gray-500">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            Why Partner With Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Everything Your School{' '}
                            <span className="gradient-text">Needs</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <StaggerItem key={benefit.title}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="card card-hover p-8 h-full"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                        <benefit.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                            <Percent className="w-4 h-4 inline mr-2" />
                            Volume Discounts
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                            Bulk Enrollment{' '}
                            <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            More students = bigger savings. Special rates for schools.
                        </p>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto">
                        <div className="card overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Students</th>
                                        <th className="px-6 py-4 text-center font-semibold">Discount</th>
                                        <th className="px-6 py-4 text-right font-semibold">Savings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(schoolPricing.discounts).map(([range, discount], index) => (
                                        <tr key={range} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-medium text-dark">{range} students</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-bold">
                                                    {discount}% OFF
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right text-gray-600">
                                                Save up to ₹{(discount * 1000).toLocaleString()} per course
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <AnimatedSection animation="fadeRight">
                            <div className="max-w-lg">
                                <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                                    Get Started
                                </span>
                                <h2 className="text-4xl font-display font-bold text-dark mb-6">
                                    School Partnership{' '}
                                    <span className="gradient-text">Inquiry</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Fill out this form and our team will contact you within 24 hours
                                    to discuss partnership options.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email us</p>
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
                                        <h3 className="text-xl font-bold text-dark mb-2">Inquiry Sent!</h3>
                                        <p className="text-gray-600">We'll contact your school within 24 hours.</p>
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
                                                    Principal/Contact Name *
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
                                                    <option value="1-10">1-10 students</option>
                                                    <option value="10-25">10-25 students</option>
                                                    <option value="26-50">26-50 students</option>
                                                    <option value="51-100">51-100 students</option>
                                                    <option value="100+">100+ students</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Tell us about your school's requirements..."
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary py-4 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2 inline" />
                                                    Submit Inquiry
                                                </>
                                            )}
                                        </motion.button>
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
