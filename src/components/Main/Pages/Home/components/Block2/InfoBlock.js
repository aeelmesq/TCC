import { Box } from "@chakra-ui/react";

export default function InfoBlock({ children }) {
  return (
    <>
      <Box
        bgColor={"#1A293E"}
        w={"85%"}
        minH={"200px"}
        m={"auto"}
        boxShadow={"1px 0px 4px black"}
        position={"relative"}
        top={"60%"}
        p={"10px"}
      >
        {children}
      </Box>
    </>
  );
}
