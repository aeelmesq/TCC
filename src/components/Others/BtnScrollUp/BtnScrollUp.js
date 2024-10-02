import { useState } from "react";

export default function BtnScrollUp() {
  const [screenScrollTop, setScreenScrollTop] = useState(0);

  window.addEventListener("scroll", () => {
    setScreenScrollTop(window.scrollY);
  });

  return (
    <>
      <button
        id="BtnScrollUp"
        className={screenScrollTop > 150 ? "none" : "hidden"}
        onClick={(e) => window.scrollTo(0, 0)}
      >
        <i className="bi bi-caret-up-fill"></i>
      </button>
    </>
  );
}
