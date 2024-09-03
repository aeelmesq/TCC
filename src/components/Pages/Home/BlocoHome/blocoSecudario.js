export const noticias = [
  {
    title: 'primeira noticia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ex elementum, accumsan tortor sed, suscipit mi. Pellentesque tincidunt velit vel ante varius efficitur.',
    horarioPostagem: '',
    site: 'G1',
    autor: 'Pereira da Silva',
    img: 'foto-noticia',
  },
  {
    title: 'segunda noticia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ex elementum, accumsan tortor sed, suscipit mi. Pellentesque tincidunt velit vel ante varius efficitur.',
    horarioPostagem: '16 : 10',
    site: 'Estadão',
    autor: 'Parceiro do Grau',
  },
  {
    title: 'terceira noticia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ex elementum, accumsan tortor sed, suscipit mi. Pellentesque tincidunt velit vel ante varius efficitur.',
    horarioPostagem: '',
    site: 'Revista Oeste',
    autor: 'Josefino dos Santos',
  },
];

export default function BlocoSecundario() {
  function formatarSite(site) {
    let siteAcentuado = site.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let siteFormatado =
      'https://' + siteAcentuado.toLowerCase().replace(/\s+/g, '') + '.com/'; // Definir o código do site no qual for postado
    return siteFormatado;
  }

  return (
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
  );
}
