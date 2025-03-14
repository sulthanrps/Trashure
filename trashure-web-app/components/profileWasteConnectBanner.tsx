import Image from "next/image";

export default function ProfileWasteConnectBanner(){
    return (
        <div className="w-[100%] bg-[#262832] flex justify-between items-center p-12 relative overflow-hidden rounded-2xl">    
            <h1 className="font-bold text-4xl text-white">You can reschedule!</h1>

            <Image 
                src={'/emoji.png'}
                width={160}
                height={160}
                alt="trophy icon"
                className="absolute right-6 top-5"
            />
        </div>
    )
}