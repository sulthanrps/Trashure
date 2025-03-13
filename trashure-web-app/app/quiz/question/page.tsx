"use client"
import { useState, useEffect } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { questions } from "@/data/questions";

export default function QuizQuestion(){
    const searchParams = useSearchParams();
    const questionId = searchParams.get("id") ? parseInt(searchParams.get("id")!) : 1;
    const pathname = usePathname();
    const router = useRouter();
    
    const [question, setQuestion] = useState(() =>
        questions.find((q) => q.id === questionId) || null
    );

    useEffect(() => {
        setQuestion(questions.find((q) => q.id === questionId) || null);
    }, [questionId]);


    const nextQuestion = () => {
        const nextId = questionId + 1;
        if (nextId <= questions.length) {
            router.push(`${pathname}?id=${nextId}`); 
        }
    }

    const goToCheck = () => {
        router.push('/quiz/check')
    }

    return (
        <div className="w-[100%] min-h-screen mx-auto flex justify-center items-center bg-[#262832]">
            {question ? (
                <div className="flex flex-col gap-8 justify-center items-center text-center w-[30%] bg-white px-10 py-12 rounded-2xl">
                    <p>{questionId}/{questions.length}</p>

                    <h1 className="font-bold text-2xl">{question.question}</h1>

                    <ul className="flex flex-col justify-center items-center gap-4">
                        {
                            question.options.map((option, index) => {
                                return (
                                    <li key={index} className="border border-gray w-[100%] p-3 rounded-lg cursor-pointer hover:border hover:border-black">
                                        {option}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        questionId < 10 ? (
                            <button className="bg-[#95E500] py-3 font-semibold rounded-xl w-[100%]" onClick={nextQuestion}>Next</button>
                        ) 
                        : 
                        (
                            <button className="bg-[#95E500] py-3 font-semibold rounded-xl w-[100%]" onClick={goToCheck}>Check</button>
                        )
                    }
                </div>
                ) : (
                <div className="text-white">
                    <h1 className="font-bold text-2xl">Question not found</h1>
                </div>
            )} 
        </div>
            
        
    )
}