import { Grid } from "@chakra-ui/react";

export default function ContBox({ children }) {
  return (
    <>
      <Grid
        w={"98%"}
        minH={"600px"}
        bgColor={"#1A293E"}
        p={"15px"}
        justifyContent={"center"}
        borderRadius={"7px"}
        gridTemplateColumns={"calc(100% - 12px)"}
      >
        {children}
      </Grid>
    </>
  );
}
