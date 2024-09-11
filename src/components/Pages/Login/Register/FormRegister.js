import { useState } from "react";
import { clickEye } from "../../../utilits";

export default function FormRegister() {
  const [passType, setPassType] = useState("password");
  const [confPassType, setConfPassType] = useState("password");
  const [registerStage, setRegisterStage] = useState(1);

  //State que contém as infos do form
  const [formInfos, setFormInfos] = useState({
    Name: "",
    Email: "",
    password: "",
    comfimPassword: "",
    Errors: {
      Name: "",
      Email: "",
      password: "",
    },
  });

  //função que valida a senha passada pelo usúario
  function verifiPassword() {
    if (formInfos.password.length >= 8) {
      if (formInfos.password === formInfos.comfimPassword) {
        window.location = `./?menu=Home&modal=teste,${formInfos.Name},ok`;
        return;
      }
      setFormInfos((prevInfos) => ({
        ...prevInfos,
        Errors: { ...prevInfos.Errors, password: "Confirme sua senha!" },
      }));
      return;
    }
    setFormInfos((prevInfos) => ({
      ...prevInfos,
      Errors: {
        ...prevInfos.Errors,
        password: "A senha precisa ter 8 ou mais caracters!",
      },
    }));
  }

  //função que valida o Nome e o Email passado pelo usúario
  function confirmInfos() {
    let mailSplit = formInfos.Email.split("");

    if (formInfos.Name.length > 0) {
      if (formInfos.Email.length > 0) {
        if (mailSplit.includes("@") && mailSplit.includes(".")) {
          setFormInfos((prevInfos) => ({
            ...prevInfos,
            Errors: { ...prevInfos.Errors, Name: "", Email: "" },
          }));
          setRegisterStage(2);
          return;
        }
        setFormInfos((prevInfos) => ({
          ...prevInfos,
          Errors: { ...prevInfos.Errors, Name: "", Email: "Email invalido" },
        }));
        return;
      }
      setFormInfos((prevInfos) => ({
        ...prevInfos,
        Errors: { ...prevInfos.Errors, Name: "", Email: "Digite o email" },
      }));
      return;
    }
    setFormInfos((prevInfos) => ({
      ...prevInfos,
      Errors: { ...prevInfos.Errors, Name: "Digite o nome", Email: "" },
    }));
  }

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
                value={formInfos.Name}
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
          {formInfos.Errors.Name && (
            <article className="FormDiv warning">
              <p>{formInfos.Errors.Name}</p>
            </article>
          )}
          {
            //campo de email
          }
          <article className="FormDiv">
            <label htmlFor="Email">Email:</label>
            <div className="inputGroup">
              <input
                type="email"
                name="Email"
                value={formInfos.Email}
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
          {formInfos.Errors.Email && (
            <article className="FormDiv warning">
              <p>{formInfos.Errors.Email}</p>
            </article>
          )}
          {
            //botão de continuar
          }
          <article className="FormDiv">
            <p>
              já possue uma <a href="?menu=SingIn&page=2">conta?</a>
            </p>
          </article>
          <article className="FormDiv contCenter">
            <hr />
          </article>
          <article className="FormDiv contCenter">
            <button
              type="button"
              id="submmitBtn"
              onClick={(e) => confirmInfos()}
            >
              Continuar
            </button>
          </article>
        </form>
      ) : (
        <form>
          {
            //campo de senha
          }
          <article className="FormDiv">
            <label htmlFor="pass">Senha:</label>
            <div className="inputGroup">
              <input
                type={passType}
                name="pass"
                id="pass"
                value={formInfos.password}
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
            formInfos.Errors.password && (
              <article className="FormDiv warning">
                <p>{formInfos.Errors.password}</p>
              </article>
            )
            //Input de confirmação de senha
          }
          <article className="FormDiv">
            <label htmlFor="confirmPass">Confirmar senha:</label>
            <div className="inputGroup">
              <input
                type={confPassType}
                name="confirmPass"
                id="confirmPass"
                onChange={(e) =>
                  setFormInfos((prevFormInfos) => {
                    return { ...prevFormInfos, comfimPassword: e.target.value };
                  })
                }
                value={formInfos.comfimPassword}
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
          <article className="FormDiv">
            <p>
              já possue uma <a href="?menu=SingIn&page=2">conta?</a>
            </p>
          </article>
          <article className="FormDiv contCenter">
            <hr />
          </article>
          {
            //botão de voltar para a primeira parte do cadastro
          }
          <article className="FormDiv contCenter">
            <button
              type="button"
              id="prevBtn"
              onClick={(e) => setRegisterStage(1)}
            >
              Voltar
            </button>
            {
              //botão de criação de registro
            }
            <button type="button" id="submmitBtn" onClick={verifiPassword}>
              Criar
            </button>
          </article>
        </form>
      )}
    </>
  );
}
