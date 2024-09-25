import img1 from "../../../../../img/foto-noticia.jpg";
import img2 from "../../../../../img/foto-Penapolis.jpg";
import Lide from "./Lide";
import { useEffect, useState, useRef } from "react";

const Data = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img1,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img2,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img1,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img2,
    fonte: "G1",
    Link: "g1.globo",
  },
];

export default function Destaques({ title, style }) {
  function setNextItem() {
    let slideItems = document.querySelectorAll("div.slide");
    setScrollMult((prevScrollMult) => {
      if (prevScrollMult === slideItems.length - 1) {
        return 0;
      } else {
        return prevScrollMult + 1;
      }
    });
  }

  const [scrollMult, setScrollMult] = useState(0);
  const slider = useRef(null);

  useEffect(() => {
    let sliderBtns = document.getElementsByName("btnRadio");

    sliderBtns[scrollMult].checked = true;

    slider.current.scrollLeft = slider.current.offsetWidth * scrollMult;
  }, [scrollMult]);

  useEffect(() => {
    let intervalid = setInterval(setNextItem, 7000);

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
      <div className="sliderBtns">
        {Data.map((item, index) => {
          return (
            <>
              <input
                type="radio"
                name="btnRadio"
                onClick={(e) => {
                  e.preventDefault();
                  setScrollMult(index);
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
