"use client"
import React from 'react'
  
import { Box, Flex, Heading, Spacer,Button } from '@chakra-ui/react';
import { Stack, Circle, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/react'

export default function Header() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <>
  <Stack >
             {/* <Circle position="absolute" bg="blue.100" mt={100} opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" /> */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >vikram kumar</Text>
                   

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='/vikram.jpeg' width={300} height={300} />
            </Flex>

        </Stack>
    </>
  )
}

