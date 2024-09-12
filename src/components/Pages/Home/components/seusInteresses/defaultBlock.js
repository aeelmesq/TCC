import BlocoInteresses from './seusInteresses';
import { noticias } from '../../data';

export default function SeusInteresses({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="asideBlock">
        <div className="block">
          <BlocoInteresses data={noticias} />
        </div>
      </div>
    </div>
  );
}
