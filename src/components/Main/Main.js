import { Box, Highlight, Heading, Text, Button } from "@chakra-ui/react";
import video from "../../video/bg_main_home.mp4";

function PrincipalBlock({children}) {
  return (
    <Box w="100%" h="100vh">
      {children}
    </Box>
  )
}


function Principal() {
  function Background({children}) {
    return (
      <Box>
        <Box w="100%" h="calc(100vh - 50px)" filter='auto' brightness="20%" zIndex="100" display="block" overflow="hidden">
          <video autoPlay muted loop w="100%" height="100%">
            <source  src={video} type="video/mp4" />
          </video>
        </Box>
        {children}
      </Box>
    )
  }
  return (
    <>
      <Background>
        <Box w="auto" pos="absolute" top="350px" left="8%" zIndex="101">
          <Heading lineHeight='tall' fontSize="6xl" color="white">
            <Highlight
              query={['você', "mundo"]}
              styles={{ color: "blue.100" }}
            >
              Notícias que conectam você ao mundo.
            </Highlight>
            <Text fontSize="lg" fontWeight="lighter">Receba notícias e informações para acelerar seu crescimento pessoal</Text>
          </Heading>
          <Button colorScheme="yellow" size="lg" mt="10px">Faça já seu login</Button>
        </Box>
      </Background>
    </>
  )
}

function SuasNoticias() {
  return (
    <Box textAlign="center" display="grid" justifyItems="center">
      <Text>SUAS NOTÍCIAS</Text>
      <Box w="80%" h="700px" overflow="hidden" backgroundImage="url('https://i.imgur.com/s8aePwb.jpg')" backgroundPosition="center" backgroundSize="cover" borderRadius="md" boxShadow="xl">
        <Box w="60%" h="80px" bg="blue.600" zIndex="101" position="absolute" left="20%" bottom="11%">
          <Text color="white">Primeira notícia</Text>
        </Box>
      </Box>
    </Box>
  )
}



export default function Main() {
  return (
    <>
      <PrincipalBlock>
        <Principal />
      </PrincipalBlock>
      <PrincipalBlock>
        <SuasNoticias/>
      </PrincipalBlock>
    </>
  )
}