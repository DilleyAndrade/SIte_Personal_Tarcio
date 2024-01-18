interface ButtonYellowProps{
  buttonMessage: string
  buttonTarget: string
}

export default function ButtonYellow({buttonMessage, buttonTarget}:ButtonYellowProps) {
  return (
    <div>
      <a 
        href={buttonTarget} 
        target='_blank'
        className="bg-mainColor hover:bg-mainColorHover duration-300 font-inter font-black text-bgColor 
          text-xl py-3 px-5 rounded-full max-w-max flex items-center justify-center hover:scale-110"
      >
        <h4>{buttonMessage}</h4>
      </a>
      
    </div>
  )
}
