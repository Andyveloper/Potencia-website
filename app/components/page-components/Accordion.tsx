'use client'

import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '../material-tailwind/material-tailwind'
import { type FAQ } from '@/app/pricing/page'

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
}

interface Props {
  faqElements: FAQ[]
}

export default function AccordionCustomAnimation ({ faqElements }: Props) {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value: number) => { setOpen(open === value ? 0 : value) }

  return (
    <div className="container  w-11/12">
    {faqElements.map(({ title, description }, index) => (
      <Accordion key={`${title}-${index}`} open={open === index} animate={CUSTOM_ANIMATION} >
      <AccordionHeader onClick={() => { handleOpen(index) }} className="text-xs sm:text-sm md:text-lg">{title}</AccordionHeader>
      <AccordionBody className="text-xs sm:text-sm md:text-md">
        {description}
      </AccordionBody>
    </Accordion>
    ))}
    </div>
  )
}
