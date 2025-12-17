import { loadStripe } from '@stripe/stripe-js'

// TODO: Replace with your Stripe publishable key (test mode)
// Get this from Stripe Dashboard > Developers > API Keys
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_PUBLISHABLE_KEY'

// Initialize Stripe
export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)

// Course pricing data
export const courses = [
    {
        id: 'course-1',
        name: 'Full-Stack Development Bootcamp',
        description: 'Master modern web development with React, Node.js, and cloud deployment',
        priceGBP: 1499,
        priceINR: 149900,
        duration: '12 weeks',
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
        features: ['Live Sessions', 'Project-Based Learning', 'Career Support', '1-on-1 Mentoring']
    },
    {
        id: 'course-2',
        name: 'Data Science Mastery',
        description: 'Learn Python, Machine Learning, and AI fundamentals with real-world projects',
        priceGBP: 1299,
        priceINR: 129900,
        duration: '10 weeks',
        level: 'Beginner to Advanced',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        features: ['Python & SQL', 'ML Algorithms', 'Portfolio Projects', 'Industry Certification']
    },
    {
        id: 'course-3',
        name: 'UI/UX Design Professional',
        description: 'Create stunning interfaces and user experiences with Figma and design thinking',
        priceGBP: 999,
        priceINR: 99900,
        duration: '8 weeks',
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        features: ['Figma Mastery', 'Design Systems', 'User Research', 'Portfolio Review']
    },
    {
        id: 'course-4',
        name: 'Cloud Architecture & DevOps',
        description: 'Build scalable cloud infrastructure with AWS, Docker, and Kubernetes',
        priceGBP: 1699,
        priceINR: 169900,
        duration: '14 weeks',
        level: 'Advanced',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        features: ['AWS Certified', 'CI/CD Pipelines', 'Infrastructure as Code', 'Real Deployments']
    }
]

// Exchange rate (approximate)
export const EXCHANGE_RATE = {
    GBP_TO_INR: 100, // 1 GBP ≈ 100 INR
    INR_TO_GBP: 0.01
}

// Create checkout session (would normally call your backend)
export async function createCheckoutSession(courseId, currency) {
    // In production, this would call your backend which creates a Stripe Checkout session
    // For demo purposes, we'll redirect to a placeholder
    const course = courses.find(c => c.id === courseId)

    if (!course) {
        throw new Error('Course not found')
    }

    // This is a placeholder - in production, call your backend
    console.log(`Creating checkout for ${course.name} in ${currency}`)

    // Return a mock checkout URL for demo
    // In production: return the session.url from Stripe
    return {
        url: `https://checkout.stripe.com/demo?course=${courseId}&currency=${currency}`,
        sessionId: `mock_session_${Date.now()}`
    }
}
