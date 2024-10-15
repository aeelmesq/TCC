import { Divider, Heading } from "@chakra-ui/react";
import categorias from "../../../../../../consts/Cat";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import SliderBox from "../../../../comunComponents/SliderBox/SliderBox";
import SliderCard from "../../../../comunComponents/SliderBox/SliderCard";

export default function Block2() {
  return (
    <>
      <BlockBox>
        <Heading w={"100%"}>ASSUNTOS</Heading>
        <hr
          style={{
            height: "0px",
            width: "100%",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        />
        <SliderBox leftButtonPositio={"5vw"} rightButtonPosition={"1vw"}>
          {categorias.map((item, index) => {
            return (
              <SliderCard color={item.color} title={item.title}></SliderCard>
            );
          })}
        </SliderBox>
      </BlockBox>
    </>
  );
}
