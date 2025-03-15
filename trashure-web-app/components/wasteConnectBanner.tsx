import Link from "next/link"
import Image from "next/image"
export default function WasteConnectBanner(){
    return (
        <div className="flex gap-8 px-16 bg-[#262832] flex items-center rounded-2xl relative w-[100%] h-[475px] overflow-hidden">
            <div className="flex flex-col gap-8 -mt-12">
                <h1 className="font-semibold text-6xl leading-tight text-white z-[3] relative">Waste Connect</h1>
                <p className="text-xl text-white w-[60%]">Temukan tempat pengolahan sampah terdekat dan jadwalkan penjemputan dengan mudah!</p>
                <Image 
                    src={'/waste-connect-flow.png'}
                    width={558}
                    height={130}
                    alt="waste connect flow"
                />
            </div>

            <Image 
                src={'/tree.png'}
                width={600}
                height={600}
                alt="tree icon"
                className="absolute right-0 top-5 z-[2]"
            />
            <Link href={'/profile/waste-connect-log'}>
                <Image 
                    src={'/my-waste-connect-btn.png'}
                    width={246}
                    height={56}
                    alt=""
                    className="absolute right-4 top-6 z-[3]"
                />
            </Link>
        </div>
    )
}