import { noticias } from "../../../../Main/Pages/Home/data";
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
          <TableNews data={noticias} qtdNews={4} />
        </section>
      </div>
    </>
  );
}
