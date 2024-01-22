interface TitlesSectionProps {
  title: string
  description: string
}
export default function TitlesSection({title, description}:TitlesSectionProps) {
  return (
    <div className="text-center w-full flex justify-center my-16">
      <div className="max-w-max flex flex-col items-center">
      <h3 className="font-bebas text-mainColor text-5xl">
        {title}
      </h3>
      <p className="font-inter max-w-xl text-fontColor text-xl border-b-mainColor border-b-2 ">
        {description}
      </p>
      </div>
      
    </div>
  )
}
