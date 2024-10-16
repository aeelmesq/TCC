import { Box, Grid, Link, Text } from "@chakra-ui/react";
import Card from "./Card";
import ButtonMore from "../ButtomMore/ButtonMore";
import { NewsTitle } from "../Titles/TitlesPresets";
import { formatarSite } from "../../../utilits";

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
          <Grid gridTemplateColumns={"1fr 30px"} mb={"60px"}>
            <Text>{news.site}</Text>
            <ButtonMore />
          </Grid>
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
