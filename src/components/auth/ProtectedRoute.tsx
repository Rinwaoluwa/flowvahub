import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { PageLoader } from '../ui/Loader'

interface ProtectedRouteProps {
    children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user, loading } = useAuth()

    if (loading) {
        return <PageLoader />
    }

    if (!user) {
        return <Navigate to="/auth/signin" replace />
    }

    return <>{children}</>
}

export default ProtectedRoute
