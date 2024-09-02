import categorias from "../../consts/Cat.js";

export default function BlockTypeRoler() {
  function Card({ title }) {
    return (
      <>
        <div className="card">
          <header>
            <h3>{title}</h3>
          </header>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="block">
        <button className="btnLeft">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <div className="mainCont">
          {categorias.map((item, index) => {
            return <Card title={item.title} />;
          })}
        </div>
        <button className="btnRight">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </section>
      <hr />
    </>
  );
}
