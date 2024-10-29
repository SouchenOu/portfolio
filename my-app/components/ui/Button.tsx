import React from 'react'

export const Button = ({title, icon, position, handleClick, otherClasses} : {title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?:string}) => {
  return (
    <button className="relative inline-flex  overflow-hidden rounded-full p-[2px] h-[80px] md:w-60 md:mt-10 focus:outline-none " onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
            {position === 'left' && icon}
                {title}
            {position === 'right' && icon}
        </span>
  </button>
  )
}
