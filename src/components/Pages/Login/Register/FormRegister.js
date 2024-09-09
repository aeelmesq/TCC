import { useState, useEffect } from "react";
import { clickEye } from "../../../utilits";

export default function FormRegister() {
  const [inputType, setInputType] = useState("password");

  //State que contém as infos de registro
  const [formInfos, setFormInfos] = useState({
    Name: "",
    Email: "",
    password: "",
  });

  return (
    <form>
      {
        //campo de nome
      }
      <article className="FormDiv">
        <label htmlFor="Nome">Nome:</label>
        <div className="inputGroup">
          <input
            type="text"
            name="Nome"
            id="Nome"
            required
            autoFocus
            onChange={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, Name: e.target.value };
              })
            }
          />
          <i className="bi bi-person-fill"></i>
        </div>
      </article>
      {
        //campo de email
      }
      <article className="FormDiv">
        <label htmlFor="Email">Email:</label>
        <div className="inputGroup">
          <input
            type="email"
            name="Email"
            id="Email"
            required
            autoFocus
            onChange={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, Name: e.target.value };
              })
            }
          />
          <i className="bi bi-envelope-at"></i>
        </div>
      </article>
      {
        //campo de senha provisorio,
        //vou colocar em outra seção da pagina register com um input de comfirmar senha
      }
      <article className="FormDiv">
        <label htmlFor="pass">Senha:</label>
        <div className="inputGroup">
          <input
            type={inputType}
            name="pass"
            id="pass"
            required
            min={8}
            onChange={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, password: e.target.value };
              })
            }
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
        //alerta de invalit password
      }
      <article
        className={
          formInfos.password.length < 8
            ? "FormDiv warning"
            : "FormDiv warning  disable"
        }
      >
        <p>Senha muito curta</p>
      </article>
      {
        //botão de registra a conta
        //mudar depois para continuar
      }
      <article className="FormDiv contCenter">
        <button
          type="submmit"
          disabled={formInfos.password.length < 8 ? true : false}
        >
          Criar
        </button>
      </article>
    </form>
  );
}
