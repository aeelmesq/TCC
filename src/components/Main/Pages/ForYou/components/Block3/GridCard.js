import { Center, Divider, Grid } from "@chakra-ui/react";

export default function GridCard({ children }) {
  return (
    <>
      <Grid
        w={"97%"}
        padding={"10px"}
        m={"auto"}
        h={"400px"}
        mt={"7px"}
        borderRadius={"7px"}
        gridTemplateColumns={"1fr 1px 1fr"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"white"}
        position={"relative"}
      >
        <Divider
          gridColumn={"2"}
          gridRow={"span 3"}
          h={"380px"}
          position={"relative"}
          borderLeft={"1px solid black"}
        />
        <Divider
          gridColumn={"1"}
          gridRow={"2"}
          w={"100%"}
          borderTop={"1px solid black"}
        />
        <Divider
          gridColumn={"3"}
          gridRow={"2"}
          w={"100%"}
          borderTop={"1px solid black"}
        />
        {children}
      </Grid>
    </>
  );
}
