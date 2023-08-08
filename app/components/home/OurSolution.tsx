import React from 'react'
import {Button, Carousel, Typography} from '../material-tailwind/material-tailwind'
import Image from 'next/image'

type OurSolution = {
  image: string;
  title: string;
  description:  string;
}

function OurSolution() {

  const ourSolution: OurSolution[] = [
    {
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: 'Our Solution will help you with:',
      description: 'Take a look at what our application can do for you.',

    },
    {
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: 'Responsive',
      description: 'Aris is an application that can be used from any device: smartphone, tablet, computer, laptop.',

    },
    {
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      ,
      title: 'Visibility',
      description: 'Improve communication with your customers by having real-time control of your operations.',

    },
    {
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      ,
      title: 'Customizable',
      description: '100% configurable to your actual business processes',

    },
    {
      image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
      ,
      title: 'Documents',
      description: 'Control the documentation of your operation and maintain a digital archive associated with the business.',

    },
    {
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: 'Support',
      description: 'Support and assistance service for ongoing application support',

    },
    {
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: 'Free Updates',
      description: 'Functional enhancement updates released by Potencia Technologies.',

    },
  ]
  return (
    <Carousel>
      {ourSolution.map((solution)=> (
        <div className="relative h-full w-full" key={solution.title}>
        <Image
          src={solution.image}
          alt="image 1"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {solution.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              {solution.description}
            </Typography>
          </div>
        </div>
      </div>
      ))}
      
      </Carousel>
  )
}

export default OurSolution