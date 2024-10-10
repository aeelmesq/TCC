import { Box, Grid } from "@chakra-ui/react";

export default function NewsBox() {
  return (
    <>
      <Grid
        w={"100%"}
        bgColor={"#221293"}
        gridTemplateColumns={"repeat(3 1fr)"}
        h={"500px"}
        borderRadius={"10px"}
      >
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Grid>
    </>
  );
}
