import React, { useState } from 'react'
import { Users, Store } from 'lucide-react'

interface ToggleProps {
    leftLabel?: string
    rightLabel?: string
    initialValue?: boolean
    onToggle?: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = ({
    leftLabel = 'For users',
    rightLabel = 'For brands',
    initialValue = false,
    onToggle,
}) => {
    const [isRight, setIsRight] = useState(initialValue)

    const handleToggle = (value: boolean) => {
        setIsRight(value)
        if (onToggle) {
            onToggle(value)
        }
    }

    return (
        <div className="relative inline-flex items-center bg-white rounded-full p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 w-auto min-w-fit h-[54px] cursor-pointer">
            {/* Sliding Background Pill */}
            <div
                className={`
          absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0
          bg-[#2B2B33] border-[2px] border-[#0066FF] shadow-lg
          ${isRight ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}
        `}
            />

            {/* Left Option (Users) */}
            <div
                className="flex-1 relative z-10 h-full"
                onClick={() => handleToggle(false)}
            >
                <div className="flex items-center justify-center gap-2.5 h-full px-4 rounded-full">
                    {/* Icon Placeholder */}
                    <div className={`transition-all duration-300 transform ${!isRight ? 'scale-110' : 'scale-100 grayscale opacity-70'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Users
                                className={`nav-icon-3d drop-shadow-md ${!isRight ? 'text-[#9013FE]' : 'text-gray-400'}`}
                                size={20}
                                fill={!isRight ? '#9013FE' : 'none'}
                            />
                        </div>
                    </div>

                    <span className={`font-manrope font-bold text-[15px] tracking-tight transition-colors duration-300 whitespace-nowrap ${!isRight ? 'text-[#FF8687]' : 'text-[#1A1A1A]'}`}>
                        {leftLabel}
                    </span>
                </div>
            </div>

            {/* Right Option (Brands) */}
            <div
                className="flex-1 relative z-10 h-full"
                onClick={() => handleToggle(true)}
            >
                <div className="flex items-center justify-center gap-2.5 h-full px-4 rounded-full">
                    {/* Icon Placeholder */}
                    <div className={`transition-all duration-300 transform ${isRight ? 'scale-110' : 'scale-100 grayscale opacity-70'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Store
                                className={`nav-icon-3d drop-shadow-md ${isRight ? 'text-[#FF8687]' : 'text-gray-400'}`}
                                size={20}
                                fill={isRight ? '#FF8687' : 'none'}
                            />
                        </div>
                    </div>

                    <span className={`font-manrope font-bold text-[15px] tracking-tight transition-colors duration-300 whitespace-nowrap ${isRight ? 'text-[#FF8687]' : 'text-[#1A1A1A]'}`}>
                        {rightLabel}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Toggle
