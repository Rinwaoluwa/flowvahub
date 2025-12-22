import { InputHTMLAttributes, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
    variant?: 'default' | 'glass'
}

export function Input({
    label,
    error,
    icon,
    variant = 'default',
    type = 'text',
    className = '',
    ...props
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

    const baseClasses = 'w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none'
    const variantClasses = variant === 'glass'
        ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:border-white/50'
        : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10'

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-gray-700">{label}</label>
            )}
            <div className={`relative flex items-center ${error ? 'ring-2 ring-red-500/20' : ''}`}>
                {icon && (
                    <span className="absolute left-3 text-gray-400">{icon}</span>
                )}
                <input
                    type={inputType}
                    className={`
            ${baseClasses}
            ${variantClasses}
            ${icon ? 'pl-10' : ''}
            ${isPassword ? 'pr-10' : ''}
            ${error ? 'border-red-500' : ''}
          `}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    )
}

export default Input
