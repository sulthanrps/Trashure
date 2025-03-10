import Link from "next/link";
import SignInBanner from "../../components/signInBanner";
import SignInNav from "../../components/signInNav";
import Input from "../../components/input";
import Select from "../../components/select";

export default function Register(){
    return (
        <div className="flex items-center h-[1200px] justify-center gap-24">
            <SignInBanner />
            
            <div className="w-[35%]">
                <SignInNav blackLogin={false} blackRegister={true} header="Sign up" />
                <form>
                    <Input 
                        type="text"
                        style="px-3 py-2 w-[100%]"
                        placeholder="Input your full name"
                        label="Name"
                    />

                    <Input 
                        type="date"
                        style="px-3 py-2 w-[100%]"
                        placeholder="Select date"
                        label="Date of Birth"
                    />

                    <Input 
                        type="text"
                        style="px-3 py-2 w-[100%]"
                        placeholder="Inputkan alamat lengkap anda"
                        label="Alamat Detil"
                    />

                    <div className="flex gap-4 w-[100%] justify-between">
                        <Select
                            label="Provinsi"
                            style="px-3 py-2 w-[240px] pr-5"
                            placeholder="Pilih Provinsi"
                            options={["Jawa Barat", "Jawa Timur", "Jawa Tengah", "DKI Jakarta"]}
                        />

                        <Select
                            label="Kota / Kabupaten"
                            style="px-3 py-2 w-[240px] pr-5"
                            placeholder="Pilih Kota / Kabupaten"
                            options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                        />
                    </div>

                    <div className="flex gap-4 w-[100%] justify-between">
                        <Select
                            label="Kecamatan"
                            style="px-3 py-2 w-[240px] pr-5"
                            placeholder="Pilih Kecamatan"
                            options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                        />

                        <Select
                            label="Kelurahan / Desa"
                            style="px-3 py-2 w-[240px] pr-5"
                            placeholder="Pilih Kelurahan / Desa"
                            options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                        />
                    </div>

                    <div className="flex gap-2 w-[100%]">
                        <Select
                            label="Rekening"
                            style="px-3 py-2 w-[174px] pr-5"
                            placeholder="Pilih Bank"
                            options={["BNI", "BCA", "Mandiri", "BRI"]}
                        />

                        <Input 
                            type="text"
                            style="px-3 py-2 w-[322px] mt-6"
                            placeholder="Input your account number"
                            label=""
                        />
                    </div>

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

                    <Input 
                        type="password"
                        style="px-3 py-2 w-[100%]"
                        placeholder="Confirm your password"
                        label="Confirm Password"
                    />

                    <Link href="/">
                        <input type="submit" value={"Sign up"} className="px-8 py-3 font-semibold text-white bg-[#262832] rounded-lg w-[100%] mt-8" />
                    </Link>
                </form>
            </div>
        </div>
    )
}