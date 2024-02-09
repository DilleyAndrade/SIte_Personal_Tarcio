import TitlesSection from "./TitlesSection";

export default function TestemonialsPage() {
  return (
    <div id="depositions">
      <TitlesSection
        title="Depoimentos dos alunos"
        description="Veja o que meu alunos dizem de mim"
      />
      <div className="bg-mainColor px-6 lg:px-28 2xl:px-64 py-7 flex gap-10 flex-wrap justify-center items-center">
        <iframe 
          width="350" 
          height="300" 
          src="https://www.youtube.com/embed/oWj2IiAM6kk?si=xDKtuCp8VoNBivmw" 
          title="Depoimento de Rayssa" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />

        <iframe 
          width="350" 
          height="300" 
          src="https://www.youtube.com/embed/lf2XnBHwP3E?si=vAN_H8_d09rjC-Ia" 
          title="Depoimento de Ariely Luna" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />

        <iframe 
          width="350" 
          height="300" 
          src="https://www.youtube.com/embed/-KVAGVTG0wk?si=kirbkIuIb9mB10ZZ" 
          title="Depoimento de Eduarda" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
         
      </div>
    </div>
  )
}
