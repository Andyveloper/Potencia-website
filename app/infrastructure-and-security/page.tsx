import React from 'react'
import { NavbarWithMegaMenu } from '../components/page-components/NavBar'
import Header from '../components/page-components/Header'
import { FooterWithSocialLinks } from '../components/page-components/Footer'
import { Typography } from '../components/material-tailwind/material-tailwind'
import InfrastructureAndSecurityMain from '../components/page-components/InfrastructureAndSecurityMain'
import InfrastructurePricing from '../components/page-components/InfrastructurePricing'
import ContactUsInfo from '../components/page-components/ContactUsInfo'

function page () {
  const INFRASTRUCTURE_HEADER = {
    title: 'INFRASTRUCTURE AND SECURITY',
    description:
      'Learn about our optional services for the infrastructure and security of your applications',
    image: '/images/1x-hosting-illustration-01-64efd3bff11d7.webp'
  }

  return (
    <>
      <NavbarWithMegaMenu />
      <Header
        page="infrastructure-and-security"
        title={INFRASTRUCTURE_HEADER.title}
        description={INFRASTRUCTURE_HEADER.description}
        image={INFRASTRUCTURE_HEADER.image}
      />

        <InfrastructureAndSecurityMain />
      <section className="w-screen lg:h-screen flex flex-col items-center justify-center text-white my-5">
        <Typography variant="h2" className="text-black mb-10">
          Pricing
        </Typography>
        <InfrastructurePricing />
      </section>
      <ContactUsInfo />
      <hr className="border-0 border-t-[1.5px] border-gray-500 border-solid" />

      <FooterWithSocialLinks />
    </>
  )
}
export default page
