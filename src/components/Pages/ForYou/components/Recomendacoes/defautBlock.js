import BlocoPrincipal from "../../../Home/components/suasNoticias/blocoNoticias";
import BlocoRight from "../../../Home/components/suasNoticias/blocoRight";
import { noticias } from "../../../Home/data";

export default function Recomendacoes() {
  return (
    <>
      <div>
        <h1>Recomendações</h1>
        <hr />
        <section>
          <div>
            <BlocoPrincipal data={noticias} />
          </div>
        </section>
      </div>
    </>
  );
}
