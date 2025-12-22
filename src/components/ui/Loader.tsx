interface LoaderProps {
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-4',
}

export function Loader({ size = 'md', className = '' }: LoaderProps) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div
                className={`
          border-gray-200 border-t-brand-purple rounded-full animate-spin
          ${sizeClasses[size]}
        `}
            />
        </div>
    )
}

export function PageLoader() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-[400px] text-gray-500">
            <Loader size="lg" />
            <p>Loading...</p>
        </div>
    )
}

export default Loader
