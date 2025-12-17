import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AuthModal from './AuthModal'

export default function Layout({ children }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />

            <main className="flex-grow pt-20">
                {children}
            </main>

            <Footer />

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    )
}
