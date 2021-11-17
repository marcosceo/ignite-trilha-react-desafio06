import { Box, Img, Text } from '@chakra-ui/react'

interface PropsData {
  image: string
  flag: string
  title: string
  country: string
}

export function Card({ image, flag, title, country }: PropsData) {
  return (
    <Box maxW="256px" mr={{base: "0", xl: "40px"}} mb={{base: "20px", xl: "35px"}} h="279px" border="1px" borderColor="highlight.50" borderRadius="4px">
      <Img src={image} width="256px" height="173px"></Img>
      <Box h="106px" display="flex">
        <Box w="50%" display="flex" flexDirection="column" ml="24px" justifyContent="space-evenly">
          <Text fontFamily="Barlow" fontWeight="600" fontSize="20px" color="dark.headings">{title}</Text>
          <Text fontFamily="Barlow" fontWeight="500" fontSize="16px" color="dark.headings">{country}</Text>
        </Box>
        <Box w="40%" display="flex" justifyContent="center" alignItems="center">
          <Box  >
            <Img width="30px" height="30px" borderRadius="50%" src={flag}></Img>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}