export default function LeftBlock({
  news = { title: String(), img: String(), site: String() },
}) {
  return (
    <div className="leftBlock">
      <img
        src={news.img}
        alt={`Imagem ${news.title}`}
        width="230px"
        height="230px"
      />
      <span>{news.site}</span>
      <h2>{news.title}</h2>
    </div>
  );
}
