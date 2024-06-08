import { Box, Text, Link, Img, Input, Button } from "@chakra-ui/react";
import React from "react";
import { assets } from "../assets/assets";
import './Footer.css'
const Footer = () => {
  return (
    <Box>
    <Box display={{sm:"block",base:"block",md:"flex",lg:"flex"}} gap="5rem"  m="auto" pt="6rem">
      <Box display="flex" flexDir={"column"} justifyContent={"center"} alignItems={"center"} rowGap={"3"}>
        <Img src={assets.logo} />
        <Text className="clashl">Abhinavssr2003@gmail.com</Text>
        <Text className="clashl">+1 234 456 678 89</Text>
      </Box>

      <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text className="clash" fontWeight="bold" fontSize="2xl">
          Links
        </Text>
        <Link className="clash">Home</Link>
        <Link className="clash">About Us</Link>
        <Link className="clash">Booking</Link>
        <Link className="clash">Blog</Link>
      </Box>

      <Box display="flex" flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text className="clash" fontWeight="bold" fontSize="2xl">
          Links
        </Text>
        <Link className="clash">Home</Link>
        <Link className="clash">About Us</Link>
        <Link className="clash">Booking</Link>
        <Link className="clash">Blog</Link>
      </Box>

      <Box display="flex" flexDir={"column"}  alignItems={"center"}>
        <Text className="clash" fontWeight="bold" fontSize="2xl">
          Links
        </Text>
        <Link className="clash">Terms of Use</Link>
        <Link className="clash">Privacy Policy</Link>
        <Link className="clash">Cookie Policy</Link>
      </Box>

      <Box display="flex" flexDir={"column"}  alignItems={"center"} >
      <Text className='clash' fontSize="2xl" fontWeight="bold">NewsLetter</Text>
            <Link className="clash">Stay Up To Date</Link>
            <Box display={"flex"} gap={"2"}>
              <Input placeholder="Your Email"></Input>
              <Button bg="black" color="white" borderRadius="-moz-initial" className="clashl" p="1.5rem 2rem 1.5rem 2rem">Subscribe</Button>
            </Box>
      </Box>
    </Box>
      <Box pt="6rem">
        <Text w="40%" margin={"auto"} className="clash">Copyright 2022 uifry.com all rights reserved</Text>
      </Box>
      </Box>
  );
};

export default Footer;
