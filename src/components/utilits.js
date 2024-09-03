export function GetIcone({ name, size = [70] }) {
  function getIconeUrl({ name }) {
    return "./src/images/logo/" + name + ".png";
  }
  return (
    <img src={getIconeUrl({ name })} alt={name} width={size} height={size} />
  );
}
<<<<<<< HEAD

=======
>>>>>>> cd0bb7258a918271ebfd83cf8a2cbf0d0bb38ce6
export function getUlrParam(Param) {
  let url = new URL(window.location.href),
    Params = url.searchParams.get(Param);
  return Params;
}
<<<<<<< HEAD

export function getImage({ name }) {
  let img = 'img/' + name + '.jpg';
  return img;
}
=======
>>>>>>> cd0bb7258a918271ebfd83cf8a2cbf0d0bb38ce6
