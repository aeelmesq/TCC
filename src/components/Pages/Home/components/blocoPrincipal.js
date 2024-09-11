import NoticiasSecundarias from './noticiasSecundarias';
import NoticiaPrincipal from './noticiaPrincipal';
import '../../../../StyleComponents/Home.css';
import { noticias } from '../data.js';

export default function BlocoPrincipal({ size = 250 }) {
  return (
    <>
      <div className="principalCard">
        <NoticiaPrincipal size={size} />
        <NoticiasSecundarias data={noticias} />
      </div>
      <hr />
    </>
  );
}
