import { Box, Grid } from "@chakra-ui/react";

export default function ContBox({ children }) {
  return (
    <>
      <Box
        w={"96%"}
        minH={"725px"}
        bgColor={"#1A293E"}
        p={"15px"}
        justifyContent={"center"}
        alignContent="center"
        borderRadius={"7px"}
        margin="auto"
      >
        {children}
      </Box>
    </>
  );
}
