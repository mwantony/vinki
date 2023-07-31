import Axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import moment from "moment";
import { ReactComponent as PedidoCancelado } from "assets/svg/pedidocancelado.svg";
import { ReactComponent as PedidoConcluido } from "assets/svg/pedido-concluido.svg";
import { ReactComponent as PedidoPendente } from "assets/svg/pedido-pendente.svg";
import { ReactComponent as MeuPedidos } from "assets/svg/meupedidos.svg";
import styles from "./Pedidos.module.scss";
import { motion, Variants } from "framer-motion";
import {ordenarAprovados, ordenarCancelados, ordenarMaisAntigo, ordenarMaisRecente, ordenarPendentes} from 'func/ordenar'
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Notificacao from "components/Notificacao";
interface Props {
  id: any;
}
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Pedidos({ id }: Props) {
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false)
  const [pedidos, setPedidos] = useState([]);
  const [pedidosNum, setPedidosNum] = useState([]);
  const isElementVisible = (element: any) => {
    const { top, bottom } = element.getBoundingClientRect();
    const { innerHeight } = window;
    return top < innerHeight && bottom >= 0;
  };
  const elementRef = useRef(null);
  const [pode, setPode] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
    if (id) {
      if (pode === 1) {
        Axios.get(`${process.env.REACT_APP_API_URL}/pedidos/${id}`).then(
          (res: any) => {
            setPedidos(res.data);
            setPedidosNum(res.data)
            setPode(2);
            console.log(pedidos);
          }
        );
      }
    }
  }, [id, navigate, pedidos, pode]);
  const [parent, enableAnimations] = useAutoAnimate();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selecionado, setSelecionado] = useState("Ordenar");

  return (
    <>
      <section className={styles["pedidos"]}>
      <div className={styles["pedidos__title"]}>
        <MeuPedidos></MeuPedidos>
          <p>Meus pedidos</p>
        </div>
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
              setSelecionado("Aprovados");
              setPedidosNum([...pedidos])
              ordenarAprovados(pedidos, setPedidosNum)
            }}
          >
            Aprovados
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Cancelados");
              setPedidosNum([...pedidos])
              ordenarCancelados(pedidos, setPedidosNum)
            }}
          >
            Cancelados
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Pendentes");
              setPedidosNum([...pedidos])
              ordenarPendentes(pedidos, setPedidosNum)
            }}
          >
            Pendentes
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Mais recentes");
              setPedidosNum([...pedidos])
              ordenarMaisRecente(pedidos, setPedidosNum)
            }}
 
          >
            Mais recentes
          </motion.li>
          <motion.li
            className={styles["menu__item"]}
            variants={itemVariants}
            onClick={() => {
              setSelecionado("Mais antigos");
              setPedidosNum([...pedidos])
              ordenarMaisAntigo(pedidos, setPedidosNum)
            }}
          >
            Mais antigos
          </motion.li>
        </motion.ul>
      </motion.nav>
        <ul ref={parent} className={styles["pedidos__lista"]}>
          {pedidosNum.length !== 0 ? (
            pedidosNum.map((pedido: any) => {
              const produtoSeparados: any = pedido.produtos.split(",");
              return (
                <li className={styles["pedidos__item"]}>
                  <div
                    className={classNames({
                      [styles["pedidos__coluna"]]: true,
                      [styles["pedidos__coluna--first"]]: true,
                    })}
                  >
                    {pedido.status === "Cancelado" ? (
                      <PedidoCancelado></PedidoCancelado>
                    ) : (
                      ""
                    )}
                    {pedido.status === "Aprovado" ? (
                      <PedidoConcluido></PedidoConcluido>
                    ) : (
                      ""
                    )}
                    {pedido.status === "Pendente" ? (
                      <PedidoPendente></PedidoPendente>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles["pedidos__coluna"]}>
                    <div>
                      <h2 className={styles["pedidos__subtitulo"]}>Produtos</h2>
                      <p
                        className={classNames({
                          [styles["pedidos__paragrafo"]]: true,
                          [styles["pedidos__paragrafo--produto"]]: true,
                        })}
                      >
                        {produtoSeparados.map((produto: any, index: any) => (
                          <a
                            className={styles["pedidos__produto--link"]}
                            href={`${
                              process.env.REACT_APP_WEB_URL
                            }/produto/${String(produto).replace(' ', '')}`}
                          >
                            {produto}
                            {index === produtoSeparados.length - 1 ? "" : ","}
                          </a>
                        ))}
                      </p>
                    </div>
                    {pedido.status !== "Cancelado" ? (
                      <button className={styles["pedidos__botao"]} onClick={() => {
                        setMostrarNotificacao(true)
                        Axios.put(`${process.env.REACT_APP_API_URL}/pedidos/${pedido.idpedidos}`).then((res: any) => {
                          return
                        })
                      }}>
                        Cancelar
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles["pedidos__coluna"]}>
                    <div>
                      <h3 className={styles["pedidos__subtitulo"]}>Status</h3>
                      <p
                        className={classNames({
                          [styles["pedidos__paragrafo"]]: true,
                          [styles["pedidos__paragrafo--pendente"]]:
                            pedido.status === "Pendente" ? true : false,
                          [styles["pedidos__paragrafo--vermelho"]]:
                            pedido.status === "Cancelado" ? true : false,
                          [styles["pedidos__paragrafo--verde"]]:
                            pedido.status === "Aprovado" ? true : false,
                        })}
                      >
                        {pedido.status}
                      </p>
                    </div>
                    <p className={styles["pedidos__paragrafo"]}>
                      Feito em {moment(pedido.data).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <p className={classNames({
              [styles["pedidos__paragrafo"]]: true,
              [styles["pedidos__paragrafo--naotem"]]: true,
            })}>
              Não há registros de nenhum pedido...
            </p>
          )}
        </ul>
      </section>
      <Notificacao mostrarNotificacao={mostrarNotificacao} setMostrarNotificacao={setMostrarNotificacao} msg={'Pedido cancelado'}></Notificacao>
    </>
  );
}
