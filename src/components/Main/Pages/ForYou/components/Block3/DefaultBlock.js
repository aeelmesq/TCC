import { Box, Heading, Img, Text } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridCard from "./GridCard";
import { noticias } from "../../../Home/data";
import GridCardItem from "./GridCardItem";

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
        <GridCard>
          {news.map((item, index) => {
            return (
              <GridCardItem
                row={index > 1 ? "1" : "3"}
                column={index == 0 || index == 2 ? "1" : "3"}
              >
                <Box h={"300px"}>
                  <Text>{item.site}</Text>
                  <Heading>{item.title}</Heading>
                </Box>
                <Box>
                  <Img
                    src={item.img}
                    width={"250px"}
                    objectFit={"cover"}
                    alt={`Notícia: ${item.description}`}
                    borderRadius={"10px"}
                  />
                </Box>
              </GridCardItem>
            );
          })}
        </GridCard>
      </BlockBox>
    </>
  );
}
