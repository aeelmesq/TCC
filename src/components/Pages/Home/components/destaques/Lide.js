import { formatarSite } from "../../../../utilits";

export default function Lide({ title, img, fonte, link }) {
  return (
    <>
      <div className="slide">
        <img src={img} alt={`Imagem ${title}`} />
        <div className="imgCover">
          <small>{fonte}</small>
          <a href={formatarSite(link)}>{title}</a>
        </div>
      </div>
    </>
  );
}
