import InputDataDiri from "@/components/inputDataDiri";
import { bankSampah } from "@/data/dataBankSampah";
import Image from "next/image"

interface BankSampahChosenParams {
    params: Promise<{id: number}>
}

export default async function BankSampahChosen({params}: BankSampahChosenParams){
    const { id } = await params;
    return (
        <div className="flex min-h-screen w-[85%] mx-auto gap-[3%]">
            {
                bankSampah.map((data, index) => {
                    if(id == data.id){
                        return (
                            <div key={index} className="flex flex-col gap-4 w-[25%]">
                                <div className="w-[100%] rounded-2xl flex flex-col border border-gray max-h-max gap-4">
                                    <Image 
                                        src={data.image}
                                        width={310}
                                        height={180}
                                        alt={`bank sampah with id ${data.id}`}
                                    />

                                    <div className="px-6 py-8 pt-0 flex flex-col gap-4">
                                        <p className="font-semibold text-lg">{data.name}</p>

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
                                                <option value="">Date</option>
                                                <option value="tomorrow">Tomorrow</option>
                                                <option value="next-week">Next Week</option>
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
                                                <option value="">Time</option>
                                                <option value="afternoon">Afternoon</option>
                                                <option value="evening">Evening</option>
                                            </select>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        )
                    }
                    
                })
            }

            <InputDataDiri />

        </div>
    )
}