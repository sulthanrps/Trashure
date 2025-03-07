'use client'

import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function TrashureWorthCheck(){

    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/trashure-worth/trashure-worth-result')
        }, 3000);

        return () => clearTimeout(timer);
    }, [router])
    
    return (
        <div className="flex flex-col justify-center items-center pb-8">
            <Image 
                src={'/tw-2.png'}
                width={403}
                height={20}
                alt="trashure-worth-check-state"
            />

            <Image 
                src={'/wait.png'}
                width={275}
                height={275}
                alt="Loading icon"
                className="mt-20"
            />

            <h1 className="font-bold text-2xl mb-2">Input Berhasil!</h1>
            <p>Wait untill admin verify your trashure</p>
        </div>
    )
}