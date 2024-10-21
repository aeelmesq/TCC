import { Heading } from "@chakra-ui/react";
import MainCont from "../../comunComponents/MainCont/MainCont";
import Block1 from "./components/Block1/DefaultBlock";

export default function Preferencias() {
  return (
    <>
      <Heading ml={"25px"} fontSize={"35px"}>
        <i className="bi bi-bookmarks"></i> PREFERÊNCIAS
      </Heading>
      <MainCont>
        <Block1 />
      </MainCont>
    </>
  );
}
