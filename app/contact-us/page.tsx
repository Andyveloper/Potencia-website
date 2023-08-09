import React from "react";
import { NavbarWithMegaMenu } from "../components/home/NavBar";
import { FooterWithSocialLinks } from "../components/home/Footer";
import Header from "../components/home/Header";
import Form from "../components/home/Form";
import {
  Card,
  CardBody,
  Typography,
} from "../components/material-tailwind/material-tailwind";
import Image from "next/image";

function page() {
  const CONTACT_TITLE = "GET IN TOUCH";
  const CONTACT_DESCRIPTION =
    "Your company's transformation is only a few clicks away, schedule a free initial consultation";
  const CONTACT_IMAGE = "/images/reactLogo.png";

  const contactInformation = [
    {
      icon: "/images/reactLogo.png",
      title: "Address",
      description: [
        "7345 W Sand Lake RD",
        "Ste 210 Office 4846",
        "Orlando, FL, 32819, United States",
      ],
    },
    {
      icon: "/images/reactLogo.png",
      title: "Phone",
      description: ["Sales: +1(321)332-1844"],
    },
    {
      icon: "/images/reactLogo.png",
      title: "Email",
      description: [
        "support@itpotencia.com",
        "sales@itpotencia.com",
        "accounting@itpotencia.com",
      ],
    },
  ];
  return (
    <>
      <NavbarWithMegaMenu />
      <Header
        title={CONTACT_TITLE}
        description={CONTACT_DESCRIPTION}
        image={CONTACT_IMAGE}
      />
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white bg-purple-900">
        <Typography variant="h2">Contact us</Typography>
        <Typography variant="paragraph" className="hidden sm:flex text-center px-6 py-3 lg:py-9">
          Connect with us through our Contact Us page. Whether you have
          inquiries, feedback, or partnership opportunities, we&apos;re here to
          listen and respond. Reach out today to start the conversation.
        </Typography>
        <div className="columns-1 md:columns-2 lg:columns-3 flex-col lg:flex-row flex items-center justify-center gap-1 sm:gap-2 lg:gap-3">
          {contactInformation.map((info) => (
            <>
              <Card className="mt-6 w-96 h-56 lg:h-72">
                <CardBody>
                  <Image src="/images/reactLogo.png" alt="contact icon" width={125} height={125} />
                  <Typography variant="h5" color="blue-gray" className="mb-1 lg:mb-2">
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
      <section className="w-screen h-screen flex flex-col items-center justify-center text-white">
        <Typography variant="h2" className="text-black my-10">Reach out to us!</Typography>
                    <Form />
      </section>  
      <FooterWithSocialLinks />
    </>
  );
}

export default page;
