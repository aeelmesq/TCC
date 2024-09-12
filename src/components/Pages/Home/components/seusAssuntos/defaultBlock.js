import BlockTypeSlider from '../../../BlockTypeSlider';

export default function SeusAssuntos({ title, style }) {
  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="block">
        <div style={{ marginRight: 'auto' }}>
          <h2>Assuntos</h2>
          <h3>Sugestão de assuntos</h3>
        </div>
        <hr />
        <BlockTypeSlider style="none" />
      </div>
    </div>
  );
}
