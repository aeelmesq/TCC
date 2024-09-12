import BlocoPrincipal from './blocoNoticias';
import BlocoRight from './blocoRight';
import { noticias } from '../../data';

export default function SuasNoticias({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="principalBlock">
        <div className="block">
          <BlocoPrincipal data={noticias} />
        </div>
        <aside className="asideBlock">
          <BlocoRight />
        </aside>
      </div>
    </div>
  );
}
