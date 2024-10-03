import { useState, useEffect } from "react";
import { clickEye } from "../../../../utilits";
import { Link } from "react-router-dom";
import CreateInput from "../CreateInput";

export default function FormSingIn() {
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <form>
      {
        //campo de email
      }
      <CreateInput
        title={"Email"}
        name={"userEmail"}
        ofType={"email"}
        setValue={(e) => setEmail(e.target.value)}
        initValue={email}
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
        setValue={(e) => setPassword(e.target.value)}
        initValue={password}
        icon={"bi bi-eye-slash-fill"}
        firstFocus={false}
        clickIcon={(e) =>
          clickEye(e, {
            state: { value: inputType, setValue: setInputType },
          })
        }
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
        <button type="submmit" id="submmitBtn">
          <i class="bi bi-door-closed"></i>
          Logar
        </button>
      </article>
    </form>
  );
}
