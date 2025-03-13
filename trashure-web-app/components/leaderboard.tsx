import { leaderBoardData } from "@/data/leaderBoardData";
import Image from "next/image";
import { myLeaderBoard } from "@/data/myLeaderBoard";

export default function LeaderBoard(){
    return (
        <div className="w-[33%] flex flex-col gap-[5%]">
            <div className="border border-[#E0E0E0] border-2 rounded-2xl w-[100%] h-[68%] p-6">
                <h3 className="font-semibold text-2xl mb-5">Top Point</h3>

                {
                    leaderBoardData.map((data, index) => {
                        return (
                            <div className={`flex justify-between items-center p-2 ${index != (leaderBoardData.length - 1) ? 'border-b border-gray' : ''}`} key={index}>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl pr-4 text-[#E0E0E0]">{data.rank}</p>
                                    <Image 
                                        src={data.icon}
                                        width={32}
                                        height={32}
                                        alt="leaderboard icon"
                                    />
                                    <p className="text-xl">{data.name}</p>
                                </div>
                                <p className="text-xl">{data.points} points</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="border border-[#E0E0E0] border-2 rounded-2xl w-[100%] h-[27%] p-6">
                <h3 className="font-semibold text-2xl mb-2">Your Point</h3>
                <div className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-3">
                        <p className="text-xl pr-4 text-[#E0E0E0]">{myLeaderBoard.rank}</p>
                        <Image 
                            src={myLeaderBoard.icon}
                            width={32}
                            height={32}
                            alt="leaderboard icon"
                        />
                        <p className="text-xl font-bold">{myLeaderBoard.name}</p>
                    </div>
                    <p className="text-xl">{myLeaderBoard.points} points</p>
                </div>
            </div>
        </div>
    )
}