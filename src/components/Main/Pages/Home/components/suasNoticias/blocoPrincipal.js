import NoticiasSecundarias from "./noticiasSecundarias";
import NoticiaPrincipal from "./noticiaPrincipal";
import "../../../../../../StyleComponents/Home.css";

export default function BlocoPrincipal({ size = 300, data }) {
  const filteredData = data.filter((item) => item.image !== null);

  const B1 = data.slice(1, 4);
  const B2 = data.slice(5, 8);
  const B3 = data.slice(9, 12);

  return (
    <>
      {data.length > 0 && (
        <>
          <div className="principalCard">
            <NoticiaPrincipal size={size} data={filteredData.slice(0, 1)} />
            <NoticiasSecundarias data={B1} />
          </div>
          <div className="principalCard">
            <NoticiaPrincipal size={size} data={filteredData.slice(1, 2)} />
            <NoticiasSecundarias data={B2} />
          </div>
        </>
      )}
    </>
  );
}
