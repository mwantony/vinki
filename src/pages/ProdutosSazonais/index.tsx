import Axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProdutosSazonais.module.scss";
import { ReactComponent as Sofa } from "../../assets/svg/sofa.svg";
import { motion, Variants } from "framer-motion";
import Loading from "components/Loading";
import { ordenarCrescente, ordenarDecrescente } from "func/ordenar";
import { Link, useParams } from "react-router-dom";
import {ReactComponent as Toy} from 'assets/svg/toy.svg' 
import { useAutoAnimate } from "@formkit/auto-animate/react";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
let categoria: string
let location = window.location.href


export default function ProdutosSazonais() {
  const [ehLogin, setEhLogin] = useState(false)
  const [aparecerLoading, setAparecerLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selecionado, setSelecionado] = useState("Ordenar");
  const [quantidade, setQuantidade] = useState(12);
  const [eh, setEh] = useState(1);
  const [parent, enableAnimations] = useAutoAnimate();

  const [moveisNum, setMoveisNum] = useState([]);
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([]);
  const ids = useParams()
  const cat = ids.categoria

  const loadMore = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtossazonais/Brinquedos`).then(
      (res) => {
        setMoveisNum(res.data);
        const moveis = res.data.slice(0, quantidade);
        if(selecionado === 'Maior preço') {
          ordenarCrescente(moveis)
        } else if(selecionado === "Menor preço") {
          ordenarDecrescente(moveis)
        }
        setMoveisEncontrados(moveis);
        setQuantidade(quantidade + 12);
      }
    );
  };
  const isElementVisible = (element: any) => {
    const { top, bottom } = element.getBoundingClientRect();
    const { innerHeight } = window;
    return top < innerHeight && bottom >= 0;
  };
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [use, setUse] = useState(window.location.href)
  useEffect(() => {
    switch(use) {
      case `${process.env.REACT_APP_WEB_URL}/categorias/moveis`:
        categoria = 'Móveis'  
        break
      case `${process.env.REACT_APP_WEB_URL}/categorias/eletronicos`:
        categoria = 'Eletrônicos'
        break
      case `${process.env.REACT_APP_WEB_URL}/categorias/estofados`:
        categoria = 'Estofados'
        break
    
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
    loadMore();
    setTimeout(() => {
      setAparecerLoading(false);
    }, 2000);
    setIsVisible(false);
  }
  return (
    <>
      <div className={styles["moveis__title"]}>
        <Toy></Toy>
        <p>Dia das Crianças</p>
      </div>
      <h3 className={styles["moveis__produtos-encontrados"]}>
        {produtosEncontrados} produto(s) encontrados
      </h3>
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
              ordenarDecrescente(moveisEncontrados)
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
                <Link to={`/produto/${produto.idprodutos}`} className={styles["moveis__lista--item"]}>
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
