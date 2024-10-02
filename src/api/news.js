import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5d53d6958bfb4724a28192ffa2d82b0d', {
          headers: {
            'Authorization': 'Bearer 5d53d6958bfb4724a28192ffa2d82b0d'
          }
        });
        setNoticias(response.data.articles);
      } catch (err) {
        setErro('Erro ao carregar notícias.');
      } finally {
        setCarregando(false);
      }
    };

    fetchNoticias();
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div>
      <h1>Últimas Notícias</h1>
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index}>
            <img src={noticia.urlToImage} alt="" />
            <h2>{noticia.title}</h2>
            <p>{noticia.description}</p>
            <a href={noticia.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;
