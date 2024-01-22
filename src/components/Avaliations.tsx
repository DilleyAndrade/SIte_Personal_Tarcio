import Image from "next/image";
import TitlesSection from "./TitlesSection";
import Avaliation from "./Avaliation";

export default function Avaliations() {
  return (
    <div>
      <TitlesSection 
        title="Avaliação dos alunos"
        description="Veja o que os alunos do team Ceifador
        pensam sobre nossos treinos"
      />
      <div className="px-6 lg:px-28 2xl:px-64">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-inter font-bold text-fontColor text-4xl">
            4.9
          </h3>
          <div className="flex gap-1 my-3">
            <Image src="/starGold.png" width={30} height={30} alt="Estrela dourada" />
            <Image src="/starGold.png" width={30} height={30} alt="Estrela dourada" />
            <Image src="/starGold.png" width={30} height={30} alt="Estrela dourada" />
            <Image src="/starGold.png" width={30} height={30} alt="Estrela dourada" />
            <Image src="/starGray.png" width={30} height={30} alt="Estrela dourada" />
          </div>
          <p className="font-inter text-fontColor text-xl">
            Avaliações gerais
          </p>
        </div>
        <div className="flex flex-wrap gap-12 items-center justify-center mt-9">
          <Avaliation 
            avaliationImage="/depoimento.jpg"
            avaliationName="Maria Clara"
            avaliationProfession="Esteticista"
            avaliationComment='"Sem duvidas o melhor app de treinamentos, já perdi 6kg em poucos meses de uso, o mais incrível é o acompanhamento com nutricionista."'
          />

          <Avaliation 
            avaliationImage="/depoimento.jpg"
            avaliationName="Maria Clara"
            avaliationProfession="Esteticista"
            avaliationComment='"Sem duvidas o melhor app de treinamentos, já perdi 6kg em poucos meses de uso, o mais incrível é o acompanhamento com nutricionista."'
          />

          <Avaliation 
            avaliationImage="/depoimento.jpg"
            avaliationName="Maria Clara"
            avaliationProfession="Esteticista"
            avaliationComment='"Sem duvidas o melhor app de treinamentos, já perdi 6kg em poucos meses de uso, o mais incrível é o acompanhamento com nutricionista."'
          />
        </div>
      </div>
    </div>
  )
}
