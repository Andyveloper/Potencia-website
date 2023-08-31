import React from 'react'
import { NavbarWithMegaMenu } from '../components/page-components/NavBar'
import { FooterWithSocialLinks } from '../components/page-components/Footer'
import Header from '../components/page-components/Header'
import Form from '../components/page-components/Form'
import {
  Typography
} from '../components/material-tailwind/material-tailwind'
import { CONTACT_TITLE, CONTACT_DESCRIPTION, CONTACT_IMAGE } from '@/app/constants/constants'
import ContactUsInfo from '../components/page-components/ContactUsInfo'

function page () {
  return (
    <>
      <NavbarWithMegaMenu />
      <Header
        page="contact-us"
        title={CONTACT_TITLE}
        description={CONTACT_DESCRIPTION}
        image={CONTACT_IMAGE}
      />
      <ContactUsInfo />
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white bg-[rgba(55,0,119,0.9);]">
        <Typography variant="h2" className="text-white my-10">
          Reach out to us!
        </Typography>
        <Form />
      </section>
      <FooterWithSocialLinks />
    </>
  )
}

export default page
