import { noticias } from "../../../Home/data";
import TableNews from "./TableNews";

export default function Recomendacoes() {
  return (
    <>
      <div>
        <section className="block grid-2">
          <header>
            <h1>Recomendações {">"}</h1>
            <hr />
          </header>
          <TableNews data={noticias} qdtNews={4} />
        </section>
      </div>
    </>
  );
}
