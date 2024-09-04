import NoticiasSecundarias from './noticiasSecundarias';
import NoticiaPrincipal from './noticiaPrincipal';
import '../../../../StyleComponents/Home.css';

export default function BlocoPrincipal({ size = 520 }) {
  return (
    <>
      <div className="principalCard">
        <NoticiaPrincipal size={size} />
        <NoticiasSecundarias />
      </div>
      <hr />
    </>
  );
}
