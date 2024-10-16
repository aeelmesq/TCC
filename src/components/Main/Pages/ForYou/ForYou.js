import "../../../../StyleComponents/ForYou.css";
import { Grid, Heading } from "@chakra-ui/react";
import Block2 from "./components/Block2/DefaultBlock";
import Block3 from "./components/Block3/DefaultBlock";
import Block1 from "./components/Block1/DefaultBlock";

export default function ForYou() {
  return (
    <>
      <Grid gridTemplateColumns={"94%"} justifyContent={"center"}>
        <Heading fontSize={"22pt"}>PARA VOCÊ</Heading>
        <Block1 />
        <Block2 />
        <Block3 />
      </Grid>
    </>
  );
}
