import { PlaceholderImage } from '../../ui/PlaceholderImage';

export function BrandTrustedBy() {
    return (
        <div className="text-center w-full flex justify-center mt-0 md:mt-0 mb-16 md:mb-24 px-[14px]">
            <div className="w-full md:max-w-[80%]">
                <p className="text-[#535862]">
                    <strong>Trusted by 20+ forward-thinking brands</strong> <br /> Join companies already reaching 10,000+ remote workers and freelancers actively discovering and organizing their digital tools
                </p>
                <div className="flex justify-center flex-wrap w-full gap-5 mt-5">
                    <PlaceholderImage width="127.5px" height="60px" text="Logo 1" bgColor="bg-gray-100" />
                    <PlaceholderImage width="127.5px" height="60px" text="Logo 2" bgColor="bg-gray-100" />
                    <PlaceholderImage width="127.5px" height="60px" text="Father Dev" bgColor="bg-gray-100" />
                    <PlaceholderImage width="127.5px" height="60px" text="Logo 4" bgColor="bg-gray-100" />
                    <PlaceholderImage width="127.5px" height="60px" text="Gblobank" bgColor="bg-gray-100" />
                    <PlaceholderImage width="127.5px" height="60px" text="Nietz" bgColor="bg-gray-100" />
                </div>
            </div>
        </div>
    );
}
