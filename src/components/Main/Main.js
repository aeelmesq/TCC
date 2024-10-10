import { Box, Highlight, Heading, Text, Button } from "@chakra-ui/react";
import video from "../../video/bg_main_home.mp4";


function Enter() {
  function Background() {
    return (
      <Box w="100%" pos="absolute" filter='auto' brightness="20%" left={0} right={0} zIndex="100">
        <video autoPlay muted loop >
          <source  src={video} type="video/mp4" />
        </video>
      </Box>
    )
  }
  return (
    <>
      <Background />
      <Box w="auto" pos="absolute" bottom="45%" left="8%" zIndex="101">
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

    </>
  )
}



export default function Main() {
  return (
    <>
      <Enter />
    </>
  )
}