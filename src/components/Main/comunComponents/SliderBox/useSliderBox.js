import { useContext } from "react";
import Slider from "./SliderContext";

/*
  Hook useSliderBox:

    Descrição: O Hook useSliderBox retorna o context de Slider ao elemento
    que está inserido dentro do Provider de Slider.

    Obs: Caso um elemento fora do provider de Slider tetar acessar esse método
    será exibido um erro.
*/

export default function useSliderBox() {
  const context = useContext(Slider);

  if (context == undefined) {
    throw new Error("outside context");
  }

  return context;
}
