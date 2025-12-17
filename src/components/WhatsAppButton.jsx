import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917972711924'
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about Rising Helixx courses.'

export default function WhatsAppButton() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />

            {/* Pulse animation */}
            <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-25" />
        </motion.a>
    )
}

// Export constants for use in other components
export const CONTACT_PHONE = '+91 7972711924'
export const CONTACT_EMAIL = 'director@risinghelixx.com'
export const CONTACT_LOCATION = 'Jaysingpur, Kolhapur, India'
export const CONTACT_WHATSAPP = '917972711924'
