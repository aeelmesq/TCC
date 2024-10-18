import { Box } from "@chakra-ui/react";
import useMenuMore from "../../../../hooks/useMenuMore";

/*
  Componente SelectOptions:

    Descrição: Retorna um coponente de renderização condizional com
    pré-definições de estilo.

    Obs: 
      - Este componente espera estar encapsulado por um MenuMoreProvider.

    Exemplo: 
    <MenuMoreProvider>
      <SelectOptions>
        ...
      </SelectOptions>
    </MenuMoreProvider>
*/

export default function SelectOptions({ children }) {
  const { menuState } = useMenuMore();

  return (
    <>
      <Box
        bgColor={"#D9D9D9"}
        h={"100px"}
        w={"100px"}
        boxShadow={"1px 0 4px rgb(90, 90, 90)"}
        zIndex={"2"}
        transition={"0.1s"}
        opacity={menuState ? "1" : "0"}
        visibility={menuState ? "visible" : "hidden"}
        borderRadius={"3px"}
        position={"absolute"}
        overflowY={"scroll"}
        overflowX={"hidden"}
      >
        {children}
      </Box>
    </>
  );
}
