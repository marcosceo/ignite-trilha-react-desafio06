import { Box, Container, Text } from '@chakra-ui/react'

export function Divider() {
  return (
    <Container maxW="1160px">
      <Box _after={{ content: '" "', display: "block", width: "90px", "borderBottom": "solid 2px", color: "dark.headings", margin: "0 auto" }}></Box>
      <Text mt={{base: "24px", xl: "52px"}} mb={{base: "20px", xl: "52px"}} color="dark.headings" fontWeight="500" fontSize={{base: "20px", xl: "36px"}} lineHeight={{base: "30px", xl: "54px"}} textAlign="center">Vamos nessa?<br /> Então escolha seu continente</Text>
    </Container>
  )
}