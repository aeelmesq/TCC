import { formatarSite } from "../../../../utilits";

export default function FullBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <div className="fullBlock">
      <a href={formatarSite(news.site)}>
        <div>
          <span>{news.site}</span>
          <h2>{news.title}</h2>
          <small>{news.autor}</small>
        </div>
        <img
          src={news.img}
          alt={`Imagen ${news.title}`}
          width="355px"
          height="250px"
        />
      </a>
    </div>
  );
}
