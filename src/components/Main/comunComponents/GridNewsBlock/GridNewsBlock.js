import { Flex, Grid } from "@chakra-ui/react";

/*
  Componente GridNewsBlock:

    Descrição: Retorna um bloco de Grid com pré-definições de
    estilo.

    Obs: 
      - o número de colunas da grid deve ser pasado como prop.

    Exemplo:
    <>
      <GridNewsBlock numCols={2}>
        ...
      </GridNewsBlock>
    </>
*/

export default function GridNewsBlock({ children, numCols }) {
  return (
    <Flex
      w={"100%"}
      minH={"600px"}
      p={"20px 0"}
      m={"15px auto"}
      borderRadius={"7px"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"2px 1px 5px black"}
      bgColor={"white"}
    >
      <Grid
        gridTemplateColumns={`repeat(${numCols}, 1fr)`}
        columnGap={"1px"}
        rowGap={"1px"}
        w={"calc(100% - 40px)"}
        minH={"600px"}
        bgColor={"black"}
      >
        {children}
      </Grid>
    </Flex>
  );
}
