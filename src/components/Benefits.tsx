import Benefit from "./Benefit";

export default function Benefits() {
  return (
    <div className="bg-mainColor flex flex-wrap items-center justify-center gap-14 gap-y-20 px-6  lg:px-28 2xl:px-64 pb-32">
      <Benefit 
        benefictImage="/iconBenefictClock.png"
        benefictTitle="Flexibilidade de horário"
        benefictDescription="Treino compatível com seu horário"
      />

      <Benefit 
        benefictImage="/iconBenefictWeight.png"
        benefictTitle="Treinos personalizados"
        benefictDescription="Sempre o treino certo para você"
      />

      <Benefit 
        benefictImage="/iconBenefictPersonal.png"
        benefictTitle="Motivação ativa"
        benefictDescription="Suporte de treino profissional"
      />

      <Benefit 
        benefictImage="/iconBenefictPersonal.png"
        benefictTitle="Motivação ativa"
        benefictDescription="Suporte de treino profissional"
      />
      
    </div>
  )
}
