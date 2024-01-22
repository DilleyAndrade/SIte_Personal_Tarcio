import ButtonYellow from "./ButtonYellow";
import Results from "./Results";
import TitlesSection from "./TitlesSection";

export default function ResultsPage() {

  return (
    <div className="bg-middleColor flex flex-col items-center gap-10 pt-1 pb-14">
      <div className="px-6">
        <TitlesSection 
          title="Entre para o nosso time de resultados"
          description="Sua mudança de vida começa agora"
        />
        <div className="flex flex-wrap justify-center gap-5">
          <Results 
            resultImage="/beforeAfter1.jpg"
            resultDescription="Estou muito feliz com meus
            resultados, graças a isso pude
            recuperar minha auto-estima."
            resultName="Karen Veiga"
          />
          <Results 
            resultImage="/beforeAfter1.jpg"
            resultDescription="Estou muito feliz com meus
            resultados, graças a isso pude
            recuperar minha auto-estima."
            resultName="Maria estela"
            />
          <Results 
            resultImage="/beforeAfter1.jpg"
            resultDescription="Estou muito feliz com meus
            resultados, graças a isso pude
            recuperar minha auto-estima."
            resultName="Rose Pestanha"
          />
        </div>
      </div>
      <ButtonYellow 
      buttonMessage="Veja os depoimentos"
      buttonTarget="#"
      />
    </div>
  )
}
