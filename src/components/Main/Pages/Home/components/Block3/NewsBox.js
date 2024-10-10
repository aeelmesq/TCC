import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function NewsBox() {
  return (
    <>
      <Grid
        w={"100%"}
        bgColor={"#221293"}
        gridTemplateColumns={"repeat(3, auto)"}
        gridTemplateRows={"200px"}
        justifyItems={"center"}
        p={"25px"}
        h={"600px"}
        borderRadius={"10px"}
      >
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
        <GridItem bgColor={"white"} w={"98%"}></GridItem>
      </Grid>
    </>
  );
}
