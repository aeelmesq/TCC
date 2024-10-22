import { Heading } from "@chakra-ui/react";
import MainCont from "../../comunComponents/MainCont/MainCont";
import PageTitle from "../../comunComponents/PageTitle/PageTitle";
import Block1 from "./components/Block1/DefaultBlock";

export default function Penapolis() {
  return (
    <>
      <Heading ml={"25px"} fontSize={"35px"}>
        <i className="bi bi-geo-alt"></i> PENÁPOLIS
      </Heading>
      <MainCont>
        <PageTitle>RECOMENDAÇÕES PARA VOCÊ</PageTitle>
        <Block1 />
      </MainCont>
    </>
  );
}
