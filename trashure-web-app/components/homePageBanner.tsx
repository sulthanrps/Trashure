import Image from "next/image"

export default function HomePageBanner() {
    return (
        <div className="md:flex items-center justify-between h-[610px] w-[93%] bg-[#262832] rounded-2xl px-8 relative overflow-hidden">
            <div className="flex flex-col gap-8 ml-8">
                <h1 className="font-semibold text-white text-7xl">
                    the green country,<br />
                    <div className="mt-4">
                        make a 
                        <span className="bg-[#95E500] rounded-md py-0 px-1 ml-2">
                            win country
                        </span>
                    </div>
                    
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
                className="pt-4 ml-20 absolute right-0"
            />
        </div>
    )
}