import { Flex } from "@chakra-ui/react";
import ControlButton from "./ControlButton.js";
import Slider from "./SliderContext.js";
import { useCallback, useEffect, useRef, useState } from "react";

/*
  Componente de Slider:

    Descrição: O componente de Slider retorna um templete de slider com todas
    as funcionalidades de scroll pré-conficuradas e sem nenhum item de slide.

    Obs: Os items do slider devem ser pasados como SlideCard.

    Exemplo: 
    <>
      <SlideBox>
        {cat.map((item, index) => {
          return (
            <>
              <SlideCard title={item.title} colo{item.color}>
                ...
              </SlideCard>
            </>
          )
        })}
      </SlideBox>
    </>
*/

export default function SliderBox({
  children,
  leftButtonPositio,
  rightButtonPosition,
}) {
  const maxScrollLeft = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);

  const SliderRef = useRef(null);

  useEffect(() => {
    maxScrollLeft.current =
      SliderRef.current.scrollWidth - SliderRef.current.clientWidth;
  }, []);

  const handleSlider = useCallback((e, action) => {
    e.preventDefault();
    if (action === "prev") {
      setSliderPosition(
        SliderRef.current.scrollLeft - SliderRef.current.offsetWidth / 3
      );
      SliderRef.current.scrollLeft -= SliderRef.current.offsetWidth / 3;
    } else if (action === "next") {
      setSliderPosition(
        SliderRef.current.scrollLeft + SliderRef.current.offsetWidth / 3
      );
      SliderRef.current.scrollLeft += SliderRef.current.offsetWidth / 3;
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
          <ControlButton l={leftButtonPositio} action={"prev"}>
            <i className="bi bi-caret-left-fill"></i>
          </ControlButton>
          <Flex
            w={"100%"}
            position={"relative"}
            h={"600px"}
            overflowX={"scroll"}
            overflowY={"hidden"}
            ref={SliderRef}
            alignItems={"center"}
          >
            {children}
          </Flex>
          <ControlButton r={rightButtonPosition} action={"next"}>
            <i className="bi bi-caret-right-fill"></i>
          </ControlButton>
        </Flex>
      </Slider.Provider>
    </>
  );
}
