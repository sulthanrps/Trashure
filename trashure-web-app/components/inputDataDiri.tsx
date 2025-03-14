import Link from "next/link";
import Input from "./input";
import Select from "./select";

export default function InputDataDiri(){
    return (
        <div className="w-[75%] flex flex-col border border-gray max-h-max p-8 rounded-2xl">
            <form className="flex flex-col gap-6">
                <Input 
                    type="text"
                    style=""
                    placeholder="Inputkan nama lengkap"
                    label="Nama Penerima"
                />

                <Input 
                    type="text"
                    style=""
                    placeholder="Inputkan alamat lengkap"
                    label="Alamat Detil"
                />

                <div className="flex gap-4 w-[100%] justify-between">
                    <Select
                        label="Provinsi"
                        style="px-3 py-2 w-[384px] pr-5"
                        placeholder="Pilih Provinsi"
                        options={["Jawa Barat", "Jawa Timur", "Jawa Tengah", "DKI Jakarta"]}
                    />

                    <Select
                        label="Kota / Kabupaten"
                        style="px-3 py-2 w-[384px] pr-5"
                        placeholder="Pilih Kota / Kabupaten"
                        options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                    />
                </div>

                 <div className="flex gap-4 w-[100%] justify-between">
                    <Select
                        label="Kecamatan"
                        style="px-3 py-2 w-[384px] pr-5"
                        placeholder="Pilih Kecamatan"
                        options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                    />

                    <Select
                        label="Kelurahan / Desa"
                        style="px-3 py-2 w-[384px] pr-5"
                        placeholder="Pilih Kelurahan / Desa"
                        options={["Bandung", "Jakarta", "Surabaya", "Semarang"]}
                    />
                </div>

                <Link href={'/profile/waste-connect-log'} className="w-[100%] mt-12">
                    <button className="bg-black text-white py-3 font-semibold rounded-lg w-[100%]">Booking</button>  
                </Link>
            </form>
        </div>
    )
}