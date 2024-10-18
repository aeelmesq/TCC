import { Button } from "@chakra-ui/react";
import useMenuMore from "../../../../hooks/useMenuMore";

/*
  Componente ButtonMore:

    Descrição: Retorna um botão com pré-definições de estilo.

    Obs: 
      - O componente ButtonMore espera estar envolvido em um 
      MenuMoreProvider;
    
      - Este componente não possui nenhuma prop.

    Exemplo:
    <MenuMoreProvider>
      <ButtonMore />
    </MenuMoreProvider>
*/

export default function ButtonMore() {
  const { handleMenuState } = useMenuMore();

  return (
    <Button
      h={"30px"}
      w={"30px"}
      transition={"0.4s"}
      cursor={"pointer"}
      bgColor={"transparent"}
      outline={"none"}
      border={"none"}
      borderRadius={"100%"}
      fontSize={"13pt"}
      _hover={{ bgColor: "#E6E6E6" }}
      onClick={(e) => handleMenuState(e)}
    >
      <i class="bi bi-three-dots"></i>
    </Button>
  );
}
