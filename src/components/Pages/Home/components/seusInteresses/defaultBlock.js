import BlocoInteresses from './seusInteresses';
import { noticias } from '../../data';

export default function SeusInteresses({ title, style }) {
  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="asideBlock">
        <div className="block">
          <BlocoInteresses data={noticias} />
        </div>
      </div>
    </div>
  );
}
