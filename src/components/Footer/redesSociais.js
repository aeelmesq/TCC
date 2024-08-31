import { GetIcone } from "../utilits";

function SocialMediaItem({ name }) {
  let link = "https://" + name.toLowerCase() + ".com";
  return <a href={link}>{GetIcone({ name })}</a>;
}

export default function RedesSociaisList() {
  return (
    <div>
      <div>
        <img src="./img/logo512.png" alt="" width={90} />
      </div>
      <div>
        <SocialMediaItem name="X" />
        <SocialMediaItem name="Instagram" />
        <SocialMediaItem name="Youtube" />
        <SocialMediaItem name="LinkedIn" />
      </div>
    </div>
  );
}
