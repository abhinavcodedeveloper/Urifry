import React from "react";
import { Box, Img, Text, SimpleGrid } from "@chakra-ui/react";
import './Faq.css'
import { assets } from "../assets/assets";
const Faq = () => {
  return (
    <Box className="FAQ" position="relative" w={{base:"100vw",sm:"100vw",md:"80vw",lg:"80vw"}}>
        <Img src={assets.Star} pos="absolute" left="50%"/>
        <Img src={assets.gradient} pos="absolute" right="0.5rem" zIndex="-1"/>
      <Box className="faq-heading">
        <Text color="orange">FAQ</Text>
        <Text lineHeight="2rem" fontSize="4xl" className="clashb">
          Frequently Asked <br /> Questions
        </Text>
      </Box>
      <Box
        className="questionFAQ"
      >
        <Box
          className="   "
          display={{base:"block",sm:"block",md:"grid",lg:"grid"}}
          gridTemplateRows="repeat(3,1fr)"
          gridTemplateColumns="repeat(2,1fr)"
          gridRowGap={{base:"2",sm:"2",md:"2",lg:"2"}}
          gridColumnGap="2"
          w="70%"
          m={{base:"3rem auto 0rem auto",md:"3rem auto 0rem auto",md:"3rem 0 0 0",lg:"3rem 0 0 0"}}
          

        //   m="auto"
        >
          <Box bg="#FF5555" color="white"  className="faqBx" >
            <Text className="clash" lineHeight="1.5rem" fontSize="large">The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1.2rem">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text>
          </Box>
          <Box className="faqBx" bg="white" >
          <Text className="clash" lineHeight="1.5rem" fontSize="large">The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1.2rem"> 
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text>
          </Box>
          <Box className="faqBx" bg="white" >
          <Text className="clash" lineHeight="1.5rem" fontSize="large"> The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1.2rem">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text>
          </Box>    
          <Box className="faqBx" color="white">
          <Text className="clash" lineHeight="1.5rem"  fontSize="large">The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1.2rem">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text>
          </Box>
          <Box className="faqBx" color="white">
          <Text className="clash" lineHeight="1.5rem" fontSize="large">The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1.2rem">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text>
          </Box>
          <Box className="faqBx" bg="white">
          <Text className="clash" lineHeight="1.5rem" fontSize="large">The best financial accounting app ever!</Text>
            <Text className="clashl" lineHeight="1rem">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </Text><br/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
