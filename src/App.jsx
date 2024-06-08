import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import { Box } from '@chakra-ui/react'
import Hero from './Hero/Hero'
import Middle from './middleSection/Middle'
import Testimonial from './Testiimonial/Testimonial'
import Faq from './faq/Faq'
import Footer from './Footer/Footer'


function App() {

  return (
    <Box w={{base:"90vw",sm:"90vw",md:"80%",lg:"80%"}} m="2rem auto 2rem auto" display="flex" flexDir="column" gap="10">
      <Header/>
      <Hero/>
      <Middle/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </Box>
  )
}

export default App
