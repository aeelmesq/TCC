import SeusAssuntos from "./components/seusAssuntos/defaultBlock";
import SeusInteresses from "./components/seusInteresses/defaultBlock";
import SuasNoticias from "./components/suasNoticias/defaultBlock";
import Destaques from "../../../Pages/Home/components/destaques/DefaultBlock";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Link to="/forYou">f</Link>
      <Destaques title={"Destaques"} style={"sectionBlock"} />
      <SuasNoticias title={"Suas Notícias"} style={"sectionBlock"} />
      <SeusInteresses title={"Seus Interesses"} style={"sectionBlock"} />
      <SeusAssuntos title={"Seus Assuntos"} style={"sectionBlock"} />
    </section>
  );
}

export default Home;
