import Bloco from './bloco';
import RedesSociaisList from './redesSociais';
import '../../StyleComponents/Footer.css';

export default function Footer() {
  return (
    <>
      <div id="socialMediaList">
        <RedesSociaisList />
      </div>
      <section>
        <Bloco />
      </section>
    </>
  );
}
