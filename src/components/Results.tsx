import Image from "next/image";

interface ResulProps{
  resultImage: string
  resultDescription:string
  resultName:string
}

export default function Results({resultImage, resultDescription, resultName}:ResulProps) {
  return (
    <div className="bg-fontColor p-5 max-w-max flex flex-col gap-5 items-center text-center rounded-md">
      <Image src={resultImage} width={315} height={315} alt="" />
    <p className="font-inter text-bgColor text-base w-64 ">{resultDescription}</p>
    <h5 className="font-inter font-black text-bgColor text-xl">{resultName}</h5>
    </div>
  )
}
