
export function BrandAmplifySection() {
    return (
        <section className="flex justify-center mb-20 overflow-hidden">
            <div className="w-full md:max-w-[80%] px-[14px]">
                <h2 className="text-[56px] md:text-[64px] font-impact mb-10 text-center">
                    AMPLIFY YOUR BRAND'S SUCCESS
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-[24px]">
                    <div className="h-[453px] text-start flex flex-col items-start justify-between bg-[#F5EBFF] rounded-[24px] p-[32px] w-full lg:col-span-3">
                        <h2 className="text-[32px] font-manrope font-bold">Engage an active community of tech savvy users</h2>
                        {/* Placeholder Image */}
                        <div className="w-full h-[200px] bg-purple-200 rounded-xl flex items-center justify-center text-purple-800">Users Image</div>
                        <p className="text-[20px] text-[#535862]">Thousands of engaged users explore and use tools on our platform everyday</p>
                    </div>

                    <div className="h-[453px] bg-[#F5EBFF] flex flex-col items-start justify-between rounded-[24px] lg:col-span-4 p-[32px]">
                        <h2 className="text-[32px] font-manrope font-bold">Offer Exclusive Value</h2>
                        {/* Placeholder Image */}
                        <div className="w-full h-[200px] bg-purple-200 rounded-xl flex items-center justify-center text-purple-800">Value Image</div>
                        <p className="text-[20px] text-[#535862]">Stand out with special discounts, cashback, or unique perks for our users</p>
                    </div>

                    <div className="h-[453px] bg-[#F5EBFF] flex flex-col items-start justify-between rounded-[24px] lg:col-span-4 p-[32px]">
                        <h2 className="text-[32px] font-manrope font-bold">Boost Your Visibility</h2>
                        {/* Placeholder Image */}
                        <div className="w-full h-[200px] bg-purple-200 rounded-xl flex items-center justify-center text-purple-800">Visibility Image</div>
                        <p className="text-[20px] text-[#535862]">Get featured across our Homepage, Discover section, Rewards Hub, Library, Newsletter, and Blog</p>
                    </div>

                    <div className="h-[453px] bg-[#111111] relative text-white flex flex-col items-start overflow-hidden rounded-[24px] lg:col-span-3 p-[32px]">
                        <h2 className="text-[32px] font-manrope font-bold">Measure Your Impact</h2>
                        <p className="text-[20px] mt-5 text-[#FFFFFFCC]">Track how many users unlock, engage with, and activate your offer.</p>
                        <div className="flex items-center mt-auto">
                            <div className="flex flex-col self-end">
                                <h3 className="font-impact p-0 m-0 -ml-2 -mb-3 text-white text-[56px]">30,000+</h3>
                                <p className="text-[20px] mt-2 text-[#FFFFFF]">Tools Added to Libraries</p>
                            </div>
                            <div className="flex w-[200px] ml-4">
                                {/* Placeholder for Overlapping Icons */}
                                <div className="w-12 h-12 rounded-full bg-green-500 border-2 border-black z-10"></div>
                                <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-black -ml-4 z-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandAmplifySection
