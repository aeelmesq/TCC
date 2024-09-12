import SeusAssuntos from './components/seusAssuntos/defaultBlock';
import SeusInteresses from './components/seusInteresses/defaultBlock';
import SuasNoticias from './components/suasNoticias/defaultBlock';

function Home() {
  return (
    <section>
      <SuasNoticias title="Suas Notícias" />
      <SeusInteresses title="Seus Interesses" />
      <SeusAssuntos title="Seus Assuntos" />
    </section>
  );
}

export default Home;
