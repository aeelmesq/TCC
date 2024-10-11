import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function NewsBox() {
  return (
    <>
      <Grid
        w={"100%"}
        bgColor={"#1A293E"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"200px"}
        justifyItems={"center"}
        gridGap={"15px"}
        h={"670px"}
        borderRadius={"10px"}
      >
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box bgColor={"white"} w={"90%"} h={"150px"} m={"auto"}></Box>
        </GridItem>
      </Grid>
    </>
  );
}
