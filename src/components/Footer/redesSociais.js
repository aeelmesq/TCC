//import { GetIcone } from "../utilits";

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
        <img src="./img/logo512.png" alt="" width={90} />
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
