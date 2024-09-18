import categorias from "../../consts/Cat.js";
import { useRef, useState } from "react";

export default function BlockTypeSlider({ style }) {
  const slider = useRef(null);

  const [sliderPosition, setSliderPosition] = useState(0);

  const [maxScrollLeft, setMaxScrollLeft] = useState(4000);

  function Card({ title, color }) {
    return (
      <>
        <div className="card">
          <header style={{ backgroundColor: color }}>
            <h3>{title}</h3>
          </header>
        </div>
      </>
    );
  }
  const moveToLeft = (e) => {
    e.preventDefault();
    slider.current.scrollLeft -= slider.current.offsetWidth / 3;
    setSliderPosition(
      slider.current.scrollLeft - slider.current.offsetWidth / 3
    );
  };
  const moveToRight = (e) => {
    e.preventDefault();
    setMaxScrollLeft(slider.current.scrollWidth - slider.current.clientWidth);
    slider.current.scrollLeft += slider.current.offsetWidth / 3;
    setSliderPosition(
      slider.current.scrollLeft + slider.current.offsetWidth / 3
    );
  };

  return (
    <>
      <section
        className="block"
        style={
          style == "none"
            ? { backgroundColor: "transparent", boxShadow: "none", margin: "0" }
            : ""
        }
      >
        <button
          className={sliderPosition > 0 ? "btnLeft" : "btnLeft btnOf"}
          onClick={moveToLeft}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <div className="mainCont" ref={slider}>
          {categorias.map((item, index) => {
            return <Card title={item.title} color={item.color} />;
          })}
        </div>
        <button
          className={
            sliderPosition <= maxScrollLeft ? "btnRight" : "btnRight btnOf"
          }
          onClick={moveToRight}
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </section>
      <hr />
    </>
  );
}
