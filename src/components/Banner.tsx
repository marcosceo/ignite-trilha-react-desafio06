import { Box, Container, Flex, Heading, Img, Text } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"

export function Banner() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

  return (
    <Container mx='auto' maxW={{base: "100%", xl: "1440px"}} h={{base: "163px", xl: "368px"}} >
     <Flex w="100%" h="100%" align="center" backgroundImage="img/Background.png" backgroundRepeat="round" >
       <Box w="100%">
        <Heading ml={{base: "16px", xl: "140px"}} mb={{base: "8px", xl: "20px"}} fontWeight="500" fontSize={{base: "20px", xl: "36px"}} lineHeight={{base: "30px", xl: "54px"}}>5 Continentes,<br /> infinitas possibilidades.</Heading>
        <Text maxWidth="36rem" ml={{base: "16px", xl: "140px"}} mr={{base: "26px", xl: "0"}} fontWeight="400" fontSize={{base: "14px", xl: "20px"}} lineHeight={{base: "21px", xl: "30px"}}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
       </Box>
        
       {isLargerThan1280 ? 
          <Box w="100%" position="relative">
            <Img src="img/Airplane.png" w="417px" position="absolute" bottom="-208px" left="200px" />
          </Box> :
       ""}

       
     </Flex>
    </Container>
  )
}