import { Divider, Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import DefaultNewsBlock from "../../../../comunComponents/DefaultNewsBlock/DefaultNewsBlock";

/*
    Componente Block1:

        Descrição: Bloco de recomendações da pagina Para Você.
*/

export default function Block1() {
  return (
    <>
      <BlockBox>
        <Heading>Recomentações {">"}</Heading>
        <Divider borderTop={"1px solid rgb(192, 192, 192)"} m={"20px 0"} />
        <DefaultNewsBlock qtdNews={4} />
      </BlockBox>
    </>
  );
}
