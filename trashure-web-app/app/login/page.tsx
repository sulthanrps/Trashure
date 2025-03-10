import SignInBanner from "../../components/signInBanner";
import Input from "../../components/input";
import SignInNav from "../../components/signInNav";
import Link from "next/link";
export default function Login(){
    return (
        <div className="flex items-center justify-center h-screen gap-24">
            <SignInBanner />
            
            <div className="w-[35%]">
                <SignInNav blackLogin={true} blackRegister={false} header="Sign in" />
                <form>
                    <Input 
                        type="email"
                        style="px-3 py-2 w-[100%]"
                        placeholder="trashure@example.com"
                        label="Email"
                    />

                    <Input 
                        type="password"
                        style="px-3 py-2 w-[100%]"
                        placeholder="Input your password"
                        label="Password"
                    />

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" name="remember" />
                            <label className="text-black" htmlFor="remember">Remember me</label>
                        </div>

                        <Link href="#">
                            Forgot Password ?
                        </Link>
                    </div>

                    <Link href="/">
                        <input type="submit" value={"Sign in"} className="px-8 py-3 font-semibold text-white bg-[#262832] rounded-lg w-[100%] mt-8 cursor-pointer" />
                    </Link>
                </form>
            </div>
        </div>
    )
}