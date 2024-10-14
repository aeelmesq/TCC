import { Flex } from "@chakra-ui/react";
import ControlButton from "./ControlButton.js";
import Slider from "./SliderContext.js";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SliderBox({ children }) {
  const maxScrollLeft = useRef(null);

  const [sliderPosition, setSliderPosition] = useState();

  const SliderRef = useRef(null);

  useEffect(() => {
    maxScrollLeft.current =
      SliderRef.current.scrollWidth - SliderRef.current.clientWidth;
  }, [SliderRef.current]);

  const handleSlider = useCallback((e, action) => {
    e.preventDefault();
    if (action === "prev") {
      SliderRef.current.scrollLeft -= SliderRef.current.offsetWidth / 3;
      setSliderPosition(
        SliderRef.current.scrollLeft - SliderRef.current.offsetWidth / 3
      );
    } else if (action === "next") {
      SliderRef.current.scrollLeft += SliderRef.current.offsetWidth / 3;
      setSliderPosition(
        SliderRef.current.scrollLeft + SliderRef.current.offsetWidth / 3
      );
    }
  }, []);

  return (
    <>
      <Slider.Provider value={{ handleSlider, SliderRef, setSliderPosition }}>
        <Flex
          w={"100%"}
          h={"600px"}
          mt={"12px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ControlButton l={"5vw"} action={"prev"}>
            <i className="bi bi-caret-left-fill"></i>
          </ControlButton>
          <Flex
            w={"100%"}
            position={"relative"}
            h={"600px"}
            overflowX={"scroll"}
            overflowY={"hidden"}
            ref={SliderRef}
          >
            {children}
          </Flex>
          <ControlButton r={"1vw"} action={"next"}>
            <i className="bi bi-caret-right-fill"></i>
          </ControlButton>
        </Flex>
      </Slider.Provider>
    </>
  );
}
