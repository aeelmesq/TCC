import { useState } from "react";
import { clickEye } from "../../../../utilits";
import { Link } from "react-router-dom";
import CreateInput from "../CreateInput";

export default function FormSingIn() {
  const [inputType, setInputType] = useState("password");

  const [loginInfos, setLoginInfos] = useState({
    Email: "",
    password: "",
  });

  function handleForm(key, value) {
    setLoginInfos((prevInfos) => ({ ...prevInfos, [key]: value }));
  }

  return (
    <form>
      {
        //campo de email
      }
      <CreateInput
        title={"Email"}
        name={"userEmail"}
        ofType={"email"}
        setValue={(e) => {
          e.preventDefault();
          handleForm("Email", e.target.value);
        }}
        initValue={loginInfos.Email}
        icon={"bi bi-envelope-at"}
        firstFocus={true}
      />
      {
        //campo de senha
      }
      <CreateInput
        title={"Senha"}
        name={"userPass"}
        ofType={inputType}
        setValue={(e) => {
          e.preventDefault();
          handleForm("password", e.target.value);
        }}
        initValue={loginInfos.password}
        icon={"bi bi-eye-slash-fill"}
        firstFocus={false}
        clickIcon={(e) => {
          clickEye(e, {
            state: { value: inputType, setValue: setInputType },
          });
        }}
      />
      {
        //link para página register
      }
      <article className="FormDiv">
        <Link to="../register"> Criar Conta </Link>
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
        <button type="button" id="submmitBtn">
          <i class="bi bi-door-closed"></i>
          Logar
        </button>
      </article>
    </form>
  );
}
