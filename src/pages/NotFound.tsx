import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
            <div className="text-center">
                <h1 className="headline-impact text-[120px] sm:text-[160px] gradient-text leading-none mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <Button size="lg">Go Back Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
