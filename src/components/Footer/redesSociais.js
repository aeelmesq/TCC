//import { GetIcone } from "../utilits";
import logo from "../../img/logo512.png";

function SocialMediaItem({ name }) {
  let link = "https://" + name.toLowerCase() + ".com";
  return (
    <a href={link}>
      <i className={"bi bi-" + name.toLowerCase()}>{name}</i>
    </a>
  );
}

export default function RedesSociaisList() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" width={90} id="logo" />
      </div>
      <div>
        <SocialMediaItem name="Twitter-X" />
        <SocialMediaItem name="Instagram" />
        <SocialMediaItem name="Youtube" />
        <SocialMediaItem name="LinkedIn" />
      </div>
    </div>
  );
}
