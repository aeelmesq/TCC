import SeusAssuntos from "./components/seusAssuntos/defaultBlock";
import SeusInteresses from "./components/seusInteresses/defaultBlock";
import SuasNoticias from "./components/suasNoticias/defaultBlock";
import Block1 from "./components/Block1/defaultBlock";
import Block2 from "./components/Block2/DefaultBlock";
import GrayCont from "./components/Graycont";
import Block3 from "./components/Block3/DefaultBlock";
import Block4 from "./components/Block4/DefaultBlock";
import SliderBlock from "./components/Block5/DefaultBlock";

function Home() {
  return (
    <section>
      <GrayCont>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <SliderBlock />
      </GrayCont>
    </section>
  );
}

export default Home;
