import { Box } from "@chakra-ui/react";

export default function InfoBlock({ children }) {
  return (
    <>
      <Box
        bgColor={"#4525D2"}
        w={"85%"}
        h={"200px"}
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
