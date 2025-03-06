import Map from "./map"

export default function GreenMap(){
    return (
        <div className="flex flex-col items-center justify-center mt-16 w-full mb-16">
            <h1 className="font-semibold text-black text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full">Green Map</h1>
            <p className="w-[490px] text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
            <Map />
        </div>
    )
}