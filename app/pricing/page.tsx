import React from 'react'
import { NavbarWithMegaMenu } from '../components/home/NavBar'
import Header from '../components/home/Header'
import { FooterWithSocialLinks } from '../components/home/Footer'
import OurSolution from '../components/home/OurSolution'
import Pricing from '../components/home/Pricing'
import { Typography } from '../components/material-tailwind/material-tailwind'
import FAQ from '../components/home/FAQ'

export type FAQ = {
  title: string;
  description: string;
}

function page() {

  const pricingHeader = {
    title: 'CHOOSE A PLAN THAT WORKS FOR YOU!',
    description: "Explore our range of budget-friendly pricing plans tailored to your needs. Choose the perfect fit and unlock a world of features and value.",
    image: '/images/reactLogo.png'
  }

  const faqElements = [
    {
      title: 'How long does it take to implement?',
      description: "Once the subscription is completed, we start the implementation process. The implementation takes approximately 45 days for the SaaS option. For the Enterprise Plan everything will depend on the scope of the application, a project can take 1 month up to 5 months."
    },
    {
      title: 'Do I have to buy a hosting server?',
      description: "Aris Software solution is a 100% application that is installed on a server hosted in the cloud, the cost is included in your monthly fee. In the Enterprise Plan is optional, the customer can purchase his own hosting server."
    },
    {
      title: 'What is the minimum term of use?',
      description: "Once your monthly billing has started, the minimum term is 12 months. You may terminate the contract at any time after this period by notifying us by e-mail at least one month in advance."
    },
    {
      title: 'What is included in the Monthly Fee?',
      description: "This service provides comprehensive coverage, including continuous monitoring and support to ensure ARIS availability, a Service Level Agreement for swift problem resolution, and regular upgrades to keep your ARIS current and future-proof."
    },
    {
      title: 'Where is my data stored??',
      description: "In both SaaS and Custom Development the user performs his backup in an option of the application and saves his backup file wherever he wants"
    },
    {
      title: 'Which services are considered additional?',
      description: "Enhance your experience with our extra offerings. Get tailored configuration services, seamless third-party software integrations, additional post-implementation training, and reliable hosting support."
    },
    {
      title: 'What is included in the Initial Payment Fee??',
      description: "The upfront payment, a single occurrence, covers vital aspects including server setup, application integration, and user training. This bundled offering ensures a smooth introduction to maximize your experience."
    },
    {
      title: 'Is the Aris software scalable?',
      description: "Yes, by using pre-assembled components and by the type of database used in our developments, all applications are scalable to the growth of your business.You can add components that are not included to upgrade the application"
    },
  ]

  return (
    <>
      <NavbarWithMegaMenu/>
      <Header title={pricingHeader.title} description={pricingHeader.description} image={pricingHeader.image} />
      <section className="w-screen lg:h-screen flex flex-col items-center justify-center text-white my-5">
        <Typography variant="h2" className="text-black mb-10">Pricing</Typography>
        <Pricing />
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <OurSolution/>

      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <Typography variant="h2" className="text-black mb-10">Frequently Aksed Questions</Typography>

      <FAQ faqElements={faqElements} />
    </section>
    <hr className="border-0 border-t-[1.5px] border-gray-500 border-solid" />


      <FooterWithSocialLinks/>
    </>
  )
}

export default page