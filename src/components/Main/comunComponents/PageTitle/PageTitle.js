import { Flex, Heading, Img } from "@chakra-ui/react";
import img from "../../../../img/foto-Penapolis.jpg";

export default function PageTitle({ children }) {
  return (
    <Flex
      w={"100%"}
      h={"500px"}
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Img
        src={img}
        alt="Foto da cidade de Penápolis"
        w={"100%"}
        objectFit={"cover"}
        position={"relative"}
      />
      <Heading color={"white"} fontSize={"80px"} position={"absolute"}>
        {children}
      </Heading>
    </Flex>
  );
}
