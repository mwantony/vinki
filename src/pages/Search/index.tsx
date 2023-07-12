import Axios from "axios";
import { useEffect, useState } from "react";
import styles from './Search.module.scss'
import { Link } from "react-router-dom";
import Cartao from "components/Cartao";
import { motion } from "framer-motion";
import { ordenarCrescente, ordenarDecrescente } from "func/ordenar";
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Search() {
  const [agr, setAgr] = useState(0);
  const [input, setInput] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [selecionado, setSelecionado] = useState("Ordenar");
  const [produtosRandom, setProdutosRandom] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate()

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const [filteredData, setFilteredData] = useState(produtos.filter((item: any) =>
    item.titulo.toLowerCase().includes(input.toLowerCase())
  ))
  useEffect(() => {
    if (agr === 0) {
      Axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
        .then((res: any) => {
          setProdutos(res.data);
          setAgr(1);
        })
        .then(() => {
          Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom`).then(
            (res) => {
              setProdutosRandom(res.data);
            }
          );
        });
    }
  }, [agr]);
  return (
    <>
        <input
          type="text"
          name=""
          id=""
          className={styles['search__input']}
          placeholder="Busque aqui..."
          onChange={(event: any) => {
            setInput(event.target.value);
            setFilteredData(produtos.filter((item: any) =>
              item.titulo.toLowerCase().includes(input.toLowerCase())
            ))
          }}
        />
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
              ordenarCrescente(filteredData);
            }}
          >
            Maior preço
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Menor preço");
              ordenarDecrescente(filteredData)
            }}
          >
            Menor preço
          </motion.li>

        </motion.ul>
      </motion.nav>
      <section className={styles['search']} ref={parent}>
        {input !== ""
          ? filteredData.map((item: any) => {
              return (
                <Cartao item={item}></Cartao>
                )
            })
          : produtosRandom.map((item: any) => {
            return(
              <Cartao item={item}></Cartao>
            )
          })}
      </section>
    </>
  );
}
