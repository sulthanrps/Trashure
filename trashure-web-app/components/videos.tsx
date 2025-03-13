import Image from "next/image"
import { videoData } from "@/data/videoData"
import Link from "next/link"

interface videoProps {
    length: number,
    style: string
}

export default function Videos({length, style}: videoProps){
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
                    {
                        videoData.map((data, index) => {
                            if(index < length){
                                return (
                                    <Link href={length < 5 ? '#' : `/edugreen/${data.id}`} key={index}>
                                        <div className={`flex flex-col gap-4 mb-8 ${style}`}>
                                            <div className="relative">
                                                <Image 
                                                    src={data.thumbnail}
                                                    width={283}
                                                    height={160}
                                                    alt={`video thumbnail ${index}`}
                                                    className="w-full h-full"
                                                />

                                                <div className="absolute bg-black/70 text-white text-xs px-2 py-1 rounded bottom-2 right-2">{data.duration}</div>
                                            </div>
                                            

                                            <div className="flex flex-col gap-1">
                                                <p className="font-bold">{data.caption}</p>
                                                <p>{data.date}</p>
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