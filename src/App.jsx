import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Contact from './pages/Contact'

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
                </Routes>
            </AnimatePresence>
        </Layout>
    )
}

export default App
