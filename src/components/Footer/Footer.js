import Bloco from "./bloco";
import RedesSociaisList from "./redesSociais";

export default function Footer() {
  return (
    <footer>
      <div id="socialMediaList">
        <RedesSociaisList />
      </div>
      <section>
        <Bloco />
        <Bloco />
        <Bloco />
      </section>
    </footer>
  );
}
