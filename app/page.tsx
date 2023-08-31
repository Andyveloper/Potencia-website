import React from 'react'
import { NavbarWithMegaMenu } from './components/page-components/NavBar'
import Main from './components/page-components/Main'
import Header from './components/page-components/Header'
import { HOME_HEADER } from '@/app/constants/constants'

function Home () {
  return (
    <>
    <NavbarWithMegaMenu />
    <Header page='home' title={HOME_HEADER.title} description={HOME_HEADER.description} image={HOME_HEADER.image}/>
    <Main />
    </>
  )
}

export default Home
