import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
// import "./Testimonial.css";
import { assets } from "../assets/assets";
const Testimonial = () => {
  return (
    <Box className="testimonials" mt={"5rem"} pos="relative" w={{base:"90vw",sm:"90vw",md:"100%",lg:"100%"}}>
        <Img src={assets.gradient} pos="absolute" zIndex="-1" w="400px"/>
      <Box
        className="Heading"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" className="clashl" lineHeight="4rem">
          TESTIMONIAL
        </Text>
        <Text lineHeight="1rem" fontSize="4xl" className="clashb">
          What Our Users
        </Text>
        <Text fontSize="4xl" className="clashb">
          Say About Us?
        </Text>
      </Box>
      <Box className="headingContent" display={{base:"block",sm:"block",md:"flex",lg:"flex"}} alignItems="center">
        <Box className="headingContent-Img">
          <Img src={assets.feedback} />
        </Box>
        <Box className="headingContent-Content" w={{base:"100%",sm:"100%",md:"50%",lg:"50%"}}>
          <Text fontSize="2xl" className="clash" lineHeight="1.5rem"> The best Financial Accounting<br/> App Ever!</Text>
          <Text className="clashl" mt="5">
            {" "}
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </Text>
          <Img src={assets.groupphotos} mt="5"/>
          <Text mt="5" className="clash">Nick Jonas</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
