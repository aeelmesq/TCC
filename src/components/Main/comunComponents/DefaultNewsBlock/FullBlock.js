import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import ButtonMore from "../ButtomMore/ButtonMore";

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
          <Grid gridTemplateColumns={"1fr 30px"} mr={"7px"}>
            <Text>{news.site}</Text>
            <ButtonMore />
          </Grid>
          <Heading>{news.title}</Heading>
          <Text>{news.autor}</Text>
        </Box>
        <NewsImg src={news.img} alt={news.title} />
      </Grid>
    </Card>
  );
}
