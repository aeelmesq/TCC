import { Box } from "@chakra-ui/react";
import useMenuMore from "../../../../hooks/useMenuMore";

export default function SelectOptions({ children }) {
  const { menuState } = useMenuMore();

  return (
    <>
      {menuState && (
        <Box
          bgColor={"#D9D9D9"}
          h={"110px"}
          w={"100px"}
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
