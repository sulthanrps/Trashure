import EduGreenBanner from "@/components/eduGreenBanner";
import LeaderBoard from "@/components/leaderboard";
import VideosSection from "@/components/videosSection";

export default function EduGreen(){
    return (
        <div className="flex flex-col min-h-screen w-[85%] mx-auto">
            <div className="flex w-[100%] gap-8">
                <EduGreenBanner />
                <LeaderBoard />
            </div>
            
            <VideosSection />

        </div>
    )
}