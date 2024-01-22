import AboutMe from "@/components/AboutMe";
import Avaliations from "@/components/Avaliations";
import Benefits from "@/components/Benefits";
import ChoiceYourPLan from "@/components/ChoiceYourPLan";
import FirstStep from "@/components/FirstStep";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import HomePageMobile from "@/components/HomePageMobile";
import MenuMobile from "@/components/MenuMobile";
import ResultsPage from "@/components/ResultsPage";
import StepByStep from "@/components/StepByStep";
import TestemonialsPage from "@/components/TestemonialsPage";
import TrainingTypes from "@/components/TrainingTypes";

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
    <TrainingTypes />
    <ResultsPage />
    <FirstStep />
    <ChoiceYourPLan />
    <StepByStep />
    <TestemonialsPage />
    <Avaliations />
    <Footer />
   </>
  )
}
