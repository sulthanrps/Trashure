import Image from "next/image"
import Link from "next/link"
export default function Check(){
    return (
        <div className="w-[100%] min-h-screen mx-auto flex justify-center items-center bg-[#262832]">
            <div className="flex flex-col gap-8 justify-center items-center text-center w-[30%] bg-white p-4 rounded-2xl">
                <Image 
                    src={'/quiz-done.png'}
                    width={151}
                    height={200}
                    alt="quiz trophy"
                />
                
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">+156 Points</h1>

                    <p>10 Questions | 1 Minute</p>
                </div>
                <Link href={'/edugreen'} className="w-[100%]">
                    <button className="bg-[#95E500] py-3 font-semibold rounded-xl w-[100%]">Back</button>  
                </Link>
            </div>
        </div>
    )
}