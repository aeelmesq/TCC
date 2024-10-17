import { Box, Grid, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import ButtonMore from "../ButtomMore/ButtonMore";
import { NewsTitle } from "../Titles/TitlesPresets";
import { formatarSite } from "../../../utilits";
import MenuMoreProvider from "../../../../Providers/menuMoreProvider";
import SelectOptions from "../ButtomMore/SelectOptions";
import OptionItem from "../ButtomMore/OptionItem";

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
          <Grid gridTemplateColumns={"1fr 140px"} mr={"7px"} mb={"100px"}>
            <Text>{news.site}</Text>
            <MenuMoreProvider>
              <Box>
                <SelectOptions>
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
                </SelectOptions>
                <Box ml={"100px"}>
                  <ButtonMore />
                </Box>
              </Box>
            </MenuMoreProvider>
          </Grid>
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
