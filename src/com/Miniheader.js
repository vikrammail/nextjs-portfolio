"use client"
import React from 'react'
import { Box, IconButton, Text, Flex, Button, background, Drawer } from '@chakra-ui/react'
import { DrawerExample } from './Drawer'
import DarkModeSwitch from './Chakradarkmode'
import Link from 'next/link'

export default function Miniheader() {
  return (
    <>
    <Flex position={'fixed'} backdropFilter={'blur(10px)'} p={4} borderWidth={1} justifyContent="center" w="100%">
      <Box flex="1">
         <DrawerExample/>
      </Box>
      <Box display="flex" ml="auto" alignItems="center" justifyContent="center" h="30px">
      <Button colorScheme='white' variant="outline" mr="5" size="sm"><DarkModeSwitch /></Button>
        <Text fontSize="md" mr="5"><Link href={'/'}>home</Link></Text>
        <Text fontSize="md" mr="5"><Link href={'/about'}>about</Link></Text>
        <Text fontSize="md" mr="5"><Link href={'/exp'}>experience</Link></Text>
        {/* <Text fontSize="md" mr="5">Terms</Text> */}
      </Box>
      <Box display="flex" ml="auto" alignItems="center" justifyContent="center" h="30px">
        <Button colorScheme='white' display={'none'} variant="outline" size="sm">Sign Up</Button>
      </Box>
    </Flex>
    </>
  )
}
