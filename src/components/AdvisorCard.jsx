import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function AdvisorCard({ advisor }) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

                    {/* Front Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">
                            {advisor.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                            {advisor.role}
                        </p>
                    </div>

                    {/* Flip Hint */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                        <span className="text-white text-xs font-medium">Hover to flip</span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-6 flex flex-col"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    {/* Back Content */}
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                            {advisor.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium mb-4">
                            {advisor.role}
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            {advisor.bio}
                        </p>
                    </div>

                    {/* Expertise Tags */}
                    {advisor.expertise && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {advisor.expertise.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/10 rounded-full text-white text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                        {advisor.linkedin && (
                            <a
                                href={advisor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        )}
                        {advisor.twitter && (
                            <a
                                href={advisor.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                        )}
                        {advisor.email && (
                            <a
                                href={`mailto:${advisor.email}`}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
