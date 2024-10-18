import { Divider, Flex, Grid } from "@chakra-ui/react";

export default function GridNewsBlock({ children }) {
  return (
    <Flex
      w={"97%"}
      m={"auto"}
      h={"600px"}
      mt={"15px"}
      borderRadius={"7px"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"2px 1px 5px black"}
      bgColor={"white"}
    >
      <Grid
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"1px"}
        rowGap={"1px"}
        w={"calc(100% - 20px)"}
        h={"calc(100% - 20px)"}
        bgColor={"black"}
      >
        {children}
      </Grid>
    </Flex>
  );
}
