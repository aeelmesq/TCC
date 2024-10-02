import BlocoPrincipal from './blocoPrincipal';
import BlocoRight from './blocoRight';
import API_NEWS from '../../../../../API/mediaStack';

function noticiaPainel() {
  const {noticias} = API_NEWS()

  if (!Array.isArray(noticias) || noticias.length === 0) {
    return []
  }
  const data = noticias.filter((noticia) => noticia.url !== null )

  return data
}

export default function SuasNoticias({ title, style }) {
  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="principalBlock">
        <div className="block">
          <BlocoPrincipal data={noticiaPainel()} />
        </div>
        <aside className="asideBlock">
          <BlocoRight />
        </aside>
      </div>
    </div>
  );
}
