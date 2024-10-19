import { Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import { noticias } from "../../../Home/data";
import GridNewsBlock from "../../../../comunComponents/GridNewsBlock/GridNewsBlock";
import GridNewsItemWithImg from "../../../../comunComponents/GridNewsBlock/GridNewsItemWithImg";

const news = noticias.slice(0, 4);

export default function Block3() {
  return (
    <>
      <BlockBox>
        <Heading m={"10px 0"} fontSize={"22pt"}>
          Suas notícias {">"}
        </Heading>
        <hr
          style={{
            height: "0px",
            width: "100%",
            borderTop: "1px solid #484848",
          }}
        />
        <GridNewsBlock numCols={"2"}>
          {news.map((item, index) => {
            return <GridNewsItemWithImg news={item} />;
          })}
        </GridNewsBlock>
      </BlockBox>
    </>
  );
}
