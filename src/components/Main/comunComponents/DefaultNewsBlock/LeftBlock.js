import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";
import NewsImg from "../NewsImg/NewsImg";
import ButtonMore from "../ButtomMore/ButtonMore";

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
            <ButtonMore />
          </Grid>
          <Heading>{news.title}</Heading>
          <Text>{news.autor}</Text>
        </Box>
      </Grid>
    </Card>
  );
}
