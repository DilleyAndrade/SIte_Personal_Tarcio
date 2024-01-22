import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-6 lg:px-28 2xl:px-64 mt-20">
      <div className=" p-3 lg:p-11 bg-middleColor flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-center lg:justify-between">
        <div className="flex flex-col justify-center items-center ">
          <Image src="/tarcioLogoColor.png" width={182} height={88} alt="Logo Tarcio" />
          <ul className="font-inter text-fontColor text-center lg:text-start text-xl mt-8">
            <li>Av. Gov. Agamenon Magalhães, 4318</li>
            <br />
            <li>tarciomnsilva@gmail.com</li>
            <br />
            <li>+55 (81) 98723-5056</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bebas text-center lg:text-start text-mainColor text-5xl">
            Outras páginas
          </h3>
          <nav>
            <ul className='font-inter text-2xl flex flex-col items-center lg:items-start gap-6 mt-8'>
              <li
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
                >
                <Link href="#home"/>
                Home
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
              >
                <Link href="#"/>
                Quem sou eu
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
              >
                <Link href="#"/>
                Consultorias
              </li>
              <li 
                className='text-fontColor cursor-pointer border-b-2 border-middleColor hover:text-mainColor hover:border-mainColor duration-300'
              >
                <Link href="#"/>
                Depoimentos
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-mainColor rounded-md p-3 lg:w-96">
          <h3 className="font-bebas text-bgColor text-5xl">
            Nossas notícias
          </h3>
          <p className="font-inter text-bgColor text-xl">
            Fique por dentro das
            <br />
            novidades e promoções
          </p>
          <input 
            type="email" 
            className="h-14 w-full text-center rounded-full my-5 font-inter"
            placeholder="Digite seu email"
           />
          <a 
            href="" 
            target='_blank'
            className="bg-buttonBlue duration-300 font-inter font-black text-fontColor 
              text-xl h-14 rounded-full flex items-center justify-center hover:scale-105"
          >
            Inscrever-se
          </a>
        </div>
      </div>
      <footer className="justify-center xl:justify-between items-center flex flex-col xl:flex-row gap-7 text-fontColor pt-8 mb-6">
        <div className='flex gap-3 text-center'>
          <p>Copyright @ 2024 Tarcio Marques. Desenvolvido por <a className="text-mainColor" href="www.dilleyandrade.com.br">Dilley Andrade</a></p>
        </div>
        <div className='flex gap-3 justify-center'>
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
              href="" 
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
      </footer>
    </div>
  )
}
