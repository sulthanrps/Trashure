import VideoRecommendation from "@/components/videoRecommendation";
import { videoData } from "@/data/videoData"
import Image from "next/image"

interface EduGreenVideoParams {
    params: Promise<{id: number}>
}

export default async function EduGreenVideo({params}: EduGreenVideoParams){
    const { id } = await params;
    return (
        <div className="flex min-h-screen w-[85%] mx-auto gap-[3%]">
            {
                videoData.map((data, index) => {
                    if(id == data.id){
                        return (
                            <div key={index} className="flex flex-col gap-4 w-[75%]">
                                <Image 
                                    src={data.thumbnail}
                                    width={908}
                                    height={511}
                                    alt={`Video with id ${data.id}`}
                                />

                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-2xl">{data.caption}</p>
                                    <p className="text-xl">{data.date}</p>
                                </div>
                            </div>
                        )
                    }
                    
                })
            }
        
            <VideoRecommendation id={id} />
        </div>
    )
}