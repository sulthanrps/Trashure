import Image from "next/image"

export default function SignInBanner(){
    return (
        <div className="flex items-center justify-center w-[45%] h-[92%] padding-44 bg-[#262832] rounded-2xl">
            <Image 
                src={'/sign-in-banner.png'}
                alt="Sign In Banner"
                width={400}
                height={267}
            />
        </div>
    )
}