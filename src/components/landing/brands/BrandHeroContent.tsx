export function BrandHeroContent() {
    return (
        <div>
            <h1 className="text-[40px] md:text-[72px] mt-[55px] md:mt-[130px] text-center font-[Impact] leading-[120%]">
                CONNECT WITH <span className="inline-flex px-5 rounded-[100px] text-white bg-[linear-gradient(90deg,_#9013FE_0%,_#FF8687_100%)]">TECH</span> <br className="hidden md:block" />PROFESSIONALS WHO ACTUALLY ENGAGE
            </h1>
            <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-[232px] rounded-[100px] border border-[#9013FE1A] p-[6px] font-bold text-sm font-manrope">
                <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                    Start Your 3-Day Free Trial
                </div>
            </button>
            <div className="overflow-hidden mt-12 md:mt-16 relative w-full group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                {/* 
                    Using animate-scrollLeft, which scrolls from 0 to -50%.
                    We need two sets of the same items to make it seamless.
                    However, the original code had 4 items, then duplicated them.
                    For a pure CSS infinite scroll, you typically have [Items][DuplicateItems] in a flex container that is wide enough.
                */}
                <div className="flex w-max py-8 animate-scrollLeft group-hover:pause">
                    {/* Card 1: Brevo */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/brevo.svg" alt="Brevo Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(249, 255, 246)', color: 'black' }}>
                                    <a href="https://get.brevo.com/9vml1qjuxigb" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Brevo</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Email & Marketing Automation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Jotform */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/jotform.svg" alt="Jotform Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(245, 215, 197)', color: 'black' }}>
                                    <a href="https://www.jotform.com/ai/agents/?partner=flowvahub-WOAEEuoEob" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Jotform</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Form Builder Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Monday */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                     <img src="/monday.svg" alt="Monday Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(184, 184, 250)', color: 'white' }}>
                                    <a href="https://try.monday.com/b7pem672ddxh" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Monday</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="white" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Project Management</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Reclaim */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/reclaim.svg" alt="Reclaim Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>
                                    <a href="https://go.reclaim.ai/ur9i6g5eznps" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Reclaim</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Smart Scheduling</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- DUPLICATE SET FOR INFINITE SCROLL --- */}

                    {/* Card 1: Brevo */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/brevo.svg" alt="Brevo Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(249, 255, 246)', color: 'black' }}>
                                    <a href="https://get.brevo.com/9vml1qjuxigb" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Brevo</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Email & Marketing Automation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Jotform */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/jotform.svg" alt="Jotform Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(245, 215, 197)', color: 'black' }}>
                                    <a href="https://www.jotform.com/ai/agents/?partner=flowvahub-WOAEEuoEob" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Jotform</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Form Builder Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Monday */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/monday.svg" alt="Monday Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(184, 184, 250)', color: 'white' }}>
                                    <a href="https://try.monday.com/b7pem672ddxh" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Monday</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="white" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Project Management</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Reclaim */}
                    <div className="mx-4">
                        <div className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]" tabIndex={0} role="button" aria-pressed="false">
                            <div className="flip-card-inner ">
                                <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0] bg-white">
                                    <img src="/reclaim.svg" alt="Reclaim Banner" />
                                </div>
                                <div className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}>
                                    <a href="https://go.reclaim.ai/ur9i6g5eznps" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}>
                                        <span>Reclaim</span>
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9" stroke="black" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <p className="text-xs md:text-sm mb-3 font-manrope">Smart Scheduling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
