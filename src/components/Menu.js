function MenuItem({ link, output, index }) {
  return (
    <li className="MenuItem">
      <a href={link} key={index}>
        {output}
      </a>
    </li>
  );
}

export default MenuItem;
