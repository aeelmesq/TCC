import BlockTypeSlider from '../../../BlockTypeSlider';

export default function SeusAssuntos({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="block">
        <div>
          <h2>Assuntos</h2>
          <h3>Sugestão de assuntos</h3>
        </div>
        <hr />
        <BlockTypeSlider style="none" />
      </div>
    </div>
  );
}
