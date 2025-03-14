import Image from "next/image";

export default function ProfilePointBanner(){
    return (
        <div className="w-[100%] bg-[#262832] flex justify-between items-center p-12 relative overflow-hidden rounded-2xl">
            <div className="flex flex-col gap-1">
                <p className="text-[#95E500]">Points</p>
                <h1 className="font-bold text-5xl text-white">26.990</h1>
            </div>

            <Image 
                src={'/quiz-done.png'}
                width={135}
                height={178}
                alt="trophy icon"
                className="absolute right-6 top-5"
            />
        </div>
    )
}