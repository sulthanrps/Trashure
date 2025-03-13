import Image from "next/image"
import Link from "next/link"

export default function VideoBanner(){
    return (
        <div className="flex gap-8 px-6 bg-[#262832] flex items-center rounded-2xl justify-between relative w-[98%] h-[253px] overflow-hidden">
            <div className="flex flex-col gap-4 w-[100%]">
                <h1 className="font-bold text-2xl leading-normal text-white z-[3] relative">Quiz: <br /> Recycle <br /> your own <br /> trash!</h1>
                <Link href="/quiz" className="mt-4">
                    <button className='px-8 py-2 bg-[#95E500] text-black rounded-md font-semibold w-[100%]'>Take the quiz!</button>
                </Link>
            </div>

            <Image 
                src={'/puzzle.png'}
                width={200}
                height={210}
                alt="puzzle icon"
                className="absolute -right-14 -top-4 z-[2]"
            />
        </div>
    )
}