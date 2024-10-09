import { Grid } from "@chakra-ui/react";

export default function GrayCont({ children }) {
  return (
    <Grid
      bgColor={"#F5F5F5"}
      m={"auto"}
      h={"auto"}
      w={"97%"}
      p={"20px"}
      rowGap={"15px"}
      gridTemplateColumns={"87%"}
      justifyContent={"center"}
      borderRadius={"10px"}
      position={"relative"}
      right={"calc(10% - 30px)"}
    >
      {children}
    </Grid>
  );
}
