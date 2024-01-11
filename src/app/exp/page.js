"use client"
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Experience = () => {
  return (
    <Box p="8">
      <Heading as="h2" mb="6" fontSize="2xl" mt={100}>
        Experience
      </Heading>

      <VStack align="start" spacing="4">
        <Box>
          <Heading as="h3" fontSize="xl" mb="2">
            Senior Full Stack Developer - Awesome Tech Solutions
          </Heading>
          <Text color="gray.500">May 2020 - Present</Text>
          <Text>
            As a Senior Full Stack Developer at Awesome Tech Solutions, I lead a dynamic team of developers in designing and implementing innovative web applications. My responsibilities include collaborating with cross-functional teams, interpreting project requirements, and delivering high-quality solutions that exceed client expectations.
          </Text>
          <Text>
            Utilizing Chakra UI for front-end development, I've been instrumental in crafting visually appealing and user-friendly interfaces. My expertise extends to building scalable and efficient backend systems using Node.js, Express, and various databases, ensuring optimal performance and a seamless user experience.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" fontSize="xl" mb="2">
            Full Stack Developer - Creative Web Solutions
          </Heading>
          <Text color="gray.500">June 2017 - April 2020</Text>
          <Text>
            In my role as a Full Stack Developer at Creative Web Solutions, I contributed to the development of several successful projects. I actively participated in the entire software development lifecycle, from conceptualization and design to implementation and deployment.
          </Text>
          <Text>
            Working with Chakra UI, React, and other modern frontend technologies, I delivered responsive and intuitive user interfaces. On the backend, I leveraged my skills in Node.js and Express to build robust server-side logic, and managed databases using MongoDB and SQL.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Experience;
