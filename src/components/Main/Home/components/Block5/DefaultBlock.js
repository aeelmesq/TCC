import { Heading } from "@chakra-ui/react";
import ContBox from "./ContBox";
import SliderBox from "../../../comunComponents/SliderBox/SliderBox";
import categorias from "../../../../../consts/Cat";
import SliderCard from "../../../comunComponents/SliderBox/SliderCard";

export default function SliderBlock() {
  return (
    <>
      <Heading
        fontSize={"25pt"}
        textAlign={"center"}
        color={"#000053"}
        padding="50px 0"
      >
        SEUS ASSUNTOS
      </Heading>
      <ContBox>
        <SliderBox leftButtonPositio={"2vw"} rightButtonPosition={"2vw"}>
          {categorias.map(({ title, color }, index) => {
            return (
              <>
                <SliderCard title={title} color={color} index={index}></SliderCard>
              </>
            );
          })}
        </SliderBox>
      </ContBox>
    </>
  );
}
