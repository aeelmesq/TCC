import image from '../../../../../img/foto-noticia.jpg';
import API_NEWS from '../../../../../API/mediaStack';

export default function NoticiaPrincipal({ size, data }) {
  const {noticias, carregando, erro} = API_NEWS();

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro ao carregar notícias: {erro}</p>;

  // Verifique se existem notícias suficientes
  if (!noticias || noticias.length < 2) {
    return <p>Não há notícias disponíveis.</p>;
  }

  return (
    <div className="pNoticia">
      <a href={noticias[0].url}>
        <img src={noticias[0].image} alt={noticias[0].title} width={size} height={size} />
        <span>{noticias[0].source}</span>
        <h2>{noticias[0].title}</h2>
        <small>
          {new Date(noticias[0].published_at).toLocaleDateString()} - {noticias[0].author}
          {/* Depois colocar os horários da postegem da noticia */}
        </small>
      </a>
    </div>
  );
}
