import BankSampahCard from "@/components/bankSampahCard";
import WasteConnectBanner from "@/components/wasteConnectBanner";
import WasteConnectSearch from "@/components/wasteConnectSearch";

export default function WasteConnect(){
    return (
        <div className="w-[85%] flex flex-col mx-auto min-h-screen items-center mb-4">
            <div className="w-[100%] relative flex flex-col items-center">
                <WasteConnectBanner />
                <WasteConnectSearch />
            </div>

            <div className="flex flex-col gap-6 mt-24">
                <h1 className="text-black font-semibold text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full max-w-max">In Your City</h1>
                <BankSampahCard length={4} column={4} />
            </div>
            
        </div>
    )
}