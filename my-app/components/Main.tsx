import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Button } from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa'

export const Main = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="black"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="black"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-[35px] text-center text-blue-100 max-w-80'>Welcome.</h2>
          <TextGenerateEffect className="text-center text-4xl md:text-5xl lg:text-6xl" words="Hi, My name is Ouchen Soukaina"/>
          <p className='text-center md:tracking-wider text-[20px] mb-4'>
            I&apos;m a Full Stack Developer based in Morocco. I have worked on a wide range of front-end projects, from e-learning applications to eCommerce and booking platforms, with a focus on creating clean, well-crafted interfaces that provide a seamless user experience.
          </p>
          <a href="/resume.pdf" download="resume.pdf">
            <Button title="Show my resume" icon={<FaLocationArrow />} position="right"/>
          </a>
        </div>
      </div>
    </div>
  )
}