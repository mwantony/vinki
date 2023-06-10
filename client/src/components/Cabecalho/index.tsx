import styles from "./Cabecalho.module.scss";
import classNames from "classnames";

import { ReactComponent as MenuItem } from "../../assets/svg/menu-item.svg";
import { ReactComponent as Vinki } from "../../assets/svg/vinki.svg";
import { ReactComponent as Profile } from "../../assets/svg/profile.svg";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import { ReactComponent as ProfileMenu } from "../../assets/svg/profile-menu.svg";
import { Link } from "react-router-dom";
interface Props {
  aparecer: boolean;
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>;
  selecionado: number;
  setSelecionado: React.Dispatch<React.SetStateAction<number>>;
}
export default function Cabecalho({
  aparecer,
  setAparecer,
  selecionado,
  setSelecionado,
}: Props) {
  const menu = [
    {
      titulo: "Início",
      to: "/",
      classe: "inicio",
    },
    {
      titulo: "Carrinho",
      to: "carrinho",
      classe: "carrinho",
    },
    {
      titulo: "Favoritos",
      to: "favoritos",
      classe: "favoritos",
    },
    {
      titulo: "Em alta",
      to: "emalta",
      classe: "emalta",
    },
    {
      titulo: "Ofertas",
      to: "ofertas",
      classe: "ofertas",
    },
  ];
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.navegacao}>
        <MenuItem
          className={styles["navegacao__menu"]}
          onClick={() => {
            console.log("sd");
            setAparecer(true);
          }}
        ></MenuItem>
        <Vinki className={styles["navegacao__logo"]}></Vinki>
        <input
          type="search"
          name=""
          id=""
          className={styles["navegacao__search"]}
          placeholder="Busque aqui"
        />
        <div className={styles["navegacao__account"]}>
          <SearchIcon className={styles["navegacao__searchicon"]}></SearchIcon>
          <Profile className={styles["navegacao__profile"]}></Profile>
          <Cart className={styles["navegacao__cart"]}></Cart>
        </div>
      </nav>
      <div className={styles["lista__div"]}></div>
      <div
        onClick={() => setAparecer(false)}
        className={classNames({
          [styles.divisao__menu]: true,
          [styles["divisao__menu--aparecer"]]: aparecer === true ? true : false,
        })}
      ></div>
      <ul
        className={classNames({
          [styles.menu]: true,
          [styles["menu--aparecer"]]: aparecer === true ? true : false,
        })}
      >
        <div className={styles["menu__hello"]}>
          <ProfileMenu className={styles["menu__profile"]}></ProfileMenu>
          <h2 className={styles["menu__subtitulo"]}>Olá, Faça seu login!</h2>
        </div>
        <div className={styles["menu__links"]}>
          {menu.map((item, index) => {
            return (
              <Link
                to={item.to}
                onClick={() => {
                  setSelecionado(index);
                  setAparecer(false);
                }}
              >
                <li
                  className={classNames({
                    [styles["menu__item"]]: true,
                    [styles[`menu__item--${item.classe}`]]: true,
                    [styles["menu__item--selecionado"]]:
                      selecionado === index ? true : false,
                  })}
                >
                  &nbsp;&nbsp;&nbsp;{item.titulo}
                </li>
              </Link>
            );
          })}
        </div>
        <div className={styles["menu__botoes"]}>
          <Link
            onClick={() => setAparecer(false)}
            className={styles["menu__botoes--links"]}
            to="/login"
          >
            <button
              className={classNames({
                [styles["menu__botao"]]: true,
                [styles["menu__botao--login"]]: true,
              })}
            >
              Login
            </button>
          </Link>
          <Link
            onClick={() => setAparecer(false)}
            className={styles["menu__botoes--links"]}
            to="/cadastrar"
          >
            <button
              className={classNames({
                [styles["menu__botao"]]: true,
                [styles["menu__botao--cadastrar"]]: true,
              })}
            >
              Cadastrar
            </button>
          </Link>
        </div>
      </ul>
    </header>
  );
}
