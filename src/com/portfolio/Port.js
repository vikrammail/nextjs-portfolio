// components/Portfolio.js
"use client"
import { Box, Heading, Text, HStack} from '@chakra-ui/react';
import Profile from './Profile';

const Port = () => {
  return (
    <>
    <Box p="8">
      <Heading as="h2" mb="6" fontSize="2xl">
        My Portfolio
      </Heading>

      <HStack spacing="8" align="start">
        {/* Project 1 */}
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* <Image src="/project1.jpg" alt="Project 1" /> */}
          <Box p="6">
            <Heading as="h3" fontSize="xl" mb="2">
              Project 1 Title
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>

        {/* Project 2 */}
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* <Image src="/project2.jpg" alt="Project 2" /> */}
          <Box p="6">
            <Heading as="h3" fontSize="xl" mb="2">
              Project 2 Title
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
    <Profile/>
    </>
  );
};

export default Port;
