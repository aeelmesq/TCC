import { GridItem } from "@chakra-ui/react";

export default function GridCardItem({ children, row, column }) {
  return (
    <>
      <GridItem
        h={"299"}
        w={"calc(100% - 20px)"}
        m={"10px"}
        gridRow={row}
        gridColumn={column}
        display={"grid"}
        alignItems={"baseline"}
        gridTemplateColumns={"1fr 250px"}
      >
        {children}
      </GridItem>
    </>
  );
}
