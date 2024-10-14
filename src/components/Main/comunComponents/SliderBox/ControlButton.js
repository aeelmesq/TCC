import { Button } from "@chakra-ui/react";
import useSliderBox from "./useSliderBox";
import { useEffect } from "react";

export default function ControlButton({ children, r, l, action }) {
  const { handleSlider } = useSliderBox();

  useEffect(() => {
    console.log(handleSlider);
  }, [handleSlider]);

  return (
    <>
      <Button
        w={"60px"}
        h={"60px"}
        border={"none"}
        bgColor={"white"}
        borderRadius={"100%"}
        color={"black"}
        boxShadow={"0 0 7px black"}
        position={"absolute"}
        right={r}
        zIndex={"8"}
        left={l}
        cursor={"pointer"}
        transition={"0.4s"}
        _hover={{ opacity: "0.9" }}
        onClick={(e) => handleSlider(e, action)}
      >
        {children}
      </Button>
    </>
  );
}
