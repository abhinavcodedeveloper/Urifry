import { Box, Text, Img } from "@chakra-ui/react";
import React from "react";
import { assets } from "../assets/assets";
import './Middle.css'
const Middle = () => {
  return (
    <Box className="middleContainer" display="flex" flexDir="column" rowGap="20" w={{base:"100%",sm:"100%",med:"100vw",sm:"100vw"}} >
      <Box className="middle-sec 1" display="flex" alignItems="center" w="100%" ml='5%' >
        <Box className="middle1-img" >
          <Img className="phone" src={assets.midphone}></Img>
          <Img className="springs" src={assets.springs}></Img>
          <Img className="gradient" src={assets.gradient}></Img>
        </Box>
        <Box className="middle1-Content" w={{base:"100%",sm:"100%",md:"70%",lg:"70%"}} >
          {/* middle content heading starts here -------------> */}
          <Box>
            <Text fontSize="3xl" color="oRANGE">
              FEATURES
            </Text>
            <Text fontSize="3xl" className="clashb">
              Uifry Premium
            </Text>
          {/* middle content heading ends here -------------> */}

            <Box mt="5" display="flex" flexDirection="column" rowGap="3">
              <Box display="flex" gap="3">
                <Img src={assets.mid1} />
                <Text className="clash">Budgeting Intervals</Text>
              </Box>
              <Box>
                <Text >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  praesentium voluptas ullam maiores 
                  </Text>
              </Box>
              <Box display="flex" gap="3">
                <Img src={assets.mid1} />
                <Text className="clash">Budgeting Intervals</Text>
              </Box>
              <Box>
                <Text >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  praesentium voluptas ullam maiores 
                </Text>
              </Box>
              <Box display="flex" gap="3">
                <Img src={assets.mid1} />
                <Text className="clash">Budgeting Intervals</Text>
              </Box>
              <Box>
                <Text>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  praesentium voluptas ullam maiores 
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Text></Text>
          </Box>
        </Box>
      </Box>
      <Box className="middle-sec 2" display="flex" justifyContent = "space-between" alignItems="center" ml="7%" gap="50">
        <Box className="middle2-Content">
              <Text className="clashb" fontSize="4xl">Why Choose UiFry?</Text>
              <Box display="flex" gap="3">
                <Img src={assets.mid13}/>
            <Text fontSize="2xl" className="clash">
              Fully Customizable
            </Text>
            </Box>
          {/* middle content heading ends here -------------> */}

            <Box mt="5" display="flex" flexDirection="column" rowGap="3" w="100%">
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, inventore porro, distinctio ad dicta harum voluptates rem illo at eveniet vel?</Text>
            </Box>
        </Box>
        <Box className="middle2-img">
          <Img className="phone2" src={assets.midphone}></Img>
          <Img className="springs2" src={assets.springs}></Img>
          <Img className="gradient2" src={assets.gradient}></Img>
        </Box>
      </Box>
      {/* <Box className="middle-sec 3" display="flex">
        <Box className="middle3-Content">ds</Box>
        <Box className="middle3-img">ds</Box>
      </Box> */}
    </Box>
  );
};

export default Middle;
