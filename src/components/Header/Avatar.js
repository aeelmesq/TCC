import { Img } from "@chakra-ui/react";
import { memo } from "react";
import useUser from "../../hooks/useUser";

function Avatar({ size, margin = "0px" }) {
  const { user } = useUser();

  return (
    <>
      <Img
        w={size}
        h={size}
        m={margin}
        objectFit={"cover"}
        borderRadius={"100%"}
        src={user.avatar}
        border={"1px solid black"}
        alt="User Avatar"
      />
    </>
  );
}

export default memo(Avatar);
