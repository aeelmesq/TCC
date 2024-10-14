import { useContext } from "react";
import Slider from "./SliderContext";

export default function useSliderBox() {
  const context = useContext(Slider);

  if (context == undefined) {
    throw new Error("outside context");
  }

  return context;
}
