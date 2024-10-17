import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NewsBox from "./NewsBox";

export default function Block3() {
  return (
    <>
      <Heading
        fontSize={"25pt"}
        textAlign={"center"}
        color={"#1A293E"}
        mt={"55px"}
      >
        SEUS INTERESES
      </Heading>
      <Grid
        gridTemplateColumns={"33% 33% 33%"}
        columnGap={"20px"}
        rowGap={"20px"}
        m={"auto"}
        mt={"15px"}
        w={"100%"}
        justifyContent={"center"}
      >
        <GridItem textAlign={"center"}>
          <Heading>
            Principais notícias <i class="bi bi-arrow-down"></i>
          </Heading>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading>
            Destaques <i class="bi bi-arrow-down"></i>
          </Heading>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading>
            Recentes <i class="bi bi-arrow-down"></i>
          </Heading>
        </GridItem>
        <GridItem gridColumn={"span 3"}>
          <NewsBox />
        </GridItem>
      </Grid>
    </>
  );
}
