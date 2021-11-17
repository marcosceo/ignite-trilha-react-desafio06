import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container, Flex, Link } from '@chakra-ui/react' 
import Logo from '../../public/img/Logo.png'
import Vector from '../../public/img/Vector.png'

export function Header() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  
  return (
    <Container position="relative" maxW="1440px" h="6.25rem">
     <Flex align="center" justify="center"h="100%">
      { !isHome ? 
        <NextLink href="/" passHref>
        <Link position="absolute" left={{base: "16px", xl: "140px"}} h="32px" w="32px"><Image src={Vector} alt="Seta para retornar à página anterior"/></Link>
        </NextLink> :
      ""
      }
      <Image src={Logo} alt="Logo da Worldtrip"/>
     </Flex>
    </Container>
  )
}