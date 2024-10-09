import SeusAssuntos from "./components/seusAssuntos/defaultBlock";
import SeusInteresses from "./components/seusInteresses/defaultBlock";
import SuasNoticias from "./components/suasNoticias/defaultBlock";
import Block1 from "./components/Block1/defaultBlock";
import Block2 from "./components/Block2/DefaultBlock";
import GrayCont from "./components/Graycont";

function Home() {
  return (
    <section>
      <GrayCont>
        <Block1 />
        <Block2 />
      </GrayCont>
      <SuasNoticias title={"Suas Notícias"} style={"sectionBlock"} />
      <SeusInteresses title={"Seus Interesses"} style={"sectionBlock"} />
      <SeusAssuntos title={"Seus Assuntos"} style={"sectionBlock"} />
    </section>
  );
}

export default Home;
