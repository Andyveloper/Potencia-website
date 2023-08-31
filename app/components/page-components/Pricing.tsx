import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from '../material-tailwind/material-tailwind'
import { PRICING_ELEMENTS } from '@/app/constants/constants'

function CheckIcon () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )
}

function Pricing () {
  return (
    <div className="flex items-center lg:flex-row md:columns-2 flex-col justify-center container gap-2 h-full">
      {PRICING_ELEMENTS.map(({ title, priceDescription, features, recurrence }) => (
        <Card
        key={title}
        color="blue"
        variant="gradient"
        className="w-full h-full max-h-[30rem] max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-3xl">$</span><span className="text-5xl">{priceDescription}{' '}</span>
            <span className="self-end text-base">{recurrence}</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            {features.map((feature) => (
              <>
              <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">{feature}</Typography>
            </li>
            </>
            ))}

          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
      ))}

    </div>
  )
}

export default Pricing
