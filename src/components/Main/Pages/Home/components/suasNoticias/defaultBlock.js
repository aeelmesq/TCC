import BlocoPrincipal from "./blocoPrincipal";
import BlocoRight from "./blocoRight";
import useAPI from "../../../../../../hooks/useAPI";

export default function SuasNoticias({ title, style }) {
  const { Data } = useAPI();

  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="principalBlock">
        <div className="block">
          <BlocoPrincipal data={Data?.noticias} />
        </div>
        <aside className="asideBlock">
          <BlocoRight />
        </aside>
      </div>
    </div>
  );
}
