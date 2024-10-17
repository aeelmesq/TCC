import { Box } from "@chakra-ui/react";
import useMenuMore from "../../../../hooks/useMenuMore";

export default function SelectOptions({ children }) {
  const { menuState } = useMenuMore();

  return (
    <>
      {menuState && (
        <Box
          bgColor={"#D9D9D9"}
          h={"100px"}
          w={"100px"}
          boxShadow={"1px 0 4px rgb(90, 90, 90)"}
          zIndex={"2"}
          borderRadius={"3px"}
          position={"absolute"}
          overflowY={"scroll"}
          overflowX={"hidden"}
        >
          {children}
        </Box>
      )}
    </>
  );
}
