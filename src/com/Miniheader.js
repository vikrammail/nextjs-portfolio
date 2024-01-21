"use client"
import React from 'react'
import { Box, IconButton, Text, Flex, Button, background, Drawer,useColorModeValue } from '@chakra-ui/react'
import { DrawerExample } from './Drawer'
import DarkModeSwitch from './Chakradarkmode'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export default function Miniheader() {
  const pathname = usePathname()
  return (
    <>
    <Flex  p={4} borderWidth={1}  justifyContent="center" w="100%">
      <Box flex="1" display={{ base: "block", md: "none" }}>
         <DrawerExample/>
      </Box>
      <Box display={{ md: 'display' }}  ml="auto" alignItems="center" justifyContent="center" h="30px">
        <Box display="flex">
      <Button colorScheme='white' variant="outline" mr="5" size="sm"><DarkModeSwitch /></Button>
        <Text fontSize="sm" px={2} py={1} rounded={'md'} _hover={{textDecoration: 'none',bg: useColorModeValue('gray.200', 'purple.700'),}} bg={pathname =='/'? useColorModeValue('gray.300','purple.700'):''} mr="5"><Link hover__ href={'/'}>Overview</Link></Text>
        <Text fontSize="sm" px={2} py={1} rounded={'md'} _hover={{textDecoration: 'none',bg: useColorModeValue('gray.200', 'purple.700'),}} bg={pathname =='/about'? useColorModeValue('gray.300','purple.700'):''} mr="5"><Link href={'/about'}>About</Link></Text>
        <Text fontSize="sm" px={2} py={1} rounded={'md'} _hover={{textDecoration: 'none',bg: useColorModeValue('gray.200', 'purple.700'),}} bg={pathname =='/exp'? useColorModeValue('gray.300','purple.700'):''} mr="5"><Link href={'/exp'}>Experience</Link></Text>
        {/* <Text fontSize="md" mr="5"><Link href={'/test'}>test</Link></Text> */}
        {/* <Text fontSize="md" mr="5">Terms</Text> */}
      </Box>
      </Box>
      <Box display="flex" ml="auto" alignItems="center" justifyContent="center" h="30px">
        <Button colorScheme='white' display={'none'} variant="outline" size="sm">Sign Up</Button>
      </Box>
    </Flex>
    </>
  )
}
