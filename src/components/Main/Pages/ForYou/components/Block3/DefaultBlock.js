import { Box, Heading } from "@chakra-ui/react";
import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import GridCard from "./GridCard";

export default function Block3() {
  return (
    <>
      <BlockBox>
        <Heading>Suas notícias</Heading>
        <hr
          style={{
            height: "0px",
            width: "100%",
            borderTop: "1px solid #484848",
          }}
        />
        <GridCard></GridCard>
      </BlockBox>
    </>
  );
}
