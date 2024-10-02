function SocialMediaItem({ name }) {
  let link = 'https://' + name.toLowerCase() + '.com';
  return (
    <a href={link}>
      <i className={'bi bi-' + name.toLowerCase()}></i>
    </a>
  );
}

export default function RedesSociaisList() {
  return (
    <div>
      <div>
        <SocialMediaItem name="Twitter-X" />
        <SocialMediaItem name="Instagram" />
        <SocialMediaItem name="Youtube" />
        <SocialMediaItem name="LinkedIn" />
      </div>
    </div>
  );
}
