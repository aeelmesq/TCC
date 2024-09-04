import { noticias } from '../data.js';

export default function NoticiasSecundarias() {
  function formatarSite(site) {
    let siteAcentuado = site.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let siteFormatado =
      'https://' + siteAcentuado.toLowerCase().replace(/\s+/g, '') + '.com/'; // Definir o código do site no qual for postado
    return siteFormatado;
  }

  return (
    <div className="right">
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
