"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Profile() {
  return (
    <>
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          full stack developer
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          my responsibilities, skills, and details associated with a MERN stack
          developer:
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={5}
        m={3}
      >
        <PriceWrapper>
          <Box py={2} px={6}>
            <Text fontWeight="500" fontSize="2xl">
              Responsibilities:
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />
                Design and Development: Create and implement user interfaces
                using React.js, develop server-side logic using Node.js and
                Express.js, and design and maintain databases using MongoDB.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />
                API Development: Develop RESTful APIs to facilitate
                communication between the front-end and back-end components of
                the application.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />
                Database Management: Manage and maintain MongoDB databases,
                including data modeling, querying, and indexing.
              </ListItem>
              {/* expand item  */}
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"purple.300"}
                    >
                      read more
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={1}>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Server Configuration: Set up and configure Node.js
                      servers, ensuring optimal performance, scalability, and
                      security.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Collaboration: Work closely with cross-functional teams,
                      including UI/UX designers, product managers, and other
                      developers, to deliver high-quality software.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Code Review: Conduct code reviews to ensure code quality,
                      maintainability, and adherence to coding standards.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Testing: Implement and conduct unit testing, integration
                      testing, and end-to-end testing to identify and fix bugs
                      and ensure the reliability of the application.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Deployment: Deploy applications to cloud platforms like
                      AWS, Heroku, or others, and manage the deployment process
                      efficiently.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      Documentation: Create and maintain technical documentation
                      for code, APIs, and system architecture.
                    </ListItem>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </List>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("purple.300", "purple.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Full stack developer
              </Text>
            </Box>
            <Box py={8} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Skills:
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  React.js: Proficient in building user interfaces using
                  React.js and its ecosystem (React Router, Redux, etc.).
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Node.js: Strong command of server-side JavaScript using
                  Node.js, with knowledge of asynchronous programming and
                  event-driven architecture.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Express.js: Experience in building server-side applications
                  and RESTful APIs using the Express.js framework.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  MongoDB: Expertise in NoSQL database management, including
                  data modeling, CRUD operations, and indexing.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  JavaScript/ES6+: Advanced knowledge of JavaScript and
                  ECMAScript 6 features.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  RESTful APIs: Design and implementation of RESTful web
                  services.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Version Control: Proficient in using version control systems
                  like Git for source code management.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Web Fundamentals: Understanding of web development
                  fundamentals, including HTML, CSS, and client-server
                  architecture.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Package Managers: Experience with package managers like npm or
                  Yarn.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  Testing Frameworks: Familiarity with testing frameworks such
                  as Jest or Mocha for unit and integration testing.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  DevOps: Basic knowledge of DevOps practices, including
                  continuous integration and continuous deployment (CI/CD).
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Education and Experience:
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />A bachelor's
                degree in computer science, software engineering, or a related
                field is often preferred.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />
                Professional experience in full-stack development, particularly
                with the MERN stack.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="purple.500" />
                Continuous learning and staying updated with the latest
                technologies and trends in web development.
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
    </>
  );
}
