import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import ButtonMore from "../ButtomMore/ButtonMore";
import { formatarSite } from "../../../utilits";
import { NewsTitle } from "../Titles/TitlesPresets";
import MenuMoreProvider from "../../../../Providers/menuMoreProvider";
import SelectOptions from "../ButtomMore/SelectOptions";

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
          <Grid gridTemplateColumns={"1fr 30px"}>
            <Text>{news.site}</Text>
            <MenuMoreProvider>
              <Box>
                <SelectOptions></SelectOptions>
                <ButtonMore />
              </Box>
            </MenuMoreProvider>
          </Grid>
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
