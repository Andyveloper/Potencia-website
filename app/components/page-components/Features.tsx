import React from 'react'
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography
} from '../material-tailwind/material-tailwind'
import Image from 'next/image'
import { type FeatureList } from '@/app/constants/constants'

interface Props {
  featureList: FeatureList[]
}

let uniqueID = 0

const getKey = () => {
  uniqueID += 1
  return uniqueID.toString()
}

function Features ({ featureList }: Props) {
  return (
    <>

      {featureList.map((feature) => (
        <>
          {!feature.inverse
            ? (
            <div className="sm:mb-3 flex items-center sm:flex-row flex-col justify-center container">
              <div className="hidden md:flex container w-1/5 md:w-[30%] md:h-[30%] 2xl:w-[35%] 3xl:h-[100%] items-center justify-center mr-9">
                <Image
                  src={feature.image}
                  alt="our history image"
                  height={400}
                  width={500}
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
                <Card className=" w-12/12 overflow-hidden rounded-md my-3">
                  <List className="my-1 sm:my-3 p-0">
                    {feature.elements.map((element) => (
                      <ListItem
                        className="group rounded-none py-1 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        key={getKey()}
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
              )
            : (
            <div className="3xl:mt-9 flex items-center sm:flex-row flex-col justify-center container">
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
                <Card className="w-12/12 overflow-hidden rounded-md my-3">
                  <List className="my-1 sm:my-3 p-0">
                    {feature.elements.map((element) => (
                      <ListItem
                        className="group rounded-none py-1 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        key={getKey()}
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
              <div className="hidden md:flex container ml-9 w-1/5 md:w-[30%] md:h-[30%] 2xl:w-[35%] 3xl:h-[100%] items-center justify-center">
                <Image
                  src={feature.image}
                  alt="our history image"
                  height={400}
                  width={500}
                />
              </div>
            </div>
              )}
        </>
      ))}
    </>
  )
}

export default Features
