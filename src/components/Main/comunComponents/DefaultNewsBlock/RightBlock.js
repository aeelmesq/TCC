import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";
import ButtonMore from "../ButtomMore/ButtonMore";

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
        h={"200px"}
        w={"calc(100% - 40px)"}
        m={"auto"}
        gridTemplateColumns={"calc(1fr - 60px)"}
      >
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
