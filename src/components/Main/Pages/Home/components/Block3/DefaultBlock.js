import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import NewsBox from "./NewsBox";

export default function Block3() {
  return (
    <>
      <Heading
        fontSize={"25pt"}
        textAlign={"center"}
        color={"#000053"}
        mt={"55px"}
      >
        SEUS INTERESES
      </Heading>
      <Grid
        gridTemplateColumns={"33% 33% 33%"}
        columnGap={"20px"}
        mt={"15px"}
        w={"calc(100% - 50px)"}
        justifyContent={"center"}
      >
        <GridItem textAlign={"center"}>
          <Heading>Principais noticías</Heading>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading>Destaques</Heading>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading>Recentes</Heading>
        </GridItem>
        <GridItem gridColumn={"span 3"}>
          <NewsBox />
        </GridItem>
      </Grid>
    </>
  );
}
