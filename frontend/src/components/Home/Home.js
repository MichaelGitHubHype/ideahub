/* Source https://codepen.io/stack-findover/pen/eYWPwPV */
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Select,
  Center,
  HStack,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Input,
  Textarea,
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
  const [formData, setFormData] = useState({
    category: "hackathon",
    content: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deployModal() {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add idea </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <Heading
                marginTop="0.5rem"
                as="h3"
                size="sm"
                style={{ color: "black", opacity: "0.6" }}
              >
                Category
              </Heading>
              <Select
                marginTop="0.5rem"
                onChange={(event) => {
                  setFormData({ ...formData, category: event.target.value });
                }}
              >
                <option style={{ color: "black" }} value="hackathon">
                  Hackathon
                </option>
                <option style={{ color: "black" }} value="course">
                  Bird Courses
                </option>
                <option style={{ color: "black" }} value="travel">
                  Travel
                </option>
                <option style={{ color: "black" }} value="video">
                  Video
                </option>
              </Select>
              <Heading
                marginTop="0.5rem"
                as="h3"
                size="sm"
                style={{ color: "black", opacity: "0.6" }}
              >
                Input
              </Heading>
              <Input
                size="md"
                placeholder="LIN204"
                onChange={(event) => {
                  setFormData({ ...formData, content: event.target.value });
                }}
                style={{
                  fill: "white",
                  marginTop: "0.5rem",
                  background: "white",
                  color: "black",
                }}
              />
              <Heading
                marginTop="0.5rem"
                as="h3"
                size="sm"
                style={{ color: "black", opacity: "0.6" }}
              >
                Justification (Optional)
              </Heading>
              <Textarea
                onChange={(event) => {}}
                placeholder="I took it last year and the content on the exams and assignments is straight from the professor's Youtube videos."
                maxHeight="30vh"
                size="sm"
              />
            </ModalBody>

            <ModalFooter>
              <Box marginRight="3rem"></Box>
              <HStack>
                <Button mr={3} onClick={onClose}>
                  CANCEL
                </Button>
                <Button colorScheme="blue" mr={3} onClick={createIdea}>
                  ADD IDEA
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  const getIdea = () => {
    axios
      .get("http://127.0.0.1:8000/ideas/", null)
      .then((res) => {
        setIdea(res.data[ideaType]);
      })
      .catch((error) => {});
  };

  const createIdea = () => {
    if (formData["content"] === "") {
      alert("Invalid input was given!");
      return;
    }

    axios
      .post(
        "http://127.0.0.1:8000/ideas/",
        { [formData["category"]]: formData["content"] },
        null
      )
      .then(() => {
        setFormData({ ...formData, content: "" });
        onClose();
      })
      .catch(() => {});
  };

  return (
    <div>
      <Zoom>
        <Heading
          color="white"
          textAlign="center"
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
            <Stack marginTop="7%">
              <HStack marginLeft="30px">
                <Image width="50px" src={StarImage}></Image>
                <Heading color="white">Get An Idea</Heading>
              </HStack>
              <HStack>
                <Select
                  cursor="pointer"
                  border="none"
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
                    Bird Courses
                  </option>
                  <option style={{ color: "black" }} value="travel">
                    Travel
                  </option>
                  <option style={{ color: "black" }} value="video">
                    Video
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
              <Button
                _hover={{ transform: "scale(1.05);" }}
                color="white"
                width="20.5rem"
                height="5rem"
                bg="linear-gradient(-325deg, #fc5c7d, #6a82fb, #05dfd7)"
                onClick={onOpen}
              >
                Add Idea
              </Button>
            </Stack>
          </Center>
          {idea && (
            <>
              <Center>
                <Stack marginLeft="25px" marginTop="30px">
                  <Heading
                    maxWidth="850px"
                    size="lg"
                    color="white"
                    marginBottom="10px"
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
                    opacity="0.8"
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
      {deployModal()}
    </div>
  );
}
