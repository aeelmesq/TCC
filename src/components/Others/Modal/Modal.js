import { useRef } from "react";

export default function Modal({ title, msg }) {
  const modalSection = useRef(null);

  function exitModal() {
    modalSection.current.classList.add("hidden");
  }

  return (
    <>
      <section className="modalSection" ref={modalSection}>
        <div className="modalBlock">
          <div className="modalHead">
            <h2>{title}</h2>
            <button onClick={exitModal}>X</button>
          </div>
          <main className="modalBody">
            <p>{msg}</p>
          </main>
        </div>
      </section>
    </>
  );
}
