import { limitarTexto } from "../../../../utilits";

export default function NoticiasSecundarias({ data }) {
  return (
    <div className="sNoticias">
      <ul>
        {data.map((noticia, index) => (
          <li key={index}>
            <div>
              <a href={noticia.url}>
                <span>{noticia.source}</span>
                <h2>{limitarTexto(noticia.title)}</h2>
                <small>{new Date(noticia.published_at).toLocaleDateString()}</small>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
