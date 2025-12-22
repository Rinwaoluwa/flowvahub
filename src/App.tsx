import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Auth Pages
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import ForgotPassword from './pages/auth/ForgotPassword'
import AuthCallback from './pages/auth/AuthCallback'

// Dashboard Pages
import Discover from './pages/dashboard/Discover'
import Library from './pages/dashboard/Library'
import Rewards from './pages/dashboard/Rewards'
import Settings from './pages/dashboard/Settings'

// Components
import ProtectedRoute from './components/auth/ProtectedRoute'
import DashboardLayout from './components/layout/DashboardLayout'

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth Routes */}
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/callback" element={<AuthCallback />} />

            {/* Dashboard Routes (Protected) */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Discover />} />
                <Route path="discover" element={<Discover />} />
                <Route path="library" element={<Library />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Placeholder Routes */}
            <Route path="/blog" element={<NotFound />} />
            <Route path="/affiliate" element={<NotFound />} />
            <Route path="/influencer" element={<NotFound />} />
            <Route path="/referral" element={<NotFound />} />
            <Route path="/terms" element={<NotFound />} />
            <Route path="/privacy" element={<NotFound />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
