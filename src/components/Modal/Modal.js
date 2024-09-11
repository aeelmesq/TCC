import { useState } from "react";

export default function Modal({ title, msg, innerBtn }) {
  const [modalState, setModalState] = useState(true);

  return (
    <>
      {modalState && (
        <section className="modalSection">
          <div className="modalBlock">
            <div>
              <h2>{title}</h2>
            </div>
            <main className="modalBody">
              <p>{msg}</p>
            </main>
            <div className="modalEnd">
              <button onClick={setModalState(false)}>{innerBtn}</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
