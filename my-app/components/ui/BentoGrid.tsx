"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { GlobeDemo } from "./GridGlob";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import { Button } from "./Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
      className
    )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,

}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () =>{
    navigator.clipboard.writeText('soukainaouchenuai@gmail.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden text-[30px] relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4   border border-white-[0.1] justify-between flex  flex-col space-y-4",
        className
      )}
      style={{
     
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6  && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
            {img && (
              <Image
                width={900}
                height={900}
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover rounded-lg object-center ")}
              />
            )}
          </div>
          <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            <Image
              width={100}
              height={100}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (<BackgroundGradientAnimation>
          <div className="absolute z-50 items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>)}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-1 p-1 lg:p-1')
        }>
          <div className="font-sans font-extralight text-[#c1c2d3]  text-sm dark:text-neutral-200 md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans top-[20px] font-bold  text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        </div>
          
      </div>
      
      {id === 2 && <GlobeDemo/>}
      {id === 3 && (<div className="flex gap-1 lg:gap-5 lg:w-[490px] sm:w-[200px] absolute -right-3 lg:-right-2">
        <div className="flex flex-col gap-3 lg:gap-8">
          {['C', 'C++', 'TypeScript', 'JavaScript'].map((item)=>(
            <span key="item" className="py-2 lg:py-4 lg:px-8  px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
          ))}

        </div>

        <div className="flex flex-col gap-3 lg:gap-8">

          {['ReactJs', 'NextJs', 'NodeJs','NestJs'].map((item)=>(
            <span key="item" className="py-2 lg:py-4 lg:px-8 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
          ))}

        </div>
        <div className="flex flex-col gap-3 lg:gap-8">

          {['MongoDb', 'MySql', 'PostgreSql', 'Prisma'].map((item)=>(
            <span key="item" className="py-2 lg:py-4 lg:px-8 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
          ))}

        </div>
      </div>)}
      {id === 6 && (
        <div className="mb-[300px] relative ml-[230px]">
          <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{loop: copied, autoplay: copied, animationData, rendererSettings:{preserveAspectRatio: 'xMidYMid slice'}}}/>
          </div>
          <Button title={copied ? 'Email Copied' : 'Copy my Email'} icon={<IoCopyOutline/>} position="left" otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
        </div>
      )}
    </div>
  );
};
