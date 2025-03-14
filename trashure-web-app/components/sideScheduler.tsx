import Image from "next/image"
import Link from "next/link"
export default function SideScheduler(){
    return (
        <div className="w-[25%] rounded-2xl px-6 py-8 flex flex-col border border-gray max-h-max gap-4">
            <div className="flex flex-col relative">
                <label className="font-bold mb-3" htmlFor="location">Location</label>
                <Image 
                    src={'/location.svg'}
                    width={15}
                    height={15}
                    alt=""
                    className="absolute top-[50px] left-4"
                />
                <input
                    id="location"
                    type="text"
                    value="Malang, East Java"
                    readOnly
                    className="rounded-lg bg-gray-100 pl-10 px-4 py-3 cursor-not-allowed font-bold w-[100%]"
                />
            </div>
    
            
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
    
            <Link href={'/waste-connect/find-bank-sampah'}>
                <button
                    type="submit"
                    className="bg-black font-semibold text-white w-[100%] py-3 rounded-lg"
                >
                    Search
                </button>
            </Link>
        </div>
    )
}