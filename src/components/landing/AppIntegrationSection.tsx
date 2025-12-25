export function AppIntegrationSection() {
    return (
        <section className="flex justify-center mb-20 mx-[14px]">
            <div className="xl:max-w-[80%] w-full flex flex-col lg:flex-row items-center gap-8">
                {/* Left Card - Download */}
                <div className="bg-[#FFD7D780] max-w-[580px] w-full rounded-[16px] md:rounded-[32px] p-[16px] md:p-[40px]">
                    <button className="p-[10px_16px] bg-[#0000000D] text-sm rounded-[100px] mb-4 font-manrope font-semibold">
                        Download
                    </button>
                    <h2 className="mt-5 mb-3 text-[20px] md:text-[32px] font-semibold font-manrope">
                        ORGANIZE, DISCOVER, AND EARN ON THE GO.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center my-3 gap-5">
                        <div className="bg-[#FFFFFF] shadow-[1px_4px_10px_0px_#ABABAB1A,2px_17px_17px_0px_#ABABAB17,5px_39px_24px_0px_#ABABAB0D,9px_69px_28px_0px_#ABABAB03,15px_108px_30px_0px_#ABABAB00] rounded-[32px] w-full flex-1 p-[16px] md:p-[24px]">
                            <div className="flex flex-col text-[20px] gap-4">
                                <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-[16px] w-full hover:bg-gray-200 transition-colors">
                                    <img src="/appstore.svg" alt="App Store Icon" />
                                    <span className="font-manrope font-bold text-sm">Apple App Store</span>
                                </button>
                                <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-[16px] w-full hover:bg-gray-200 transition-colors">
                                    <img src="/playstore.svg" alt="Play Store Icon" />
                                    <span className="font-manrope font-bold text-sm">Google Play Store</span>
                                </button>
                            </div>
                            <div className="mt-5 flex justify-center md:hidden">
                                <img src="/barcode.png" alt="Barcode" />
                            </div>
                        </div>
                        <div className="hidden -ml-8 md:block">
                            <img src="/barcode.png" alt="Barcode" className='h-[208px]' style={{height: 140}} />
                        </div>
                    </div>

                    <button className="rounded-[100px] bg-[#FFFFFFCC] w-full mt-3 p-[16px] md:p-[24px] text-[20px] text-start font-manrope font-bold">
                        ⌛ Coming soon
                    </button>
                </div>

                {/* Right Card - Benefits */}
                <div className="bg-[#111111] rounded-[16px] md:rounded-[32px] max-w-[580px] p-[16px] md:p-[40px] w-full text-white">
                    <button className="p-[10px_16px] bg-[#FFFFFF3D] text-white text-sm rounded-[100px] mb-4 font-manrope font-semibold">
                        Benefits
                    </button>
                    <ul className="space-y-4 my-5">
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 rounded-full bg-white flex-shrink-0"></span>
                            <span className="text-[18px] md:text-[24px] font-bold text-white font-manrope">QUICK DAILY CHECK-INS</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 rounded-full bg-[#ffffff4f] flex-shrink-0"></span>
                            <span className="text-[18px] md:text-[24px] font-bold text-[#ffffff4f] font-manrope">DISCOVER TOOLS ANYWHERE</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 rounded-full bg-[#ffffff4f] flex-shrink-0"></span>
                            <span className="text-[18px] md:text-[24px] font-bold text-[#ffffff4f] font-manrope">NEVER MISS A REWARD</span>
                        </li>
                    </ul>

                    {/* Placeholder for 'How It Works' Image */}
                    <div className="mt-10 w-full h-[200px] flex items-center justify-center">
                        <img src="/how_it_works.png" alt="How it works" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppIntegrationSection
