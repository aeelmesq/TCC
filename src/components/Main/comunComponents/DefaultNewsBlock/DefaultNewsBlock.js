import { Divider, Grid } from "@chakra-ui/react";
import { noticias } from "../../Pages/Home/data";
import LeftBlock from "./LeftBlock";
import FullBlock from "./FullBlock";
import RightBlock from "./RightBlock";

/*
    Componente DefaultNewsBlock

        Descrição: Retorna uma quantidade x de notícias baseado na props qtdNews e com um 
        layout pré-definido

        Obs: 
            - A quantidade de notícias deve ser pasada como prop;

            - O layout que será retonado depente da qtd de notícias.

        Exemplo:
        <>
            <DefaultNewsBlock qtdNews={x} />
        </>
*/

export default function DefaultNewsBlock({ qtdNews }) {
  const allNews = noticias.slice(0, qtdNews);
  return (
    <>
      <Grid
        gridTemplateColumns={"500px 2fr"}
        columnGap={"13px"}
        rowGap={"15px"}
      >
        {allNews.map((item, index) => {
          if (index % 3 === 0) {
            if (index === allNews.length - 1) return <FullBlock news={item} />;

            return <LeftBlock news={item} />;
          }
          return (
            <>
              <RightBlock news={item} />
              {(index + 1) % 3 === 0 && (
                <Divider
                  gridColumn={"span 2"}
                  borderTop={"1px solid rgb(192, 192, 192)"}
                />
              )}
            </>
          );
        })}
      </Grid>
    </>
  );
}
