import { Flex, Img } from "@chakra-ui/react";

export default function ImgBlock({ src, alt }) {
  return (
    <>
      <Flex
        h={"700px"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"black"}
        overflowY={"hidden"}
      >
        <Img src={src} alt={alt} w={"100%"} objectFit={"cover"} />
      </Flex>
    </>
  );
}
