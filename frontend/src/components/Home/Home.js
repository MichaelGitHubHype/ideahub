/* Source https://codepen.io/stack-findover/pen/eYWPwPV */
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Select,
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
import SpaceshipImage from "../../assets/images/spaceship.png";
import FlamesImage from "../../assets/images/flames.png";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [ideaType, setIdeaType] = useState("hackathon");

  const getIdea = () => {
    axios
      .get("http://127.0.0.1:8000/ideas/", null)
      .then((res) => {
        setIdea(res.data[ideaType]);
      })
      .catch((error) => {});
  };

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
              <HStack marginLeft="30px">
                <Image width="50px" src={StarImage}></Image>
                <Heading color="white">Get An Idea</Heading>
              </HStack>
              <HStack>
                <Select
                  cursor="pointer"
                  border="none"
                  placeholder="Hackathon"
                  _hover={{ transform: "scale(1.05);" }}
                  color="white"
                  width="10rem"
                  height="5rem"
                  bg="linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7)"
                  onChange={(event) => {
                    setIdeaType(event.target.value);
                  }}
                >
                  <option style={{ color: "black" }} value="hackathon">
                    Hackathon
                  </option>
                  <option style={{ color: "black" }} value="course">
                    Courses
                  </option>
                  <option style={{ color: "black" }} value="option3">
                    Option 3
                  </option>
                </Select>

                <Button
                  _hover={{ transform: "scale(1.05);" }}
                  color="white"
                  marginLeft="10px"
                  width="10rem"
                  height="5rem"
                  bg="linear-gradient(-325deg, #fc5c7d, #6a82fb, #05dfd7)"
                  onClick={getIdea}
                >
                  Generate
                </Button>
              </HStack>
            </Stack>
          </Center>
          {idea && (
            <>
              <Center>
                <Stack marginLeft="25px" marginTop="30px">
                  <Heading
                    size="lg"
                    color="white"
                    marginBottom="-50px"
                    bg="linear-gradient(-325deg, #fc5c7d, #6a82fb, #05dfd7)"
                    borderRadius="5px"
                    textAlign="center"
                  >
                    {idea}
                  </Heading>
                </Stack>
              </Center>
              <Center>
                <Box style={{ position: "static" }}>
                  <Image
                    style={{ marginLeft: "25px" }}
                    src={SpaceshipImage}
                    width="150px"
                    opacity="0.4"
                  ></Image>
                  <Image
                    style={{ marginLeft: "25px" }}
                    src={FlamesImage}
                    width="150px"
                    className="extend"
                  ></Image>
                </Box>
              </Center>
            </>
          )}
        </Box>
      </Zoom>
    </div>
  );
}
