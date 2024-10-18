import { Divider, Grid } from "@chakra-ui/react";

export default function GridCard({ children }) {
  return (
    <>
      <Grid
        w={"97%"}
        padding={"10px"}
        m={"auto"}
        h={"600px"}
        mt={"15px"}
        borderRadius={"7px"}
        gridTemplateColumns={"1fr 1px 1fr"}
        alignItems={"center"}
        justifyContent={"center"}
        boxShadow={"2px 1px 5px black"}
        bgColor={"white"}
        position={"relative"}
      >
        <Divider
          gridColumn={"2"}
          gridRow={"span 3"}
          h={"580px"}
          mb={"40px"}
          borderLeft={"1px solid black"}
        />
        <Divider
          gridColumn={"1"}
          gridRow={"2"}
          w={"95%"}
          m={"auto"}
          borderTop={"1px solid black"}
        />
        <Divider
          gridColumn={"3"}
          gridRow={"2"}
          w={"95%"}
          m={"auto"}
          borderTop={"1px solid black"}
        />
        {children}
      </Grid>
    </>
  );
}
