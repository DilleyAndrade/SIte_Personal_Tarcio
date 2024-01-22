import Image from "next/image";

interface TrainingServicesProps{
  serviceImage: string
  serviceTitle: string
  serviceDescription:string
}

export default function TrainingServices({serviceImage, serviceTitle, serviceDescription}:TrainingServicesProps) {
  return (
    <div className="max-w-80 ">
      <div className="relative overflow-hidden">
        <Image src={serviceImage} width={320} height={312} alt="" 
          className="hover:scale-125 duration-500"
        />
          <div className="absolute p-4 bottom-0 bg-bgColor bg-opacity-50 backdrop-blur-sm">
            <h5
              className="font-bebas text-mainColor text-3xl"
            >
              {serviceTitle}
            </h5>
            <p className="font-inter text-fontColor text-base max-w-xl">
            {serviceDescription}
            </p>
          </div>
      </div>
      
    </div>
  )
}
