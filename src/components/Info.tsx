import { Container, Flex, Text } from '@chakra-ui/react' 

interface DataProps {
  countries: number
  languages: number
  cities: number
  bio: string
}

export function Info({countries, cities, languages, bio}: DataProps) {
  return (
    <Container maxW="1200px" mx="auto" mt={{base: "24px", xl: "80px"}} mb={{base: "32px", xl: "80px"}}>
     <Flex flexDirection={{base: 'column', xl: 'row'}} align="center" justify="space-betwen" h="100%">
      <Text maxWidth="600px" mx={{base: "16px", xl: "0"}} mb={{base: "16px", xl: "0"}} color="dark.headings" fontWeight="400" fontSize={{base: "14px", xl: "24px"}} lineHeight={{base: "21px", xl: "36px"}} textAlign="justify">{bio}</Text>
      <Flex w="100%" justify="space-evenly" align="center" >
        <Flex flexDir="column" justify="center" align={{base: "start", xl: "center"}}>
          <Text color="highlight.100" fontWeight="600" fontSize="3rem" lineHeight="4.5rem">{countries}</Text>
          <Text color="dark.headings" fontWeight="400" fontSize={{base: "18px", xl: "24px"}} lineHeight={{base: "27px", xl: "36px"}}>países</Text>
        </Flex>
        <Flex flexDir="column" justify="center" align={{base: "start", xl: "center"}}>
          <Text color="highlight.100" fontWeight="600" fontSize="3rem" lineHeight="4.5rem">{languages}</Text>
          <Text color="dark.headings" fontWeight="400" fontSize={{base: "18px", xl: "24px"}} lineHeight={{base: "27px", xl: "36px"}}>línguas</Text>
        </Flex>
        <Flex flexDir="column" justify="center" align={{base: "start", xl: "center"}}>
          <Text color="highlight.100" fontWeight="600" fontSize="3rem" lineHeight="4.5rem">{cities}</Text>
          <Text color="dark.headings" fontWeight="400" fontSize={{base: "18px", xl: "24px"}} lineHeight={{base: "27px", xl: "36px"}}>cidades +100 </Text>
        </Flex>
      </Flex>
     </Flex>
    </Container>
  )
}