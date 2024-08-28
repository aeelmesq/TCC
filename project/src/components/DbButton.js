function DbButton({ link1, output1, link2, output2 }) {
  return (
    <ul className="DbBtn">
      <li className="btn1">
        <a href={link1}>{output1}</a>
      </li>
      <li className="btn2">
        <a href={link2}>{output2}</a>
      </li>
    </ul>
  );
}

export default DbButton;
