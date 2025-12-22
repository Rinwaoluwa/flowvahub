import { ReactNode, CSSProperties } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hoverable?: boolean
    padding?: 'sm' | 'md' | 'lg' | 'xl'
    style?: CSSProperties
}

const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
}

export function Card({
    children,
    className = '',
    hoverable = false,
    padding = 'md',
    style
}: CardProps) {
    return (
        <div
            className={`
        bg-white rounded-3xl shadow-soft transition-all duration-200
        ${paddingClasses[padding]}
        ${hoverable ? 'hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer' : ''}
        ${className}
      `}
            style={style}
        >
            {children}
        </div>
    )
}

export default Card
