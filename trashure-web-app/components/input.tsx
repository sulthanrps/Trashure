interface InputProps {
    type : string,
    style : string,
    placeholder : string,
    label: string
}

export default function Input({
    type,
    style,
    placeholder,
    label
}: InputProps){
    return (
        <div className="flex flex-col gap-2">
            <div className="mb-1 mt-4 flex">
                <label className="font-semibold text-black" htmlFor={type}>{label}</label>
                {/* {label === "Alamat Detil" && <p className="text-red-500 ml-1">*</p>} */}
            </div>
            
            <input className={`border border-[#E0E0E0] rounded-lg p-2 ${style}`} type={type} name={type} id={type} placeholder={placeholder} />
        </div>
    )
}