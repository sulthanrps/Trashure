import Image from "next/image"
import Link from "next/link"

export default function StartQuiz(){
    return (
        <div className="flex flex-col justify-center items-center bg-white gap-8 p-4 rounded-xl">
            <Image 
                src={'/quiz-start.png'}
                width={362}
                height={181}
                alt="Quiz start img"
            />

            <div className="flex flex-col gap-3 justify-center items-center">
                <p>10 Questions | 1 Minute</p>

                <h1 className="font-bold text-2xl">Recycle your own trash!</h1>
            </div>
            

            <Link href="/quiz/question?id=1">
                <button className='px-40 py-2 bg-[#95E500] w-[100%] text-black rounded-md font-semibold text-sm'>Start</button>
            </Link>
        </div>
    )
}