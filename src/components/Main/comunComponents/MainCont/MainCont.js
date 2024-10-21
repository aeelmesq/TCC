import { Grid } from "@chakra-ui/react";

export default function MainCont({ children }) {
  return (
    <Grid
      gridTemplateColumns={"100%"}
      justifyContent={"center"}
      w={"calc(100% - 40px)"}
      p={"5px 0"}
      bgColor={"#D9D9D9"}
      borderRadius={"10px 10px 0 0"}
      m={"auto"}
      mb={"35px"}
    >
      {children}
    </Grid>
  );
}
