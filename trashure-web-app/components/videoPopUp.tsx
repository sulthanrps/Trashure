import Link from "next/link"
import Image from "next/image"

interface VideoPopUpProps {
    type: string
}

export default function VideoPopUp({type} : VideoPopUpProps){
    return (
        <div className="flex gap-8 px-4 bg-[#262832] flex items-center rounded-2xl justify-between relative w-[283px] h-[253px] overflow-hidden">
        <div className="flex flex-col gap-4 w-[100%]">
            {
                type == "person" && (
                    <>
                        <h1 className="font-bold mt-8 text-2xl leading-normal text-white z-[3] relative w-[70%]">Ambil Bagian jadi Pahlawan Hijau!</h1>
                        <Link href="#" className="pt-4">
                            <button className='relative px-8 py-2 bg-[#95E500] text-black rounded-md font-semibold w-[100%] z-[4]'>Buka GreenMap</button>
                        </Link>
                    </>
                )
            }
            
            {
                type == "trash" && (
                    <>
                        <h1 className="font-bold mt-4 text-2xl leading-normal text-white z-[3] relative w-[70%]">Angkut sampahmu bersama kami sekarang</h1>
                        <Link href="#" className="">
                            <button className='relative px-8 py-2 bg-[#95E500] text-black rounded-md font-semibold w-[100%] z-[4]'>Buka Waste Connect</button>
                        </Link>
                    </>
                )
            }
            
        </div>
        {
            type == "person" && (
                <Image 
                    src={'/man-hat.png'}
                    width={180}
                    height={180}
                    className="absolute -right-0 top-2 z-[2]"
                    alt="puzzle icon"
                    
                />
            )
        }
        
        {
            type == "trash" && (
                <Image 
                    src={'/eco-bag.png'}
                    width={230}
                    height={170}
                    className="absolute -right-16 top-2 z-[2]"
                    alt="puzzle icon"
                    
                />
            )
        }

    </div>
    )
}