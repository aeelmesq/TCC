import Bloco from './bloco';
import RedesSociaisList from './redesSociais';

export default function Footer() {
  return (
    <div>
      <div>
        <RedesSociaisList />
      </div>
      <section>
        <Bloco />
        <Bloco />
        <Bloco />
      </section>
    </div>
  );
}
