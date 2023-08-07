import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  ListItemPrefix,
  Avatar,
  Card,
  CardBody,
} from "../material-tailwind/material-tailwind";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

type OurServices = {
  image: string;
  title: string;
  description: string;
  link?: string;
};
type CarouselData = {
  title: string;
  description: string;
  image: string;
};

export type FeatureList = {
  title: string;
  description: string;
  elements: string[];
  inverse: boolean;
};

function Main() {
  const ourServices: OurServices[] = [
    {
      image: "/images/reactLogo.png",
      title: "Logistics Software",
      description:
        "Aris Software offers tailored solutions with a single investment option and SaaS accessibility. It includes mobile apps for iOS and Android and is designed for Freight Forwarders, Courier, WMS, and 3PL services.",
      link: "#",
    },
    {
      image: "/images/reactLogo.png",
      title: "IT Consulting",
      description:
        "The package also encompasses business intelligence and analytics, along with IT services tailored for logistics companies. It further includes the development of marketing websites specifically designed for such businesses.",
      link: "#",
    },
    {
      image: "/images/reactLogo.png",
      title: "Software Integrations",
      description:
        "Seamless integration with third-party software, web services, and APIs is provided. This extends to integration with various modules and report systems as well.",
      link: "#",
    },
    {
      image: "/images/reactLogo.png",
      title: "Launch & Monitor",
      description:
        "The suite includes reporting and dashboard development, facilitating business intelligence and in-depth analysis.",
      link: "#",
    },
  ];

  const implementationRoadmap: CarouselData[] = [
    {
      title: "Discovery Meeting",
      description:
        "Business challenges and requirements to prepare a project scope tailored to the needs of your solution.",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      title: "Feasibility Analysis",
      description:
        "The analysis includes: Client’s objectives, Challenges and risks, Solution brief, Scope of the proposal, Project costs.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      title: "Kick-off meeting with project manager",
      description:
        "We will confirm the understandings and validate the scope of the proposal to move on to the tasks of assembling your solution.",
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      title: "Assembly",
      description:
        "As each module is assembled, early validations are performed with user testing to ensure a 100% functional and configured solution for your business.",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      title: "Support",
      description:
        "At the end of the project you receive 12 months of technical support and functional enhancement updates.",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
  ];

  const featureList: FeatureList[] = [
    {
      title: "Customer Dashboard",
      description:
        "Facilitates the monitoring and management of logistics operations via a collaborative messaging platform for interacting with your customers. The platform encompasses the following features:",
      elements: [
        "Continuous 24/7 updates and consultations.",
        "Fully web-based, eliminating the need for installations.",
        "Enhanced agility in decision-making.",
        "Efficient processing, updates, and document downloads.",
        "Intuitive and user-friendly navigation.",
      ],
      inverse: false,
    },
    {
      title: "Commerce & Pricing",
      description:
        "This tool serves as a comprehensive resource furnishing the commercial team with expeditious access to pertinent information and documentation pertaining to customer inquiries:",
      elements: [
        "Allows management of customers and suppliers.",
        "Adaptable to the unique requirements of the company.",
        "Enables real-time access to budgets.",
        "Manage requests for quotations and their approvals.",
      ],
      inverse: true,
    },
  ];

  const featureList2: FeatureList[] = [
    {
      title: "Strategic Planning and Operational Oversight",
      description:
        "Exercise authoritative control over your logistics operations while meticulously strategizing each event and activity through an interface reminiscent of an airport-style Dashboard. Articulate and supervise every facet of your operation in a manner akin to your standard business processes:",
      elements: [
        "Configurable operation scheduling.",
        "Comprehensive operations timeline.",
        "Effortless viewing and downloading of transaction documents.",
        "Dynamic real-time control over income and expenses.",
        "Precise access control based on user roles.",
      ],
      inverse: false,
    },
    {
      title: "Administrative and Business Intelligence (BI) Capabilities",
      description:
        "This module stands as a comprehensive component, facilitating the meticulous configuration and execution of all administrative processes intertwined with the logistics operation of your enterprise:",
      elements: [
        "Streamline configuration of diverse transaction types.",
        "Thoroughly define and categorize Products and Services.",
        "Efficiently oversee accounts receivable and payable functions.",
        "Generate comprehensive transaction reports.",
        "Facilitate the creation of detailed customer reports.",
      ],
      inverse: true,
    },
  ]
  

  return (
    <>
      {/* OUR SERVICES SECTION */}
      <section className="bg-purple-900 w-screen h-screen flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-white md:mb-12">
          Our Services
        </Typography>
        <div className="container flex sm:flex-row flex-col items-center justify-center">
          <Card className="w-11/12 md:w-1/2">
            <List>
              {ourServices.map((service) => (
                <ListItem key={service.title}>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="/images/reactLogo.png"
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
              src="/images/reactLogo.png"
              height={600}
              width={600}
              alt="rocket going to space"
              className="hidden md:flex"
            />
            <Link href="#">
              <Button className="m-10">Get your free DEMO</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* IMPLEMENTATION ROADMAP SECTION */}
      <section className="bg-purple-900 w-screen h-screen flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-white md:mb-12">
          Implementation Roadmap
        </Typography>
        <div className="container flex md:flex-row flex-col items-center justify-center md:gap-6">
          {implementationRoadmap.map((step) => (
            <Card className="mt-2 md:mt-6 w-11/12 h-[100%]" key={step.title}>
              <CardBody className="text-center">
                <Image
                  src="/images/reactLogo.png"
                  alt="descriptive icon"
                  height={300}
                  width={300}
                  className="hidden md:flex"
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
            className="font-normal text-center hidden sm:flex"
          >
            Our goal is to provide companies with cutting-edge products that
            enable employees to work better and smarter. Improving your
            company’s operational efficiency so you can increase visibility and
            transparency, reduce costs, improve customer service and gain a
            competitive advantage in the marketplace. It’s about creating
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
          <div className="container w-1/5 md:w-[100%] sm:h-[100%] flex items-center justify-center">
          <Image
            src="/images/reactLogo.png"
            alt="our history image"
            height={600}
            width={600}
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
            <Typography variant="h3" className="text-lg sm:text-3xl mt-5 sm:mt-10">
              What is the enabling factor?
            </Typography>
            <Typography variant="paragraph" className="mt-1 sm:mt-5 text-sm lg:text-base">
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
          <Typography variant="paragraph" className="mt-1 sm:mt-5 text-center text-sm lg:text-base">
            Backed by profound technical expertise and an intricate
            understanding of various business domains, we are well-equipped to
            consistently position you a step ahead in the competitive landscape.
          </Typography>
          <Link href="#">
            <Button className="mt-5">Get a free consultation</Button>
          </Link>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
      <Typography variant="h2" className="text-lg sm:text-4xl md:mb-12">
        Features
      </Typography>
        <Features featureList={featureList} />
      </section>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
        <Features featureList={featureList2} />
      </section>
    </>
  );
}

export default Main;
