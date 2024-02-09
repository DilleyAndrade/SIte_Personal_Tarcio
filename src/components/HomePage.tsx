import Image from "next/image";
import ButtonYellow from "./ButtonYellow";
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home" className="hidden lg:block">
      <header className="hidden border-b-2 bg-bgColor border-b-mainColor items-center lg:justify-between lg:flex gap-7 text-fontColor py-6 px-6  lg:px-28 2xl:px-64 ">
        <div className='flex gap-3'>
          <p>+55 (81) 98723-5056</p>
          <p>tarciomnsilva@gmail.com</p>
        </div>
        <div className='flex gap-3 justify-center '>
            <a 
              className="hover:scale-105 duration-300"
              href="https://www.instagram.com/tarciomarquespersonal/" 
              target='_blank'
            >
              <InstagramLogo 
                size={40} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a 
              className="hover:scale-105 duration-300"
              href="https://www.youtube.com/@tarcioceifadorpersonal" 
              target='_blank'
            >
              <YoutubeLogo 
                size={38} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a 
              className="hover:scale-105 duration-300"
              href="https://www.facebook.com/TarcioMarquess" 
              target='_blank'
            >
              <FacebookLogo 
                size={38} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>

            <a 
              className="hover:scale-105 duration-300"
              href="https://wa.me/message/F7ZOGX6XXKEBD1" 
              target='_blank'
            >
              <WhatsappLogo 
                size={38} 
                weight='bold' 
                className='bg-mainColor rounded-full p-1 text-middleColor'
              />
            </a>
          </div>
      </header>
      <nav className="">
          <ul className='px-28 2xl:px-64  font-inter text-center text-2xl flex  items-center gap-6 my-11'>
            <li
              className='text-fontColor cursor-pointer border-b-2 border-bgColor hover:text-mainColor hover:border-mainColor duration-300'
              >
              <a href="#home">Home</a>
            </li>
            <li 
              className='text-fontColor cursor-pointer border-b-2 border-bgColor hover:text-mainColor hover:border-mainColor duration-300'
            >
              <a href="#aboutMe">Quem sou eu</a>
            </li>
            <li 
              className='text-fontColor cursor-pointer border-b-2 border-bgColor hover:text-mainColor hover:border-mainColor duration-300'
            >
              <a href="#consultancy">Consultorias</a>
            </li>
            <li 
              className='text-fontColor cursor-pointer border-b-2 border-bgColor hover:text-mainColor hover:border-mainColor duration-300'
            >
              <a href="#depositions">Depoimentos</a>
            </li>
          </ul>
      </nav>
      
      <div className="px-28 2xl:px-64 w-full flex flex-row items-center">
        <div className="text-fontColor text-center sm:text-start flex flex-col sm:items-start gap-3 mb-14">
          <h1 className="font-bebas  lg:text-7xl  xl:text-8xl">
            Transforme seu corpo <br /> e sua vida hoje mesmo!
          </h1>
          <p className="text-sm lg:text-base xl:text-xl lg:w-7/12">
            Junte-se a nós para uma jornada fitness personalizada 
            e alcance seus objetivos de saúde e bem-estar.
          </p>
          <ButtonYellow 
            buttonMessage="Quero fazer parte"
            buttonTarget="https://wa.me/message/F7ZOGX6XXKEBD1"
          />
        </div>
        <div className="relative">
          <div className="z-30 mt-6">
            <Image 
              src="/fotoTarcioMain.png" 
              alt="Picture of the author"
              width={550}
              height={558}
              priority={true}
            />
          </div>
          <div className="hidden xl:block h-5/6 w-72 bg-mainColor absolute -top-32 left-24 -z-10">
            <Image 
              className="mt-10 ml-8"
              src="/tarcioLogoBlack.png" 
              alt="Logo Tarcio"
              width={200}
              height={200}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
