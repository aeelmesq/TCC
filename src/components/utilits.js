export function GetIcone({ name, size = [70] }) {
  function getIconeUrl({ name }) {
    return "./src/images/logo/" + name + ".png";
  }
  return (
    <img src={getIconeUrl({ name })} alt={name} width={size} height={size} />
  );
}
export function getUlrParam(Param) {
  let url = new URL(window.location.href),
    Params = url.searchParams.get(Param);
  return Params;
}

//função de abilitar e desabilitar hidden password
export function clickEye(e, { state = { value: "", setValue: () => {} } }) {
  e.preventDefault();
  if (state.value === "password") {
    state.setValue("text");
    e.target.classList.remove("bi-eye-slash-fill");
    e.target.classList.add("bi-eye-fill");
    return;
  }
  state.setValue("password");
  e.target.classList.remove("bi-eye-fill");
  e.target.classList.add("bi-eye-slash-fill");
}
