import TitlesSection from "./TitlesSection";

export default function AboutMe() {
  return (
    <div className="px-6">
      <TitlesSection
        title="Conheça Tarcio Marques"
        description="o seu personal trainer"
      />
      <p className="font-inter max-w-max text-fontColor text-xl">
        Me chamo Tarcio Marques, sou profissional de Educação Física formado pela Universidade 
        Federal de Pernambuco (UFPE) . Atuo nas funções de coordenador técnico na musculação, 
        Personal trainer com foco em musculação e treinamento funcional.
      </p>
    </div>
  )
}
