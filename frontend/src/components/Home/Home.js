/* Source https://codepen.io/stack-findover/pen/eYWPwPV */
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  Center,
  Square,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import "./Home.css";
import Zoom from "react-reveal/Zoom";
import StarImage from "../../assets/images/star.png";

export default function Home() {
  return (
    <div>
      <Zoom>
        <Heading
          color="white"
          textAlign="center"
          //   marginTop="5%"
          opacity="0.8"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          bg="linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7)"
          className="blink"
        >
          To infinity and beyond!
        </Heading>
        <Box>
          <Flex>
            <Image
              marginLeft="5%"
              marginTop="15%"
              _hover={{ transform: "scale(1);" }}
              className="image"
              src="https://www.seekpng.com/png/full/146-1466732_planet-png.png"
              width="250px"
            />
          </Flex>
          <Center>
            <Stack marginTop="15%">
              <HStack marginLeft="30px" className="blink">
                <Image width="50px" src={StarImage}></Image>
                <Heading color="white">Get An Idea</Heading>
              </HStack>
              <HStack>
                <Button
                  _hover={{ transform: "scale(-1, 1);" }}
                  className="blink"
                  color="white"
                  width="10rem"
                  height="5rem"
                  bg="linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7)"
                >
                  Hackathon
                </Button>
                <Button
                  _hover={{ transform: "scale(-1, 1);" }}
                  className="blink"
                  color="white"
                  marginLeft="10px"
                  width="10rem"
                  height="5rem"
                  bg="linear-gradient(-325deg, #fc5c7d, #6a82fb, #05dfd7)"
                >
                  Generate
                </Button>
              </HStack>
            </Stack>
          </Center>
        </Box>
      </Zoom>
    </div>
  );
}
