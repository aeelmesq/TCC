import { useCallback, useState } from "react";
import { clickEye } from "../../../../utilits";
import { Link, useNavigate } from "react-router-dom";
import CreateInput from "../CreateInput";
import useUser from "../../../../../hooks/useUser";
import WarningAlert from "../WarningAlert";

export default function FormSingIn() {
  const { setUser } = useUser();

  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");

  const [loginErrors, setLoginErrors] = useState({
    Email: "",
    password: "",
  });

  const [loginInfos, setLoginInfos] = useState({
    Email: "",
    password: "",
  });

  // Função para manipular o state de Erros de login
  const handleErrorMessage = useCallback(
    (key, value) => {
      setLoginErrors((prevInfos) => ({
        Email: "",
        password: "",
        [key]: value,
      }));
    },
    [setLoginErrors]
  );

  // Função para manipular o state de Login
  const handleForm = useCallback(
    (key, value) => {
      setLoginInfos((prevInfos) => ({ ...prevInfos, [key]: value }));
    },
    [setLoginInfos]
  );

  // Função de manipulação do submit
  const handleSubmit = useCallback(() => {
    var EmailSplit = loginInfos.Email.split("");
    if (loginInfos.Email.length != 0) {
      if (EmailSplit.includes("@") && EmailSplit.includes(".")) {
        if (loginInfos.password.length >= 8) {
          setUser((prevInfos) => ({
            ...prevInfos,
            Email: loginInfos.Email,
            id: 1,
          }));

          navigate("/ALT/");
          return;
        }
        handleErrorMessage("password", "Digite a senha");
        return;
      }
      handleErrorMessage("Email", "Email invalido");
      return;
    }
    handleErrorMessage("Email", "Digite o Email");
  }, [loginInfos, handleErrorMessage, setUser]);

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
        loginErrors.Email && <WarningAlert alert={loginErrors.Email} />
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
        loginErrors.password && <WarningAlert alert={loginErrors.password} />
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
        <button
          type="button"
          id="submmitBtn"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <i class="bi bi-door-closed"></i>
          Logar
        </button>
      </article>
    </form>
  );
}
