import React from 'react'
import { NavbarWithMegaMenu } from '../components/page-components/NavBar'
import Header from '../components/page-components/Header'
import { FooterWithSocialLinks } from '../components/page-components/Footer'
import OurSolution from '../components/page-components/OurSolution'
import ArisSoftwareMain from '../components/page-components/ArisSoftwaareMain'
import { ARIS_TITLE, ARIS_DESCRIPTION, ARIS_IMAGE } from '@/app/constants/constants'

function page () {
  return (
    <>
      <NavbarWithMegaMenu />
      <Header
        page='aris-software'
        title={ARIS_TITLE}
        description={ARIS_DESCRIPTION}
        image={ARIS_IMAGE}
      />
        <ArisSoftwareMain />
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
        <OurSolution />
      </section>
      <FooterWithSocialLinks />
    </>
  )
}

export default page
