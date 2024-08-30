const linkBloco1 = [
  { name: 'UI Design' },
  { name: 'UX Design' },
  { name: 'Wireframe' },
  { name: 'Diagramming' },
];
const linkBloco2 = [
  { name: 'Design' },
  { name: 'Prototyping' },
  { name: 'Dev' },
];
const linkBloco3 = [{ name: 'Blog' }, { name: 'Colors' }];

function List({ name }) {
  function ListItens() {}
  return (
    <li key={name}>
      <a>{name}</a>
    </li>
  );
}

export default function Bloco() {
  return (
    <div>
      <h1>Título</h1>
      <div>
        <ul>
          <List />
        </ul>
      </div>
    </div>
  );
}
