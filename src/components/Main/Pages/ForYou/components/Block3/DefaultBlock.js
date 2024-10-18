import { Flex, Heading, Text, Grid, Box } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridCard from "./GridCard";
import { noticias } from "../../../Home/data";
import GridCardItem from "./GridCardItem";
import OptionBox from "../../../../comunComponents/ButtomMore/OptionBox";
import OptionItem from "../../../../comunComponents/ButtomMore/OptionItem";
import { formatarSite, redirectTo } from "../../../../../utilits";
import GridNewsBlock from "../../../../comunComponents/GridNewsBlock/GridNewsBlock";
import GridNewsCard from "../../../../comunComponents/GridNewsBlock/GridNewsCard";
import NewsImg from "../../../../comunComponents/NewsImg/NewsImg";

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
        <GridNewsBlock>
          {news.map((item, index) => {
            return (
              <GridNewsCard>
                <Flex
                  w={"100%"}
                  mt={"5px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text>{item.site}</Text>
                  <OptionBox>
                    <OptionItem>Salvar</OptionItem>
                    <OptionItem
                      onClick={(e) => {
                        e.preventDefault();
                        redirectTo(formatarSite(item.site));
                      }}
                    >
                      Abrir
                    </OptionItem>
                  </OptionBox>
                </Flex>
                <Grid
                  h={"calc(100% - 45px)"}
                  w={"calc(100% - 20px)"}
                  alignItems={"baseline"}
                  m={"auto"}
                  gridTemplateColumns={"1fr 190px"}
                >
                  <Box>
                    <Text>{item.site}</Text>
                    <Heading>{item.title}</Heading>
                  </Box>
                  <NewsImg src={item.img} w="190px" />
                </Grid>
              </GridNewsCard>
            );
          })}
        </GridNewsBlock>
      </BlockBox>
    </>
  );
}
