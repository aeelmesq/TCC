import { Grid } from "@chakra-ui/react";

export default function ContBox({ children }) {
  return (
    <>
      <Grid
        w={"calc(100% - 60px)"}
        m={"auto"}
        minH={"700px"}
        bgColor={"#1A293E"}
        p={"30px"}
        justifyContent={"center"}
        borderRadius={"7px"}
        gridTemplateColumns={"calc(100% - 50px)"}
      >
        {children}
      </Grid>
    </>
  );
}
