"use client"
import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';


const AboutUs = () => {
  return (
    <Box p="8" >
      <Heading as="h2" mb="6" fontSize="2xl" mt={90}>
        About Us
      </Heading>

      <VStack align="start" spacing="4">
        <Text>
          Hi there! I'm vikram kumar, a passionate Full Stack Developer with a love for creating web applications that are both elegant and efficient. I specialize in building end-to-end solutions, from designing the user interface to implementing server-side logic and database management.
        </Text>

        <Text>
          My journey in web development began with a curiosity for creating things that live on the internet. Over the years, I've honed my skills in various technologies, allowing me to deliver high-quality software solutions for clients and users alike.
        </Text>

        <Text>
          As a Full Stack Developer, I am proficient in both frontend and backend technologies. On the frontend, I enjoy crafting beautiful and responsive user interfaces using Chakra UI, React, and other modern JavaScript frameworks. On the backend, I'm experienced in server-side development using Node.js, Express, and database management with technologies like MongoDB and SQL.
        </Text>

        <Text>
          I believe in the power of clean code and maintainable architecture. My goal is to create web applications that not only meet the functional requirements but also provide an excellent user experience. I am always eager to learn and stay up-to-date with the latest technologies to enhance my skills and bring innovative solutions to the projects I work on.
        </Text>

        <Text>
          Let's connect! Feel free to reach out if you have a project in mind, need consultation, or just want to discuss the latest trends in web development. You can find me on <Link color="blue.500" href="[Your LinkedIn Profile]">LinkedIn</Link> or drop me an email at [your.email@example.com].
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
