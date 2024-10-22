import { Heading } from "@chakra-ui/react";
import MainCont from "../../comunComponents/MainCont/MainCont";
import Block1 from "./components/Block1/DefaultBlock";
import Block2 from "./components/Block2/DefaultBlock";
import Block3 from "./components/Block3/DefaultBlock";
import Block4 from "./components/Block4/DefaultBlock";

export default function Preferencias() {
  return (
    <>
      <Heading ml={"25px"} fontSize={"35px"}>
        <i className="bi bi-bookmarks"></i> PREFERÊNCIAS
      </Heading>
      <MainCont>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
      </MainCont>
    </>
  );
}
