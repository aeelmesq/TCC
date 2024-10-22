import { Heading, Text } from "@chakra-ui/react";
import categorias from "../../../../../../consts/Cat";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import SliderBox from "../../../../comunComponents/SliderBox/SliderBox";
import SliderCard from "../../../../comunComponents/SliderBox/SliderCard";

export default function Block2() {
  return (
    <>
      <BlockBox>
        <Heading w={"100%"} mb={"3px"}>
          ASSUNTOS
        </Heading>
        <Text mb={"3px"} fontSize={"14pt"} color={"#484848"}>
          Sugestão de Assuntos
        </Text>
        <hr
          style={{
            height: "0px",
            width: "100%",
            borderTop: "1px solid #484848",
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
