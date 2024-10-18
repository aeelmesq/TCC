import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import { NewsTitle } from "../Titles/TitlesPresets";
import { formatarSite } from "../../../utilits";
import OptionItem from "../ButtomMore/OptionItem";
import OptionBox from "../ButtomMore/OptionBox";

export default function RightBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <Card column={"2"}>
      <Grid
        minH={"200px"}
        w={"calc(100% - 40px)"}
        m={"auto"}
        gridTemplateColumns={"calc(1fr - 60px)"}
      >
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
            <Box mb={"70px"}>
              <NewsTitle>{news.title}</NewsTitle>
            </Box>
            <Text>{news.autor}</Text>
          </Link>
        </Box>
      </Grid>
    </Card>
  );
}
