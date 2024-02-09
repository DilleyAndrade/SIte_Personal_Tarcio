import Image from "next/image";
import TitlesSection from "./TitlesSection";
import ButtonYellow from "./ButtonYellow";
import { Barbell, PersonArmsSpread, SneakerMove } from "@phosphor-icons/react/dist/ssr";

export default function AboutMe() {
  return (
    <div id="aboutMe">
      <div className="px-6 text-center flex flex-col items-center mb-10">
        <TitlesSection
          title="Conheça Tarcio Marques"
          description="o seu personal trainer"
        />
        <p className="font-inter max-w-4xl text-fontColor text-xl mb-7">
          Me chamo Tarcio Marques, sou profissional de Educação Física formado pela Universidade 
          Federal de Pernambuco (UFPE). Atuo nas funções de Personal trainer com foco em musculação
          e treinamento funcional.
        </p>
        <div>
          <a 
            href="#" 
            target="_blank"
            className="hover:scale-110 duration-300 flex items-center gap-4"
          >
            <Image src="/playIntro.png" width={36} height={36} alt="Icon play" />
            <p className="font-inter text-fontColor text-xl">
              Veja a intro
            </p>
          </a>
        </div>
      </div>
      <div className=" bg-middleColor flex flex-col items-center gap-10 px-6 2xl:px-64 py-11">
        <div className="flex flex-col items-center justify-center gap-9   lg:flex-row">
          <div>
            <Image 
              src="/fotoTarcioGym.jpg" 
              width={370} 
              height={36} 
              alt="Icon play"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-mainColor flex items-center justify-center p-4 rounded-md">
                <Barbell width={70} height={70} weight="fill" color="#424242" />
              </div>
              <div>
                <h5
                  className="font-bebas text-mainColor text-2xl"
                >
                  Personal trainer
                </h5>
                <p className="font-inter text-fontColor text-base max-w-xl">
                  Você está pronto para alcançar seus objetivos fitness e conquistar a melhor versão de si 
                  mesmo? Como seu Personal Trainer dedicado, estou aqui para guiá-lo nessa jornada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-mainColor flex items-center justify-center p-4 rounded-md">
                <SneakerMove width={70} height={70} weight="fill" color="#424242" />
              </div>
              <div>
                <h5
                  className="font-bebas text-mainColor text-2xl"
                >
                  Treinador
                </h5>
                <p className="font-inter text-fontColor text-base max-w-xl">
                  Trabalharemos juntos para desenvolver estratégias que maximizem seu desempenho esportivo. 
                  Desde o aprimoramento técnico até a periodização eficaz do treinamento.
                </p>
              </div>
              
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-mainColor flex items-center justify-center p-4 rounded-md">
                <PersonArmsSpread width={70} height={70} weight="fill" color="#424242" />
              </div>
              <div>
                <h5
                  className="font-bebas text-mainColor text-2xl"
                >
                  Avaliador físico
                </h5>
                <p className="font-inter text-fontColor text-base max-w-xl">
                  Se você está comprometido com a busca por uma saúde melhor e um corpo mais forte, minha 
                  experiência como Avaliador Físico está pronta para ser sua aliada nessa jornada.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-start mt-6">
              <h5
                className="font-bebas text-mainColor text-3xl"
              >
                Cursos e extensões
              </h5>
              <ul className="font-inter text-fontColor text-base">
                <li>Certified Functional Strength Coach (CFSC)- level 1</li>
                <li>Antropometrista ISAK- Nível 1</li>
                <li>Functional Movement Screen- level 1</li>
                <li>Treinador core 360</li>
              </ul>
            </div>
          </div>
        </div>
        <ButtonYellow 
          buttonMessage="Fale comigo agora"
          buttonTarget="https://wa.me/message/F7ZOGX6XXKEBD1"
        />
      </div>
    </div>
    
  )
}
