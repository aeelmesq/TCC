import { Box, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridCard from "./GridCard";
import { noticias } from "../../../Home/data";
import GridCardItem from "./GridCardItem";
import OptionBox from "../../../../comunComponents/ButtomMore/OptionBox";
import OptionItem from "../../../../comunComponents/ButtomMore/OptionItem";
import { formatarSite } from "../../../../../utilits";

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
                <Flex justifyContent={"space-between"} gridColumn={"span 2"}>
                  <Text>{item.site}</Text>
                  <OptionBox>
                    <OptionItem>Salvar</OptionItem>
                    <OptionItem>
                      <Link
                        href={formatarSite(news.site)}
                        textDecor={"none"}
                        textAlign={"left"}
                        w={"100%"}
                      >
                        Abrir
                      </Link>
                    </OptionItem>
                  </OptionBox>
                </Flex>
                <Box h={"300px"}>
                  <Heading>{item.title}</Heading>
                </Box>
                <Flex>
                  <Img
                    src={item.img}
                    width={"250px"}
                    objectFit={"cover"}
                    alt={`Notícia: ${item.description}`}
                    borderRadius={"10px"}
                  />
                </Flex>
              </GridCardItem>
            );
          })}
        </GridCard>
      </BlockBox>
    </>
  );
}
