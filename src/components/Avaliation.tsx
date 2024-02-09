import Image from "next/image";

interface AvaliationProps{
  avaliationImage: string
  avaliationName: string
  avaliationProfession: string
  avaliationComment: string
}

export default function Avaliation({avaliationImage, avaliationName, avaliationProfession, avaliationComment}:AvaliationProps) {
  return (
    <div className="bg-fontColor p-6 rounded-2xl max-w-80">
      <div className="flex gap-4 items-center">
        <Image src={avaliationImage} width={79} height={79} alt="Foto de aluno" className="rounded-full" />
        <div className="flex flex-col">
          <h4 className="font-inter font-bold text-bgColor text-2xl">
            {avaliationName}
          </h4>
          <p className="font-inter text-bgColor text-xl">
            {avaliationProfession}
          </p>
          <div className="flex gap-1">
            <Image src="/starGold.png" width={18} height={18} alt="Estrela dourada" />
            <Image src="/starGold.png" width={18} height={18} alt="Estrela dourada" />
            <Image src="/starGold.png" width={18} height={18} alt="Estrela dourada" />
            <Image src="/starGold.png" width={18} height={18} alt="Estrela dourada" />
            <Image src="/starGold.png" width={18} height={18} alt="Estrela dourada" />
          </div>
        </div>
      </div>
      <p className="font-inter text-bgColor text-lg mt-5">
       {avaliationComment}
      </p>
    </div>
  )
}
