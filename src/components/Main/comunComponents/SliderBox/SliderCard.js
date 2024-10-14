import { Box, Heading } from "@chakra-ui/react";

export default function SliderCard({ children, title, color }) {
  return (
    <>
      <Box
        bgColor={"white"}
        w={"calc(100% / 3 - 18px)"}
        m={"0 9px"}
        borderRadius={"7px"}
        overflow={"hidden"}
        flex={"none"}
      >
        <Box bgColor={color}>
          <Heading>{title}</Heading>
        </Box>
        {children}
      </Box>
    </>
  );
}
