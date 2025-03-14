import BankSampahCard from "@/components/bankSampahCard";
import SideScheduler from "@/components/sideScheduler";

export default function FindBankSampah(){
    return (
        <div className="w-[85%] flex mx-auto min-h-screen justify-center gap-8">
            <SideScheduler />
            <BankSampahCard length={8} column={3} />
        </div>
    )
}