import { useState } from 'react'

export function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        {
            id: 0,
            number: '1',
            title: 'Sign up & Connect',
            subtitle: 'Set up your workspace in minutes',
            bg: 'bg-[#ECD6FF]',
            image: "/signin-complete.png"
        },
        {
            id: 1,
            number: '2',
            title: 'Organize & Track',
            subtitle: 'Add your tools, subscriptions, and tasks.',
            bg: 'bg-[#ECD6FF]',
            image: "/organize-track.png"
        },
        {
            id: 2,
            number: '3',
            title: 'Earn & Enjoy',
            subtitle: 'Check in daily, try new tools, and watch your points grow.',
            bg: 'bg-[#ECD6FF]',
            image: "/flowva_coins.svg"
        }
    ]

    return (
        <section className="my-24 px-[14px]">
            <h2 className="text-[56px] md:text-[64px] leading-[120%] font-impact mb-10 text-center">
                SIMPLE, REWARDING, CALM
            </h2>

            {/* Desktop View (Interactive Grid) */}
            <div className="hidden lg:block w-full lg:w-[80%] xl:max-w-[80%] h-[552px] mx-auto">
                <div className="flex w-full h-full gap-4">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`
                                    ${isActive ? 'flex-[4] cursor-default' : 'flex-[1] cursor-pointer hover:flex-[1.2]'} 
                                    relative overflow-hidden rounded-xl p-6 border border-[#0000001F] transition-all duration-500 ease-in-out
                                    ${isActive ? 'bg-[#ECD6FF]' : 'bg-[#F5EBFF]'}
                                `}
                            >
                                <div className="flex flex-col justify-between h-full whitespace-nowrap">
                                    <h2 className="font-impact text-black text-[120px] xl:text-[180px] leading-none">
                                        {step.number}
                                    </h2>

                                    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-100'}`}>
                                        <h3 className={`text-[20px] xl:text-[36px] text-black font-manrope font-bold ${isActive ? '' : 'truncate'}`}>
                                            {step.title}
                                        </h3>

                                        <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[100px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-[20px] text-black font-manrope font-semibold">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>



                                {isActive && (
                                    <>
                                        {index === 2 ? (
                                            <div className="absolute right-5 top-2 w-[300px] pointer-events-none fade-in-animation">
                                                <div className="flex  items-center gap-1">
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                </div>
                                                <div className="flex  items-center gap-1 -ml-20">
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                </div>
                                                <div className="flex  items-center gap-1">
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                    <img src="/flowva_coin.svg" alt="flowva_coin" />
                                                </div>
                                            </div>
                                        ) :
                                            (
                                                <div className="absolute right-5 -top-10 w-[300px] h-full pointer-events-none fade-in-animation">
                                                    <img src={step.image as string} alt={step.title} />
                                                </div>
                                            )}
                                    </>

                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Mobile View (Stack) */}
            <div className="flex flex-col md:flex-row justify-center lg:hidden w-full gap-4">
                {steps.map((step, index) => (
                    <div key={index} className="relative overflow-hidden text-black bg-[#ECD6FF] border-[#0000001F] border rounded-xl p-6 h-[407px] pb-10">
                        <div className="flex flex-col justify-between h-full">
                            <h2 className="font-impact text-black text-[120px] xl:text-[180px]">
                                {step.number}
                            </h2>
                            <div>
                                <h3 className="text-[36px] text-black font-manrope font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-[20px] text-black font-manrope font-semibold">
                                    {step.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorksSection
