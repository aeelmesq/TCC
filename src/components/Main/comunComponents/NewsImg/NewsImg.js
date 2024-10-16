import { Img } from "@chakra-ui/react";

export default function NewsImg({ src, alt }) {
  return (
    <Img
      src={src}
      alt={`Notícia: ${alt}`}
      borderRadius={"5px"}
      objectFit={"cover"}
      w={"460px"}
    />
  );
}
