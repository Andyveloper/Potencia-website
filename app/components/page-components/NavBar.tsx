'use client'
import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '../material-tailwind/material-tailwind'
import {
  ChevronDownIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
  ComputerDesktopIcon,
  QueueListIcon,
  HomeIcon,
  CurrencyDollarIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navListMenuItems = [
  {
    color: 'blue',
    icon: ComputerDesktopIcon,
    title: 'Aris Software',
    description: 'Learn about our software application features',
    link: '/aris-software'
  },
  {
    color: 'orange',
    icon: QueueListIcon,
    title: 'Infrastructure and Security',
    description: 'We take data integrity seriously',
    link: '/infrastructure-and-security'
  }
]

function NavListMenu () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={'rounded-lg p-5'}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 w-6'
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  )

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => { setIsMobileMenuOpen((cur) => !cur) }}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Solutions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  )
}

function NavList () {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/">
        <Typography as="div" variant="small" color="blue-gray" className="font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <HomeIcon className="h-[18px] w-[18px]" />
            Home
          </ListItem>
        </Typography>
      </Link>
      <NavListMenu />
      <Link href="/pricing">
        <Typography as="div" variant="small" color="blue-gray" className="font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <CurrencyDollarIcon className="h-[18px] w-[18px]" />
            Pricing
          </ListItem>
        </Typography>
      </Link>
      <Link href="/blog">
        <Typography as="div" variant="small" color="blue-gray" className="font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <NewspaperIcon className="h-[18px] w-[18px]" />
            Blog
          </ListItem>
        </Typography>
      </Link>
      <Link href="/contact-us">
        <Typography as="div" variant="small" color="blue-gray" className="font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Contact Us
          </ListItem>
        </Typography>
      </Link>
    </List>
  )
}

export function NavbarWithMegaMenu () {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => { window.innerWidth >= 960 && setOpenNav(false) }
    )
  }, [])

  return (
    <>
      <Navbar className="mx-auto absolute max-w-none w-full px-20 py-2 bg-opacity-100">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href="/">
            <Image src='/images/logo.png' alt="Potencia logo" width={200} height={200} />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => { setOpenNav(!openNav) }}
          >
            {openNav
              ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                )
              : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  )
}
