import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    
    return (
        <>
        {colorMode === 'dark' ? <SunIcon onClick={toggleColorMode}
            color={iconColor[colorMode]} /> : <MoonIcon  onClick={toggleColorMode}
            color={iconColor[colorMode]}/>}
        </>
            
        
    )
}

export default DarkModeSwitch