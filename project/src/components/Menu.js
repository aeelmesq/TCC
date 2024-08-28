function MenuItem({ link, output }) {
  return (
    <li ClassName="MenuItem">
      <a href={link}>{output}</a>
    </li>
  );
}

export default MenuItem;
