import React from 'react'
import { NavbarWithMegaMenu } from '../components/page-components/NavBar'
import Header from '../components/page-components/Header'
import { FooterWithSocialLinks } from '../components/page-components/Footer'
import OurSolution from '../components/page-components/OurSolution'
import Pricing from '../components/page-components/Pricing'
import { Typography } from '../components/material-tailwind/material-tailwind'
import AccordionCustomAnimation from '../components/page-components/Accordion'
import { PRICING_HEADER, PRICING_FAQ_ELEMENTS } from '@/app/constants/constants'
export interface FAQ {
  title: string
  description: string
}

function page () {
  return (
    <>
      <NavbarWithMegaMenu/>
      <Header page='pricing' title={PRICING_HEADER.title} description={PRICING_HEADER.description} image={PRICING_HEADER.image} />
      <section className="w-screen lg:h-screen flex flex-col items-center justify-center text-white my-5">
        <Typography variant="h2" className="text-black mb-10">Pricing</Typography>
        <Pricing />
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <OurSolution/>

      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <Typography variant="h2" className="text-black mb-10">Frequently Asked Questions</Typography>

      <AccordionCustomAnimation faqElements={PRICING_FAQ_ELEMENTS} />
    </section>
    <hr className="border-0 border-t-[1.5px] border-gray-500 border-solid" />

      <FooterWithSocialLinks/>
    </>
  )
}

export default page
