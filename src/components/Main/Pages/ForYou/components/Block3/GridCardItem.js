import { GridItem } from "@chakra-ui/react";

export default function GridCardItem({ children, row, column }) {
  return (
    <>
      <GridItem
        h={"300px"}
        w={"calc(100% - 20px)"}
        m={"10px"}
        gridRow={row}
        gridColumn={column}
        display={"grid"}
        alignItems={"center"}
        gridTemplateColumns={"1fr 250px"}
      >
        {children}
      </GridItem>
    </>
  );
}
