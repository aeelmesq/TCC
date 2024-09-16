import Bloco from './bloco';
import RedesSociaisList from './redesSociais';
import '../../StyleComponents/Footer.css';
import logo from '../../logo.svg';


export default function Footer() {
  return (
    <>
      <section id='bfLeft'>
        <img src={logo} alt="Logo" id="logo" />
      </section>
      <section id='bfRight'>
        <Bloco />
      </section>
      <section id='bfMiddle'>
        <div>
          <RedesSociaisList />
          <hr />
        </div>
      </section>
    </>
  );
}
