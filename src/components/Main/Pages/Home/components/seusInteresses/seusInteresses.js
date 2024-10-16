import { formatarSite } from '../../../../../utilits';

export default function BlocoInteresses({ data }) {
  const noticias = Array.isArray(data) ? [...data] : [];

  return (
    <div className="sNoticias" id="blockInteresse">
      <ul id="columnInteresse">
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
