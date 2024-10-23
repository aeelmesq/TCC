import { Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import SliderBox from "../../../../comunComponents/SliderBox/SliderBox";
import categorias from "../../../../../../consts/Cat";
import SliderCard from "../../../../comunComponents/SliderBox/SliderCard";

export default function Block3() {
  return (
    <BlockBox>
      <Heading>SEUS ASSUNTOS {">"}</Heading>
      <hr style={{ borderTop: "1px solid rgb(192, 192, 192)", height: "0" }} />
      <SliderBox leftButtonPositio={"7vw"} rightButtonPosition={"2vw"}>
        {categorias.map((cat) => {
          return <SliderCard title={cat.title} color={cat.color}></SliderCard>;
        })}
      </SliderBox>
    </BlockBox>
  );
}
