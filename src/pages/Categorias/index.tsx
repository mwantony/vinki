import Axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Categorias.module.scss";
import { ReactComponent as Sofa } from "../../assets/svg/sofa.svg";
import { ReactComponent as Ortopedia } from "../../assets/svg/ortopedia.svg";
import { ReactComponent as Calcado } from "../../assets/svg/calcados.svg";
import { ReactComponent as Livro } from "../../assets/svg/livros.svg";
import { ReactComponent as Eletronico } from "../../assets/svg/eletronicos.svg";
import { ReactComponent as Acessorios } from "../../assets/svg/acessorios.svg";
import { ReactComponent as Utilidades } from "../../assets/svg/utilidades.svg";
import { ReactComponent as Brinquedos } from "../../assets/svg/toy.svg";
import { motion, Variants } from "framer-motion";
import Loading from "components/Loading";
import {
  ordenarCategoria,
  ordenarCrescente,
  ordenarDecrescente,
} from "func/ordenar";
import { Link, useParams } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import classNames from "classnames";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
let categoria: string;
let location = window.location.href;

export default function Categorias() {
  const [ehLogin, setEhLogin] = useState(false);
  const [aparecerLoading, setAparecerLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selecionado, setSelecionado] = useState("Ordenar");
  const [quantidade, setQuantidade] = useState(12);
  const [eh, setEh] = useState(1);
  const [parent, enableAnimations] = useAutoAnimate();

  const [moveisNum, setMoveisNum] = useState([]);
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([]);
  const ids = useParams();
  const cat = ids.categoria;
  const [selecionada, setSelecionada] = useState(-1);
  const [genero, setGenero] = useState('')
  const loadMore = () => {
    if(categoria !== "Livros") {
      Axios.post(`${process.env.REACT_APP_API_URL}/categorias`, {
        categoria: categoria,
      }).then((res) => {
        setMoveisNum(res.data);
        const moveis = res.data.slice(0, quantidade);
        if (selecionado === "Maior preço") {
          ordenarCrescente(moveis);
        } else if (selecionado === "Menor preço") {
          ordenarDecrescente(moveis);
        }
        setMoveisEncontrados(moveis);
        setQuantidade(quantidade + 12);
      });

    } else if(categoria === "Livros") {
      Axios.post(`${process.env.REACT_APP_API_URL}/categorias/genero`, {
        genero: genero,
        categoria: categoria
      }).then((res) => {
        setMoveisNum(res.data);
        const moveis = res.data.slice(0, quantidade);
        if (selecionado === "Maior preço") {
          ordenarCrescente(moveis);
        } else if (selecionado === "Menor preço") {
          ordenarDecrescente(moveis);
        }
        setMoveisEncontrados(moveis);
        setQuantidade(quantidade + 12);
      });
    }
  };
  const isElementVisible = (element: any) => {
    const { top, bottom } = element.getBoundingClientRect();
    const { innerHeight } = window;
    return top < innerHeight && bottom >= 0;
  };
  const elementRef = useRef(null);
  const elementRef2 = useRef<HTMLLIElement>(null);
  const elementRef3 = useRef<HTMLLIElement>(null);
  const elementRef4 = useRef<HTMLLIElement>(null);
  const elementRef5 = useRef<HTMLLIElement>(null);
  const elementRef6 = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [use, setUse] = useState(window.location.href);
  useEffect(() => {
    switch (use) {
      case `${process.env.REACT_APP_WEB_URL}/categorias/moveis`:
        categoria = "Móveis";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/eletronicos`:
        categoria = "Eletrônicos";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/estofados`:
        categoria = "Estofados";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/calcados`:
        categoria = "Calçados";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/ortopedia`:
        categoria = "Ortopedia";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/livros`:
        categoria = "Livros";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/acessorios`:
        categoria = "Acessórios";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/brinquedos`:
        categoria = "Brinquedos";
        break;
      case `${process.env.REACT_APP_WEB_URL}/categorias/utilidades`:
        categoria = "Utilidades";
        break;
    }

    if (eh === 1) {
      loadMore();
      setEh(2);
    }

    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        setIsVisible(isElementVisible(element));
      }
    };
/*     window.addEventListener("scroll", handleScroll);
 */    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const produtosEncontrados = moveisNum.length;
  const hasMore = produtosEncontrados !== moveisEncontrados.length;

  if (isVisible === true) {
    setAparecerLoading(true);
    setTimeout(() => {
      loadMore();
      setAparecerLoading(false);
    }, 2000);
    setIsVisible(false);
  }
  const [podeRomance, setPodeRomance] = useState(true)
  const [podeFiccao, setPodeFiccao] = useState(true)
  const [podeAcao, setPodeAcao] = useState(true)
  const [podeSuspense, setPodeSuspense] = useState(true)
  const [podeLGBT, setPodeLGBT] = useState(true)

  return (
    <>
      <div className={styles["moveis__title"]}>
        {categoria === "Móveis" ? <Sofa></Sofa> : ""}
        {categoria === "Calçados" ? <Calcado></Calcado> : ""}
        {categoria === "Ortopedia" ? <Ortopedia></Ortopedia> : ""}
        {categoria === "Livros" ? <Livro></Livro> : ""}
        {categoria === "Eletrônicos" ? <Eletronico></Eletronico> : ""}
        {categoria === "Acessórios" ? <Acessorios></Acessorios> : ""}
        {categoria === "Utilidades" ? <Utilidades></Utilidades> : ""}
        {categoria === "Brinquedos" ? <Brinquedos></Brinquedos> : ""}
        <p>{categoria}</p>
      </div>
      <h3 className={styles["moveis__produtos-encontrados"]}>
        {produtosEncontrados} produto(s) encontrados
      </h3>
      {categoria === "Livros" ? (
        <ul className="w-full sliding cate h-full overflow-x-scroll flex whitespace-nowrap scroll scrollbar-hide scroll-smooth">
          <li
            className={classNames({
              [styles["livros__categorias--categoria"]]: true,
              [styles["livros__categorias--categoria--selecionada"]]:
                selecionada === 0 ? true : false,
            })}
            ref={elementRef2}
            onClick={() => {
              loadMore()
              setTimeout(() => {
                setPodeRomance(true)
                if(podeRomance) {
                  if(elementRef2.current) {
                    elementRef2.current.click();
                    setPodeRomance(false)
                  }
                }
             
              },0)
              setSelecionada(0);
              setGenero('Romance')
              ordenarCategoria(
                moveisNum,
                setMoveisEncontrados,
                "Romance"
              );
            }}
          >
            Romance
          </li>
          <li
            className={classNames({
              [styles["livros__categorias--categoria"]]: true,
              [styles["livros__categorias--categoria--selecionada"]]:
                selecionada === 1 ? true : false,
            })}
            ref={elementRef3}
            onClick={() => {
              loadMore()
              setTimeout(() => {
                setPodeFiccao(true)
                if(podeFiccao) {
                  if(elementRef3.current) {
                    elementRef3.current.click();
                    setPodeFiccao(false)
                  }
                }
             
              },0)
          
              setSelecionada(1);
              setGenero('Ficção')

              ordenarCategoria(
                moveisNum,
                setMoveisEncontrados,
                "Ficção"
              );
            }}
          >
            Ficção
          </li>
          <li
            className={classNames({
              [styles["livros__categorias--categoria"]]: true,
              [styles["livros__categorias--categoria--selecionada"]]:
                selecionada === 2 ? true : false,
            })}
            ref={elementRef4}
            onClick={() => {
              loadMore()
              setTimeout(() => {
                setPodeAcao(true)
                if(podeAcao) {
                  if(elementRef4.current) {
                    elementRef4.current.click();
                    setPodeAcao(false)
                  }
                }
             
              },0)
              setSelecionada(2);
              setGenero('Ação')

              ordenarCategoria(
                moveisNum,
                setMoveisEncontrados,
                "Ação"
              );
            }}
          >
            Ação
          </li>
          <li
            className={classNames({
              [styles["livros__categorias--categoria"]]: true,
              [styles["livros__categorias--categoria--selecionada"]]:
                selecionada === 3 ? true : false,
            })}
            ref={elementRef5}
            onClick={() => {
              loadMore()
              setTimeout(() => {
                setPodeSuspense(true)
                if(podeSuspense) {
                  if(elementRef5.current) {
                    elementRef5.current.click();
                    setPodeSuspense(false)
                  }
                }
             
              },0)
              setSelecionada(3);
              setGenero('Suspense')

              ordenarCategoria(
                moveisNum,
                setMoveisEncontrados,
                "Suspense"
              );
            }}
          >
            Suspense
          </li>
          <li
            className={classNames({
              [styles["livros__categorias--categoria"]]: true,
              [styles["livros__categorias--categoria--selecionada"]]:
                selecionada === 4 ? true : false,
            })}
            ref={elementRef6}
            onClick={() => {
              loadMore()
              setTimeout(() => {
                setPodeLGBT(true)
                if(podeLGBT) {
                  if(elementRef6.current) {
                    elementRef6.current.click();
                    setPodeLGBT(false)
                  }
                }
             
              },0)
              setGenero('LGBTQ+')

              setSelecionada(4);
              ordenarCategoria(
                moveisNum,
                setMoveisEncontrados,
                "LGBTQ+"
              );
            }}
          >
            LGBTQ+
          </li>
        </ul>
      ) : (
        ""
      )}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={styles["menu"]}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className={styles["menu__botao"]}
        >
          {selecionado}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg
              className={styles["menu__svg"]}
              width="15"
              height="15"
              viewBox="0 0 20 20"
            >
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          className={styles["menu__lista"]}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Maior preço");
              ordenarCrescente(moveisEncontrados);
            }}
          >
            Maior preço
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Menor preço");
              ordenarDecrescente(moveisEncontrados);
            }}
          >
            Menor preço
          </motion.li>
        </motion.ul>
      </motion.nav>

      <section className={styles["moveis"]} ref={parent}>
        {moveisEncontrados
          ? moveisEncontrados.map((produto: any, index: any) => {
              return (
                <Link
                  to={`/produto/${produto.idprodutos}`}
                  className={styles["moveis__lista--item"]}
                >
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: `url('${produto.link}')` }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      {produto.titulo}
                    </h3>
                    <p className={styles["lista__categoria"]}>
                      {produto.categoria}
                    </p>
                    <p className={styles["lista__preco"]}>
                      R${" "}
                      {Number(produto.precoAnterior)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                    <h3 className={styles["lista__promo"]}>
                      R$ {Number(produto.promocao).toFixed(2).replace(".", ",")}
                    </h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </Link>
              );
            })
          : ""}
        {hasMore === true ? (
            <button className={styles["carregar"]} onClick={() => loadMore()} ref={elementRef}>Ver mais</button>

        ) : (
          ""
        )}
        <Loading
          ehLogin={ehLogin}
          aparecerLoading={aparecerLoading}
          setAparecerLoading={setAparecerLoading}
        ></Loading>
      </section>
    </>
  );
}
