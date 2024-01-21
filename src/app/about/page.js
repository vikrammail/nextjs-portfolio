import React from "react";
import {  Box, Heading, Text, Link } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <>
      <Box maxW="600px" mx="auto" textAlign="center" mt={10} p={5}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          Welcome to my space on the web! I'm a passionate Full Stack MERN Developer who loves turning ideas into functional and elegant web applications.
        </Text>
        <Text fontSize="lg" mt={4}>
          My expertise lies in crafting seamless and responsive user interfaces using React.js, backed by the power of Node.js and Express.js for building robust server-side applications. MongoDB is my database of choice for efficient data management.
        </Text>
        <Text fontSize="lg" mt={4}>
          I'm on a constant journey of learning and staying updated with the latest technologies and best practices in web development. My goal is to not only meet the technical requirements of a project but to exceed expectations through creativity and innovation.
        </Text>
        <Text fontSize="lg" mt={4}>
          As a collaborative team player, I've had the pleasure of working with diverse teams, bringing ideas to life and delivering high-quality software solutions.
        </Text>
        <Text fontSize="lg" mt={4}>
          Let's connect and explore the endless possibilities of web development! Feel free to reach out to me on {" "}
          <Link href="https://www.linkedin.com/in/vikram-verma-44221b254/" isExternal color="teal.500" fontWeight="bold">
            LinkedIn
          </Link>{" "}or{" "}
          <Link href="https://github.com/vikrammail" isExternal color="teal.500" fontWeight="bold">
            GitHub
          </Link>.
        </Text>
      </Box>
    </>
  );
};

export default AboutUs;
