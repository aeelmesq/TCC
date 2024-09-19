import img1 from "../../../../../img/foto-noticia.jpg";
import img2 from "../../../../../img/foto-Penapolis.jpg";
import Lide from "./Lide";
import { useEffect, useState, useRef } from "react";

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
  function setNextItem() {
    let slideItems = document.querySelectorAll("div.slide");
    setScrollMult((prevScrollMult) => {
      console.log("ok");
      if (prevScrollMult == slideItems.length) {
        return 1;
      } else {
        return prevScrollMult + 1;
      }
    });
  }

  const [scrollMult, setScrollMult] = useState(1);
  const slider = useRef(null);

  useEffect(() => {
    slider.current.scrollLeft =
      slider.current.offsetWidth * (scrollMult - 1) + 5;
  }, [scrollMult]);

  useEffect(() => {
    const intervalid = setInterval(setNextItem, 5000);

    return () => clearInterval(intervalid);
  }, []);

  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="slides" ref={slider}>
        {Data.map((obj, index) => {
          return (
            <Lide
              title={obj.title}
              img={obj.img}
              fonte={obj.fonte}
              link={obj.Link}
            />
          );
        })}
      </div>
    </div>
  );
}
