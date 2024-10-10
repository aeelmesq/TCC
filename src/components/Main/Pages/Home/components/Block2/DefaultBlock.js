import { Grid, Heading, Text } from "@chakra-ui/react";
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
        position={"relative"}
        justifySelf={"center"}
        w={"100vw"}
      >
        <InfoBlock>
          <Heading color={"white"} fontSize={"22pt"} ml={"30px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Heading>
          <Text color={"white"} w={"70%"} ml={"50px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
            magna sem, sed lobortis dolor malesuada vitae. Nulla id fermentum
            urna. Integer non ligula nec augue aliquam pellentesque eget quis
            diam. Cras vitae ultricies nulla, a gravida orci. Quisque turpis
            nisi, condimentum vitae commodo vitae, tempus a dui. Nunc et enim
            porttitor, suscipit urna sit amet, dictum tortor. Cras a posuere
            enim. Praesent eleifend lectus eu dapibus elementum. Praesent eget
            consequat magna. Pellentesque semper at risus in volutpat.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales magna
            sem, sed lobortis dolor malesuada vitae. Nulla id fermentum urna.
            Integer non ligula nec augue aliquam pellentesque eget quis diam.
            Cras vitae ultricies nulla, a gravida orci. Quisque turpis nisi,
            condimentum vitae commodo vitae, tempus a dui. Nunc et enim
            porttitor, suscipit urna sit amet, dictum tortor. Cras a posuere
            enim. Praesent eleifend lectus eu dapibus elementum. Praesent eget
            consequat magna. Pellentesque semper at risus in volutpat.
          </Text>
        </InfoBlock>
        <ImgBlock src={img1} alt={"Imagem"} />
      </Grid>
    </>
  );
}
