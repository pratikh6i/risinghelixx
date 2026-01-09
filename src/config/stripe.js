// Stripe Configuration for Rising Helixx K-12 Education Platform
// Courses: Python (Project-Based), SAT Maths, Robotics (Project-Based)

// Demo mode - set to false when ready for production
export const DEMO_MODE = true

// Stripe keys (use test keys in development)
export const stripeConfig = {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo',
    // Never expose secret key in frontend
}

// Key Stage definitions
export const keyStages = [
    { id: 'ks1', name: 'Key Stage 1', grades: 'Grades 1-2', ageRange: '5-7 years' },
    { id: 'ks2', name: 'Key Stage 2', grades: 'Grades 3-6', ageRange: '7-11 years' },
    { id: 'ks3', name: 'Key Stage 3', grades: 'Grades 7-9', ageRange: '11-14 years' },
    { id: 'ks4', name: 'Key Stage 4', grades: 'Grades 10-11', ageRange: '14-16 years' },
]

// Python Courses by Key Stage - Project-Based Learning
export const pythonCourses = [
    {
        id: 'python-ks1',
        name: 'Python Explorers',
        subtitle: 'Visual Coding for Young Minds',
        keyStage: 'ks1',
        description: 'Introduction to coding through fun visual blocks and Scratch. Perfect for young learners taking their first steps into programming.',
        level: 'Beginner',
        duration: '3 months',
        ageRange: '5-7 years',
        priceGBP: 49,
        priceINR: 4999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Visual block-based coding',
            'Scratch Jr projects',
            'Fun animations & stories',
            'Parent dashboard',
            'Certificate on completion',
        ],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
        badge: 'Project-Based',
        color: 'from-pink-500 to-rose-500',
    },
    {
        id: 'python-ks2',
        name: 'Python Pioneers',
        subtitle: 'From Blocks to Code',
        keyStage: 'ks2',
        description: 'Transition from visual coding to real Python! Create games, animations, and fun projects with turtle graphics.',
        level: 'Beginner-Intermediate',
        duration: '6 months',
        ageRange: '7-11 years',
        priceGBP: 79,
        priceINR: 7999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Python basics & syntax',
            'Turtle graphics projects',
            'Simple game development',
            'Interactive quizzes',
            'Progress tracking',
            'Certificate on completion',
        ],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
        badge: 'Project-Based',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'python-ks3',
        name: 'Python Programmers',
        subtitle: 'Real-World Python Skills',
        keyStage: 'ks3',
        description: 'Master Python fundamentals with data structures, algorithms, and real projects. Prepare for advanced programming.',
        level: 'Intermediate',
        duration: '6 months',
        ageRange: '11-14 years',
        priceGBP: 99,
        priceINR: 9999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Python fundamentals',
            'Data structures & loops',
            'Functions & modules',
            'Mini projects & games',
            'Problem-solving skills',
            'Industry-aligned curriculum',
        ],
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600',
        badge: 'Project-Based',
        color: 'from-indigo-500 to-purple-500',
    },
    {
        id: 'python-ks4',
        name: 'Python Pro',
        subtitle: 'Advanced Programming & Projects',
        keyStage: 'ks4',
        description: 'Advanced Python with algorithms, OOP, web development basics, and portfolio projects for college applications.',
        level: 'Advanced',
        duration: '9 months',
        ageRange: '14-16 years',
        priceGBP: 149,
        priceINR: 14999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Advanced algorithms',
            'Object-Oriented Programming',
            'Web development basics',
            'Data analysis intro',
            'Portfolio projects',
            'College application ready',
        ],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600',
        badge: 'Project-Based',
        color: 'from-purple-500 to-pink-500',
    },
]

