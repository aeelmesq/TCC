function MenuItem({ link, output }) {
  return (
    <li className="MenuItem">
      <a href={link}>{output}</a>
    </li>
  );
}

export default MenuItem;
