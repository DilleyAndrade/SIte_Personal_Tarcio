import ButtonYellow from "./ButtonYellow";
import TitlesSection from "./TitlesSection";

export default function StepByStep(){
  return(
    <div>
      <TitlesSection 
        title="Passo a passo para contratar"
        description="Veja como contratar a melhor consultoria"
      />
      <div className="bg-middleColor px-6 2xl:px-64 py-12 lg:flex lg:flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-mainColor max-w-max rounded-xl p-8">
            <h3 className="font-bebas text-center text-bgColor text-5xl mb-6">
              Consultoria Online
            </h3>
            <ul className="flex flex-col gap-8 font-inter font-bold text-center text-bgColor text-xl">
              <li>Treinos via APP</li>
              <li>Análise de movimento</li>
              <li>Atualização de treino</li>
              <li>Acompanhamento Online</li>
              <li>Vídeos dos exercícios</li>
              <li>Avaliação persencial para <br /> quem mora em Recife</li>
            </ul>
            </div>
            <ButtonYellow 
              buttonMessage="Contratar agora"
              buttonTarget="https://wa.me/message/F7ZOGX6XXKEBD1"
            />
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                1
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Vídeo explicativo
              </h5>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                2
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Saber suas necessidades
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                3
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Compartilhamento dos planos
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                4
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Encontro marcado (presencial ou remoto)
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                5
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Avaliação (física e de movimento)
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                6
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Protocolo de treino no aplicativo
                em 3/5 dias
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                7
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Suporte constante
              </h5>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
              <h5 className="font-inter bg-mainColor rounded-full w-7 h-7 font-bold text-center text-middleColor text-xl">
                8
              </h5>
              <h5 className="font-inter font-bold text-center text-fontColor text-xl">
                Acompanhamento de resultados
              </h5>
            </div>

          </div>
        </div>
        <h5 className="font-inter bg-mainColor  rounded-md py-2 px-4 font-bold text-center text-bgColor text-xl">
          Todos os planos lhe dão direito a consultoria ilimitada para tirar dúvidas
        </h5>
      </div>
    </div>
  )
}