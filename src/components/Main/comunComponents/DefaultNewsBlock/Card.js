import { Box } from "@chakra-ui/react";

/*
    Componete Card

        Descrição: Retor um card com pré-definições de estilos

        Obs: 
            - O Card deve encapsular uma notícia;

            - O card deve estar encapsulado por um elemento de Grid.

        Exemplo:
        <>
            <Card column={x} row={y}>
                ...
            </Card>
        </>
*/

export default function Card({ children, column, row }) {
  return (
    <Box
      bgColor={"white"}
      borderRadius={"10px"}
      boxShadow={"1px 1px 3px rgb(0, 0, 0)"}
      gridColumn={column}
      p={"10px 0"}
      gridRow={row}
    >
      {children}
    </Box>
  );
}
