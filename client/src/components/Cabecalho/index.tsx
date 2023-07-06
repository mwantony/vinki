import styles from "./Cabecalho.module.scss";
import classNames from "classnames";

import { ReactComponent as MenuItem } from "../../assets/svg/menu-item.svg";
import { ReactComponent as Vinki } from "../../assets/svg/vinki.svg";
import { ReactComponent as Profile } from "../../assets/svg/profile.svg";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import { ReactComponent as ProfileMenu } from "../../assets/svg/profile-menu.svg";
import { ReactComponent as Sair } from "../../assets/svg/sair.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Usuario from "interfaces/Usuario";
import Endereco from "interfaces/Endereco";
import { Badge } from "@mui/material";
interface Props {
  aparecer: boolean;
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>;
  selecionado: number;
  setSelecionado: React.Dispatch<React.SetStateAction<number>>;
  nome: any;
  usuario: any
  endereco: any
}
export default function Cabecalho({
  aparecer,
  setAparecer,
  selecionado,
  setSelecionado,
  endereco,
  usuario,
  nome,
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
          <Link to="conta">
            <Profile className={styles["navegacao__profile"]}></Profile>
          </Link>
          <Link to={'/carrinho'}>
              <Cart className={styles["navegacao__cart"]}></Cart>
          
          </Link>
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
          <h2 className={styles["menu__subtitulo"]}>
            Olá, {nome === "" ? "Faça seu login!" : nome}
          </h2>
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
                [styles["menu__botao--desaparecer"]]:
                  nome !== "" ? true : false,
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
                [styles["menu__botao--desaparecer"]]:
                  nome !== "" ? true : false,
                [styles["menu__botao--cadastrar"]]: true,
              })}
            >
              Cadastrar
            </button>
          </Link>
          <button onClick={() => {
              localStorage.setItem('usuario', JSON.stringify(usuario))
              localStorage.setItem('endereco', JSON.stringify(endereco))
              window.location.reload()
            }} 
            className={classNames({
              [styles["menu__botao"]]: true,
              [styles["menu__botao--sair"]]: true,
              [styles["menu__botao--desaparecer"]]: nome === "" ? true : false,
            })}
          >
            <p>Sair</p>
            <Sair className={styles["menu__botao--icon"]}></Sair>
          </button>
        </div>
      </ul>
    </header>
  );
}
