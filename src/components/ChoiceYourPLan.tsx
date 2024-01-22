import React from 'react'
import TitlesSection from './TitlesSection'
import Image from 'next/image'
import ButtonBlue from './ButtonBlue'

export default function ChoiceYourPLan() {
  return (
    <div className='px-6 2xl:px-64 mb-14'>
      <TitlesSection 
        title='Escolha como quer treinar'
        description='Qual a modalidade de Personal Trainer
        que atende as suas necessidades nesse momento?'
      />
      <div className='flex flex-wrap justify-center gap-11 bg-mainColor py-12  px-2 rounded-xl'>
        <div className='flex flex-col items-center gap-5'>
          <h3 className="font-bebas text-center text-bgColor text-5xl">
            Atendimento Presencial
          </h3>
          <Image src="/consultancyPresential.jpg" width={391} height={262} alt='' className='rounded-xl'/>
          <p className="font-inter text-center max-w-md text-bgColor text-xl ">
            Atendimento presencial, em academias, condomínios ou residencial.
            (Na região metropolitana do Recife)
          </p>
          <ButtonBlue 
            buttonMessage='Saiba mais!'
            buttonTarget='https://wa.me/message/F7ZOGX6XXKEBD1'
          />
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h3 className="font-bebas text-center text-bgColor text-5xl">
            Atendimento Online
          </h3>
          <Image src="/consultancyOnline.jpg" width={391} height={262} alt='' className='rounded-xl'/>
          <p className="font-inter text-center max-w-md text-bgColor text-xl ">
            Treinos personalizados na palma da sua mão, com suporte constante, para 
            garantir que você tenha os melhores resultados sempre.
          </p>
          <ButtonBlue 
            buttonMessage='Saiba mais!'
            buttonTarget='https://wa.me/message/F7ZOGX6XXKEBD1'
          />
        </div>
      </div>
    </div>
  )
}
