import { videoData } from "@/data/videoData"
import Image from "next/image"
import Videos from "./videos"
import Link from "next/link"

export default function VideosSection(){
    return (
        <div className="mt-20 flex flex-col w-[100%]">
            <h1 className="text-black font-semibold text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full max-w-max">Education video</h1>

            <div className="flex flex-col justify-center">
                <div className="flex gap-4 mt-9">
                    <Image 
                        src={'/star-green.svg'}
                        width={24}
                        height={24}
                        alt="Subscription icon"
                    />
                    <Link href={'/subscription'}>
                        <h1 className="font-bold text-2xl">Subscription Video</h1>
                    </Link>
                </div>
                
                
                    <Videos length={4} style=" blur-sm opacity-70"/>
                

                <h1 className="font-bold text-2xl">Watched</h1>
                <Videos length={7} style="" />

                <h1 className="font-bold text-2xl">Unwatched</h1>
                <Videos length={7} style="" />

            </div>
        </div>
    )
}