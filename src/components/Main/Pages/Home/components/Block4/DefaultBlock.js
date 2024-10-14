import { Grid, GridItem, Heading, Img } from "@chakra-ui/react";
import img3 from "../../../../../../img/img3.png";

export default function Block4() {
  return (
    <>
      <Grid
        bgColor={"#ECECEC"}
        position={"relative"}
        right={"55px"}
        w={"calc(100% + 110px)"}
        gridTemplateColumns={"700px 1fr"}
        h={"600px"}
        mt={"75px"}
      >
        <GridItem
          overflow={"hidden"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Img src={img3} alt="imagem" sizes="600px" objectfit="cover" />
        </GridItem>
        <GridItem
          display={"grid"}
          justifyContent={"center"}
          gridAutoColumns={"1fr"}
        >
          <Heading
            color={"#1A293E"}
            textAlign={"center"}
            fontSize={"25pt"}
            mt={"15px"}
          >
            NOTÍCIA SEMANAL
          </Heading>
        </GridItem>
      </Grid>
    </>
  );
}
