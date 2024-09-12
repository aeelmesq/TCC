import SeusAssuntos from './components/seusAssuntos/defaultBlock';
import SeusInteresses from './components/seusInteresses/defaultBlock';
import SuasNoticias from './components/suasNoticias/defaultBlock';

function Home() {
  return (
    <section>
      <SuasNoticias title="Suas Notícias" style="sectionBlock" />
      <SeusInteresses title="Seus Interesses" style="sectionBlock" />
      <SeusAssuntos title="Seus Assuntos" style="sectionBlock" />
    </section>
  );
}

export default Home;
