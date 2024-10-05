import { useEffect, useState } from "react";
import axios from "axios";

const API_NEWS = () => {
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  //822e1276902c165085dad659017b0a79
  //3b215986029f14e5ce313f307297581a

  const API_KEY = "gkhgk89ue98s7yds7ye";
  const API_URL = `https://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=br&sort=popularity`;

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(API_URL);
        setNoticias(response.data.data);
      } catch (err) {
        throw new Error(`Code error ${err["message"]}`);
      } finally {
        setCarregando(false);
      }
    };

    fetchNoticias();
  }, [API_URL]);

  return { noticias, carregando, erro };
  // return (
  //   <div>
  //     <h1>Últimas Notícias</h1>
  //     <ul>
  //       {noticias.map((noticia, index) => (
  //         <li key={index}>
  //           <h2>{noticia.title}</h2>
  //           {noticia.image && (
  //             <img src={noticia.image} alt={noticia.title} />
  //           )}
  //           <p>{noticia.description}</p>
  //           <b>{noticia.category}</b>
  //           <a href={noticia.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
  //           <hr />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default API_NEWS;
