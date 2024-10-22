import { Flex, Heading, Img } from "@chakra-ui/react";
import img from "../../../../img/foto-Penapolis.jpg";

export default function PageTitle({ children }) {
  return (
    <Flex
      w={"100%"}
      h={"500px"}
      mt={"45px"}
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
      <Heading
        color={"white"}
        fontSize={"60px"}
        position={"absolute"}
        textAlign={"center"}
        m={"0 25%"}
      >
        {children}
      </Heading>
    </Flex>
  );
}
