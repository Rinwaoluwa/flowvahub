import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { PageLoader } from '../../components/ui/Loader'

export function AuthCallback() {
    const navigate = useNavigate()
    const { user, loading } = useAuth()

    useEffect(() => {
        if (!loading && user) {
            navigate('/dashboard', { replace: true })
        }
    }, [user, loading, navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
            <PageLoader />
        </div>
    )
}

export default AuthCallback
