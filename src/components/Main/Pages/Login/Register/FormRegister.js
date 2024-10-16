import { useState } from "react";
import { clickEye } from "../../../../utilits";
import CreateInput from "../CreateInput";
import WarningAlert from "../WarningAlert";

export default function FormRegister() {
  const [passType, setPassType] = useState("password");
  const [confPassType, setConfPassType] = useState("password");
  const [registerStage, setRegisterStage] = useState(1);

  //State que contém as infos do form
  const [formInfos, setFormInfos] = useState({
    Name: "",
    Email: "",
    terms: false,
    password: "",
    comfimPassword: "",
    Errors: {
      Name: "",
      Email: "",
      password: "",
      comfimPassword: "",
      terms: "",
    },
  });

  function handleSubmmit() {
    let msg = `Olá ,${formInfos.Name}`;
    console.log(formInfos.Name);
    window.location = `./?menu=Home&modal=Menssagem;${msg}`;
  }

  //função que valida a senha passada pelo usúario
  function verifiPassword() {
    if (formInfos.password.length >= 8) {
      if (formInfos.password === formInfos.comfimPassword) {
        handleSubmmit();
        return;
      }
      setFormInfos((prevInfos) => ({
        ...prevInfos,
        Errors: {
          ...prevInfos.Errors,
          password: "",
          comfimPassword: "Confirme sua senha!",
        },
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
          if (formInfos.terms) {
            setFormInfos((prevInfos) => ({
              ...prevInfos,
              Errors: { ...prevInfos.Errors, Name: "", Email: "", terms: "" },
            }));
            setRegisterStage(2);
            return;
          }
          setFormInfos((prevInfos) => ({
            ...prevInfos,
            Errors: {
              ...prevInfos.Errors,
              Name: "",
              Email: "",
              terms: "É necessario concordar com os termos",
            },
          }));
          return;
        }
        setFormInfos((prevInfos) => ({
          ...prevInfos,
          Errors: {
            ...prevInfos.Errors,
            Name: "",
            Email: "Email invalido",
            terms: "",
          },
        }));
        return;
      }
      setFormInfos((prevInfos) => ({
        ...prevInfos,
        Errors: {
          ...prevInfos.Errors,
          Name: "",
          Email: "Digite o email",
          terms: "",
        },
      }));
      return;
    }
    setFormInfos((prevInfos) => ({
      ...prevInfos,
      Errors: {
        ...prevInfos.Errors,
        Name: "Digite o nome",
        Email: "",
        terms: "",
      },
    }));
  }

  return (
    <>
      {registerStage === 1 ? (
        <form>
          {
            //campo de nome
          }
          <CreateInput
            title={"Nome"}
            Name={"userName"}
            ofType={"text"}
            setValue={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, Name: e.target.value };
              })
            }
            initValue={formInfos.Name}
            icon={"bi bi-person-fill"}
            firstFocus={true}
          />
          {
            formInfos.Errors.Name && (
              <WarningAlert alert={formInfos.Errors.Name} />
            )
            //campo de email
          }
          <CreateInput
            title={"Email"}
            Name={"userEmail"}
            ofType={"email"}
            setValue={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, Email: e.target.value };
              })
            }
            initValue={formInfos.Email}
            icon={"bi bi-envelope-at"}
          />
          {formInfos.Errors.Email && (
            <WarningAlert alert={formInfos.Errors.Email} />
          )}
          <article className="FormDiv">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formInfos.terms}
              onClick={(e) =>
                setFormInfos((prevInfos) => {
                  return { ...prevInfos, terms: e.target.checked };
                })
              }
            />
            <label htmlFor="terms">
              Concordo com todos os <button type="button">Termos de uso</button>
            </label>
          </article>
          {
            formInfos.Errors.terms && (
              <WarningAlert alert={formInfos.Errors.terms} />
            )
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
          <CreateInput
            title={"Senha"}
            Name={"userPassword"}
            ofType={passType}
            setValue={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, password: e.target.value };
              })
            }
            initValue={formInfos.password}
            icon={"bi bi-eye-slash-fill"}
            clickIcon={(e) =>
              clickEye(e, {
                state: { value: passType, setValue: setPassType },
              })
            }
          />
          {
            //alerta de invalit password
            formInfos.Errors.password && (
              <WarningAlert alert={formInfos.Errors.password} />
            )
            //Input de confirmação de senha
          }
          <CreateInput
            title={"Confirmar Senha"}
            Name={"confirmPassword"}
            ofType={confPassType}
            setValue={(e) =>
              setFormInfos((prevFormInfos) => {
                return { ...prevFormInfos, comfimPassword: e.target.value };
              })
            }
            initValue={formInfos.comfimPassword}
            icon={"bi bi-eye-slash-fill"}
            clickIcon={(e) =>
              clickEye(e, {
                state: { value: confPassType, setValue: setConfPassType },
              })
            }
          />
          {formInfos.Errors.comfimPassword && (
            <WarningAlert alert={formInfos.Errors.comfimPassword} />
          )}
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
