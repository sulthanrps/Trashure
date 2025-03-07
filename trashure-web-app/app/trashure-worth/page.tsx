import JenisSampah from "./components/jenis-sampah";
import TrashureWorthBanner from "./components/trashure-worth-banner";

export default function TrashureWorth() {
    return (
        <div className="min-h-screen flex flex-col p-12 pt-0 items-center">
            <TrashureWorthBanner />

            <JenisSampah />
        </div>
    );
}