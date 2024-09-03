import { getImage } from '../../../utilits';
import BlocoSecundario from './blocoSecudario';
import { noticias } from './blocoSecudario';

export default function BlocoPrincipal({ size = 400 }, title, autor, site) {
  const horarioPostagem = new Date();
  const hora = horarioPostagem.getHours();
  const minuto = horarioPostagem.getMinutes();

  let caminho = '../../../../';
  return (
    <>
      <section className="block">
        <div className="left">
          <a href="">
            <div>
              <img
                src={caminho + getImage('foto-noticia')}
                alt={noticias[0].title}
                width={size}
                height={size}
              />
              <span>{noticias[0].site}</span>
              <h2>{noticias[0].title}</h2>
              <small>
                {hora + ':' + minuto} - {noticias[0].autor}
                {/* Depois colocar os horários da postegem da noticia */}
              </small>
            </div>
          </a>
        </div>
        <div className="right">
          <BlocoSecundario />
        </div>
      </section>
      <hr />
    </>
  );
}
