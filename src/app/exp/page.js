import React from "react";
import {  Box, Heading, Text, Badge } from "@chakra-ui/react";

const OwnProjectsExperience = () => {
  return (
    <>
      <Box maxW="800px" mx="auto" mt={10} p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Personal MERN Projects
        </Heading>

        <Box mb={4}>
          <Heading as="h3" size="lg">
            E-commerce Platform - MyShop
          </Heading>
          <Text fontSize="md" color="gray.600" mb={2}>
             Present
          </Text>
          <Text fontSize="md">
            MyShop is a full-fledged e-commerce platform that I developed to showcase my skills and explore the end-to-end process of building a MERN application. Key contributions and features include:
          </Text>
          <Box ml={4} mt={2}>
            <Text>- Implemented user authentication and authorization using JWT.</Text>
            <Text>- Integrated a responsive and dynamic product catalog using React.js.</Text>
            <Text>- Developed a RESTful API with Node.js and Express.js for handling product data.</Text>
            <Text>- Integrated MongoDB for efficient storage and retrieval of product information.</Text>
            <Text>- Implemented cart functionality and secure checkout processes.</Text>
          </Box>
          <Box mt={2}>
            <Text fontSize="md" color="gray.600">
              Technologies used: React.js, Node.js, Express.js, MongoDB, JWT, etc.
            </Text>
          </Box>
        </Box>

        <Box mb={4}>
          <Heading as="h3" size="lg">
            Task Management App - Taskify
          </Heading>
          <Text fontSize="md" color="gray.600" mb={2}>
            January 2020 - May 2021
          </Text>
          <Text fontSize="md">
            Taskify is a project management tool that I developed to streamline personal and team tasks. Some highlights of my work on Taskify include:
          </Text>
          <Box ml={4} mt={2}>
            <Text>- Designed and implemented an intuitive task dashboard using React.js.</Text>
            <Text>- Developed a RESTful API with Node.js and Express.js for task management.</Text>
            <Text>- Integrated MongoDB to store and retrieve task data efficiently.</Text>
            <Text>- Implemented user authentication to secure task data and user profiles.</Text>
            <Text>- Added real-time updates using WebSocket for collaborative task management.</Text>
          </Box>
          <Box mt={2}>
            <Text fontSize="md" color="gray.600">
              Technologies used: React.js, Node.js, Express.js, MongoDB,  etc.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OwnProjectsExperience;
