import React from 'react'
import { Carousel, Typography } from '../material-tailwind/material-tailwind'
import Image from 'next/image'
import { OUR_SOLUTIONS } from '@/app/constants/constants'

function OurSolution () {
  return (
    <Carousel>
      {OUR_SOLUTIONS.map((solution) => (
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
