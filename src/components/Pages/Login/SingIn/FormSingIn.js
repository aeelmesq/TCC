import { useState, useEffect } from "react";
import { clickEye } from "../../../utilits";
import CreateInput from "../CreateInput";

export default function FormSingIn() {
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      {
        //campo de email
      }
      <CreateInput
        title={"Email"}
        name={"userEmail"}
        ofType={"email"}
        setValue={setEmail}
        initValue={email}
        icon={"bi bi-envelope-at"}
        firstFocus={true}
      />
      {
        //campo de senha
      }
      <article className="FormDiv">
        <label htmlFor="pass">Senha:</label>
        <div className="inputGroup">
          <input
            type={inputType}
            name="pass"
            id="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className="bi bi-eye-slash-fill"
            onClick={(e) =>
              clickEye(e, {
                state: { value: inputType, setValue: setInputType },
              })
            }
          ></i>
        </div>
      </article>
      {
        //link para página register
      }
      <article className="FormDiv">
        <a href="?menu=Register&page=2">Criar conta</a>
      </article>
      <article className="FormDiv contCenter">
        <hr />
      </article>
      {
        //botão de logar com o google
        //integrar login com google depois do fim do desenvolvimento das páginas principais
      }
      <article className="FormDiv contCenter">
        <button id="GoogleBtn">
          <i class="bi bi-google"></i>
          Logar com o Google
        </button>
      </article>
      {
        //botão de login
      }
      <article className="FormDiv contCenter">
        <button type="submmit" id="submmitBtn">
          <i class="bi bi-door-closed"></i>
          Logar
        </button>
      </article>
    </form>
  );
}
