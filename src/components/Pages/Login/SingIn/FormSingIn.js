import { useState, useRef } from "react";

export default function FormSingIn() {
  const [inputType, setInputType] = useState("password");
  const btnEye = useRef(null);

  function clickEye(e) {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
      btnEye.current.classList.remove("bi-eye-slash-fill");
      btnEye.current.classList.add("bi-eye-fill");
      return;
    }
    setInputType("password");
    btnEye.current.classList.remove("bi-eye-fill");
    btnEye.current.classList.add("bi-eye-slash-fill");
  }

  return (
    <form>
      <article className="FormDiv">
        <label htmlFor="Email">Email:</label>
        <div className="inputGroup">
          <input type="email" name="Email" id="Email" required autoFocus />
          <i className="bi bi-envelope-at"></i>
        </div>
      </article>
      <article className="FormDiv">
        <label htmlFor="pass">Senha:</label>
        <div className="inputGroup">
          <input type={inputType} name="pass" id="pass" required />
          <i
            ref={btnEye}
            className="bi bi-eye-slash-fill"
            onClick={(e) => clickEye(e)}
          ></i>
        </div>
      </article>
      <article className="FormDiv">
        <a href="?menu=Register&page=2">Criar conta</a>
      </article>
      <article className="FormDiv contCenter">
        <hr />
      </article>
      <article className="FormDiv contCenter">
        <button id="GoogleBtn">
          <i class="bi bi-google"></i>
          Logar com o Google
        </button>
      </article>
      <article className="FormDiv contCenter">
        <button type="submmit" id="submmitBtn">
          <i class="bi bi-door-closed"></i>
          Logar
        </button>
      </article>
    </form>
  );
}
