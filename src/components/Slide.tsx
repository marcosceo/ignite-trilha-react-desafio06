import { Container, Flex, Heading, Text } from '@chakra-ui/react'

interface Continent {
  continent: {
    id: number
    image: string
    title: string
    description: string
    countries: number
    languages: number
    cities: number
    bio: string
  }
}


export function Slide({ continent }: Continent) {
  
  return (
    <Container mx='auto' mb='3rem' maxW="1240px" >
     <Flex w="100%" h={{base: "375px", xl: "450px"}} flexDir="column" align="center" bgRepeat="no-repeat" justify="center" backgroundSize="cover" backgroundImage={continent.image}>
       
        <Heading color="light.headins" fontWeight="700" fontSize={{base: "24px", xl: "48px"}} lineHeight={{base: "36px", xl: "72px"}}>{continent.title}</Heading>
        <Text color="light.info" fontWeight="700" fontSize={{base: "14px", xl: "24px"}} lineHeight={{base: "21px", xl: "36px"}}>{continent.description}</Text>
       
     </Flex>
    </Container>
  )
}