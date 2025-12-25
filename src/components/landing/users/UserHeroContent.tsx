const imgPaths = ["flowva_coin.svg", "asana.svg", "flowva_coin.svg", "vs_code.svg", "flowva_coin.svg", "framer.svg", "flowva_coin.svg", "google.svg", "flowva_coin.svg", "zoom.svg", "flowva_coin.svg", "canva.svg", "chatgpt.svg"]

export function UserHeroContent() {
    return (
        <>
            {/* Headline */}
            <div style={{ opacity: 1, transform: 'none' }}>
                <h1 className="text-[40px] md:text-[72px] mt-[55px] md:mt-[130px] text-center font-impact leading-[120%]">
                    YOUR <span className="inline-flex px-5 rounded-[100px] text-white bg-[linear-gradient(90deg,_#9013FE_0%,_#FF8687_100%)]">SMART</span> SPACE <br className="md:hidden" /> TO MANAGE YOUR <br /> DIGITAL LIFE AND BE REWARDED
                </h1>

                {/* CTA Button */}
                <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-[232px] rounded-[100px] border border-[#9013FE1A] p-[6px] font-bold text-sm font-manrope group">
                    <div className="w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] group-hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                        Start Earning Today
                    </div>
                </button>

                {/* Marquee Section */}
                <div className="overflow-hidden mt-12 md:mt-20 relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div className="flex w-max animate-marquee space-x-8">
                        {imgPaths.map((brand, i) => (
                            <div key={i} className="mx-4">
                                <div className="w-[77px] h-[77px] md:w-[127px] md:h-[127px] bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                                    <img src={brand} alt={brand} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-max animate-marquee-reverse mt-5 md:mt-10 space-x-8">
                        {imgPaths.reverse().map((brand, i) => (
                            <div key={i} className="mx-4">
                                <div className="w-[77px] h-[77px] md:w-[127px] md:h-[127px] bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                                    <img src={brand} alt={brand} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Value Prop Text */}
            <p className="px-[14px] text-[20px] md:text-[36px] mt-[70px] mb-20 md:my-28 text-center font-semibold font-manrope leading-[32px] md:leading-[40px]">
                Turn productivity into rewards with a calm, smart <br className="hidden md:block" /> space that organizes your tools, and keeps you in control.
            </p>

            {/* Stats Section */}
            <section className="flex justify-center px-[14px]">
                <div className="flex flex-col md:flex-row w-full lg:w-[80%] items-center gap-5">
                    {/* Stat 1 */}
                    <div className="w-full shadow-md max-w-[417.67px] pb-10 flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
                        <div className="flex flex-col gap-[12px]">
                            <h2 className="font-impact text-[56px]">10,000+</h2>
                            <p className="text-[24px]">Users</p>
                        </div>
                        <p className="text-[20px] font-manrope text-[#5F5F5F]">Already simplifying their workflow with Flowva</p>
                        <div className="flex items-center gap-2">
                            <img src="/users_chip.svg" alt="Users Images" />
                            <span className="font-semibold font-manrope">10,000+</span>
                        </div>
                    </div>
                    {/* Stat 2 */}
                    <div className="w-full shadow-md max-w-[417.67px] pb-10 flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
                        <div className="flex flex-col gap-[12px]">
                            <h2 className="font-impact text-[56px]">200+</h2>
                            <p className="text-[24px]">Tools</p>
                        </div>
                        <p className="text-[20px] font-manrope text-[#5F5F5F]">Curated and organized for you in the library</p>
                        <div className="flex items-center gap-2">
                            <img src="tools_chip.svg" alt="Tools Images" />
                            <span className="font-semibold font-manrope">and many more</span>
                        </div>
                    </div>
                    {/* Stat 3 */}
                    <div className="w-full shadow-md max-w-[417.67px] pb-10 flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
                        <div className="flex flex-col gap-[12px]">
                            <h2 className="font-impact text-[56px]">25+</h2>
                            <p className="text-[24px]">Countries</p>
                        </div>
                        <p className="text-[20px] font-manrope text-[#5F5F5F]">Reviewing tools and building smarter stacks every day</p>
                        <div className="flex items-center">
                            <img src="/country_flags.svg" alt="Country Flags" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
