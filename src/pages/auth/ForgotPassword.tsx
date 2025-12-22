import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

export function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { resetPassword } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const { error } = await resetPassword(email)
            if (error) {
                setError(error.message)
            } else {
                setSuccess(true)
            }
        } catch {
            setError('An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
                <div className="w-full max-w-md text-center">
                    <div className="text-6xl mb-6">📧</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Check your email</h2>
                    <p className="text-gray-600 mb-8">
                        We've sent password reset instructions to <strong>{email}</strong>.
                    </p>
                    <Link to="/auth/signin">
                        <Button variant="outline">Back to Sign In</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M6 12L10 8L14 12L18 8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 16L10 12L14 16L18 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">flowva</span>
                </Link>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-soft-lg p-8">
                    <Link
                        to="/auth/signin"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to sign in</span>
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h1>
                        <p className="text-gray-600">Enter your email and we'll send you reset instructions.</p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            icon={<Mail size={18} />}
                            required
                        />

                        <Button type="submit" fullWidth loading={loading} className="mt-2">
                            Send Reset Instructions
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
