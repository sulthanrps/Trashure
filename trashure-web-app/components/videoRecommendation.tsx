import { videoData } from "@/data/videoData";
import Link from "next/link";
import Image from "next/image";
import VideoBanner from "./videoBanner";

interface VideoRecommendationProps {
    id: number
}

export default function VideoRecommendation({id} : VideoRecommendationProps){
    return (
        <div className="grid grid-cols-1 gap-7 w-[24%]">
            <VideoBanner />
            {
                videoData.map((data, index) => {
                    if(id != data.id){
                        return (
                            <Link href={`/edugreen/${data.id}`} key={index}>
                                <div className={`flex flex-col gap-2`}>
                                    <div className="relative">
                                        <Image 
                                            src={data.thumbnail}
                                            width={283}
                                            height={160}
                                            alt={`video thumbnail ${index}`}
                                        />
    
                                        <div className="absolute bg-black/70 text-white text-xs px-2 py-1 rounded bottom-2 right-2">{data.duration}</div>
                                    </div>
                                    
    
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-base">{data.caption}</p>
                                        <p className="text-sm">{data.date}</p>
                                    </div>
                                    
                                </div>
                            </Link>
                        )
                    }
                    
                })
            }
        </div>
    )
}