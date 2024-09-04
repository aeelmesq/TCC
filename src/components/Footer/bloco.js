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

function ListItens({ block }) {
  return block.map((link) => (
    <li key={link.name}>
      <a href={link.name}>{link.name}</a>
    </li>
  ));
}

function List({ title, nameBlock }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <ListItens block={nameBlock} />
      </ul>
    </div>
  );
}

export default function Bloco() {
  return (
    <div>
      <List title="Nos contate" nameBlock={linkBlock1} />
      <List title="teste" nameBlock={linkBlock2} />
      <List title="teste" nameBlock={linkBlock3} />
    </div>
  );
}
