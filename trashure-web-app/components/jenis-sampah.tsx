import { trashData } from "@/data/trashData"
import Image from "next/image"
export default function JenisSampah(){
    return (
        <div className="flex flex-col mt-14 justify-center items-center">
            <h2 className="px-8 py-3 border border-gray-700 rounded-full mb-12">Jenis Sampah</h2>
            <div className="columns-4">
            {trashData.map((data, index) => {
                return (
                    <div key={index} className="border border-gray rounded-2xl flex flex-col justify-center items-center px-16 py-8 mb-6 ml-4 gap-4">
                        <Image 
                            src={data.imgSrc}
                            width={120}
                            height={120}
                            alt="Trash Type Img"
                        />

                        <p className="font-semibold">{data.type}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}