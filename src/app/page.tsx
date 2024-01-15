import HomePage from "@/components/HomePage";
import HomePageMobile from "@/components/HomePageMobile";
import MenuMobile from "@/components/MenuMobile";

export default function Home() {
  return (
   <>
   <div className="fixed w-full">
    <MenuMobile />
   </div>
    
    <HomePageMobile />
    <HomePage />
   </>
  )
}
