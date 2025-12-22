import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageLoader } from '../../components/ui/Loader'

export function AuthCallback() {
    const navigate = useNavigate()

    useEffect(() => {
        // After OAuth callback, redirect to dashboard
        const timer = setTimeout(() => {
            navigate('/dashboard')
        }, 1000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
            <PageLoader />
        </div>
    )
}

export default AuthCallback
