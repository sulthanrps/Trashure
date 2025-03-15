import Image from "next/image"
import Link from "next/link"

export default function TrashureWorthResult(){
    return (
        <div className="flex flex-col justify-center items-center">
             <Image 
                src={'/tw-3.png'}
                width={403}
                height={20}
                alt="trashure-worth-check-state"
            />

            <div className="mt-16 flex gap-8">

                <div className="px-2 pt-2 pb-6 border border-gray rounded-2xl">
                     <Image 
                        src={'/img-placeholder.png'}
                        width={575}
                        height={268}
                        alt="trashure-worth-check-state"
                        className="rounded-2xl"
                    />

                    <div className="flex items-center justify-center gap-8 mt-5">
                        <div>
                            <p>Jenis Sampah</p>
                            <h1 className="text-xl font-bold mt-1">Lorem Ipsum</h1>
                        </div>

                        <div>
                            <p>Berat Sampah</p>
                            <h1 className="text-xl font-bold mt-1">2.7 kg</h1>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="border border-gray p-8 rounded-2xl pr-52">
                        <p>Your Trashure Worth</p>
                        <h1 className="text-2xl font-bold">267 Point</h1>
                    </div>

                    <div className="bg-[#262832] flex flex-col items-center justify-center text-center px-8 py-6 rounded-2xl text-white">
                        <h1 className="font-bold text-2xl">Hibahkan sampahmu <br /> sekarang!</h1>
                        <p className="my-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        <Link href="/waste-connect">
                            <input type="submit" value={"Submit"} className="px-8 py-3 font-semibold text-black bg-white rounded-lg w-[330px] pointer" />
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}