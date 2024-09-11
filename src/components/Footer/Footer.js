import Bloco from "./bloco";
import RedesSociaisList from "./redesSociais";
import "../../StyleComponents/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="socialMediaList">
        <RedesSociaisList />
      </div>
      <section>
        <Bloco />
      </section>
    </footer>
  );
}
