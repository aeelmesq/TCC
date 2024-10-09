import { Box, Heading } from "@chakra-ui/react";

export default function InfoBlock({ children }) {
  return (
    <>
      <Box
        bgColor={"#4525D2"}
        w={"90%"}
        m={"auto"}
        position={"relative"}
        top={"50%"}
        p={"10px"}
      >
        {children}
      </Box>
    </>
  );
}
