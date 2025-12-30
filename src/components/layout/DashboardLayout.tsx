import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Compass, Library, Gift, Settings, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
    { path: '/dashboard', icon: Compass, label: 'Discover', end: true },
    { path: '/dashboard/library', icon: Library, label: 'My Library' },
    { path: '/dashboard/rewards', icon: Gift, label: 'Rewards' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' }
]

export function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { user, profile, signOut } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center gap-4 px-4 z-50">
                <button
                    className="p-2 text-gray-700"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle sidebar"
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Sidebar */}
            <aside className={`
        fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-200 flex flex-col z-50
        lg:translate-x-0 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="p-6 border-b border-gray-100">
                    <a href="/" className="flex items-center justify-center">
                        <div className="w-12 h-12">
                            <img src="/flowva_icon.png" alt="Flowva Icon" />
                        </div>
                    </a>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${isActive
                                    ? 'bg-brand-purple/10 text-brand-purple'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }
              `}
                            onClick={() => setSidebarOpen(false)}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold overflow-hidden">
                            {profile?.avatar_url ? (
                                <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <span>{user?.email?.charAt(0).toUpperCase() || 'U'}</span>
                            )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {profile?.full_name || user?.email?.split('@')[0] || 'User'}
                            </p>
                            <p className="text-xs text-gray-500">
                                🪙 {profile?.flow_coins || 0} FlowCoins
                            </p>
                        </div>
                    </div>
                    <button
                        className="flex items-center gap-2 w-full px-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                        onClick={handleSignOut}
                    >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 mt-16 lg:mt-0 p-4 lg:p-8 min-h-screen">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout
