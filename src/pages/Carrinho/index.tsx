import styles from "./Carrinho.module.scss";
import { ReactComponent as CarrinhoSvg } from "../../assets/svg/carrinho.svg";
import { ReactComponent as SadFace } from "../../assets/svg/sadface.svg";
import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  produtos: any;
  nome: any
  setCarrinho1: any;
}
export default function Carrinho({ produtos, setCarrinho1, nome }: Props) {
  console.log(produtos);
  const [parent, enableAnimations] = useAutoAnimate()

  const removerItem = (link: any, ind: any) => {
    const novoArray = produtos.filter((item: any, index: any) => index !== ind);
    setCarrinho1(novoArray);
    localStorage.setItem("carrinho", JSON.stringify(novoArray));
  };
  const navigate = useNavigate()
  useEffect(() => {
    if (nome === "") {
      navigate("/login");
    }
  }, [navigate, nome]);
  return (
    <>
      <section className={styles["carrinho"]}>
        <div className={styles["carrinho__title"]}>
          <CarrinhoSvg></CarrinhoSvg>
          <p>Meu carrinho</p>
        </div>
        <div className={styles['carrinho__botoeslista']}>
          <button className={classNames({
            [styles['carrinho__botaolista']]: true,
            [styles['carrinho__botaolista--continuar']]: true
          })} onClick={() => {
            navigate('/')
          }}>Continuar comprando</button>
          <button className={classNames({
            [styles['carrinho__botaolista']]: true,
            [styles['carrinho__botaolista--pagamento']]: true
          })}>Ir para o pagamento</button>
        </div>
        <ul ref={parent} className={styles["carrinho__lista"]}>
          {produtos.length !== 0 ? (
            produtos.map((produto: any, index: any) => {
              return (
                <div
                  className={classNames({
                    [styles["carrinho__lista--item"]]: true,
                  })}
                >
                  <div
                    className={styles["lista__imagem"]}
                    style={{
                      backgroundImage: "url(" + produto.linkImagem + ")",
                    }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <a href={produto.link} className={styles["lista__subtitulo"]}>
                      {produto.titulo}
                    </a>
                    <p className={styles["lista__categoria"]}>
                      {produto.categoria}
                    </p>
                    <h3 className={styles["lista__promo"]}>
                      R$ {Number(produto.promocao).toFixed(2).replace(".", ",")}
                    </h3>
                  </div>
                  <Trash
                    onClick={() => {
                      removerItem(produto.link, index);
                    }}
                    className={styles["carrinho__lixeira"]}
                  ></Trash>
                </div>
              );
            })
          ) : (
            <div className={styles["carrinho__div"]}>
              <p className={styles["carrinho__vazio"]}>Carrinho vazio...</p>
              <SadFace className={styles["carrinho__sadface"]}></SadFace>
            </div>
          )}
        </ul>
      </section>
    </>
  );
}
