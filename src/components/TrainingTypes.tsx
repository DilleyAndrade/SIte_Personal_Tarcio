import TitlesSection from "./TitlesSection";
import TrainingServices from "./TrainingServices";

export default function TrainingTypes() {
  return (
    <div>
      <div className="px-6">
        <TitlesSection
          title="Seu treino alinhado com seu objetivo"
          description="Programas de treino personalizados para os seus objetivos"
        />
      </div>
      
      <div className="flex flex-wrap gap-9 justify-center bg-mainColor px-6 2xl:px-64 py-10">
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Avaliação física"
          serviceDescription="Triagem dos parâmetros físicos para fins comparativos futuros (antes e depois)"
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Avaliação funcional "
          serviceDescription="Triagem da capacidade de realizar movimento em todas as articulações, com o
            objetivo de diminuir erros"
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Musculação funcional "
          serviceDescription="Treinos voltados para a sua realidade, visando melhora no parâmetro físico
            e na realização de movimentos."
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Hipertrofia seletiva "
          serviceDescription="Foco no crescimento daqueles músculos que você tem mais dificuldade."
        />
      </div>
    </div>
  )
}
