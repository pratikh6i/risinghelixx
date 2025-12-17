// API Configuration for Rising Helixx
// This file centralizes all API endpoints for easy backend migration

const API_CONFIG = {
    // Base URL - easily swap for different environments
    // Cloud Run: https://risinghelixx-api-xxxxx.run.app
    // App Engine: https://api.risinghelixx.com
    // GCE VM: https://vm.risinghelixx.com/api
    baseUrl: import.meta.env.VITE_API_URL || '',

    // Feature flags for gradual rollout
    features: {
        useBackendAuth: import.meta.env.VITE_USE_BACKEND_AUTH === 'true',
        useStripePayments: import.meta.env.VITE_USE_STRIPE === 'true',
        useFirebase: import.meta.env.VITE_USE_FIREBASE === 'true',
    },

    // API Endpoints (will be used when backend is ready)
    endpoints: {
        auth: {
            login: '/auth/login',
            register: '/auth/register',
            logout: '/auth/logout',
            profile: '/auth/profile',
            googleAuth: '/auth/google',
        },
        courses: {
            list: '/courses',
            byKeyStage: '/courses/key-stage/:stage',
            enroll: '/courses/:id/enroll',
        },
        subscriptions: {
            create: '/subscriptions/create',
            cancel: '/subscriptions/cancel',
            status: '/subscriptions/status',
        },
        schools: {
            inquiry: '/schools/inquiry',
            bulkEnroll: '/schools/bulk-enroll',
        },
        contact: {
            send: '/contact/send',
        },
    },
}

// Helper function to build full URL
export const buildApiUrl = (endpoint, params = {}) => {
    let url = `${API_CONFIG.baseUrl}${endpoint}`

    // Replace path parameters
    Object.keys(params).forEach(key => {
        url = url.replace(`:${key}`, params[key])
    })

    return url
}

// Check if backend is available
export const isBackendEnabled = () => {
    return API_CONFIG.baseUrl && API_CONFIG.features.useBackendAuth
}

// Export for use across the app
export default API_CONFIG

/*
 * Migration Guide:
 * 
 * Phase 1 (Current): Static site with localStorage
 *   - Set VITE_API_URL to empty
 *   - All auth/data handled client-side
 * 
 * Phase 2: Add Cloud Run API
 *   - Deploy Node.js/Python API to Cloud Run
 *   - Set VITE_API_URL=https://your-cloud-run-url.run.app
 *   - Set VITE_USE_BACKEND_AUTH=true
 *   - Auth will use backend, data syncs to Firestore
 * 
 * Phase 3: Full GCP Stack
 *   - API on App Engine or GCE
 *   - Cloud SQL for data
 *   - Cloud Storage for media
 *   - Set VITE_API_URL to your domain
 * 
 * Environment Variables (.env):
 *   VITE_API_URL=https://api.risinghelixx.com
 *   VITE_USE_BACKEND_AUTH=true
 *   VITE_USE_STRIPE=true
 *   VITE_USE_FIREBASE=false
 */
