import classNames from "classnames";
import styles from "./FinalizarCompra.module.scss";
import { ReactComponent as RightArrow } from "assets/svg/rightarrow.svg";
import Axios from "axios";
import { ReactComponent as Cadeado } from "assets/svg/cadeado.svg";
import { useEffect, useState } from "react";
interface Props {
  finalizar: boolean;
  setFinalizar: any;
  produtos: any;
  total: any;
  redirecionar: any;
  id: any;
  idReferencia: any;
  setMostrarNotificacao: any;
  frete: any;
  setFrete: any;
}
export default function FinalizarCompra({
  finalizar,
  setFinalizar,
  produtos,
  total,
  redirecionar,
  id,
  idReferencia,
  setMostrarNotificacao,
  frete,
  setFrete,
}: Props) {
  let titleprodutos = "";
  total += frete;
  const handleFinalizar = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}/pedidos`, {
      usuariopedido: id,
      produtos: titleprodutos,
      status: "Pendente",
      cancelarpedido: "false",
      data: String(new Date()),
      idreferencia: idReferencia,
    }).then((res) => {
      setTimeout(() => {
        localStorage.setItem("carrinho", JSON.stringify([]));
        window.location.reload();
      }, 1000);
    });
  };
  produtos.map((produto: any, index: any) => {
    titleprodutos = `${titleprodutos}${index === 0 ? "" : ","} ${
      produto.idprodutos
    }`;
  });
  useEffect(() => {});
  return (
    <>
      <section
        className={classNames({
          [styles["finalizarcompra"]]: true,
          [styles["finalizarcompra--aparecer"]]: finalizar,
        })}
      >
        <div>
          <h2 className={styles["finalizarcompra__title"]}>Produtos:</h2>
          <ul className={styles["finalizarcompra__produtos"]}>
            {produtos.map((item: any, index: any) => {
              return (
                <a href={item.link} className={styles["finalizarcompra__link"]}>
                  <li>
                    {item.titulo}
                    {index === produtos.length - 1 ? "." : ";"}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className={styles["finalizarcompra__economizar"]}>
          {Number(total) ? (
            <p className={styles["finalizarcompra__emate"]}>
              Em até 12x de R${" "}
              {Number(Number(total) / 12)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          ) : (
            ""
          )}
          {Number(total) ? (
            <p className={styles["finalizarcompra__sub"]}>
              R$ {Number(total).toFixed(2).replace(".", ",")}
            </p>
          ) : (
            ""
          )}{" "}
        </div>
        <div>
          <div className={styles["finalizarcompra__porcentagem"]}>
            COMPRA SEGURA
            <Cadeado></Cadeado>
          </div>
          {Number(total) ? (
            <a
              href={redirecionar}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                handleFinalizar();
                setFinalizar(false);
                setMostrarNotificacao(true);
              }}
            >
              <button className={styles["finalizarcompra__finalizar"]}>
                <p className={styles["finalizarcompra__botao"]}>
                  Finalizar compra
                </p>
                <RightArrow
                  className={styles["finalizarcompra__rightarrow"]}
                ></RightArrow>
              </button>
            </a>
          ) : (
            <p className={styles["finalizarcompra__erro"]}>Tamanho máximo da encomenda excedido! Remova produtos.</p>
          )}
        </div>
      </section>
      <div
        onClick={() => {
          setFinalizar(false);
        }}
        className={classNames({
          [styles["finalizarcompra--div"]]: true,
          [styles["finalizarcompra--div--aparecer"]]: finalizar,
        })}
      ></div>
    </>
  );
}
