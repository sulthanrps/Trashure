interface SelectProps {
    label: string,
    style: string,
    placeholder: string,
    options: string[]
}

export default function Select({
    label,
    style,
    placeholder,
    options
}: SelectProps){
    return (
        <div className="flex flex-col gap-2">
            <div className="mb-1 mt-4 flex">
                <label className="font-semibold text-black" htmlFor={label}>{label}</label>
            </div>
            
            <select className={`border border-[#E0E0E0] rounded-lg p-8 ${style}`} name={label} id={label}>
                {placeholder && <option value="">{placeholder}</option>}
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}