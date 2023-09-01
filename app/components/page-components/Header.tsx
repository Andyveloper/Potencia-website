'use client'
import React from 'react'
import { Typography } from '../material-tailwind/material-tailwind'
import Image from 'next/image'
import DialogDefault from './Dialog'

interface Props {
  title: string
  description: string
  image: string
  page: string
}

function Header ({ title, description, image, page }: Props) {
  return (
    <header className={`container w-full max-w-none h-screen flex flex-col sm:flex-row items-center pt-12 px-[5%] bg-cover bg-blend-soft-light bg-[rgba(55,0,119,0.9);] justify-center ${page}_background`}>
        <div className="container">
            <Typography variant="h1" className="text-white text-4xl sm:text-5xl 3xl:text-7xl">{title}</Typography>
            <Typography variant="paragraph" className="mt-10 text-white text-md sm:text-xl"> {description} </Typography>

              <DialogDefault buttonText='' />
        </div>
        <div className="container rounded-3xl">
          {(image.length > 0) && (
            <Image src={image} height={600} width={600} alt="app image" className="hidden sm:flex m-auto rounded-3xl" />
          )}

        </div>
      </header>
  )
}

export default Header
