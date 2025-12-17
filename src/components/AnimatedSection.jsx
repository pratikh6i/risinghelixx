import { motion } from 'framer-motion'

const animations = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    },
    stagger: {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }
}

export default function AnimatedSection({
    children,
    animation = 'fadeUp',
    delay = 0,
    className = '',
    once = true,
    amount = 0.3
}) {
    const selectedAnimation = animations[animation] || animations.fadeUp

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: selectedAnimation.hidden,
                visible: {
                    ...selectedAnimation.visible,
                    transition: {
                        ...selectedAnimation.visible.transition,
                        delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Container for staggered children animations
export function StaggerContainer({
    children,
    className = '',
    once = true,
    amount = 0.3
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={animations.stagger}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Individual stagger item
export function StaggerItem({
    children,
    animation = 'fadeUp',
    className = ''
}) {
    const selectedAnimation = animations[animation] || animations.fadeUp

    return (
        <motion.div
            variants={selectedAnimation}
            className={className}
        >
            {children}
        </motion.div>
    )
}
