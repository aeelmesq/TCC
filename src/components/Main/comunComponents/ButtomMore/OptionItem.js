import { Button } from "@chakra-ui/react";

export default function OptionItem({ children }) {
  return (
    <Button
      width={"100%"}
      h={"25px"}
      cursor={"pointer"}
      border={"none"}
      pl={"5px"}
      justifyContent={"left"}
      borderBottom={"1px solid gray"}
      _hover={{ bgColor: "rgb(200, 200, 200)" }}
    >
      {children}
    </Button>
  );
}
