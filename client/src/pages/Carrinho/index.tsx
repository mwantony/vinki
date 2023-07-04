import styles from "./Carrinho.module.scss";
import { ReactComponent as CarrinhoSvg } from "../../assets/svg/carrinho.svg";
interface Props {
    produtos: any
}
export default function Carrinho({produtos}: Props) {
  return (
    <>
      <section className={styles['carrinho']}>
        <div className={styles["carrinho__title"]}>
          <CarrinhoSvg></CarrinhoSvg>
          <p>Meu carrinho</p>
        </div>
        {/* {produtos.map((produto: any, index: any) => {
            return(
                <li className={styles["moveis__lista--item"]}>
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
                </li>
            )
        })} */}
      </section>
    </>
  );
}
