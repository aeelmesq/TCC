import { formatarSite } from '../../../../utilits';

export default function NoticiasSecundarias({ data }) {
  const noticias = Array.isArray(data) ? [...data].slice(1, 4) : [];

  return (
    <div className="sNoticias">
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index}>
            <div>
              <a href={formatarSite(noticia.site)}>
                <span>{noticia.site}</span>
                <h2>{noticia.title}</h2>
                <small>{noticia.horarioPostagem}</small>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
