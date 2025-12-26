import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

export function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { signUp, signInWithGoogle } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)

        try {
            const { error } = await signUp(email, password)
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

    const handleGoogleSignIn = async () => {
        try {
            const { error } = await signInWithGoogle()
            if (error) {
                setError(error.message)
            }
        } catch {
            setError('Failed to sign in with Google')
        }
    }

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]">
                <div className="w-full max-w-md text-center">
                    <div className="text-6xl mb-6">✉️</div>
                    <h2 className="text-2xl font-bold text-white mb-4">Check your email</h2>
                    <p className="text-white mb-8">
                        We've sent a confirmation link to <strong>{email}</strong>.
                        Please click the link to verify your account.
                    </p>
                    <Link to="/auth/signin">
                        <Button variant="outline" className='underline text-white'>Back to Sign In</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9] p-4">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-soft-lg p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-[#6D28D9] mb-2">Create your account</h1>
                        <p className="text-[#6B7280]">Start organizing your tools and earning rewards</p>
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

                        <Input
                            type="password"
                            label="Password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <Input
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <Button type="submit" fullWidth loading={loading} className="w-full text-base h-[55px] flex justify-center gap-2 items-center p-[11px] text-center !bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] !hover:bg-[#6D28D9]">
                            Create Account
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-500">or</span>
                        </div>
                    </div>

                    {/* Google Button */}
                    <button
                        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 mb-6"
                        onClick={handleGoogleSignIn}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>


                    <p className="text-center text-gray-600 text-sm mt-6">
                        Already have an account?{' '}
                        <Link to="/auth/signin" className="text-brand-purple font-semibold hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
