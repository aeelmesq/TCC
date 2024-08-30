import { GetIcone } from '../utilits';

function SocialMediaItem({ name }) {
  let link = 'https://' + name.toLowerCase() + '.com';
  return (
    <li key={name}>
      <a href={link}>{GetIcone({ name })}</a>
    </li>
  );
}

export default function RedesSociaisList() {
  return (
    <div>
      <div>
        <img src="./logo512.png" alt="" width={90} />
      </div>
      <div>
        <ul>
          <SocialMediaItem name="X" />
          <SocialMediaItem name="Instagram" />
          <SocialMediaItem name="Youtube" />
          <SocialMediaItem name="LinkedIn" />
        </ul>
      </div>
    </div>
  );
}
