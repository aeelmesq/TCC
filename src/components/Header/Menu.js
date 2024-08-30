function MenuItem({ link, output, index }) {
  let url = new URL(window.location.href),
    select = url.searchParams.get("menu");

  return (
    <li className="MenuItem">
      <a
        href={"?menu=" + link}
        key={index}
        className={
          link === select ? "on" : !select && link === "Home" ? "on" : "of"
        }
      >
        {output}
      </a>
    </li>
  );
}

export default MenuItem;
