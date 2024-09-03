import categorias from "../../consts/Cat.js";
import { useRef, useState } from "react";

export default function BlockTypeSlider() {
  const slider = useRef(null);

  const [sliderPosition, setSliderPosition] = useState(0);

  var maxScrollLeft = 4000;

  function Card({ title }) {
    return (
      <>
        <div className="card">
          <header>
            <h3>{title}</h3>
          </header>
        </div>
      </>
    );
  }
  const moveToLeft = (e) => {
    e.preventDefault();
    slider.current.scrollLeft -= slider.current.offsetWidth;
    setSliderPosition(slider.current.scrollLeft - slider.current.offsetWidth);
    console.log(maxScrollLeft);
    console.log(sliderPosition);
  };
  const moveToRight = (e) => {
    e.preventDefault();
    slider.current.scrollLeft += slider.current.offsetWidth;
    maxScrollLeft = slider.current.scrollWidth;
    setSliderPosition(slider.current.scrollLeft + slider.current.offsetWidth);
    console.log(maxScrollLeft);
    console.log(sliderPosition);
  };

  return (
    <>
      <section className="block">
        {sliderPosition > 0 && (
          <button className="btnLeft" onClick={moveToLeft}>
            <i className="bi bi-caret-left-fill"></i>
          </button>
        )}
        <div className="mainCont" ref={slider}>
          {categorias.map((item, index) => {
            return <Card title={item.title} />;
          })}
        </div>
        {sliderPosition < 0 && (
          <button className="btnRight" onClick={moveToRight}>
            <i className="bi bi-caret-right-fill"></i>
          </button>
        )}
      </section>
      <hr />
    </>
  );
}
