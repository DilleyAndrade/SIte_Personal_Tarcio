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
          serviceDescription="Atinja o seu ápice físico, melhore a sua
          potência, força, velocidade e
          resistência e seja um atleta de ponta."
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Avaliação física"
          serviceDescription="Atinja o seu ápice físico, melhore a sua
          potência, força, velocidade e
          resistência e seja um atleta de ponta."
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Avaliação física"
          serviceDescription="Atinja o seu ápice físico, melhore a sua
          potência, força, velocidade e
          resistência e seja um atleta de ponta."
        />
        <TrainingServices
          serviceImage="/service.jpg"
          serviceTitle="Avaliação física"
          serviceDescription="Atinja o seu ápice físico, melhore a sua
          potência, força, velocidade e
          resistência e seja um atleta de ponta."
        />
      </div>
    </div>
  )
}
