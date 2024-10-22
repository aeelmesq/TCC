import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import DefaultNewsBlock from "../../../../comunComponents/DefaultNewsBlock/DefaultNewsBlock";
import { getRandomInt } from "../../../../../utilits";
import { Divider } from "@chakra-ui/react";

const qtdNews = getRandomInt(4, 9);

export default function Block1() {
  return (
    <BlockBox>
      <Divider borderTop={"1px solid rgb(192, 192, 192)"} m={"20px 0"} />
      <DefaultNewsBlock qtdNews={qtdNews} />
    </BlockBox>
  );
}
