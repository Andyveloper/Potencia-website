import React from 'react'
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  CardBody
} from '../material-tailwind/material-tailwind'
import Image from 'next/image'
import Link from 'next/link'
import Features from './Features'
import OurSolution from './OurSolution'
import { FooterWithSocialLinks } from './Footer'
import { HOME_OUR_SERVICES, HOME_IMPLEMENTATION_ROADMAP, HOME_FEATURE_LIST, HOME_FEATURE_LIST_2 } from '@/app/constants/constants'

function Main () {
  return (
    <>
      {/* OUR SERVICES SECTION */}
      <section className="w-screen h-screen flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-black md:mb-12">
          Our Services
        </Typography>
        <div className="container flex sm:flex-row flex-col items-center justify-center">
          <Card className="w-11/12 md:w-1/2">
            <List>
              {HOME_OUR_SERVICES.map((service, index) => (
                <ListItem key={`${service.title}${index++}`}>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src={service.image}
                      className="hidden lg:m-10 lg:flex"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {service.title}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {service.description}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
          </Card>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/images.webp"
              height={600}
              width={600}
              alt="rocket going to space"
              className="hidden md:flex"
            />
            <Link href="#">
              <Button className="m-10 bg-[rgba(255,146,56,1)]">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* IMPLEMENTATION ROADMAP SECTION */}
      <section className="bg-[url('/images/brooke-cagle-JBwcenOuRCg-unsplash.webp')] bg-cover bg-blend-soft-light bg-[rgba(108,122,137,1)] w-screen h-screen flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-white md:mb-12">
          Implementation Roadmap
        </Typography>
        <div className="container flex md:flex-row flex-col items-center justify-center md:gap-6">
          {HOME_IMPLEMENTATION_ROADMAP.map((step, index) => (
            <Card
              className="mt-2 md:mt-6 w-11/12 h-[100%]"
              key={`${step.title}${index}`}
            >
              <CardBody className="text-center flex-col items-center">
                <Image
                  src={step.image}
                  alt="descriptive icon"
                  height={64}
                  width={64}
                  className="hidden md:flex m-auto"
                />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {step.title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-sm sm:text-base"
                >
                  {step.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="container flex flex-col items-center justify-center text-white mt-10">
          <Typography variant="h3" className="text-center hidden sm:flex">
            We Love Logistics
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal text-center hidden sm:flex text-sm md:text-lg"
          >
            Our goal is to provide companies with cutting-edge products that
            enable employees to work better and smarter. Improving your
            company&apos;s operational efficiency so you can increase visibility
            and transparency, reduce costs, improve customer service and gain a
            competitive advantage in the marketplace. It&apos;s about creating
            something you can be proud of and that helps your business.
          </Typography>
        </div>
      </section>
      {/* OUR HISTORY SECTION */}
      <section className="w-screen h-screen flex flex-col items-center justify-center text-center sm:text-left">
        <Typography variant="h2" className="text-lg sm:text-4xl md:mb-12">
          Our History and Experience
        </Typography>
        <div className="flex items-center sm:flex-row flex-col justify-center container">
          <div className="container w-1/5 md:w-[100%] sm:h-[100%] flex items-center justify-center mx-4">
            <Image
              src="/images/warehouse-workers.webp"
              alt="our history image"
              height={600}
              width={600}
              className="rounded-3xl"
            />
          </div>
          <div className="container sm:text-center md:text-left w-11/12">
            <Typography variant="paragraph" className="text-sm lg:text-base">
              We comprise a team of seasoned professionals in the fields of
              logistics, software development, supply chain management, and
              e-commerce. Our collective experience spans over 15 years in
              conceiving innovative technologies tailored for companies within
              the logistics realm, encompassing entities of varying magnitudes.
              We hold the conviction that technology, when grounded in data
              insights and oriented towards human needs, optimizes an
              organization&apos;s influence within its sector, a facet readily
              apparent in heightened customer contentment levels.
            </Typography>
            <Typography
              variant="h3"
              className="text-lg sm:text-3xl mt-5 sm:mt-10"
            >
              What is the enabling factor?
            </Typography>
            <Typography
              variant="paragraph"
              className="mt-1 sm:mt-5 text-sm lg:text-base"
            >
              Presenting Aris Software, a sophisticated platform facilitating
              the seamless incorporation or omission of components throughout
              the personalized logistics software customization journey. Our
              esteemed clientele possesses the prerogative to meticulously
              curate the functionalities to be encompassed within their
              projects, comprising both pre-existing features and bespoke
              developmental prerequisites.
            </Typography>
          </div>
        </div>
        <div className="container flex items-center justify-center w-screen text-black mt-10 sm:mt-20 flex-col">
          <Typography variant="h3" className="text-lg sm:text-3xl">
            What is it that you&apos;re seeking?
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-1 sm:mt-5 text-center text-sm lg:text-base"
          >
            Backed by profound technical expertise and an intricate
            understanding of various business domains, we are well-equipped to
            consistently position you a step ahead in the competitive landscape.
          </Typography>
          <Link href="#">
            <Button className="mt-5 bg-[rgba(255,146,56,1)]">
              Get a free consultation
            </Button>
          </Link>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
        <Typography variant="h2" className="text-lg sm:text-4xl md:mb-12">
          Features
        </Typography>
        <Features featureList={HOME_FEATURE_LIST} />
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
        <Features featureList={HOME_FEATURE_LIST_2} />
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
        <OurSolution />
      </section>
      <footer>
        <FooterWithSocialLinks />
      </footer>
    </>
  )
}

export default Main
