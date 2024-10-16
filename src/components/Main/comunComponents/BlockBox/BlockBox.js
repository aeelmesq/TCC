import { Grid } from "@chakra-ui/react";

/*
  Componente BlockBox

    Descrição: O componente BlockBox retorna um bloco com pré-configurações de estilo.

    Obs: Deve ser usado para encapsular os blocos de notícias

    Exemplo:
    <>
      <BlockBox>
        ...
      </BlockBox>  
    </>
*/

export default function BlockBox({ children }) {
  return (
    <>
      <Grid
        bgColor={"#D9D9D9"}
        w={"100%"}
        boxShadow={"1px 1px 2px black"}
        mt={"20px"}
        mb={"20px"}
        pt={"15px"}
        pb={"15px"}
        gridAutoColumns={"calc(100% - 30px)"}
        justifyContent={"center"}
        borderRadius={"10px"}
        minH={"300px"}
      >
        {children}
      </Grid>
    </>
  );
}
