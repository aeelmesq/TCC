import { Box, Grid } from "@chakra-ui/react";

export default function NewsBox() {
  return (
    <>
      <Grid
        w={"100%"}
        bgColor={"#221293"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"200px"}
        justifyItems={"center"}
        h={"600px"}
        borderRadius={"10px"}
      >
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
        <Box bgColor={"white"}></Box>
      </Grid>
    </>
  );
}
