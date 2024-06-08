import { Box, Button, Img, Link } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import React from 'react'
import {assets} from '../assets/assets'
import './Header.css'

const Header = () => {
  return (
    // navbar starts from here 
    
    <Box display="flex" alignItems="center" justifyContent="space-between" w={{base:"100%",sm:"100%",md:"100%",lg:"100%"}} >
        <Box className='navBar-first' display="flex" alignItems="center" gap="10">
            <Img mt="2" src={assets.logo}></Img>
            <Box display={{base:"none",sm:"none",md:"flex",lg:"flex"}}  gap="6">
                <Link href='https://chakra-ui.com' className='clash' id="linkNav"> Home </Link>
                <Link href='https://chakra-ui.com' className='clash' id="linkNav"> About Us</Link>
                <Link href='https://chakra-ui.com' className='clash' id="linkNav"> Pricing </Link>
                <Link href='https://chakra-ui.com' className='clash' id="linkNav"> Features</Link>
            </Box>
        </Box>
        <Box className='navBar-second' display="flex" gap="4" >
            <Button bg="black" color="white" borderRadius="-moz-initial" className='clash'>
                Download
            </Button>
            <Img display={{base:"none",sm:"none",md:"block",lg:"block"}} src={assets.Star}></Img>
        </Box>
    </Box>
    // navbar ends here

    // Hero Section Starts here
  )
}

export default Header