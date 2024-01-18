import Image from "next/image";
import ButtonYellow from "./ButtonYellow";
export default function HomePageMobile() {
  return (
    <div id="homeMobile" className="lg:hidden">
      <div className="px-6 pt-28 w-full flex flex-col gap-8 sm:flex-row items-center sm:items-start md:items-center justify-center">
        <div className="text-fontColor max-w-max text-center flex flex-col items-center gap-3">
          <h1 className="text-5xl md:text-6xl font-bebas">
            Transforme seu corpo e sua vida hoje mesmo!
          </h1>
          <p className="text-sm md:w-10/12">
            Junte-se a nós para uma jornada fitness personalizada 
            e alcance seus objetivos de saúde e bem-estar.
          </p>
          <ButtonYellow 
            buttonMessage="Quero fazer parte"
            buttonTarget="https://wa.me/message/F7ZOGX6XXKEBD1"
          />
        </div>
        <Image 
          src="/fotoTarcioMain.png" 
          alt="Picture of the author"
          width={300}
          height={400}
          priority={true}
        />
      </div>
    </div>
  )
}
