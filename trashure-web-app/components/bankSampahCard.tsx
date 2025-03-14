import { bankSampah } from "@/data/dataBankSampah"
import Image from "next/image"
import Link from "next/link"

export default function BankSampahCard({length, column} : {length : number, column : number}){
    return (
        <div className={`grid grid-cols-${column} gap-8`}>
            {bankSampah.map((data, index) => {
                if(index < length){
                    return (
                        <Link href={`/waste-connect/${data.id}`} key={index}>
                            <div className="border border-gray rounded-2xl pb-4">
                                <Image 
                                    src={data.image}
                                    width={283}
                                    height={162}
                                    alt="bank sampah img"
                                />
        
                                <div className="p-4">
                                    <h3 className="font-bold mb-2">{data.name}</h3>
                                    <div className="flex gap-3">
                                        <Image 
                                            src={'/location.svg'}
                                            width={14}
                                            height={14}
                                            alt=""
                                        />
                                        <p>Malang, East Java</p>
                                    </div>
        
                                    <div className="flex gap-3">
                                        <Image 
                                            src={'/date.svg'}
                                            width={14}
                                            height={14}
                                            alt=""
                                        />
                                        <p>Monday to Friday</p>
                                    </div>
        
                                    <div className="flex gap-3">
                                        <Image 
                                            src={'/time.svg'}
                                            width={14}
                                            height={14}
                                            alt=""
                                        />
                                        <p>08:00 to 17:00 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    )
                }
                
            })}
        </div>
    )
}