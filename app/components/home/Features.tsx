import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "../material-tailwind/material-tailwind";
import Image from "next/image";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { FeatureList } from "./Main";

type Props = {
featureList: FeatureList[]
};

function Features({featureList}: Props) {
  

  return (
    <>

      {featureList.map((feature) => (
        <>
          {!feature.inverse ? (
            <div className="flex items-center sm:flex-row flex-col justify-center container">
              <div className="hidden md:flex container w-1/5 md:w-[100%] sm:h-[100%] items-center justify-center">
                <Image
                  src="/images/reactLogo.png"
                  alt="our history image"
                  height={600}
                  width={600}
                />
              </div>
              <div className="container sm:text-center md:text-left w-11/12">
                <Typography variant="h3" className="text-sm lg:text-3xl mt-2">
                  {feature.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-sm text-center sm:text-justify sm:text-base mt-3  sm:mt-5"
                >
                  {feature.description}
                </Typography>
                <Card className=" w-11/12 sm:w-96 overflow-hidden rounded-md">
                  <List className="my-3 p-0">
                    {feature.elements.map((element) => (
                      <ListItem
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        key={feature.title}
                      >
                        <ListItemPrefix>
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
                        </ListItemPrefix>
                        {element}
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </div>
            </div>
          ) : (
            <div className="flex items-center sm:flex-row flex-col justify-center container">
              <div className="container sm:text-center md:text-left w-11/12">
                <Typography variant="h3" className="text-sm lg:text-3xl mt-2">
                  {feature.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-sm text-center sm:text-justify sm:text-base mt-3  sm:mt-5"
                >
                  {feature.description}
                </Typography>
                <Card className="w-12/12 overflow-hidden rounded-md">
                  <List className="my-3 p-0">
                    {feature.elements.map((element) => (
                      <ListItem
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        key={feature.title}
                      >
                        <ListItemPrefix>
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
                        </ListItemPrefix>
                        {element}
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </div>
              <div className="hidden md:flex container w-1/5 md:w-[100%] sm:h-[100%] items-center justify-center">
                <Image
                  src="/images/reactLogo.png"
                  alt="our history image"
                  height={600}
                  width={600}
                />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default Features;
