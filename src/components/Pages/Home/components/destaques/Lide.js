export default function Lide({ title, img, fonte, link }) {
  return (
    <>
      <div className="slide">
        <img src={img} alt={`Imagem ${title}`} />
        <div className="imgCover">
          <small>{fonte}</small>
          <a href={`https://${link}.com`}>{title}</a>
        </div>
      </div>
    </>
  );
}
