import Image from "next/image"

export default function TwAddBanner(){
    return (
        <div className="flex gap-24 justify-between items-center px-6 py-5 bg-[#95E500] rounded-lg mt-12">
            <h1 className="font-bold text-2xl">Get Unlimited Trashure <br /> Worth with Premium!</h1>
            <Image 
                src={'/star.png'}
                width={152}
                height={152}
                alt="star icon"
            />
        </div>
    )
}