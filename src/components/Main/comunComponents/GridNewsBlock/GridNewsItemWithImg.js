import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import GridNewsCard from "./GridNewsCard";
import OptionBox from "../ButtomMore/OptionBox";
import OptionItem from "../ButtomMore/OptionItem";
import NewsImg from "../NewsImg/NewsImg";
import { formatarSite, redirectTo } from "../../../utilits";

/*
  Coponente GridNewsItemWithImg:

    Descrição: Retorna um templete com pré-definições de
    estilos.

    Obs:
      - É recomentado que este componente seja interado
      com o método map;

      - É recomentado que este componente esteja inserido
      detro de um componente do tipo GridNewsBlock com duas
      colunas.

    Exemplo:
    <>
      <GridNewsBlock numCols={2}>
        {data.map((item) => {
          return <GridNewsItemWithImg news={item} />
        })}
      </GridNewsBlock>
    </>
*/

export default function GridNewsItemWithImg({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <GridNewsCard>
      <Flex
        w={"100%"}
        mt={"5px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text ml={"15px"}>{news.site}</Text>
        <OptionBox>
          <OptionItem>Salvar</OptionItem>
          <OptionItem
            onClick={(e) => {
              e.preventDefault();
              redirectTo(formatarSite(news.site));
            }}
          >
            Abrir
          </OptionItem>
        </OptionBox>
      </Flex>
      <Grid
        h={"255px"}
        w={"calc(100% - 20px)"}
        alignItems={"center"}
        m={"auto"}
        gridTemplateColumns={"1fr 190px"}
      >
        <Flex h={"255px"} alignItems={"center"}>
          <Heading>{news.title}</Heading>
        </Flex>
        <NewsImg src={news.img} w="190px" />
      </Grid>
    </GridNewsCard>
  );
}
