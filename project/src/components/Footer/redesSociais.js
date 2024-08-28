function getIconeUrl({ name }) {
  return './src/images/logo/' + name + '.png';
}
function GetIcone({ name, size = [70] }) {
  return <img src={getIconeUrl(name)} alt={name} width={size} height={size} />;
}

export default function RedesSociais() {
  return (
    <div>
      <div>
        <img src="./logo512.png" alt="" width={90} />
      </div>
      <div>
        <GetIcone name="X" />
        <GetIcone name="Instagram" />
        <GetIcone name="Youtube" />
        <GetIcone name="LinkedIn" />
      </div>
    </div>
  );
}
