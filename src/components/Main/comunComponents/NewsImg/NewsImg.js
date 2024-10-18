import { Img } from "@chakra-ui/react";

export default function NewsImg({ src, alt, w = "460px" }) {
  return (
    <Img
      src={src}
      alt={`Notícia: ${alt}`}
      borderRadius={"5px"}
      objectFit={"cover"}
      w={w}
    />
  );
}
