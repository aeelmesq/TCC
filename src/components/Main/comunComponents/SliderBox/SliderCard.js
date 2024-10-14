import { Box, CardHeader, Heading } from "@chakra-ui/react";

export default function SliderCard({ children, title, color }) {
  return (
    <>
      <Box bgColor={"white"} w={"33.3%"} flex={"none"}>
        <Box bgColor={color}>
          <Heading>{title}</Heading>
        </Box>
        {children}
      </Box>
    </>
  );
}
