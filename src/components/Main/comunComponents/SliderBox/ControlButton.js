import { Button } from "@chakra-ui/react";
import useSliderBox from "./useSliderBox";

/*
  Componente ControlButton:

    Descrição: O componente ControlButton retona um botão com estilos 
    pré-comfigurados e permite que os estilos right e left sejam alterados
    por meio das props.

    Obs: 
      - O ControlButton espera estar inserido em um Slider.Provider;

      - A ação do botão deve ser especificada nas props como "prev"(Volta o Slide)
      ou "next"(Avança o Slide).

    Exemplo:
    <Slider.Provider>
      ...
        <ControlButton l={x} action={"prev"}>
          ...
        </ControlButton>
        ...
        <ControlButton r={y} action={"next"}>
          ...
        </ControlButton>
    </Slider.Provider>
*/

export default function ControlButton({ children, r, l, action }) {
  const { handleSlider } = useSliderBox();

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
        position={"relative"}
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
