import { Box, Container, Flex, Img, Text } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"

export function TravelType() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
  const travelTypes = [['vida noturna','img/cocktail.png'], ['praia','img/surf.png'], ['moderno','img/building.png'], ['clássico','img/museum.png'], ['e mais...','img/earth.png']]
  return (

    <Container maxW="1160px" h={{base: "120px", xl: "145px"}} my={{base: "36px", xl: "80px"}} mx="auto">
      {isLargerThan1280 ? (
        <Flex align="center" flexWrap="wrap" justify="space-between" h="100%">
          {travelTypes.map((type) => (
            <Box key={type[0]} display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <Img src={type[1]} w="85px" h="85px" />
            <Text m="24px" color="dark.headings" fontWeight="600" fontSize={{ base: "18px", xl: "24px" }} lineHeight={{ base: "27px", xl: "36px" }}>{type[0]}</Text>
          </Box>
          ))}          
        </Flex>
      ) : (
        <Flex align="center" flexWrap="wrap" justify="center" h="100%">
          {travelTypes.map((type) => (
            <Box key={type[0]} minW="160px" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Img src="img/bullet.png" w="10px" h="10px" />
            <Text m="8px" color="dark.headings" fontWeight="600" fontSize={{ base: "18px", xl: "24px" }} lineHeight={{ base: "27px", xl: "36px" }}>{type[0]}</Text>
          </Box>
          ))} 
        </Flex>
      )}
    </Container>
  )
}

