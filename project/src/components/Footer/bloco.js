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

function List() {
  const listItems = linkBloco1.map((link) => (
    <li key={link.name}>
      <a href="#">{link.name}</a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default function Bloco() {
  return (
    <div>
      <h1>Título</h1>
      <div>
        <List />
      </div>
    </div>
  );
}
