import Recomendacoes from "../../../Pages/ForYou/components/Recomendacoes/defautBlock";
import "../../../../StyleComponents/ForYou.css";
import { Grid, Heading } from "@chakra-ui/react";
import Block2 from "./components/Block2/DefaultBlock";

export default function ForYou() {
  return (
    <>
      <Grid gridTemplateColumns={"94%"} justifyContent={"center"}>
        <Heading fontSize={"22pt"}>PARA VOCÊ</Heading>
        <Recomendacoes />
        <Block2 />
      </Grid>
    </>
  );
}
