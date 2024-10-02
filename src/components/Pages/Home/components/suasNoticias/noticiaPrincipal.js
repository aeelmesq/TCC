
export default function NoticiaPrincipal({ size, data }) {
  // const {noticias, carregando, erro} = API_NEWS();

  // if (carregando) return <p>Carregando...</p>;
  // if (erro) return <p>Erro ao carregar notícias: {erro}</p>;

  // // Verifique se existem notícias suficientes
  // if (!noticias || noticias.length < 2) {
  //   return <p>Não há notícias disponíveis.</p>;
  // }

  return (
    <>
      {data.map((item, index) => (
        <div className="pNoticia" key={index}>
          <a href={item.url}>
            <img src={item.image} alt={item.title} width={size} height={size} />
            <span>{item.source}</span>
            <h2>{item.title}</h2>
            <small>
              {new Date(item.published_at).toLocaleDateString()} - {item.author}
            </small>
          </a>
        </div>
      ))}
    </>
  )
}
