import "../../../../StyleComponents/ForYou.css";
import { Grid, Heading } from "@chakra-ui/react";
import Block2 from "./components/Block2/DefaultBlock";
import Block3 from "./components/Block3/DefaultBlock";
import Block1 from "./components/Block1/DefaultBlock";
import PageTitle from "../../comunComponents/PageTitle/PageTitle";

export default function ForYou() {
  return (
    <>
      <Grid
        gridTemplateColumns={"100%"}
        justifyContent={"center"}
        p={"20px 0"}
        bgColor={"#D9D9D9"}
        borderRadius={"10px 10px 0 0"}
        mb={"35px"}
      >
        <PageTitle>PARA VOCÊ</PageTitle>
        <Block1 />
        <Block2 />
        <Block3 />
      </Grid>
    </>
  );
}
