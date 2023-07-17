import classNames from "classnames";
import styles from "./FinalizarCompra.module.scss";
import { ReactComponent as RightArrow } from "assets/svg/rightarrow.svg";
interface Props {
  finalizar: boolean;
  setFinalizar: any;
  produtos: any;
  total: any;
  redirecionar: any;
}
export default function FinalizarCompra({
  finalizar,
  setFinalizar,
  produtos,
  total,
  redirecionar,
}: Props) {
  return (
    <>
      <section
        className={classNames({
          [styles["finalizarcompra"]]: true,
          [styles["finalizarcompra--aparecer"]]: finalizar,
        })}
      >
        <div>
          <h2 className={styles['finalizarcompra__title']}>Produtos:</h2>
          <ul className={styles['finalizarcompra__produtos']}>
            {produtos.map((item: any, index: any) => {
              return <a href={item.link} className={styles['finalizarcompra__link']}><li>{item.titulo}{index === (produtos.length -1) ? '.' : ';'}</li></a>
            })}
          </ul>
        </div>
        <div className={styles['finalizarcompra__economizar']}>
          <p className={styles['finalizarcompra__emate']}>
            Em até 12x de R${" "}
            {Number(Number(total) / 12)
              .toFixed(2)
              .replace(".", ",")}
          </p>
          <p className={styles['finalizarcompra__sub']}>R$ {Number(total).toFixed(2).replace(".", ",")}</p>
        </div>
        <div >
          <p className={styles['finalizarcompra__porcentagem']}>Economize 5% com pix ou boleto</p>
          <a href={redirecionar} target="_blank" rel="noreferrer" >
            <button className={styles['finalizarcompra__finalizar']}>
              <p className={styles['finalizarcompra__botao']}>Finalizar compra</p>
              <RightArrow className={styles['finalizarcompra__rightarrow']}></RightArrow>
            </button>
          </a>
        </div>
      </section>
      <div onClick={() => {
        setFinalizar(false)
      }} className={classNames({
        [styles['finalizarcompra--div']]: true,
        [styles['finalizarcompra--div--aparecer']]: finalizar,
      })}></div>
    </>
  );
}
