import { noticias } from "../../../Home/data";
import TableNews from "./TableNews";

export default function Recomendacoes() {
  return (
    <>
      <div>
        <h1>Recomendações</h1>
        <hr />
        <section className="block grid-2">
          <TableNews data={noticias} />
        </section>
      </div>
    </>
  );
}
