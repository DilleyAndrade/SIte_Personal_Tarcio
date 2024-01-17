import AboutMe from "@/components/AboutMe";
import Benefits from "@/components/Benefits";
import HomePage from "@/components/HomePage";
import HomePageMobile from "@/components/HomePageMobile";
import MenuMobile from "@/components/MenuMobile";

export default function Home() {
  return (
   <>
   <div className="fixed w-full z-50">
    <MenuMobile />
   </div>
    
    <HomePageMobile />
    <HomePage />
    <Benefits />
    <AboutMe/>
   </>
  )
}
