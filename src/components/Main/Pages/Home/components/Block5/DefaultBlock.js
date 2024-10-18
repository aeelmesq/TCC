import { Heading } from "@chakra-ui/react";
import ContBox from "./ContBox";
import SliderBox from "../../../../comunComponents/SliderBox/SliderBox";
import categorias from "../../../../../../consts/Cat";
import SliderCard from "../../../../comunComponents/SliderBox/SliderCard";

export default function SliderBlock() {
  return (
    <>
      <Heading
        fontSize={"25pt"}
        textAlign={"center"}
        color={"#000053"}
        mt={"30px"}
      >
        SEUS ASSUNTOS
      </Heading>
      <ContBox>
        <SliderBox leftButtonPositio={"7vw"} rightButtonPosition={"3vw"}>
          {categorias.map(({ title, color }, index) => {
            return (
              <>
                <SliderCard title={title} color={color}></SliderCard>
              </>
            );
          })}
        </SliderBox>
      </ContBox>
    </>
  );
}
