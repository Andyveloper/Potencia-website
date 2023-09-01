'use client'

import React from 'react'
import Accordion from './Accordion'
import Image from 'next/image'
import { Typography, Card, CardBody } from '@material-tailwind/react'
import { ARIS_ELEMENTS, ARIS_SAAS, ARIS_OTHER_SERVICES, ARIS_SOFTWARE_SOLUTIONS } from '@/app/constants/constants'

function ArisSoftwareMain () {
  return (
    <>
      <section className="bg-[rgba(55,0,119,0.9);] w-screen h-screen flex flex-col items-center justify-center">
        {/* SOFTWARE SOLUTIONS SECTION */}
        <Typography variant="h2" className="text-white text-base sm:text-xl lg:text-2xl md:mb-12">
          SOFTWARE SOLUTIONS
        </Typography>
        <div className="container flex md:flex-row flex-col items-center justify-center md:gap-6">
          {ARIS_SOFTWARE_SOLUTIONS.map((step, index) => (
            <Card
              className="mt-2 md:mt-6 w-11/12 h-[100%]"
              key={`${step.title}${index}`}
            >
              <CardBody className="text-center flex flex-col items-center justify-center">
                <Image
                  src={step.image}
                  alt="descriptive icon"
                  height={64}
                  width={64}
                  className="hidden md:flex"
                />
                <Typography variant="h6" color="blue-gray" className="mb-1 text-sm sm:text-base">
                  {step.title}
                </Typography>
                <Typography
                  as="div"
                  variant="small"
                  color="gray"
                  className="font-normal text-xs sm:text-base columns-2 md:columns-1"
                >
                  {step.description.map((description) => (
                    <ul key={description}>
                      <li>
                        <span className="flex flex-row justify-left items-center text-left gap-1 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                          <p className='text-xs sm:text-sm'>{description}</p>
                        </span>
                      </li>
                    </ul>
                  ))}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      {/* BUILD YOUR OWN CUSTOM EXPERIENCES SECTION */}
      <section className="w-screen h-screen flex flex-col items-center justify-center text-black px-6">
        <div className="container">
          <Typography variant="h2" className=" text-lg md:text-3xl 2xl:text-4xl">
            Build Your Own Custom Experiences
          </Typography>
          <Typography variant="paragraph" className="text-xs sm:text-sm md:text-base">
            Aris Software is an solution created from specific components that
            allow the implementation of a modular web application for Freight
            Forwarders, Warehousing Companies, Distributors, Trading Companies,
            Customs and companies in the international logistics sector.
          </Typography>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center container py-8">
          <div className="container sm:text-center md:text-left w-11/12 hidden lg:flex justify-center items-center">
            <Image
              src="/images/pexels-tima-miroshnichenko-6169054-64f14a78f1f64.webp"
              width={500}
              height={500}
              alt="aris software image"
              className="hidden md:flex w-10/12 rounded-3xl"
            />
          </div>
          <div className="flex-col container md:w-[100%] sm:h-[100%]">
            <Typography variant="h3" className=" text-lg md:text-xl">
              Aris Software Customized – Single Investment
            </Typography>
            <Typography variant="paragraph" className="text-xs sm:text-sm md:text-base">
              A 100% web-based solution with the ability to expand and adapt
              according to the growth of your business and focused on your
              processes that allows you to have an active and automatic
              monitoring of all stages of your operation.
            </Typography>
            <Accordion faqElements={ARIS_ELEMENTS} />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-black px-6">
        <div className="flex items-center sm:flex-row flex-col justify-center container py-16">
          <div className="flex-col container md:w-[100%] sm:h-[100%]">
            <Typography variant="h3" className=" text-lg md:text-2xl">
              Aris Software – SaaS
            </Typography>
            <Typography variant="paragraph" className="text-xs sm:text-sm md:text-base">
              ARIS is our SaaS tool created from specific components that allows
              standardizing a web application for companies in the international
              logistics sector that are looking to control their processes with
              a tool that is easy, secure and quick to integrate into their
              business operations.
            </Typography>
            <Accordion faqElements={ARIS_SAAS} />
          </div>
          <div className="container sm:text-center md:text-left w-11/12 hidden lg:flex rounded-3xl justify-center items-center">
            <Image
              src="/images/pexels-tiger-lily-4484045-64f14a76a35f9.webp"
              width={500}
              height={500}
              alt="aris software image"
              className="hidden md:flex w-10/12 rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-black px-6">
        <div className="flex items-center sm:flex-row flex-col justify-center container py-16">
          <div className="container sm:text-center md:text-left w-11/12 hidden lg:flex justify-center items-center">
            <Image
              src="/images/pexels-kaique-rocha-379964-64f14a76a7ea8.webp"
              width={500}
              height={500}
              alt="aris software image"
              className="hidden md:flex w-10/12 rounded-3xl"
            />
          </div>
          <div className="flex-col container md:w-[100%] sm:h-[100%]">
            <Typography variant="h3" className=" text-lg md:text-2xl">
              Other Services{' '}
            </Typography>
            <Typography variant="paragraph" className="text-xs sm:text-sm md:text-base">
              Our services are aimed at the logistics industry where we have
              accumulated our extensive experience and can offer cost-effective
              options for the automation of your operations.
            </Typography>
            <Accordion faqElements={ARIS_OTHER_SERVICES} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ArisSoftwareMain
