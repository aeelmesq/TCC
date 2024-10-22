import { Divider, Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import DefaultNewsBlock from "../../../../comunComponents/DefaultNewsBlock/DefaultNewsBlock";

export default function Block4() {
  return (
    <BlockBox>
      <Heading>RECOMENDAÇÕES {">"}</Heading>
      <Divider borderTop={"1px solid rgb(192, 192, 192)"} m={"20px 0"} />
      <DefaultNewsBlock qtdNews={4} />
    </BlockBox>
  );
}
