import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Loader2,
    CheckCircle,
    MessageSquare,
    Clock,
    Globe
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

// Contact methods
const contactMethods = [
    {
        icon: Mail,
        title: 'Email Us',
        description: 'We\'ll respond within 24 hours',
        value: 'director@risinghelixx.com',
        href: 'mailto:director@risinghelixx.com',
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Mon-Fri from 8am to 6pm',
        value: '+91 9270211791',
        href: 'tel:+919270211791',
    },
]

// FAQ items
const faqs = [
    {
        question: 'How long do I have access to the courses?',
        answer: 'You have lifetime access to all course materials once enrolled. This includes all future updates and new content added to the course.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with your course, simply contact us for a full refund.',
    },
    {
        question: 'Are the certificates recognized by employers?',
        answer: 'Our certificates are recognized by leading companies worldwide. We partner directly with industry leaders to ensure our curriculum meets real-world requirements.',
    },
    {
        question: 'Can I learn at my own pace?',
        answer: 'Absolutely! All our courses are self-paced. You can learn whenever and wherever works best for you.',
    },
]

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHATSAPP_NUMBER = '919270211791'
const WHATSAPP_MESSAGE = 'Hi! I\'d love to hear more about Rising Helixx courses.'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [expandedFaq, setExpandedFaq] = useState(null)

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const mailtoLink = `mailto:pratikpshetti45@gmail.com?cc=yashvardhan.117.shirgave@gmail.com&subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Rising Helixx Contact Form`
        )}`

        // Open email client
        window.location.href = mailtoLink

        // Also open WhatsApp as backup for lead capture
        setTimeout(() => {
            const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
        }, 1000)

        setIsSubmitted(true)
        setIsSubmitting(false)
        setFormData({ name: '', email: '', subject: '', message: '' })

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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-full text-green-700 text-sm font-medium mb-6 cursor-pointer transition-colors"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>We'd Love to Hear From You - Chat on WhatsApp!</span>
                        </motion.a>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-display font-bold text-dark mb-6"
                        >
                            Get in{' '}
                            <span className="gradient-text">Touch</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600"
                        >
                            Have a question about our courses? Want to partner with us?
                            Or just want to say hello? We're here to help.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactMethods.map((method, index) => (
                            <AnimatedSection key={method.title} delay={index * 0.1}>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('http') ? '_blank' : undefined}
                                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="card card-hover p-6 flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                                        <method.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1">{method.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                                        <p className="text-primary-600 font-medium">{method.value}</p>
                                    </div>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <AnimatedSection animation="fadeRight">
                            <div className="card p-8">
                                <h2 className="text-2xl font-bold text-dark mb-2">Send us a message</h2>
                                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you as soon as possible.</p>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-accent-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark mb-2">Message Sent!</h3>
                                        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="you@example.com"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder="How can we help?"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us more about your inquiry..."
                                                required
                                                rows={5}
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
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>

                        {/* FAQ */}
                        <AnimatedSection animation="fadeLeft" delay={0.2}>
                            <h2 className="text-2xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        className="card overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                                        >
                                            <span className="font-semibold text-dark">{faq.question}</span>
                                            <motion.div
                                                animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                                                className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0"
                                            >
                                                <span className="text-primary-600 font-bold">+</span>
                                            </motion.div>
                                        </button>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: expandedFaq === index ? 'auto' : 0,
                                                opacity: expandedFaq === index ? 1 : 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
                                <h3 className="font-bold text-dark mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Clock className="w-5 h-5 text-primary-500" />
                                        <span>Response time: Within 24 hours</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Globe className="w-5 h-5 text-primary-500" />
                                        <span>Available worldwide</span>
                                    </div>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-green-600 hover:text-green-700 font-medium"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Quick Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
