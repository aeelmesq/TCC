import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import GridNewsCard from "./GridNewsCard";
import OptionBox from "../ButtomMore/OptionBox";
import OptionItem from "../ButtomMore/OptionItem";
import NewsImg from "../NewsImg/NewsImg";
import { formatarSite, redirectTo } from "../../../utilits";

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
        gridTemplateColumns={"1fr 190px"}
      >
        <Box h={"255px"}>
          <Heading>{news.title}</Heading>
        </Box>
        <NewsImg src={news.img} w="190px" />
      </Grid>
    </GridNewsCard>
  );
}
