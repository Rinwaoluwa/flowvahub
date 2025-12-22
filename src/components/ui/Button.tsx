import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
    size?: 'sm' | 'md' | 'lg'
    fullWidth?: boolean
    loading?: boolean
    icon?: ReactNode
}

const variantClasses = {
    primary: 'bg-black text-white shadow-button hover:shadow-soft-lg hover:bg-gray-800',
    secondary: 'bg-brand-purple text-white hover:bg-brand-purple-light shadow-purple',
    outline: 'bg-transparent border border-brand-purple-border text-gray-900 hover:bg-brand-purple hover:text-white hover:border-brand-purple',
    ghost: 'bg-transparent text-gray-700 hover:text-brand-purple hover:bg-gray-50',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
}

const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    icon,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-pill 
        transition-all duration-200 ease-linear
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${loading ? 'relative text-transparent' : ''}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                </span>
            )}
            {icon && <span className="flex items-center justify-center">{icon}</span>}
            {children}
        </button>
    )
}

export default Button
