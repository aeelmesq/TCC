export default function Lide({ title, img, fonte, link, style }) {
  return (
    <>
      <img src={img} alt="imagem" className={style} />
      <a href={`https://${link}.com`}>{fonte}</a>
      <h1>{title}</h1>
    </>
  );
}
