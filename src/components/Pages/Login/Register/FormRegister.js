import { useState, useRef } from "react";
import { clickEye } from "../../../utilits";

export default function FormRegister() {
  const [passType, setPassType] = useState("password");
  const [confPassType, setConfPassType] = useState("password");
  const [registerStage, setRegisterStage] = useState(1);
  const confirmPassword = useRef(null);

  //State que contém as infos de registro
  const [formInfos, setFormInfos] = useState({
    Name: "",
    Email: "",
    password: "",
  });

  return (
    <>
      {registerStage === 1 ? (
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
                onChange={(e) =>
                  setFormInfos((prevFormInfos) => {
                    return { ...prevFormInfos, Email: e.target.value };
                  })
                }
              />
              <i className="bi bi-envelope-at"></i>
            </div>
          </article>
          {
            //botão de registra a conta
            //mudar depois para continuar
          }
          <article className="FormDiv contCenter">
            <button
              type="button"
              id="submmitBtn"
              onClick={(e) => setRegisterStage(2)}
            >
              Continuar
            </button>
          </article>
        </form>
      ) : (
        <form>
          {
            //campo de senha provisorio,
            //vou colocar em outra seção da pagina register com um input de comfirmar senha
          }
          <article className="FormDiv">
            <label htmlFor="pass">Senha:</label>
            <div className="inputGroup">
              <input
                type={passType}
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
                    state: { value: passType, setValue: setPassType },
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
                : "FormDiv warning disable"
            }
          >
            <p>A senha precisa ter 8 ou mais caracters</p>
          </article>
          {
            //Input de confirmação de senha
          }
          <article className="FormDiv">
            <label htmlFor="confirmPass">Confirmar senha:</label>
            <div className="inputGroup">
              <input
                ref={confirmPassword}
                type={confPassType}
                name="confirmPass"
                id="confirmPass"
                required
                min={8}
              />
              <i
                className="bi bi-eye-slash-fill"
                onClick={(e) =>
                  clickEye(e, {
                    state: { value: confPassType, setValue: setConfPassType },
                  })
                }
              ></i>
            </div>
          </article>
        </form>
      )}
    </>
  );
}
