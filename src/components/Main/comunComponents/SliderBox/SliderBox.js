import { Button, Flex } from "@chakra-ui/react";

export default function SliderBox({ children }) {
  return (
    <>
      <Flex w={"100%"} overflowY={"scroll"} overflowX={"hidden"} h={"600px"}>
        <Button size={"40px"} bgColor={"white"}>
          <i className="bi bi-caret-left-fill"></i>
        </Button>
        <Flex w={"100%"}>{children}</Flex>
        <Button>
          <i className="bi bi-caret-right-fill"></i>
        </Button>
      </Flex>
    </>
  );
}
