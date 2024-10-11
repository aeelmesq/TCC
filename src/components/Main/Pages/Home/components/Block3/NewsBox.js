import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function NewsBox() {
  return (
    <>
      <Grid
        w={"100%"}
        bgColor={"#1A293E"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"200px"}
        alignItems={"center"}
        justifyItems={"center"}
        h={"670px"}
        borderRadius={"7px"}
      >
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
        </GridItem>
      </Grid>
    </>
  );
}
