import Benefit from "./Benefit";

export default function Benefits() {
  return (
    <div className="bg-mainColor flex flex-wrap items-center justify-center gap-14 gap-y-20 px-6  lg:px-28 2xl:px-64 pb-32">
      <Benefit 
        benefictImage="/iconBenefictClock.png"
        benefictTitle="Flexibilidade de horário"
        benefictDescription="Treino adaptado para sua disponibilidade"
      />

      <Benefit 
        benefictImage="/iconBenefictWeight.png"
        benefictTitle="Treinos personalizados"
        benefictDescription="Atendimento no mundo todo"
      />

      <Benefit 
        benefictImage="/iconBenefictPersonal.png"
        benefictTitle="Motivação ativa"
        benefictDescription="Motivação e suporte constante"
      />

      <Benefit 
        benefictImage="/iconBenefictPersonal.png"
        benefictTitle="Vida saudável"
        benefictDescription="Melhore suas dores e ganhe músculos"
      />
      
    </div>
  )
}
