import { Flex, Grid } from "@chakra-ui/react";

export default function BlockBox({ children }) {
  return (
    <>
      <Grid
        bgColor={"#D9D9D9"}
        w={"100%"}
        boxShadow={"1px 0 5px black"}
        mt={"20px"}
        mb={"20px"}
        gridAutoColumns={"98%"}
        justifyContent={"center"}
        borderRadius={"10px"}
        minH={"300px"}
      >
        {children}
      </Grid>
    </>
  );
}
