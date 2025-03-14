"use client";
import { useState, useEffect, Suspense, JSX } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "@/data/questions";

function SearchParamsWrapper({ children }: { children: (id: number) => JSX.Element }) {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("id") ? parseInt(searchParams.get("id")!) : 1;

  return children(questionId);
}

function QuizQuestion({ id }: { id: number }) {
  const router = useRouter();

  const [question, setQuestion] = useState(() =>
    questions.find((q) => q.id === id) || null
  );

  useEffect(() => {
    setQuestion(questions.find((q) => q.id === id) || null);
  }, [id]);

  const nextQuestion = () => {
    const nextId = id + 1;
    if (nextId <= questions.length) {
      router.push(`?id=${nextId}`);
    }
  };

  return (
    <div className="w-[100%] min-h-screen mx-auto flex justify-center items-center bg-[#262832]">
      {question ? (
        <div className="flex flex-col gap-8 justify-center items-center text-center w-[30%] bg-white px-10 py-12 rounded-2xl">
          <p>{id}/{questions.length}</p>
          <h1 className="font-bold text-2xl">{question.question}</h1>

          <ul className="flex flex-col justify-center items-center gap-4">
            {question.options.map((option, index) => (
              <li key={index} className="border border-gray w-[100%] p-3 rounded-lg cursor-pointer hover:border-black">
                {option}
              </li>
            ))}
          </ul>

          {id < questions.length ? (
            <button className="bg-[#95E500] py-3 font-semibold rounded-xl w-[100%]" onClick={nextQuestion}>
              Next
            </button>
          ) : (
            <button className="bg-[#95E500] py-3 font-semibold rounded-xl w-[100%]" onClick={() => router.push('/quiz/check')}>
              Check
            </button>
          )}
        </div>
      ) : (
        <div className="text-white">
          <h1 className="font-bold text-2xl">Question not found</h1>
        </div>
      )}
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<p className="text-white">Loading...</p>}>
      <SearchParamsWrapper>
        {(id) => <QuizQuestion id={id} />}
      </SearchParamsWrapper>
    </Suspense>
  );
}
