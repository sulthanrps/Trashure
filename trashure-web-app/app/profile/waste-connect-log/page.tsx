import ProfileNav from "@/components/profileNav"
import ProfileWasteConnectBanner from "@/components/profileWasteConnectBanner"
import { poinHistory } from "@/data/poinHistory"
import Image from "next/image"
import Link from "next/link"

export default function WasteConnectLog(){
    return (
        <div className="w-[85%] flex gap-4 justify-center mx-auto max-h-max">
            <ProfileNav />
            <div className="w-[75%] flex flex-col gap-4">
                <ProfileWasteConnectBanner />

                <div className="flex flex-col gap-4 mt-8">
                    <h1 className="font-bold text-3xl">Upcoming Pick Up</h1>
                    <Link href={'/waste-connect/waste-connect-detail'}>
                        <div className="flex flex-col gap-4 border border-2 border-[#95E500] px-6 py-3 rounded-2xl">
                            <h1 className="font-bold text-lg">Bank Sampah</h1>
                            <div className="flex gap-3">
                                <Image 
                                    src={'/location.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>Jalan Watugong No. 34, RT 65/RW 78</p>
                            </div>

                            <div className="flex gap-3">
                                <Image 
                                    src={'/date.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>25-Feb-2025</p>
                            </div>

                            <div className="flex gap-3">
                                <Image 
                                    src={'/time.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>15.30-16.00</p>
                            </div>
                        </div>
                    </Link>
                    
                </div>

                <div className="flex flex-col gap-4 mt-8">
                    <h1 className="font-bold text-3xl">Pick Up History</h1>
                    <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 border border-gray px-6 py-3 rounded-2xl">
                        <h1 className="font-bold text-lg">Bank Sampah</h1>
                            <div className="flex gap-3">
                                <Image 
                                    src={'/location.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>Jalan Watugong No. 34, RT 65/RW 78</p>
                            </div>

                            <div className="flex gap-3">
                                <Image 
                                    src={'/date.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>25-Feb-2025</p>
                            </div>

                            <div className="flex gap-3">
                                <Image 
                                    src={'/time.svg'}
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                                <p>15.30-16.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}