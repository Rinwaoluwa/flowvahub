import { useState, useRef } from 'react'
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
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const handleDropdownEnter = (label: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setActiveDropdown(label)
    }

    const handleDropdownLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null)
            timeoutRef.current = null
        }, 150) // Small delay to allow moving to dropdown content
    }

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    console.log("active dropdwon: ", activeDropdown)

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            {/* Notification Banner */}
            <div className=" bg-black text-white  flex w-full text-xs font-manrope md:text-sm h-14 items-center px-3 ">
                <p className="text-center w-full">
                    🚀 Big news! The full Flowva experience + mobile apps are launching soon on iOS &amp; Android
                </p>
            </div>

            <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300 relative z-40">
                <div className="container">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 flex items-center justify-center">
                                <img src="/flowva_icon.png" alt="Flowva Icon" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1 bg-black-50/80 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-md">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
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

                        <div
                            className={`
                absolute top-16 left-0 right-0 transition-all duration-300 origin-top z-40
                ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
              `}
                            onMouseEnter={() => {
                                if (timeoutRef.current) {
                                    clearTimeout(timeoutRef.current)
                                    timeoutRef.current = null
                                }
                            }}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <div>
                                <div className="bg-white shadow-[0_50px_100px_-20px_rgba(120,50,255,0.15)] border border-gray-100 p-6 overflow-hidden">

                                    {/* Hub Dropdown */}
                                    {activeDropdown === 'Hub' && (
                                        <div className="grid grid-cols-3 gap-6">
                                            {[
                                                { label: 'DISCOVER', href: '/dashboard/discover', color: 'bg-purple-100', icon: '🧭' },
                                                { label: 'LIBRARY', href: '/dashboard/library', color: 'bg-orange-100', icon: '📂' },
                                                { label: 'REWARD', href: '/dashboard/rewards', color: 'bg-pink-100', icon: '🪙' }
                                            ].map((item) => (
                                                <Link key={item.label} to={item.href} className="group flex flex-col items-center text-center">
                                                    <div className={`
                             aspect-[4/5] rounded-3xl ${item.color} h-96 mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300
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
                                    <button onClick={handleSignOut} className="w-[84px] font-manrope h-[40px] text-xs font-bold border-[#9013FE1A] rounded-[100px] border p-[4px]">
                                        <div className="h-full flex items-center justify-center w-full whitespace-nowrap px-[16px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                                            Sign Out
                                        </div>
                                    </button>
                                </>
                            ) : (
                                <>


                                    <Link to="/auth/signin">
                                        <button className="w-[84px] h-[40px] text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[4px]">
                                            <div className="h-full w-full flex justify-center items-center px-[16px] transition-all ease-linear duration-200 rounded-[100px] bg-white hover:bg-[#111111] hover:shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] hover:text-white relative shadow-[0px_2px_4px_0px_#0000001A]">
                                                Login
                                            </div>
                                        </button>
                                    </Link>
                                    <Link to="/auth/signup">
                                        <button className="w-[84px] font-manrope h-[40px] text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[4px]">
                                            <div className="h-full flex items-center justify-center  w-full whitespace-nowrap px-[16px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                                                Sign up
                                            </div>
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
