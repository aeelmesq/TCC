import BlocoPrincipal from './components/blocoPrincipal';
import BlocoRight from './components/blocoRight';
import SeusInteresses from './components/seusInteresses';

import { noticias } from './data';

function Home() {
  return (
    <section>
      <section>
        <h1>Suas Notícias</h1>
        <div className="principalBlock">
          <div className="block">
            <BlocoPrincipal data={noticias} />
          </div>
          <aside className="asideBlock">
            <BlocoRight />
          </aside>
        </div>
      </section>
      <section>
        <h1>Seus interesses</h1>
        <div className="asideBlock">
          <div className="block">
            <SeusInteresses data={noticias} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
