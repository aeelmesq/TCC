import { Flex, Img } from "@chakra-ui/react";

export default function ImgBlock({ src, alt }) {
  return (
    <>
      <Flex
        h={"700px"}
        overflow={"hidden"}
        alignItems={"center"}
        bgColor={"black"}
      >
        <Img src={src} alt={alt} w={"100%"} objectFit={"cover"} h={"700px"} />
      </Flex>
    </>
  );
}
