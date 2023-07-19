import Axios from "axios";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import moment from "moment";
import { ReactComponent as PedidoCancelado } from "assets/svg/pedidocancelado.svg";
import { ReactComponent as PedidoConcluido } from "assets/svg/pedido-concluido.svg";
import styles from "./Pedidos.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
interface Props {
  id: any;
}

export default function Pedidos({ id }: Props) {
  const [pedidos, setPedidos] = useState([]);
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
            setPode(2);
            console.log(pedidos);
          }
        );
      }
    }
  }, [id, navigate, pedidos, pode]);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <>
      <section className={styles["pedidos"]}>
        <ul ref={parent} className={styles["pedidos__lista"]}>
          {pedidos.length !== 0 ? (
            pedidos.map((pedido: any) => {
              const produtoSeparados: any = pedido.produtos.split(",");
              console.log(produtoSeparados)
              return (
                <li className={styles["pedidos__item"]}>
                  <div
                    className={classNames({
                      [styles["pedidos__coluna"]]: true,
                      [styles["pedidos__coluna--first"]]: true,
                    })}
                  >
                    {pedido.cancelarpedido === "true" ? (
                      <PedidoCancelado></PedidoCancelado>
                    ) : (
                      <PedidoConcluido></PedidoConcluido>
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
                            className={styles['pedidos__produto--link']}
                            href={`${process.env.REACT_APP_WEB_URL}/produto/${Number(produto)}`}
                          >
                            {produto}{index === produtoSeparados.length - 1 ? '': ','}
                          </a>
                        ))}
                      </p>
                    </div>
                    <button className={styles["pedidos__botao"]}>
                      Cancelar
                    </button>
                  </div>
                  <div className={styles["pedidos__coluna"]}>
                    <div>
                      <h3 className={styles["pedidos__subtitulo"]}>Status</h3>
                      <p
                        className={classNames({
                          [styles["pedidos__paragrafo"]]: true,
                          [styles["pedidos__paragrafo--vermelho"]]:
                            pedido.cancelarpedido === "true" ? true : false,
                          [styles["pedidos__paragrafo--verde"]]:
                            pedido.cancelarpedido === "false" ? true : false,
                        })}
                      >
                        {pedido.cancelarpedido === "true"
                          ? "Cancelado"
                          : "Aprovado"}
                      </p>
                    </div>
                    <p className={styles["pedidos__paragrafo"]}>Feito em {moment(pedido.data).format("DD/MM/YYYY")}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <p className={styles["pedidos__paragrafo"]}>
              Não há registros de nenhum pedido...
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
