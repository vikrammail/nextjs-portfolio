"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react'

export default function Providers({ children }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <>{children}</>;
//   }

  return (
    <>
    <ChakraProvider><ThemeProvider>
      
      {children}
      
      </ThemeProvider></ChakraProvider>
    </>
  )
}