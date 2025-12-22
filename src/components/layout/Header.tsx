import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../ui/Button'

const navLinks = [
    {
        label: 'Hub',
        items: [
            { label: 'Discover', href: '/dashboard/discover' },
            { label: 'Library', href: '/dashboard/library' },
            { label: 'Rewards', href: '/dashboard/rewards' }
        ]
    },
    {
        label: 'Company',
        items: [
            { label: 'About Us', href: '/about' },
            { label: 'Blog', href: '/blog' }
        ]
    },
    {
        label: 'Support',
        items: [
            { label: 'FAQ', href: '/faq' },
            { label: 'Contact Us', href: '/contact' }
        ]
    },
    {
        label: 'Community',
        items: [
            { label: 'Affiliate', href: '/affiliate' },
            { label: 'Influencer', href: '/influencer' },
            { label: 'Referral', href: '/referral' }
        ]
    }
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const handleDropdownEnter = (label: string) => {
        setActiveDropdown(label)
    }

    const handleDropdownLeave = () => {
        setActiveDropdown(null)
    }

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            {/* Notification Banner */}
            <div className="bg-black text-white text-[10px] sm:text-xs font-medium py-2 text-center relative z-50">
                <p className="flex items-center justify-center gap-2">
                    <span>🚀</span>
                    <span>Big news! The full Flowva experience + mobile apps are launching soon on iOS & Android</span>
                </p>
            </div>

            <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300 relative z-40">
                <div className="container">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-purple transition-all duration-300 border border-gray-100">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">flowva</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-md">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className=""
                                    onMouseEnter={() => handleDropdownEnter(link.label)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`
                      flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${activeDropdown === link.label ? 'text-gray-900 bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}
                    `}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-brand-purple' : 'text-gray-400'}`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </nav>

                        {/* Mega Menu Dropdown Container */}
                        <div
                            className={`
                absolute top-full left-0 right-0 pt-4 px-4 transition-all duration-300 origin-top z-40
                ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
              `}
                            onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <div className="container mx-auto max-w-5xl">
                                <div className="bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(120,50,255,0.15)] border border-gray-100 p-6 overflow-hidden">

                                    {/* Hub Dropdown */}
                                    {activeDropdown === 'Hub' && (
                                        <div className="grid grid-cols-3 gap-6">
                                            {[
                                                { label: 'DISCOVER', href: '/dashboard/discover', color: 'bg-purple-100', icon: '🧭' },
                                                { label: 'LIBRARY', href: '/dashboard/library', color: 'bg-orange-100', icon: '📂' },
                                                { label: 'REWARD', href: '/dashboard/rewards', color: 'bg-pink-100', icon: '🪙' }
                                            ].map((item) => (
                                                <Link key={item.label} to={item.href} className="group block text-center">
                                                    <div className={`
                             aspect-[4/5] rounded-3xl ${item.color} mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300
                             bg-gradient-to-br from-white/40 to-white/0
                           `}>
                                                        <div className="text-[80px] drop-shadow-2xl filter transform group-hover:-translate-y-2 transition-transform duration-500">
                                                            {item.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="font-impact text-2xl uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors">
                                                        {item.label}
                                                    </h3>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Company Dropdown */}
                                    {activeDropdown === 'Company' && (
                                        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                                            {[
                                                { label: 'ABOUT US', href: '/about', color: 'bg-indigo-100', icon: 'ℹ️' },
                                                { label: 'BLOG', href: '/blog', color: 'bg-blue-100', icon: '💬' }
                                            ].map((item) => (
                                                <Link key={item.label} to={item.href} className="group block text-center">
                                                    <div className={`
                             aspect-square rounded-3xl ${item.color} mb-4 flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-300
                             bg-gradient-to-br from-white/40 to-white/0
                           `}>
                                                        <div className="text-[80px] drop-shadow-2xl">
                                                            {item.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="font-impact text-2xl uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors">
                                                        {item.label}
                                                    </h3>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Support Dropdown */}
                                    {activeDropdown === 'Support' && (
                                        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                                            {[
                                                { label: 'FAQ', href: '/faq', color: 'bg-teal-100', icon: '❓' },
                                                { label: 'CONTACT US', href: '/contact', color: 'bg-green-100', icon: '✉️' }
                                            ].map((item) => (
                                                <Link key={item.label} to={item.href} className="group block text-center">
                                                    <div className={`
                             aspect-square rounded-3xl ${item.color} mb-4 flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-300
                             bg-gradient-to-br from-white/40 to-white/0
                           `}>
                                                        <div className="text-[80px] drop-shadow-2xl">
                                                            {item.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="font-impact text-2xl uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors">
                                                        {item.label}
                                                    </h3>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Community Dropdown */}
                                    {activeDropdown === 'Community' && (
                                        <div className="grid grid-cols-3 gap-6">
                                            {[
                                                { label: 'AFFILIATE', href: '/affiliate', color: 'bg-yellow-100', icon: '🤝' },
                                                { label: 'INFLUENCER', href: '/influencer', color: 'bg-red-100', icon: '🌟' },
                                                { label: 'REFERRAL', href: '/referral', color: 'bg-cyan-100', icon: '🎁' }
                                            ].map((item) => (
                                                <Link key={item.label} to={item.href} className="group block text-center">
                                                    <div className={`
                             aspect-[4/5] rounded-3xl ${item.color} mb-4 flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-300
                             bg-gradient-to-br from-white/40 to-white/0
                           `}>
                                                        <div className="text-[80px] drop-shadow-2xl">
                                                            {item.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="font-impact text-2xl uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors">
                                                        {item.label}
                                                    </h3>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            {user ? (
                                <>
                                    <Link to="/dashboard">
                                        <Button variant="ghost" size="sm">Dashboard</Button>
                                    </Link>
                                    <Button variant="outline" size="sm" onClick={handleSignOut} className="rounded-full border-gray-200 hover:border-gray-900 hover:bg-white text-gray-600 hover:text-gray-900">
                                        Sign Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/auth/signin">
                                        <button className="px-6 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all border border-purple-100 hover:bg-black hover:text-white hover:border-black">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="/auth/signup">
                                        <button className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#3a3a42] to-[#2D2D35] text-white font-bold text-sm shadow-[0_4px_12px_rgba(45,45,53,0.3)] hover:shadow-[0_6px_16px_rgba(45,45,53,0.4)] hover:scale-105 transition-all ring-1 ring-purple-100/50 ring-offset-2 ring-offset-white">
                                            Sign up
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-xl z-50 overflow-y-auto animate-in slide-in-from-top duration-300">
                        <div className="container py-8">
                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <div key={link.label} className="flex flex-col gap-3">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">
                                            {link.label}
                                        </span>
                                        {link.items.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.href}
                                                className="py-3 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-2xl transition-all"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </nav>
                            <div className="flex flex-col gap-4 mt-10 pt-8 border-t border-gray-100">
                                {user ? (
                                    <>
                                        <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="outline" fullWidth className="rounded-xl py-4">Dashboard</Button>
                                        </Link>
                                        <Button variant="ghost" fullWidth onClick={handleSignOut} className="py-4">
                                            Sign Out
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="outline" fullWidth className="rounded-xl py-4 text-lg">Login</Button>
                                        </Link>
                                        <Link to="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="dark" fullWidth className="rounded-xl py-4 text-lg shadow-xl shadow-purple-500/10">Sign up</Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
