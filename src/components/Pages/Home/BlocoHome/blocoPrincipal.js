import NoticiasSecundarias from './noticiasSecundarias';
import NoticiaPrincipal from './noticiaPrincipal';
import '../../../../StyleComponents/Home.css';

export default function BlocoPrincipal({ size = 250 }) {
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
