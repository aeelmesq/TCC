import { Box } from "@chakra-ui/react";
import MenuMoreProvider from "../../../../Providers/menuMoreProvider";
import SelectOptions from "./SelectOptions";
import ButtonMore from "./ButtonMore";

export default function OptionBox({ children }) {
  return (
    <MenuMoreProvider>
      <Box>
        <SelectOptions>{children}</SelectOptions>
        <Box ml={"100px"}>
          <ButtonMore />
        </Box>
      </Box>
    </MenuMoreProvider>
  );
}
