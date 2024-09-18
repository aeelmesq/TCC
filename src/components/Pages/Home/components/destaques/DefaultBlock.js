import img1 from "../../../../../img/foto-noticia.jpg";
import img2 from "../../../../../img/foto-Penapolis.jpg";
import Lide from "./Lide";
import { useState } from "react";

const Data = [
  {
    title: "teste",
    img: img1,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "teste",
    img: img2,
    fonte: "G1",
    Link: "g1.globo",
  },
];

export default function Destaques({ title, style }) {
  const [imgI, setImgI] = useState(0);

  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="flexBlock">
        {Data.map((obj, index) => {
          return (
            <Lide
              title={obj.title}
              img={obj.img}
              fonte={obj.fonte}
              link={obj.Link}
              style={index === imgI && "showImg"}
            />
          );
        })}
      </div>
    </div>
  );
}
