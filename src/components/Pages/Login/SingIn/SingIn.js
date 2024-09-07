import DbButton from "../../../Header/DbButton";
import FormSingIn from "./FormSingIn";

export default function SingIn() {
  return (
    <>
      <header id="FormHeader">
        <h1>Sing In</h1>
      </header>
      <div id="FormLogin">
        <FormSingIn />
        <hr />
        <button id="GoogleBtn">
          <i class="bi bi-google"></i>
          Logar com o Google
        </button>
        <DbButton
          link1={"?page=1"}
          output1={"Logar"}
          link2={"?menu=Register&page=2"}
          output2={"Registrar"}
        />
      </div>
    </>
  );
}
