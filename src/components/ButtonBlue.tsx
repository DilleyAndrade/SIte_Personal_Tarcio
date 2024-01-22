interface ButtonBlueProps{
  buttonMessage: string
  buttonTarget: string
}

export default function ButtonBlue({buttonMessage, buttonTarget}:ButtonBlueProps) {
  return (
    <div>
      <a 
        href={buttonTarget} 
        target='_blank'
        className="bg-buttonBlue duration-300 font-inter font-black text-fontColor 
          text-xl py-3 px-8 rounded-full max-w-max flex items-center justify-center hover:scale-110"
      >
        <h4>{buttonMessage}</h4>
      </a>
    </div>
  )
}
