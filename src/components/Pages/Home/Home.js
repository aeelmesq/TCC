import BlocoPrincipal from './components/blocoPrincipal';
import BlocoRight from './components/blocoRight';

function Home() {
  return (
    <section className="principalBlock mainContent">
      <div className="block">
        <BlocoPrincipal />
      </div>
      <aside className="asideBlock">
        <BlocoRight />
      </aside>
    </section>
  );
}

export default Home;
