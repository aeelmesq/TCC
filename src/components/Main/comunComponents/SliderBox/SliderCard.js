import { Box, Heading } from "@chakra-ui/react";

/*
  Componente de Card de Slide

    Descrição: O componente de Card de Slide retorna um card com um
    cabeçalho e um elemento children que será inserido após o cabeçalho. 

    Obs: 
      - O titúlo e a cor do cabeçalho devem ser pasados como props;

      - SlideCard deve ser interado com o método map

    Exemplo:
    <>
      {cat.map((item, index) => {
          return (
            <>
              <SlideCard title={item.title} colo{item.color}>
                ...
              </SlideCard>
            </>
          )
        })}
    </>
*/
export default function SliderCard({ children, title, color }) {
  return (
    <>
      <Box
        bgColor={"white"}
        w={"calc(100% / 3 - 18px)"}
        m={"0 9px"}
        h={"690px"}
        borderRadius={"7px"}
        overflow={"hidden"}
        flex={"none"}
        boxShadow={"0px 0 5px black"}
      >
        <Box bgColor={color} h={"35px"} pt={"5px"}>
          <Heading ml={"7px"}>{title}</Heading>
        </Box>
        {children}
      </Box>
    </>
  );
}
