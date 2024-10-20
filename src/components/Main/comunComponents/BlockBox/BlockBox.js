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
        w={"calc(100% - 60px)"}
        m={"20px auto"}
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
