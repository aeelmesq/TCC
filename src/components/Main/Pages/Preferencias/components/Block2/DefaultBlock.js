import { Divider, Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridNewsBlock from "../../../../comunComponents/GridNewsBlock/GridNewsBlock";
import { noticias } from "../../../Home/data";
import GridNewsItemWithImg from "../../../../comunComponents/GridNewsBlock/GridNewsItemWithImg";

const data = noticias.slice(0, 8);

export default function Block2() {
  return (
    <BlockBox>
      <Heading>SUAS NOTÍCIAS {">"}</Heading>
      <Divider
        orientation={"horizontal"}
        borderTop={"1px solid rgb(192, 192, 192)"}
        h={"0px"}
      />
      <GridNewsBlock numCols={"2"}>
        {data.map((item) => {
          return <GridNewsItemWithImg news={item} />;
        })}
      </GridNewsBlock>
    </BlockBox>
  );
}
