import Link from "next/link"

interface SignInNavProps {
    blackLogin: boolean,
    blackRegister: boolean
    header: string
}

export default function SignInNav({
    blackLogin,
    blackRegister,
    header
}: SignInNavProps){
    const blackBgLogin = blackLogin ? "text-white bg-[#262832]" : "text-black";

    const blackBgRegister = blackRegister ? "text-white bg-[#262832]" : "text-black";

    return (
        // hover:bg-[#262832] hover:text-white
        <div className="flex flex-col gap-8 items-center mb-8">
            <h1 className="text-5xl font-bold">{header}</h1>

            <div className="bg-[#F0F0F0] rounded-full px-2 py-2 flex justify-center items-center gap-2">
                <Link href="/login">
                    <div className={`flex px-8 py-2 items-center justify-center rounded-full ${blackBgLogin}`}>Sign in</div>
                </Link>

                <Link href="/register">
                    <div className={`flex px-8 py-2 items-center justify-center rounded-full ${blackBgRegister}`}>Sign up</div>
                </Link>
            </div>
        </div>
    )
}