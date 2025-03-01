import Image from "next/image"

export default function HomePageBanner() {
    return (
        <div className="md:flex items-center justify-center h-[610px] w-[1340px] bg-[#262832] rounded-2xl overflow-hidden px-8">
            <div className="flex flex-col gap-8">
                <h1 className="font-semibold text-white text-7xl">Lorem Ipsum <span className="bg-[#95E500] rounded-md py-0 px-1">dolor</span> <br />
                    sit amet
                </h1>

                <div className="flex gap-8 mt-16 text-white">
                    <div>
                        <h2 className="font-semibold text-5xl mb-5">5,4K</h2>
                        <p className="text-sm">Lorem ipsum dolor, sit <br /> amet consectetur</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-5xl mb-5">40%</h2>
                        <p className="text-sm">Lorem ipsum dolor, sit <br /> amet consectetur</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-5xl mb-5">110K</h2>
                        <p className="text-sm">Lorem ipsum dolor, sit <br /> amet consectetur</p>
                    </div>
                </div>
            </div>
            
            
            <Image 
                src={"/eco-bag.png"}
                alt="Hero Image"
                width={550}
                height={400}
                className="pt-32 ml-20"
            />
        </div>
    )
}
// Compare this snippet from web-app-practice/app/components/homePageBanner.tsx: