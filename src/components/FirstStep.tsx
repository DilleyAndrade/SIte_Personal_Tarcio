import Image from "next/image";
import TitlesSection from "./TitlesSection";

export default function FirstStep() {
  return (
    <div>
      <div className="px-6">
        <TitlesSection 
          title="Dê o primeiro passo hoje mesmo!"
          description="Aumente sua autoestima através dos treinos
          especializados e funcionais, que encaixam na sua
          rotina diária e trazem os melhores resultados."
        />
      </div>
      
      <div className="flex flex-wrap justify-center w-full">
        <Image src="/foto1.jpg" width={350} height={350} alt="Alunos de tarcio treinando" />
        <Image src="/foto4.jpg" width={350} height={350} alt="Alunos de tarcio treinando" />
        <Image src="/foto2.jpg" width={350} height={350} alt="Alunos de tarcio treinando" />
        <Image src="/foto3.jpg" width={350} height={350} alt="Alunos de tarcio treinando" />
      </div>
    </div>
  )
}
