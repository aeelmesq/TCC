import Menu from "../AsideBar/Menu";
import { Link } from "react-router-dom";

function DbButton({ link1, output1, link2, output2 }) {
  return (
    <Menu style={"DbBtn"}>
      <ul className="btn1">
        <Link to={link1}>{output1}</Link>
      </ul>
      <ul className="btn2">
        <Link to={link2}>{output2}</Link>
      </ul>
    </Menu>
  );
}

export default DbButton;
