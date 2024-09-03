import pages from '../../consts/Pages.js';
import { getUlrParam } from '../utilits.js';

const select = getUlrParam('menu') ? getUlrParam('menu') : 'Home';

function MenuItem({ link, output, index }) {
  return (
    <li className="MenuItem">
      <a
        href={'?menu=' + link}
        key={index}
        className={link === select ? 'on' : 'of'}
      >
        {output}
      </a>
    </li>
  );
}
function Menu() {
  let menuItens = pages.map((page, index) => {
    return <MenuItem link={page.menu} output={page.title} index={index} />;
  });
  return <ul className="menu">{menuItens}</ul>;
}

export default Menu;
