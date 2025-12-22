import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../ui/Toggle'

// Marquee icon data
const marqueeIcons = [
    { name: 'Figma', color: 'bg-black', text: 'white', icon: 'F' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Google', color: 'bg-white', text: 'black', icon: 'G' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Zoom', color: 'bg-blue-500', text: 'white', icon: 'Z' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Canva', color: 'bg-cyan-500', text: 'white', icon: 'C' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'ChatGPT', color: 'bg-teal-600', text: 'white', icon: 'AI' }
]

const marqueeIconsRow2 = [
    { name: 'Notion', color: 'bg-white', text: 'black', icon: 'N' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Slack', color: 'bg-purple-600', text: 'white', icon: 'S' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Linear', color: 'bg-indigo-600', text: 'white', icon: 'L' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Github', color: 'bg-gray-800', text: 'white', icon: 'GH' },
    { name: 'FlowCoins', color: 'bg-gradient-brand', text: 'white', icon: '50', sub: 'FlowCoins', circle: true },
    { name: 'Framer', color: 'bg-black', text: 'white', icon: 'Fr' }
]

export function HeroSection() {
    const [userType, setUserType] = useState('For users')

    const IconCard = ({ item }: { item: typeof marqueeIcons[0] }) => {
        if (item.circle) {
            return (
                <div className="flex flex-col items-center justify-center p-2">
                    <div className="w-20 h-20 rounded-full bg-gradient-brand p-[2px] shadow-lg shadow-purple-500/20">
                        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-white border border-white/20">
                            <span className="text-2xl font-bold drop-shadow-md">50</span>
                            <span className="text-[10px] font-medium opacity-90">FlowCoins</span>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className={`
        w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold
        ${item.color} ${item.text === 'white' ? 'text-white' : 'text-gray-900'}
        transform transition-transform hover:scale-105
      `}>
                {item.icon}
            </div>
        )
    }

    return (
        <section className="relative min-h-screen flex flex-col pt-48 overflow-hidden bg-white">
            {/* Content */}
            <div className="container relative z-10 flex flex-col items-center text-center px-4 mb-20">
                {/* Toggle */}
                {/* Toggle */}
                <div className="mb-12">
                    <Toggle
                        leftLabel="For users"
                        rightLabel="For brands"
                        initialValue={userType === 'For brands'}
                        onToggle={(val) => setUserType(val ? 'For brands' : 'For users')}
                    />
                </div>

                {/* Headline */}
                {/* Headline */}
                <h1 className="headline-impact text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-10 tracking-tight leading-[0.95] max-w-7xl mx-auto">
                    YOUR <span className="inline-block bg-gradient-to-r from-[#8A2BE2] to-[#FF69B4] text-white px-2 sm:px-4 rounded-full transform -skew-x-6 mx-1 sm:mx-2">SMART</span> SPACE TO MANAGE YOUR
                    <br />
                    DIGITAL LIFE AND BE REWARDED
                </h1>

                {/* CTA Button */}
                <div className="mt-12 relative group inline-block">
                    <Link to="/auth/signup">
                        <button className="relative px-10 sm:px-12 py-5 sm:py-6 rounded-full bg-gradient-to-b from-[#3a3a42] to-[#1A1A1A] text-white font-bold text-xl 
                            shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                            ring-1 ring-purplmt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-[232px] rounded-[100px] border border-[#9013FE1A] p-[6px] font-bold text-sm font-manropee-100 ring-offset-[6px] ring-offset-white
                            hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-300 z-10">
                            <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]"></div>
                            Start Earning Today
                        </button>
                    </Link>
                </div>
            </div>

            {/* Marquee Section (Bottom) */}
            <div className="w-full mt-auto pb-10 space-y-8">
                {/* Row 1: Left */}
                <div className="flex overflow-hidden relative w-full group">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap px-4">
                        {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((item, i) => (
                            <IconCard key={i} item={item} />
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                </div>

                {/* Row 2: Right */}
                <div className="flex overflow-hidden relative w-full group">
                    <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap px-4">
                        {[...marqueeIconsRow2, ...marqueeIconsRow2, ...marqueeIconsRow2].map((item, i) => (
                            <IconCard key={i} item={item} />
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
