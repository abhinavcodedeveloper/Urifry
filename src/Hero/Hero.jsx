import { Box, Button, Text,Img} from '@chakra-ui/react'
import React from 'react'
import { assets } from '../assets/assets'
import './Hero.css'
const Hero = () => {
  return (
        <Box mt = "6rem" display={{base:"block",md:"block",md:"flex",lg:"flex"}}   >
            <Box className='heroContent' w={{base:"80%",sm:"100vw" ,md:"100vw",lg:"40%"}} m={{base:"auto",sm:"auto",md:"0",lg:"0"}}>
                <Img src={assets.gradient} pos="absolute" top="2rem"/>
                <Text fontSize="5xl" className='clashb'  lineHeight="3rem"   >
                    Make the Best <br/>
                    Financial Decisions
                </Text>                
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Architecto voluptate excepturi 
                </Text>

                <Box className='Buttons' mt="6" display="flex" gap="4">
                    <Button color="white" bg="black" p="10px" className='clash' borderRadius="-moz-initial">
                        Get Started
                    </Button>
                    <Button>
                        Watch Video
                    </Button>
                </Box>

                <Box className='headImg'>
                    <Img src={assets.header}/>
                </Box>
            </Box>
            <Box className='heroImg' w = {{base:"100%",sm:"100vw", md:"50vw",lg:"50vw"}} margin={{base:"auto", sm:"auto",md:"0",lg:"0"}}>
                <Box className='heroImage'>
                <Img src={assets.phone1} className='img1'></Img>
                <Img src={assets.phone2} className='img2'></Img>
                <Img src={assets.phone3} className='img3'></Img>
                </Box>
            </Box>
        </Box>
    
  )
}

export default Hero