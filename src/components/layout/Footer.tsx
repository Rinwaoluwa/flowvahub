import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import Button from '../ui/Button'
import Input from '../ui/Input'

const footerLinks = {
    hub: [
        { label: 'Discover', href: '/dashboard/discover' },
        { label: 'Library', href: '/dashboard/library' },
        { label: 'Rewards', href: '/dashboard/rewards' }
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' }
    ],
    support: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact Us', href: '/contact' }
    ],
    legal: [
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' }
    ]
}

export function Footer() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        try {
            const { error } = await supabase
                .from('newsletter_subscribers')
                .insert([{ email }] as never)

            if (error) {
                if (error.code === '23505') {
                    setMessage('You are already subscribed!')
                } else {
                    throw error
                }
            } else {
                setMessage('Thanks for subscribing!')
            }
            setStatus('success')
            setEmail('')
        } catch {
            setMessage('Something went wrong. Please try again.')
            setStatus('error')
        }

        setTimeout(() => {
            setStatus('idle')
            setMessage('')
        }, 3000)
    }

    return (
        <footer className="mt-auto">
            {/* Newsletter Section */}
            <div className="bg-gray-900 py-16">
                <div className="container">
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-bold text-white mb-2">Get the latest updates</h3>
                            <p className="text-gray-400">
                                Subscribe to our newsletter for tips, updates, and exclusive offers.
                            </p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={handleSubscribe}>
                            <div className="flex-1 relative">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="glass"
                                    required
                                />
                            </div>
                            <Button type="submit" variant="secondary" loading={status === 'loading'}>
                                Subscribe
                            </Button>
                        </form>
                        {message && (
                            <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-gray-950 py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Brand Column */}
                        <div className="col-span-2 md:col-span-3 lg:col-span-1">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M6 12L10 8L14 12L18 8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 16L10 12L14 16L18 12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-white">flowva</span>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                                Your smart space for managing digital tools while earning rewards.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { icon: Twitter, href: 'https://twitter.com' },
                                    { icon: Instagram, href: 'https://instagram.com' },
                                    { icon: Linkedin, href: 'https://linkedin.com' },
                                    { icon: Youtube, href: 'https://youtube.com' },
                                ].map(({ icon: Icon, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-brand-purple hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        {Object.entries({ Hub: footerLinks.hub, Company: footerLinks.company, Support: footerLinks.support, Legal: footerLinks.legal }).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                    {title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="text-sm text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-950 border-t border-white/10 py-6">
                <div className="container">
                    <p className="text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Flowva. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
