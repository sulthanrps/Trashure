import GreenMap from "./components/greenMap";
import HomePageBanner from "./components/homePageBanner";
import Navbar from "./components/navbar";
import OurVision from "./components/ourVision";
import Services from "./components/services";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar loggedIn={false} /> 

      <div className="flex flex-col items-center justify-center">
      
        <HomePageBanner />

        <div className="flex flex-col items-center justify-center p-4 mt-8">
          <OurVision />
          <Services />
          <GreenMap />
        </div>
      </div>

    </div>
    
  );
}
