import styles from "./Carrinho.module.scss";
import { ReactComponent as CarrinhoSvg } from "../../assets/svg/carrinho.svg";
import { ReactComponent as SadFace } from "../../assets/svg/sadface.svg";
import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Axios from "axios";
initMercadoPago("YOUR_PUBLIC_KEY");
Axios.defaults.headers.common["Authorization"] =
  "Bearer APP_USR-5257004078028291-071317-32f7663e901c0dfc178122e42e6d8a3a-1184731359";
interface Props {
  produtos: any;
  nome: any;
  setCarrinho1: any;
  setCarrinhoItems: any
  carrinhoItems: any
}
export default function Carrinho({ produtos, setCarrinho1, nome, setCarrinhoItems, carrinhoItems }: Props) {
  console.log(produtos);
  const [parent, enableAnimations] = useAutoAnimate();

  const removerItem = (link: any, ind: any) => {
    const novoArray = produtos.filter((item: any, index: any) => index !== ind);
    setCarrinho1(novoArray);
    setCarrinhoItems(carrinhoItems - 1)
    setTimeout(() => {

    },1000)
    localStorage.setItem("carrinho", JSON.stringify(novoArray));
  };
  const navigate = useNavigate();
  const [redirecionar, setRedirecionar] = useState("");
  const [pode, setPode] = useState(true);

  const [items, setItems] = produtos.map((item: any) => {
    return item.titulo;
  });
  let itemsValor = 0;
  produtos.map((item: any) => {
    return (itemsValor = itemsValor += Number(item.promocao));
  });
  useEffect(() => {

    if (nome === "") {
      navigate("/login");
    }
    if (pode) {
      if(produtos.length !== 0) {
      Axios.post("https://api.mercadopago.com/checkout/preferences", {
        items: [
          {
            title: items,
            quantity: itemsValor,
            currency_id: "BRL",
            unit_price: 1,
          },
        ],
      }).then((resposta: any) => {
        setRedirecionar(resposta.data.init_point)
      });
    }
      setPode(false);
    }
  }, [items, itemsValor, navigate, nome, pode]);
  return (
    <>
      <section className={styles["carrinho"]}>
        <div className={styles["carrinho__title"]}>
          <CarrinhoSvg></CarrinhoSvg>
          <p>Meu carrinho</p>
        </div>
        <div className={styles["carrinho__botoeslista"]}>
          <button
            className={classNames({
              [styles["carrinho__botaolista"]]: true,
              [styles["carrinho__botaolista--continuar"]]: true,
            })}
            onClick={() => {
              navigate("/");
            }}
          >
            Continuar comprando
          </button>
          <a href={redirecionar} target="_blank" rel="noreferrer">
            <button
              className={classNames({
                [styles["carrinho__botaolista"]]: true,
                [styles["carrinho__botaolista--pagamento"]]: true,
              })}
            >
              Ir para o pagamento
            </button>
          </a>
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
                    <a
                      href={produto.link}
                      className={styles["lista__subtitulo"]}
                    >
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
