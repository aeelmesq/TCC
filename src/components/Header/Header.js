import '../../StyleComponenst/Header.css';
import DbButton from './DbButton.js';
import MenuItem from './Menu.js';

const urlParamName = '?menu=',
  pages = [
    {
      name: 'Home',
      menu: 'Home',
    },
    {
      name: 'Para você',
      menu: 'ParaVoce',
    },
    {
      name: 'Preferências',
      menu: 'Preferencias',
    },
    {
      name: 'Penápolis',
      menu: 'Penapolis',
    },
    {
      name: 'Região',
      menu: 'Regiao',
    },
    {
      name: 'Brasil',
      menu: 'Brasil',
    },
  ];
function menuSelect() {
  let url = new URL(window.location.href),
    select = url.searchParams.get('menu'),
    menuItens = document.querySelectorAll('.MenuItem a');

  console.log(select);

  for (let i = 0; i < pages.length; i++) {
    if (select === pages[i].menu || !select) {
      menuItens[i].classList.add('on');
      i = pages.length - 1;
    }
  }
}

function Header() {
  return (
    <header onLoad={menuSelect}>
      <div id="left">
        <img src="logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </div>
      <div id="right">
        <ul className="menu">
          {pages.map((itens, index) => {
            return (
              <MenuItem
                link={urlParamName + itens.menu}
                output={itens.name}
                index={index}
              />
            );
          })}
        </ul>
        <DbButton
          link1={'?menu=SingIn'}
          output1={'Sing In'}
          link2={'?menu=Register'}
          output2={'Reister'}
        />
      </div>
    </header>
  );
}

export default Header;
