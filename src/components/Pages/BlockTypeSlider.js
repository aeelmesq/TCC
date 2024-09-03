import categorias from "../../consts/Cat.js";
import { useRef, useState } from "react";

export default function BlockTypeSlider() {
  const slider = useRef(null);

  const [sliderPosition, setSliderPosition] = useState(0);

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
  };
  const moveToRight = (e) => {
    e.preventDefault();
    slider.current.scrollLeft += slider.current.offsetWidth;
    setSliderPosition(slider.current.scrollLeft + slider.current.offsetWidth);
  };

  return (
    <>
      <section className="block">
        {sliderPosition > 0 && (
          <button className="btnLeft" onClick={moveToLeft}>
            <i class="bi bi-caret-left-fill"></i>
          </button>
        )}
        <div className="mainCont" ref={slider}>
          {categorias.map((item, index) => {
            return <Card title={item.title} />;
          })}
        </div>
        <button className="btnRight" onClick={moveToRight}>
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </section>
      <hr />
    </>
  );
}
