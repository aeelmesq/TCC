import { Box, Highlight, Heading, Text, Button } from "@chakra-ui/react";
import video from "../../../video/bg_main_home.mp4";
import Header from "../../Header/Header";
import Block3 from "./components/Block3/DefaultBlock";
import Block5 from "./components/Block5/DefaultBlock";

function ScrollBlock({children}) {
  return (
    <Box h="100vh" scrollSnapAlign="start">{children}</Box>
  )
}

function NonBackground({children}) {
  return (
    <Box w="100%" h="100vh" display="grid" alignContent="center">
      {children}
    </Box>
  )
}
function WithBackground({children}) {
  return (
    <Box bg="blue.600" w="100%" h="100vh" display="grid" alignContent="center">
      {children}
    </Box>
  )
}
function BackgroundBlock({children}) {
  return (
    <>
      <Box position="absolute" bg="blue.50" width="98%" h="100vh" left="0" right="0" textAlign="center" margin="0 auto"></Box>
      <Box position="relative">
        {children}
      </Box>
    </>
  )
}


function Principal() {
  function Background({children}) {
    return (
      <Box position="relative">
        <Box w="100%" h="calc(100vh - 50px)" filter='auto' brightness="20%" zIndex="100" display="block" overflow="hidden">
          <video autoPlay muted loop w="100%" height="100%" objectFit="cover">
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
    <BackgroundBlock>
      <Box textAlign="center" display="grid" justifyItems="center">
        <Text color="blackAlpha.800" mt="-75px" fontSize="3xl">SUAS NOTÍCIAS</Text>
        <Box w="70%" h="700px" backgroundImage="url('https://i.imgur.com/s8aePwb.jpg')" backgroundPosition="center" backgroundSize="cover" borderRadius="md" boxShadow="xl">
          <Box w="70%" h="80px" bg="blue.600" position="relative" top="96%" left="0" textAlign="start" margin="auto">
            <Text p="20px" color="white">Primeira notícia</Text>
          </Box>
        </Box>
      </Box>
    </BackgroundBlock>
  )
}

function MessageLucky() {
  return (
    <BackgroundBlock>
      <Box textAlign="center" display="grid" justifyItems="center">
        <Box w="100%" h="700px" backgroundImage="url('https://i.imgur.com/s8aePwb.jpg')" backgroundPosition="center" backgroundSize="cover" borderRadius="md" boxShadow="xl">
          <Box w="70%" h="80px" bg="blue.600" position="relative" bottom="8%" left="0" textAlign="start" margin="auto">
            <Text fontSize="22px" p="25px" color="white">Mensagem de boa sorte ou algo parecido</Text>
          </Box>
        </Box>
      </Box>
    </BackgroundBlock>
  )
}

function NoticiaSemanal() {
  const textstyle = {
    color: "white",
    textAlign: "center",
    marginBottom: "10px" 
  }
  return (
    <BackgroundBlock>
      <Box w="100%" h="100vh" margin="0 auto" display="grid" gridTemplateColumns="2fr 3fr">
        <Box position="relative" overflow="hidden" backgroundImage="url(https://i.imgur.com/stVOVEX.jpeg)" backgroundPosition="center" backgroundSize="cover"></Box>
        <Box bg="blue.600" p="60px" display="block" alignContent="center">
          <Text sx={textstyle} fontSize="35px">Notícia Semanal</Text>
          <Text sx={textstyle} fontSize="15px" fontWeight="light">12h30m</Text>
          <Text sx={textstyle} fontSize="30px">Título da notícia que irá ser apresentada</Text>
          <Text sx={textstyle} fontSize="20px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
        </Box>
      </Box>
    </BackgroundBlock>
  )
}



export default function Main() {
  
  return (
    <Box h="100vh" overflowY="auto" scrollSnapType="y mandatory">
      <ScrollBlock>
        <Box bg='gray.800' area='header' display="flex" alignItems="center" justifyContent="center" scrollSnapAlign="start" h="50px">
          <Header />
        </Box>
        <Box w="100%" h="calc(100vh - 50px)" display="grid" alignContent="center">
          <Principal />
        </Box>
      </ScrollBlock>
      <ScrollBlock>
        <NonBackground>
          <SuasNoticias/>
        </NonBackground>
      </ScrollBlock>
      <ScrollBlock>
        <WithBackground>
          <Block3 />
        </WithBackground>
      </ScrollBlock>
      <ScrollBlock>
        <NonBackground>
          <MessageLucky />
        </NonBackground>
      </ScrollBlock>
      <ScrollBlock>
        <NonBackground>
          <NoticiaSemanal/>
        </NonBackground>
      </ScrollBlock>
      {/* Falta o CSS */}
      <ScrollBlock>
        <Block5 />
      </ScrollBlock>
    </Box>
  )
}