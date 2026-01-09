import { motion } from 'framer-motion'

export default function AdvisorCard({ advisor }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
        >
            {/* Image Section - Left */}
            <div className="md:w-2/5 relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full">
                    <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                {/* Name overlay on image - mobile only */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark/80 to-transparent md:hidden">
                    <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                    <p className="text-white/80 text-sm">{advisor.role}</p>
                </div>
            </div>

            {/* Info Section - Right */}
            <div className="md:w-3/5 p-6 md:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center">
                {/* Desktop name display */}
                <div className="hidden md:block mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{advisor.name}</h3>
                    <p className="text-primary-400 font-medium">{advisor.role}</p>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                    {advisor.bio}
                </p>

                {/* Expertise tags if available */}
                {advisor.expertise && advisor.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {advisor.expertise.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}
