export function BrandHowItWorks() {
    return (
        <section className="flex justify-center my-20 px-[14px]">
            <div className="w-full md:max-w-[80%]">
                <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">HOW IT WORKS</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                        <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#F77A38] w-full ">
                            <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">Step 1</div>
                            <div className="">
                                <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">Subscribe.</h2>
                                <p className="text-[#FFFFFFCC] text-[24px]">Choose the plan that fits your feature goals.</p>
                            </div>
                            <div className="mt-10 overflow-hidden h-64 w-full flex items-center justify-center">
                                <img src="/subscribe.svg" alt="Subscribe" />
                            </div>
                        </div>
                        <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#BC71FE] w-full ">
                            <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">Step 2</div>
                            <div>
                                <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">Launch Features</h2>
                                <p className="text-[#FFFFFFCC] text-[24px]">Set up actions, schedule them, and reach techies, freelancers, and remote workers where they work.</p>
                            </div>
                            <div className="mt-8 overflow-hidden h-64 w-full flex items-center justify-center">
                                <img src="/launch.svg" alt="Launch" />
                            </div>
                        </div>
                        <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#F76593] w-full ">
                            <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">Step 3</div>
                            <div>
                                <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">Engage Users</h2>
                                <p className="text-[#FFFFFFCC] text-[24px]">Offer perks and rewards that drive deeper participation.</p>
                            </div>
                            <div className="mt-10 overflow-hidden h-64 w-full flex items-center justify-center">
                                <img src="/speaker.svg" alt="Speaker" />
                            </div>
                        </div>
                        <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#008753] w-full ">
                            <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">Step 4</div>
                            <div>
                                <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">Track Results</h2>
                                <p className="text-[#FFFFFFCC] text-[24px]">Monitor feature performance in real time with actionable analytics.</p>
                            </div>
                            <div className="mt-10 overflow-hidden h-64 w-full flex items-center justify-center">
                                <img src="/track.svg" alt="Pie Chart" />
                            </div>
                        </div>
                        <div className="h-fit md:min-h-[378px] col-span-1 lg:col-span-2 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#159481] w-full ">
                            <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">Step 5</div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                                <div className="w-full ">
                                    <h2 className="text-[32px] md:text-[40px] my-5 font-manrope font-bold text-[#FFFFFF]">Optional Premium Support</h2>
                                    <p className="text-[#FFFFFFCC] text-[24px]">Optional Premium Support – Let the Flowva team run your features for maximum impact.</p>
                                </div>
                                <div className="overflow-hidden h-full w-full flex items-center justify-center">
                                    <img src="/crown.svg" alt="Crown" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
