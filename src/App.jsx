import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Contact from './pages/Contact'
import IndustryCertificates from './pages/IndustryCertificates'
import ComingSoon from './pages/ComingSoon'

function App() {
    const location = useLocation()

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/advisory-board" element={<AdvisoryBoard />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/industry-certificates" element={<IndustryCertificates />} />

                    {/* Coming Soon Pages */}
                    <Route path="/careers" element={<ComingSoon />} />
                    <Route path="/press" element={<ComingSoon />} />
                    <Route path="/blog" element={<ComingSoon />} />
                    <Route path="/popular" element={<ComingSoon />} />
                    <Route path="/new-releases" element={<ComingSoon />} />
                    <Route path="/help" element={<ComingSoon />} />
                    <Route path="/privacy" element={<ComingSoon />} />
                    <Route path="/terms" element={<ComingSoon />} />

                    {/* Catch all - 404 */}
                    <Route path="*" element={<ComingSoon />} />
                </Routes>
            </AnimatePresence>
        </Layout>
    )
}

export default App
