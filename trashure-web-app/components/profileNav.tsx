import Image from "next/image";
import Link from "next/link";

export default function ProfileNav(){
    return (
        <div className="w-[25%] flex flex-col gap-4 border border-gray px-6 py-8 rounded-xl max-h-max">
            <div className="flex gap-4 items-center border-b border-gray pb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <p className="text-sm text-black font-bold">Sulthan Rafi</p>
            </div>

            <Link href={'/profile'}>
                <div className="w-[100%] border border-gray p-4 font-semibold text-sm rounded-lg flex gap-4">
                    Points
                </div>
            </Link>
            

            <div className="border-b border-gray"></div>

            <Link href={'/profile/waste-connect-log'}>
                <div className="w-[100%] bg-[#95E500] p-4 font-semibold text-sm rounded-lg flex gap-4 text-white items-center">
                    <Image 
                        src={'/profile-wc.svg'}
                        width={30}
                        height={30}
                        alt="Profile waste connect icon"
                    />
                    Waste Connect
                </div>
            </Link>
           

            <div className="w-[100%] border border-gray p-4 font-semibold text-sm rounded-lg flex gap-4 items-center">
                <Image 
                    src={'/profile-tw.svg'}
                    width={30}
                    height={30}
                    alt="Profile Trashure Worth icon"
                />
                Trashure Worth
            </div>
        </div>
    )
}