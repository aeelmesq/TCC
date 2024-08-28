import Bloco from './Footer/bloco';
import RedesSociais from './Footer/redesSociais';

export default function Footer() {
  return (
    <div>
      <div>
        <RedesSociais />
      </div>
      <section>
        <Bloco />
        <Bloco />
        <Bloco />
      </section>
    </div>
  );
}
