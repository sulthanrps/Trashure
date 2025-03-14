import Image from "next/image"
import Link from "next/link"

export default function WasteConnectSearch(){
    return (
        <form className="flex justify-center items-center bg-white w-[73%] shadow-md rounded-xl px-2 py-6 gap-4 absolute -bottom-8 z-[8]">
        
        <div className="flex relative items-center">
            <label htmlFor="location" className="sr-only">Location</label>
            <Image 
                src={'/location.svg'}
                width={15}
                height={15}
                alt=""
                className="absolute left-4"
            />
            <input
                id="location"
                type="text"
                value="Malang, East Java"
                readOnly
                className="rounded-lg bg-gray-100 pl-10 px-4 py-3 cursor-not-allowed font-bold w-[300px]"
            />
        </div>
  
        
        <div className="flex relative items-center">
            <label htmlFor="date" className="sr-only">Date</label>
            <Image 
                src={'/date.svg'}
                width={15}
                height={15}
                alt=""
                className="absolute left-4"
            />
            <select
                id="date"
                className="bg-gray-100 text-gray-800 rounded-lg pl-10 px-4 py-3 w-[175px]"
            >
                <option value="">Date</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="next-week">Next Week</option>
            </select>
        </div>
  
     
        <div className="flex relative items-center">
            <label htmlFor="time" className="sr-only">Time</label>
            <Image 
                src={'/time.svg'}
                width={15}
                height={15}
                alt=""
                className="absolute left-4"
            />
            <select
                id="time"
                className="bg-gray-100 text-gray-800 rounded-lg pl-10 px-4 py-3 w-[175px]"
            >
                <option value="">Time</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
        </div>
  
        <Link href={'/waste-connect/find-bank-sampah'}>
            <button
                type="submit"
                className="bg-black font-semibold text-white px-12 py-3 rounded-lg"
            >
                Search
            </button>
        </Link>
        
      </form>
    )
}