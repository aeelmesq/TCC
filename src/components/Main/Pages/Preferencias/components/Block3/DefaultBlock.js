import { Divider, Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridNewsBlock from "../../../../comunComponents/GridNewsBlock/GridNewsBlock";
import { noticias } from "../../../Home/data";
import GridNewsItemWithImg from "../../../../comunComponents/GridNewsBlock/GridNewsItemWithImg";

const data = noticias.slice(0, 9);

export default function Block3() {
  return (
    <BlockBox>
      <Heading>PRINCIPAIS ASSUNTOS DE INTERESSE {">"}</Heading>
      <Divider
        orientation={"horizontal"}
        borderTop={"1px solid rgb(192, 192, 192)"}
        h={"0px"}
      />
      <GridNewsBlock numCols={"3"}>
        {data.map((item) => {
          return <GridNewsItemWithImg news={item} />;
        })}
      </GridNewsBlock>
    </BlockBox>
  );
}
