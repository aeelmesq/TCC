import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import { formatarSite } from "../../../utilits";
import { NewsTitle } from "../Titles/TitlesPresets";
import OptionItem from "../ButtomMore/OptionItem";
import OptionBox from "../ButtomMore/OptionBox";

export default function LeftBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <Card column={"1"} row={"span 2"}>
      <Grid
        gridTemplateColumns={"460px"}
        justifyContent={"center"}
        minH={"500px"}
      >
        <NewsImg src={news.img} alt={news.title} />
        <Box>
          <Flex justifyContent={"space-between"}>
            <Text>{news.site}</Text>
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
          <Link
            href={formatarSite(news.site)}
            textDecor={"none"}
            _hover={{ textDecor: "underline" }}
          >
            <NewsTitle>{news.title}</NewsTitle>
            <Text>{news.autor}</Text>
          </Link>
        </Box>
      </Grid>
    </Card>
  );
}
