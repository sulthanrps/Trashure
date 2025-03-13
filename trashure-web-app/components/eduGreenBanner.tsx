import Link from "next/link"
import Image from "next/image"
export default function EduGreenBanner(){
    return (
        <div className="flex gap-8 px-16 bg-[#262832] flex items-center rounded-2xl justify-between relative w-[65%] h-[500px] overflow-hidden">
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-6xl leading-tight text-white z-[3] relative">Quiz: Recycle <br /> your own <br /> trash!</h1>
                <Link href="/quiz">
                    <button className='px-8 py-2 bg-[#95E500] text-black rounded-md font-semibold'>Take the quiz!</button>
                </Link>
            </div>

            <Image 
                src={'/puzzle.png'}
                width={450}
                height={450}
                alt="puzzle icon"
                className="absolute -right-10 top-16 z-[2]"
            />
        </div>
    )
}