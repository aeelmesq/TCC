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

export function formatarSite(site) {
  if (typeof site !== "string") return "";
  let siteAcentuado = site.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let siteFormatado =
    "https://" + siteAcentuado.toLowerCase().replace(/\s+/g, "") + ".com/"; // Definir o código do site no qual for postado
  return siteFormatado;
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

/*
  Função redirectTo:

    Descrição: função de redirecionamento para páginas externas ao site.
*/
export function redirectTo(path) {
  window.location.href = path;
}

/*
  Função getRandomInt:

    Descrição: Retorna um número inteiro aleatotio baseado em um valor maximo e minimo
*/

export function getRandomInt(min, max) {
  let res = Math.floor(Math.random() * max);

  if (res < min) {
    res = min;
  }

  return res;
}
