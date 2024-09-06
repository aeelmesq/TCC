import DbButton from "../../../Header/DbButton";
import FormSingIn from "./FormSingIn";

export default function SingIn() {
  return (
    <div id="FormLogin">
      <h1>Sing In</h1>
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
        output2={"Criar Conta"}
      />
    </div>
  );
}
