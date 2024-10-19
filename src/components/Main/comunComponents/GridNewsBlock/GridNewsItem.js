import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import GridNewsCard from "./GridNewsCard";
import OptionBox from "../ButtomMore/OptionBox";
import OptionItem from "../ButtomMore/OptionItem";
import { formatarSite, redirectTo } from "../../../utilits";

/*
  Coponente GridNewsItemWithImg:

    Descrição: Retorna um templete com pré-definições de
    estilos.

    Obs:
      - É recomentado que este componente seja interado
      com o método map;

      - É recomentado que este componente esteja inserido
      detro de um componente do tipo GridNewsBlock com três
      colunas.

    Exemplo:
    <>
      <GridNewsBlock numCols={3}>
        {data.map((item) => {
          return <GridNewsItem news={item} />
        })}
      </GridNewsBlock>
    </>
*/

export default function GridNewsItem({
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
        <Text>{news.site}</Text>
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
        gridTemplateColumns={"1fr"}
      >
        <Box h={"255px"}>
          <Heading>{news.title}</Heading>
        </Box>
      </Grid>
    </GridNewsCard>
  );
}
