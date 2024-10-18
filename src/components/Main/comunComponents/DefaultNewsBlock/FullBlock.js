import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import { NewsTitle } from "../Titles/TitlesPresets";
import { formatarSite, redirectTo } from "../../../utilits";
import OptionItem from "../ButtomMore/OptionItem";
import OptionBox from "../ButtomMore/OptionBox";

export default function FullBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <Card column={"span 2"}>
      <Grid
        h={"350px"}
        w={"98%"}
        m={"auto"}
        gridTemplateColumns={"1fr 460px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box h={"330px"}>
          <Flex justifyContent={"space-between"} mr={"7px"} mb={"100px"}>
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
          <Link
            href={formatarSite(news.site)}
            textDecor={"none"}
            _hover={{ textDecor: "underline" }}
          >
            <NewsTitle>{news.title}</NewsTitle>
            <Text flex={"none"}>{news.autor}</Text>
          </Link>
        </Box>
        <NewsImg src={news.img} alt={news.title} />
      </Grid>
    </Card>
  );
}
