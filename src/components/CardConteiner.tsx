import { Card } from './Card'
import { Container, SimpleGrid, Text } from '@chakra-ui/react'

interface City {
  id: number
  title: string
  country: string
  image: string
  flag: string
}

interface Cities {
  cities: City[]
}

export function CardConteiner({cities}: Cities) {
  return (
    <Container mb="35px" mx='auto' w={{base: "254px", xl: "100%"}} maxW="1200px">
      <Text color="dark.headings" fontWeight="500" fontSize={{base: "24px", xl: "36px"}} lineHeight={{base: "36px", xl: "54px"}}>Cidades +100</Text>
      <SimpleGrid maxWidth="1160px" columns={{base: 1, xl: 4}} spacing={{base: "0", xl: "40px"}} >
        {cities.map((city) => {
          return (
            <Card key={city.id} image={city.image} flag={city.flag} title={city.title} country={city.country} />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}