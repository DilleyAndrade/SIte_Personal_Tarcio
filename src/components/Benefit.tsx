import Image from "next/image";

interface BeneficProps{
  benefictImage:string
  benefictTitle:string
  benefictDescription:string
}

export default function Benefit({benefictImage, benefictTitle, benefictDescription}:BeneficProps) {
  return (
    <div 
      className="bg-middleColor flex flex-col gap-1 rounded-tl-xl rounded-b-xl rounded-tr-4xl
      p-7 max-w-max -mt-10 z-20 w-72"
    >
      <Image src={benefictImage} width={78} height={78} alt="Clock icon" />
      <h3 className="font-inter font-black text-mainColor text-3xl">
        {benefictTitle}
      </h3>
      <p className="text-fontColor font-inter text-xl">
        {benefictDescription}
      </p>
    </div>
  )
}
