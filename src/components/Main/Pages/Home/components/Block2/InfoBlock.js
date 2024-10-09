import { Box } from "@chakra-ui/react";

export default function InfoBlock({ children }) {
  return (
    <>
      <Box
        bgColor={"#4525D2"}
        w={"90%"}
        h={"200px"}
        m={"auto"}
        position={"relative"}
        top={"60%"}
        p={"10px"}
      >
        {children}
      </Box>
    </>
  );
}
