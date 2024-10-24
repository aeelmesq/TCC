import { Box, VStack, StackSeparator } from "@chakra-ui/react";

export default function NewsBox() {
  const StyleGridItem = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    w:"100%",
  }
  return (
    <>
        <VStack 
          separator={<StackSeparator borderColor='gray.100' />}
          spacing={5}
          align="stretch"
          >
            <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}>teste</Box>
            <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
            <Box bgColor={"white"} w={"90%"} h={"140px"} m={"auto"}></Box>
          </VStack>
    </>
  );
}
