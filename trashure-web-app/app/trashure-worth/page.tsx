import JenisSampah from "../../components/jenisSampah";
import TrashureWorthBanner from "../../components/trashureWorthBanner";

export default function TrashureWorth() {
    return (
        <div className="min-h-screen flex flex-col p-12 pt-0 items-center">
            <TrashureWorthBanner />

            <JenisSampah />
        </div>
    );
}