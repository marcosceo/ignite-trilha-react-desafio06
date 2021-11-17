import { Box, Container, Text } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"

interface Props {
  image: string
  title: string
}

export function ContinentBanner({ title, image }: Props) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

  return (
    <Container mx='auto' maxW={{ base: "100%", xl: "1440px" }} h={{ base: "150px", xl: "500px" }} position="relative">
      <Box w="100%" h="100%" align="center" backgroundImage={image} bgSize="cover" bgRepeat="no-repeat" bgPosition="center">
       
        {isLargerThan1280 ?
          <Text fontWeight="600" fontSize="48px" lineHeight="72px" position="absolute" left="140px" bottom="59px">
            {title}
          </Text> :
          <Text fontWeight="600" fontSize="28px" lineHeight="150px" >
            {title}
          </Text>
        }

      </Box>
    </Container>
  )
}

