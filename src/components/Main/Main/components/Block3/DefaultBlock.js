import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NewsBox from "./NewsBox";

export default function Block3() {
  const StyleHeading = {
    marginBottom: "20px"
  }
  return (
    <>
      <Heading
        fontSize={"25pt"}
        textAlign={"center"}
        color={"white"}
        mt={"20px"}
      >
        SEUS INTERESES
      </Heading>
      <Grid
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap="20px"
        p="35px"
        m={"8px auto"}
        w={"100%"}
        justifyContent={"center"}
        color="white"
      >
        <GridItem textAlign={"center"}>
          <Heading sx={StyleHeading}>
            Principais noticías<i class="bi bi-arrow-down"></i>
          </Heading>
          <NewsBox />
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading sx={StyleHeading}>
            Destaques<i class="bi bi-arrow-down"></i>
          </Heading>
          <NewsBox />
        </GridItem>
        <GridItem textAlign={"center"}>
          <Heading sx={StyleHeading}>
            Recentes<i class="bi bi-arrow-down"></i>
          </Heading>
          <NewsBox />
        </GridItem>
      </Grid>
    </>
  );
}
