import { noticias } from '../data';
import image from '../../../../img/foto-noticia.jpg';

export default function NoticiaPrincipal({ size }) {
  return (
    <div className="left">
      <a href="">
        <img src={image} alt={noticias[0].title} width={size} height={size} />
        <span>{noticias[0].site}</span>
        <h2>{noticias[0].title}</h2>
        <small>
          {noticias[0].horarioPostagem} - {noticias[0].autor}
          {/* Depois colocar os horários da postegem da noticia */}
        </small>
      </a>
    </div>
  );
}
