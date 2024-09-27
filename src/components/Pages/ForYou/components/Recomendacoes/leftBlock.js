import { formatarSite } from "../../../../utilits";

export default function LeftBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <div className="leftBlock">
      <img
        src={news.img}
        alt={`Imagem ${news.title}`}
        width="355px"
        height="250px"
      />
      <div>
        <span>{news.site}</span>
        <h2>
          <a href={formatarSite(news.site)}>{news.title}</a>
        </h2>
        <small>{news.autor}</small>
      </div>
    </div>
  );
}
