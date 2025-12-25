import { Users, Briefcase } from 'lucide-react'
import { BrandHeroContent } from './brands/BrandHeroContent'
import { UserHeroContent } from './users/UserHeroContent'

interface HeroSectionProps {
    userType: 'users' | 'brands'
    setUserType: (type: 'users' | 'brands') => void
}

export function HeroSection({ userType, setUserType }: HeroSectionProps) {
    return (
        <section className={`relative h-auto flex flex-col pt-[25px] md:pt-[150px] overflow-hidden bg-white ${userType === 'users' ? 'pb-20' : 'pb-0'}`}>
            {/* Toggle */}
            <div className="left-1/2 right-1/2 -translate-x-1/2 relative w-full max-w-[265px] h-[64px] flex items-center gap-[8px] rounded-[100px] p-[8px] bg-[#F9F9F9] border border-[#0000000D]">
                <div
                    className={`absolute top-[8px] h-[48px] w-[calc(50%-8px)] rounded-[100px] transition-transform duration-300 ease-in-out shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] bg-[#111111] ${userType === 'users' ? 'translate-x-0' : 'translate-x-[100%] ml-[8px]'
                        }`}
                ></div>

                <button
                    onClick={() => setUserType('users')}
                    className="relative z-10 flex items-center justify-center w-[50%] h-[48px] text-sm font-bold rounded-[100px] font-manrope"
                >
                    <img src="/users_icon.svg" alt="User Icon" />
                    <span
                        className={`transition-colors duration-300 ${userType === 'users'
                            ? 'bg-gradient-to-r from-[#ECD6FF] to-[#FF8687] bg-clip-text text-transparent'
                            : 'text-gray-500'
                            }`}
                    >
                        For users
                    </span>
                </button>

                <button
                    onClick={() => setUserType('brands')}
                    className="relative z-10 flex items-center justify-center w-[50%] h-[48px] text-sm font-bold rounded-[100px] font-manrope"
                >
                    <img src="/brands.svg" alt="Brand Icon" />
                    <span
                        className={`transition-colors duration-300 ${userType === 'brands'
                            ? 'bg-gradient-to-r from-[#ECD6FF] to-[#FF8687] bg-clip-text text-transparent'
                            : 'text-gray-500'
                            }`}
                    >
                        For brands
                    </span>
                </button>
            </div>

            {/* Content Switcher with Swipe Animation */}
            <div className="relative w-full overflow-hidden">
                <div
                    className={`flex items-start w-[200%] transition-transform duration-300 ease-in-out ${userType === 'users' ? 'translate-x-0' : '-translate-x-1/2'
                        }`}
                >
                    <div className={`w-1/2 transition-opacity duration-300 ${userType === 'users' ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                        <UserHeroContent />
                    </div>
                    <div className={`w-1/2 transition-opacity duration-300 ${userType === 'brands' ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                        <BrandHeroContent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
