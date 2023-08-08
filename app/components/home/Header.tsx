import React from 'react'
import {Button, Typography} from '../material-tailwind/material-tailwind'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string;
  description: string;
  image: string;
}

function Header({title, description, image}: Props) {
  return (
    <header className='container w-full max-w-none h-screen flex flex-col sm:flex-row items-center justify-center pt-12 px-[5%]'>
        <div className="container">
            <Typography variant="h1">{title}</Typography>
            <Typography variant="paragraph" className="mt-10"> {description} </Typography>
            <Link href="#" >
              <Button className="mt-10">Get your free DEMO</Button>
            </Link>
        </div>
        <div className="container">
          <Image src={image} height={900} width={900} alt="app image" className="hidden sm:flex" />
        </div>
      </header>
  )
}

export default Header