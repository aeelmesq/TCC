import { Button } from "@chakra-ui/react";

/*
  Componente OptionItem:

    Descrição: Retorna um botão com pré-definições de estilo.

    Obs: 
      - É recomendado que este componente esteja encapsulado por um 
      componente SelectOptions ou por um componente OptionBox.

    Exemplo:
    <>
      <SelectOptions ou OptionBox>
        <OptionItem>
          ...
        </OptionItem>
      </SelectOptions ou OptionBox>
    </>
*/

export default function OptionItem({ children }) {
  return (
    <Button
      width={"100%"}
      h={"25px"}
      cursor={"pointer"}
      border={"none"}
      pl={"5px"}
      justifyContent={"left"}
      borderBottom={"1px solid gray"}
      _hover={{ bgColor: "rgb(200, 200, 200)" }}
    >
      {children}
    </Button>
  );
}
