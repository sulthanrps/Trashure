import Image from 'next/image'
import Link from 'next/link'

export default function TrashureWorthBanner() {
    return (
        <div className="relative w-[100%] h-[500px] bg-[#262832] flex items-center rounded-2xl justify-between px-16 pr-0 overflow-hidden">
            <div className='flex flex-col justify-center text-white gap-6'>
                <h1 className='font-bold text-5xl tracking-wide'>Trashure Worth</h1>
                <Image 
                    src='/tw-step.png'
                    width={558}
                    height={130}
                    alt='Trashure worth step'
                />
                <p className='text-xl'>Ikuti langkah mudah berikut untuk mengetahui nilai sampahmu!</p>
                <Link href="/trashure-worth/trashure-worth-add">
                    <button className='px-8 py-2 bg-[#95E500] text-black rounded-md font-semibold'>Check Your Trashure Worth!</button>
                </Link>
                
            </div>

            <Image 
                src={'/coin-hand.png'}
                alt="Coin hand"
                width={500}
                height={500}
                className='absolute -right-16'
            />
        </div>
    )
}