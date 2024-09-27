import { limitarTexto } from "../../../../utilits"

export default function NoticiaPrincipal({ size, data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className="pNoticia" key={index}>
          <a href={item.url}>
            <img src={item.image} alt={item.title} width={size} height={size} />
            <span>{item.source}</span>
            <h2>{limitarTexto(item.title)}</h2>
            <small>
              {new Date(item.published_at).toLocaleDateString()} - {item.author}
            </small>
          </a>
        </div>
      ))}
    </>
  )
}
