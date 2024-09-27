//Função de retornar um ícone
export function GetIcone({ name, size = [70] }) {
  function getIconeUrl({ name }) {
    return './src/images/logo/' + name + '.png';
  }
  return (
    <img src={getIconeUrl({ name })} alt={name} width={size} height={size} />
  );
}

//Função que retorna uma URL
export function getUlrParam(Param) {
  let url = new URL(window.location.href),
    Params = url.searchParams.get(Param);
  return Params;
}

//Função de formatar um site com um nome
export function formatarSite(site) {
  if (typeof site !== 'string') return '';
  let siteAcentuado = site.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let siteFormatado =
    'https://' + siteAcentuado.toLowerCase().replace(/\s+/g, '') + '.com/'; // Definir o código do site no qual for postado
  return siteFormatado;
}

//função de abilitar e desabilitar hidden password
export function clickEye(e, { state = { value: '', setValue: () => {} } }) {
  e.preventDefault();
  if (state.value === 'password') {
    state.setValue('text');
    e.target.classList.remove('bi-eye-slash-fill');
    e.target.classList.add('bi-eye-fill');
    return;
  }
  state.setValue('password');
  e.target.classList.remove('bi-eye-fill');
  e.target.classList.add('bi-eye-slash-fill');
}


//Função de limitação de texto
export function limitarTexto(text) {
  const limiteCaracteres = 60
  return text.length > limiteCaracteres
  ? text.slice(0, limiteCaracteres) + '...'
  : text
}