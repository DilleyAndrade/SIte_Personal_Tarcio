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
            resultImage="/beforeAfter2.jpg"
            resultDescription="Estava me sentindo cansado, sem ânimo, pernas 
            doíam, o corpo estava sentindo os efeitos da obesidade! Após um ano, esse foi o resultado! 
            Menos 27 kg. Mudança não só estética, quanto ao padrão de vida também!."
            resultName="Rodrigo"
          />
          <Results 
            resultImage="/beforeAfter1.jpg"
            resultDescription="Faço parte do time de Tarcio há dois anos e estou muito satisfeita com meus 
            resultados. Além da melhora na autoestima, me sinto muito mais dispostas para as atividades no 
            dia a dia! Tarcio é um excelente profissional."
            resultName="Anny Caroline"
            />
          <Results 
            resultImage="/beforeAfter3.jpg"
            resultDescription="Meu treinador é simplesmente o melhor personal em linha reta.Seu trabalho é
             do patamar de Guardiola.Além do profissional de excelência e ético, é um amigo humano e solidário, 
             de base e estrutura."
            resultName="José Bartolomeu"
          />
        </div>
      </div>
      <ButtonYellow 
      buttonMessage="Veja os depoimentos"
      buttonTarget="#deposition"
      />
    </div>
  )
}
