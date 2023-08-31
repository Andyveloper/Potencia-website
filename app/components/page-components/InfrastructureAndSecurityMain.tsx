import React from 'react'
import Image from 'next/image'
import {
  Typography,
  Card,
  CardBody,
  ListItemPrefix,
  List,
  ListItem,
  Avatar,
  Button
} from '../material-tailwind/material-tailwind'
import Link from 'next/link'
import { INFRASTRUCTURE_AND_SECURITY, INFRASTRUCTURE_OUR_SERVICES } from '@/app/constants/constants'

function InfrastructureAndSecurityMain () {
  return (
    <>
    <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
    <Typography variant="h2" className="text-black mb-0 lg:mb-10">
      Services
    </Typography>
    <div className="container flex lg:flex-row flex-col items-center justify-center md:gap-6">
          {INFRASTRUCTURE_AND_SECURITY.map((step, index) => (
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
                  className="hidden lg:flex m-auto"
                />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {step.title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-xs lg:text-base"
                >
                  {step.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
        </section>
        <section className="w-screen h-screen flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-black text-base md:text-xl xl:text-3xl md:mb-12">
          Server Administration
        </Typography>
        <Typography variant="paragraph" className="text-black md:mb-12 text-center text-sm sm:text-base w-11/12">
        To ensure high performance and security, server administrators are responsible for completing an extensive list of tasks, such as:
        </Typography>
        <div className="container flex sm:flex-row flex-col items-center justify-center">
          <Card className="w-11/12 md:w-1/2">
            <List>
              {INFRASTRUCTURE_OUR_SERVICES.map((service, index) => (
                <ListItem key={`${service.title}${index++}`}>
                  <ListItemPrefix>
                    <Avatar
                      variant="square"
                      alt="candice"
                      src={service.image}
                      className="hidden lg:m-5 lg:flex"
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
          <div className="flex flex-col ml-10 justify-center items-center">
            <Image
              src="/images/1x-hosting-illustration-0456-64eff71513d8b.webp"
              height={500}
              width={500}
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
      </>
  )
}

export default InfrastructureAndSecurityMain
