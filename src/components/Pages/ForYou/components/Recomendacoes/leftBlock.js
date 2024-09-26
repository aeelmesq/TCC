import { formatarSite } from "../../../../utilits";

export default function LeftBlock({
  news = { title: String(), img: String(), site: String() },
}) {
  return (
    <div className="leftBlock">
      <img
        src={news.img}
        alt={`Imagem ${news.title}`}
        width="250px"
        height="230px"
      />
      <div>
        <span>{news.site}</span>
        <h2>
          <a href={formatarSite(news.site)}>{news.title}</a>
        </h2>
      </div>
    </div>
  );
}
