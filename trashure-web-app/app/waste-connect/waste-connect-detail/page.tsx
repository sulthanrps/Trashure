import DataDiri from "@/components/dataDiri";
import Image from "next/image";
import Link from "next/link";

export default function WasteConnectDetail(){
    return (
        <div className="w-[85%] flex justify-center mx-auto gap-4">
            <div className="flex flex-col gap-4 w-[25%]">
                <div className="w-[100%] rounded-2xl flex flex-col border border-gray max-h-max gap-4">
                    <Image 
                        src={'/bs-1.png'}
                        width={310}
                        height={180}
                        alt={`bank sampah with id 1`}
                    />

                    <div className="px-6 py-8 pt-0 flex flex-col gap-4">
                        <p className="font-semibold text-lg">Bank Sampah Kota Batu</p>

                        <div className="flex flex-col relative">
                            <label className="font-bold mb-3" htmlFor="date">Date</label>
                            <Image 
                                src={'/date.svg'}
                                width={15}
                                height={15}
                                alt=""
                                className="absolute top-[50px] left-4"
                            />

                            <select
                                id="date"
                                className="bg-gray-100 text-gray-800 rounded-lg pl-10 px-4 py-3 w-[100%]"
                            >
                                <option value="25-Feb-2025">25-Feb-2025</option>
                            </select>
                        </div>


                        <div className="flex flex-col relative">
                            <label className="font-bold mb-3" htmlFor="time">Time</label>
                            <Image 
                                src={'/time.svg'}
                                width={15}
                                height={15}
                                alt=""
                                className="absolute top-[50px] left-4"
                            />
                            <select
                                id="time"
                                className="bg-gray-100 text-gray-800 rounded-lg pl-10 px-4 py-3 w-[100%]"
                            >
                                <option value="15.30 - 16.00">15.30 - 16.00</option>
                            </select>
                        </div>

                        <Link href={'/edugreen'} className="w-[100%]">
                            <button className="bg-[#262832] py-3 font-semibold text-sm text-white rounded-lg w-[100%]">Reschedule</button>  
                        </Link>

                        <Link href={'/edugreen'} className="w-[100%]">
                            <button className="border border-black py-3 font-semibold text-sm text-black rounded-lg w-[100%]">Cancel</button>  
                        </Link>
                    </div>

                    
                </div>
            </div>
            <DataDiri />
        </div>
    )
}