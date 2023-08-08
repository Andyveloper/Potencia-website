import React from 'react'
import { NavbarWithMegaMenu } from './components/home/NavBar'
import Main from './components/home/Main'
import Header from './components/home/Header'

function Home() {

  const homeHeader = 
    {
      title:  'SOFTWARE SOLUTIONS FOR FREIGHT FORWARDERS AND WAREHOUSING',
      description: 'We create Custom Software and Logistics Solutions that help integrate all facets of your business, with technology that is 100% scalable to the growth of your business.',
      image: '/images/reactLogo.png'
    }
  
  return (
    <>
    <NavbarWithMegaMenu />
    <Header title={homeHeader.title} description={homeHeader.description} image={homeHeader.image}/>
    <Main />
    </>
    )
}

export default Home