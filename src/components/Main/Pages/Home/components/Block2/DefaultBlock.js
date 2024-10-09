import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import img1 from "../../../../../../img/foto-noticia.jpg";
import InfoBlock from "./InfoBlock";
import ImgBlock from "./ImgBlock";

export default function Block2() {
  return (
    <>
      <Grid
        gridAutoColumns={"calc(100% - 10px)"}
        columnGap={"10px"}
        justifyContent={"center"}
        width={"100dvw"}
      >
        <InfoBlock>
          <Heading color={"white"} fontSize={"19pt"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Heading>
          <Text color={"white"} w={"70%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </Text>
        </InfoBlock>
        <ImgBlock src={img1} alt={"Imagem"} />
      </Grid>
    </>
  );
}