export function GetIcone({ name, size = [70] }) {
  function getIconeUrl({ name }) {
    return './src/images/logo/' + name + '.png';
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
