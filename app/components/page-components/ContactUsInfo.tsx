import React from 'react'
import {
  Card,
  CardBody,
  Typography
} from '@/app/components/material-tailwind/material-tailwind'
import Image from 'next/image'
import { CONTACT_INFORMATION } from '@/app/constants/constants'

function ContactUsInfo () {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center text-black">
    <Typography variant="h2">Contact us</Typography>
    <Typography
      variant="paragraph"
      className="hidden sm:flex text-center px-6 py-3 lg:py-9"
    >
      Connect with us through our Contact Us page. Whether you have
      inquiries, feedback, or partnership opportunities, we&apos;re here to
      listen and respond. Reach out today to start the conversation.
    </Typography>
    <div className=" container columns-1 md:columns-2 lg:columns-3 flex-col lg:flex-row flex items-center justify-center gap-1 sm:gap-2 lg:gap-3">
      {CONTACT_INFORMATION.map((info) => (
        <>
          <Card className="mt-6 w-11/12 sm:w-96 h-56 lg:h-72 bg-[rgba(55,0,119,0.9);]">
            <CardBody className="text-white flex flex-col items-center justify-cente">
              <Image
                src={info.icon}
                alt="contact icon"
                width={48}
                height={48}
                className="mb-9 r"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-1 lg:mb-2 text-white"
              >
                {info.title}
              </Typography>
              {info.description.map((description) => (
                <ul key={description}>
                  <li>
                    <Typography>{description}</Typography>
                  </li>
                </ul>
              ))}
            </CardBody>
          </Card>
        </>
      ))}
    </div>
  </section>
  )
}

export default ContactUsInfo
