import "../../../../StyleComponents/ForYou.css";
import { Heading } from "@chakra-ui/react";
import Block2 from "./components/Block2/DefaultBlock";
import Block3 from "./components/Block3/DefaultBlock";
import Block1 from "./components/Block1/DefaultBlock";
import PageTitle from "../../comunComponents/PageTitle/PageTitle";
import MainCont from "../../comunComponents/MainCont/MainCont";

export default function ForYou() {
  return (
    <>
      <Heading ml={"25px"} fontSize={"35px"}>
        <i className="bi bi-collection"></i> PARA VOCÊ
      </Heading>
      <MainCont>
        <PageTitle>RECOMENDAÇÕES PARA VOCÊ</PageTitle>
        <Block1 />
        <Block2 />
        <Block3 />
      </MainCont>
    </>
  );
}