// SAT Math Course
export const mathCourses = [
    {
        id: 'math-sat-prep',
        name: 'SAT Math Champion',
        subtitle: 'Complete SAT Preparation',
        keyStage: 'ks3-ks4',
        description: 'Intensive SAT Math preparation with 50+ mock tests, strategy sessions, and guaranteed score improvement.',
        level: 'Advanced',
        ageRange: '13-16 years',
        priceGBP: 49,
        priceINR: 3999,
        billingCycle: 'monthly',
        features: [
            '50+ SAT mock tests',
            'Section-wise practice',
            'Time management training',
            'Score analytics',
            'Strategy sessions',
            '500+ practice problems',
            'Guaranteed improvement',
        ],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
        badge: 'SAT Prep',
        color: 'from-red-500 to-rose-500',
        isSubscription: true,
        popular: true,
    },
]

// Robotics Courses - Project-Based Learning
export const roboticsCourses = [
    {
        id: 'robotics-beginner',
        name: 'Robotics Explorers',
        subtitle: 'Build Your First Robot',
        keyStage: 'ks2',
        description: 'Hands-on introduction to robotics! Build, program, and control your own robots while learning fundamental engineering concepts.',
        level: 'Beginner',
        duration: '4 months',
        ageRange: '7-11 years',
        priceGBP: 89,
        priceINR: 8999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Build real robots',
            'Block-based programming',
            'Sensors & motors basics',
            'Team challenges',
            'Take-home projects',
            'Certificate on completion',
        ],
        image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600',
        badge: 'Project-Based',
        color: 'from-teal-500 to-cyan-500',
    },
    {
        id: 'robotics-intermediate',
        name: 'Robotics Engineers',
        subtitle: 'Advanced Robot Building',
        keyStage: 'ks3',
        description: 'Take robotics to the next level with advanced sensors, automation, and Arduino programming.',
        level: 'Intermediate',
        duration: '6 months',
        ageRange: '11-14 years',
        priceGBP: 129,
        priceINR: 12999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'Arduino programming',
            'Advanced sensors',
            'Automation concepts',
            'Competition prep',
            'Real-world applications',
            'Industry mentorship',
        ],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
        badge: 'Project-Based',
        color: 'from-orange-500 to-amber-500',
    },
    {
        id: 'robotics-advanced',
        name: 'Robotics Innovators',
        subtitle: 'AI & Advanced Robotics',
        keyStage: 'ks4',
        description: 'Cutting-edge robotics with AI integration, machine learning basics, and advanced automation for future engineers.',
        level: 'Advanced',
        duration: '9 months',
        ageRange: '14-16 years',
        priceGBP: 179,
        priceINR: 17999,
        isProjectBased: true,
        features: [
            'Project-Based Learning',
            'AI-powered robots',
            'Machine learning basics',
            'Computer vision intro',
            'IoT integration',
            'Capstone project',
            'College portfolio ready',
        ],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600',
        badge: 'Project-Based',
        color: 'from-violet-500 to-purple-500',
    },
]

// Combined courses for display
export const courses = [...pythonCourses, ...mathCourses, ...roboticsCourses]

// Currency conversion (approximate)
export const currencyRates = {
    GBP: 1,
    INR: 105.5, // 1 GBP = 105.5 INR (approximate)
}

// Format price based on currency
export const formatPrice = (priceGBP, priceINR, currency = 'GBP') => {
    if (currency === 'INR') {
        return `₹${priceINR.toLocaleString('en-IN')}`
    }
    return `£${priceGBP}`
}

// School/Bulk pricing
export const schoolPricing = {
    discounts: {
        '10-25': 10,   // 10% off for 10-25 students
        '26-50': 15,   // 15% off for 26-50 students
        '51-100': 20,  // 20% off for 51-100 students
        '100+': 25,    // 25% off for 100+ students
    },
    features: [
        'Dedicated school dashboard',
        'Teacher admin access',
        'Progress reports by class',
        'Custom curriculum mapping',
        'Priority support',
        'Bulk enrollment portal',
    ],
}

export default {
    DEMO_MODE,
    stripeConfig,
    keyStages,
    pythonCourses,
    mathCourses,
    roboticsCourses,
    courses,
    currencyRates,
    formatPrice,
    schoolPricing,
}
