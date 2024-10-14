import { Button, Flex, Icon } from "@chakra-ui/react";

export default function SliderBox({ children }) {
  return (
    <>
      <Flex>
        <Button>
          <Icon className="bi bi-caret-left-fill"></Icon>
        </Button>
        <Button>
          <Icon className="bi bi-caret--fill"></Icon>
        </Button>
      </Flex>
    </>
  );
}
