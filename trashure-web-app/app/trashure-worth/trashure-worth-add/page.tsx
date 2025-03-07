import Image from "next/image"
import TwAddBanner from "../components/tw-add-banner"
import Select from "@/app/components/select"
import { trashData } from "@/app/misc/trashData"
import Input from "@/app/components/input"
import Link from "next/link"

export default function TrashureWorthAdd(){
    const data:string[] = trashData.map((data) => {
        return data.type
    })
    return (
        <div className="flex flex-col justify-center items-center pb-8">
            <Image 
                src={'/tw-1.png'}
                width={403}
                height={20}
                alt="trashure-worth-input-state"
            />

            <TwAddBanner />

            <form>
                <div className="flex flex-col justify-center items-center border-4 border-dashed border-gray mt-9 px-24 py-12 rounded-2xl">
                    <input type="file" accept=".jpg, .png" className="hidden" id="file-input" />
                    <label htmlFor="file-input" className="cursor-pointer">
                        <Image 
                            src={'/add-img.png'}
                            height={220}
                            width={320}
                            alt="add img"
                        />
                    </label>
                    

                    <h2 className="font-bold text-3xl mt-0 tracking-wide pt-8 mb-3">Import your trash image</h2>

                    <p className="text-center">
                        Maximum file size: 5 MB <br />
                        Supported format: JPG, PNG
                    </p>
                </div>

                <Select 
                    label="Jenis Sampah"
                    placeholder="Pilih jenis sampah"
                    style="px-3 py-2 w-[100%] pr-5"
                    options={data}
                />

                <Input
                    type="text"
                    style="px-3 py-2 w-[100%]"
                    placeholder="Input berat sampah"
                    label="Trash Weight (kg)"
                />

                <Link href="/trashure-worth/trashure-worth-check">
                    <input type="submit" value={"Submit"} className="px-8 py-3 font-semibold text-white bg-[#262832] rounded-lg w-[100%] mt-8 pointer" />
                </Link>
            </form>

            
        </div>
    )
}