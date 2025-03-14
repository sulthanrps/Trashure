import ProfileNav from "@/components/profileNav";
import ProfilePointBanner from "@/components/profilePointsBanner";
import { poinHistory } from "@/data/poinHistory";

export default function Profile(){
    return (
        <div className="w-[85%] flex gap-4 justify-center mx-auto max-h-max">
            <ProfileNav />
            <div className="w-[75%] flex flex-col gap-4">
                <ProfilePointBanner />

            <div className="flex flex-col gap-4 mt-8">
                <h1 className="font-bold text-3xl">Feb 2025</h1>
                <div className="flex flex-col gap-4">
                    {poinHistory.map((data, index) => {
                        return (
                            <div key={index} className="flex justify-between p-6 border border-gray rounded-2xl">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-xl">{data.title}</p>
                                    <p>{data.from}</p>
                                    <p className="text-sm text-[#E0E0E0]">{data.date}</p>
                                </div>

                                <h1 className={`font-bold text-xl ${data.title == "Tarik Tunai" ? 'text-[#FF3B30]' : 'text-[#95E500]'}`}>{data.type == 'get' ? '+' : '-'}{data.points}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
                <h1 className="font-bold text-3xl">Jan 2025</h1>
                <div className="flex flex-col gap-4">
                    {poinHistory.map((data, index) => {
                        if(index == 0){
                            return (
                                <div key={index} className="flex justify-between p-6 border border-gray rounded-2xl">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-xl">{data.title}</p>
                                        <p>{data.from}</p>
                                        <p className="text-sm text-[#E0E0E0]">{data.date}</p>
                                    </div>
    
                                    <h1 className={`font-bold text-xl ${data.title == "Tarik Tunai" ? 'text-[#FF3B30]' : 'text-[#95E500]'}`}>{data.type == 'get' ? '+' : '-'}{data.points}</h1>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
                
                
            </div>
        </div>
    )
}