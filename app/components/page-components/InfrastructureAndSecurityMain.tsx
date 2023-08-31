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

function InfrastructureAndSecurityMain () {
  const INFRASTRUCTURE_AND_SECURITY = [
    {
      title: 'Server Administration',
      image: '/images/1x-hosting-icon-05-64efe86ec6076.webp',
      description: 'Server administration involves overseeing servers and networks to ensure they work well and safely. This includes routine tasks during business hours and more complex ones outside those times. The server administrator manages, optimizes, monitors, and troubleshoots servers and related parts.'
    },
    {
      title: 'Hosting Services',
      image: '/images/1x-hosting-icon-034-64efefead3488.webp',
      description: 'Hosting service involves renting space on a virtual server to run your application and store its data. This ensures global access to your app and its content anytime. The provider manages server functions and delivers information to user devices.'
    },
    {
      title: 'Safe and Secure',
      image: '/images/1x-hosting-icon-04-64efe86e44e0b.webp',
      description: 'An SSL certificate verifies a website\'s identity and enables secure, encrypted connections. SSL (Secure Sockets Layer) safeguards data between a web server and browser. Without it, hackers can access and expose sensitive business information from the website.'
    },
    {
      title: 'Dedicated Support',
      image: '/images/1x-hosting-big-icon-02-64efe86e3d905.webp',
      description: 'Our specialized team is dedicated to serving the logistics industry by providing valuable assistance for your application. We excel in upgrades, maintenance, and ongoing support, ensuring your system functions seamlessly. Count on us to understand your unique needs and deliver tailored solutions that keep your logistics operations running smoothly.'
    }
  ]

  const INFRASTRUCTURE_OUR_SERVICES = [
    {
      title: 'Application server maintenance and updating',
      description: '',
      image: '/images/servers-64eff8971e8dc.webp'
    },
    {
      title: 'Backup program',
      description: '',
      image: '/images/cloud-64eff8963dcaa.webp'
    },
    {
      title: 'Server monitoring',
      description: '',
      image: '/images/database-storage-64eff896ab884.webp'
    },
    {
      title: 'Performance optimization',
      description: '',
      image: '/images/database-management-64eff8963cac9.webp'
    },
    {
      title: 'Implementation of security barriers against cyber-attacks',
      description: '',
      image: '/images/hacker-64eff896ce254.webp'
    }
  ]
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
