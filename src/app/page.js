"use client"
import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
// import { useSelector } from 'react-redux'
// import Alluser from '@/rdcom/alluser'
// import Setuser from '@/rdcom/setuser'
import Hero from '@/com/portfolio/Hero'
import Profile from '@/com/portfolio/Profile'


export default function Home() {
  // const state = useSelector((state)=>state.ChangeColor.color)
  // console.log(state)
  return (
    <>
    <main > 
      <Hero/>
      <Profile/>
    {/* <Setuser/> */}
    {/* <Alluser/> */}

    </main>
    </>
  )
}
