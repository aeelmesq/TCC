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
        pt={"15px"}
        pb={"15px"}
        gridAutoColumns={"calc(100% - 30px)"}
        justifyContent={"center"}
        borderRadius={"10px"}
        minH={"300px"}
      >
        {children}
      </Grid>
    </>
  );
}
