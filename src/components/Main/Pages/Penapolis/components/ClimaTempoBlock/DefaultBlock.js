import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import { Box } from "@chakra-ui/react";

export default function ClimaTempoBlock() {
  return (
    <BlockBox>
      <Box
        h={"700px"}
        w={"100%"}
        bgColor={"black"}
        borderRadius={"10px"}
        boxShadow={"1px 0 30px rgba(0, 0, 0, 0.8)"}
      ></Box>
    </BlockBox>
  );
}
