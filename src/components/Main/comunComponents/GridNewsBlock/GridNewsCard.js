import { Grid } from "@chakra-ui/react";

/*
  Componente GridNewsCard: 

    Descrição: Retorna um card que deve estar inserido
    dentro de um GridNewsBlock.

    Obs: 
      - É recomentado que este componente seja interado
      com o método map;

      - É recomentado que este componente esteja inserido
      detro de um componente do tipo GridNewsBlock.

    Exemplo:
    <>
      <GridNewsBlock numCols={x}>
        {items.map((item) => {
          return (
            <GridNewsCard>
              ...
            </GridNewsCard>
          )  
        })}
      </GridNewsBlock>
    </>
    
*/

export default function GridNewsCard({ children }) {
  return (
    <Grid bgColor={"white"} alignItems={"baseline"}>
      {children}
    </Grid>
  );
}
