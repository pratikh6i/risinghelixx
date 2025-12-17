import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    GraduationCap,
    Mail,
    Phone,
    MapPin,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    ArrowUpRight
} from 'lucide-react'

const footerLinks = {
    company: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'Blog', path: '/blog' },
    ],
    courses: [
        { name: 'All Courses', path: '/courses' },
        { name: 'Popular', path: '/courses?filter=popular' },
        { name: 'New Releases', path: '/courses?filter=new' },
        { name: 'Certifications', path: '/certifications' },
    ],
    support: [
        { name: 'Help Center', path: '/help' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
    ],
}

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
    return (
        <footer className="bg-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-display font-bold">Rising Helix</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Empowering the next generation of learners with cutting-edge courses
                            and expert-led education. Join thousands of students transforming their careers.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@risinghelix.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>hello@risinghelix.com</span>
                            </a>
                            <a
                                href="tel:+44123456789"
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+44 123 456 789</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>London, United Kingdom</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Courses</h4>
                        <ul className="space-y-3">
                            {footerLinks.courses.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Rising Helix. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
