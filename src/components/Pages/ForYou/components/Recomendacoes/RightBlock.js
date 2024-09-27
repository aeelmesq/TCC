import { formatarSite } from "../../../../utilits";

export default function RightBlock({
  news = {
    title: String(),
    img: String(),
    site: String(),
    horarioPostagem: String(),
    autor: String(),
  },
}) {
  return (
    <div className="rightBlock">
      <a href={formatarSite(news.site)}>
        <span>{news.site}</span>
        <h2>{news.title}</h2>
        <small>{news.autor}</small>
      </a>
    </div>
  );
}
