import Axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import styles from "./PaginaProduto.module.scss";
import NotFound from "components/NotFound";
import classNames from "classnames";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";
import { ReactComponent as Cesta } from "../../assets/svg/cesta.svg";
import { ReactComponent as Share } from "../../assets/svg/share.svg";
import ScrollHorizontal from "components/ScrollHorizontal";
export default function PaginaProduto({ setSelecionado }: any) {
  const { idProduto } = useParams();
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [promocao, setPromocao] = useState("");
  const [precoAnterior, setPrecoAnterior] = useState("");
  const [link, setLink] = useState("");
  const [set, setSet] = useState(0);
  const linkParaCompartilhar = String(window.location.href)
  const [produtos, setProdutos] = useState([{ foto: "" }]);
  Axios.get(`http://localhost:3001/produto/${idProduto}`).then((res) => {
    const produto = res.data;
    if (produto.titulo) {
      setTitulo(produto.titulo);
      setCategoria(produto.categoria);
      setPromocao(produto.promocao);
      setPrecoAnterior(produto.precoAnterior);
      setLink(produto.link);
    } else {
      return;
    }
  });
  if (set === 0) {
    Axios.get(`http://localhost:3001/produtosrandom`).then((res) => {
      setProdutos(res.data);
      setSet(1);
    });
  }
  if (titulo) {
    return (
      <>
        <section className={styles["produto"]}>
          <img
            src={link}
            alt="Imagem do produto"
            className={styles["produto__imagem"]}
          />
          <h2></h2>
          <div className={styles["produto__informacoes"]}>
            <div className={styles["produto__first"]}>
              <div>
                <h3 className={styles["produto__titulo"]}>{titulo}</h3>
                <p className={styles["produto__paragrafo"]}>
                  Vendido e entregue por Vinki!
                </p>
              </div>
              <Share
                className={styles["produto__share"]}
                onClick={() =>
                  navigator.share({
                    title: "Compre mais barato nas Lojas Vinki!",
                    text: "Compre mais barato nas Lojas Vinki!",
                    url: linkParaCompartilhar,
                  })
                }
              ></Share>
            </div>
            <div>
              <p
                className={classNames({
                  [styles["produto__paragrafo"]]: true,
                  [styles["produto__paragrafo--precoAnt"]]: true,
                })}
              >
                De{" "}
                <span className={styles["produto__paragrafo--precoAnterior"]}>
                  R$ {Number(precoAnterior).toFixed(2).replace(".", ",")}
                </span>
              </p>
              <p className={styles["produto__paragrafo"]}>Por apenas:</p>
            </div>
            <h4 className={styles["produto__paragrafo--preco"]}>
              R$ {Number(promocao).toFixed(2).replace(".", ",")}
            </h4>
            <p
              className={classNames({
                [styles["produto__paragrafo"]]: true,
              })}
            >
              Em até 12x de{" "}
              {Number(Number(promocao) / 12)
                .toFixed(2)
                .replace(".", ",")}
            </p>
            <div className={styles["produto__botoes"]}>
              <button
                className={classNames({
                  [styles["produto__botao"]]: true,
                  [styles["produto__botao--adicionar"]]: true,
                })}
              >
                Adicionar
                <Cart className={styles["produto__content"]}></Cart>
              </button>
              <button
                className={classNames({
                  [styles["produto__botao"]]: true,
                  [styles["produto__botao--comprar"]]: true,
                })}
              >
                Comprar
                <Cesta className={styles["produto__content"]}></Cesta>
              </button>
            </div>
          </div>
          <h2 className={styles["produto__subtitulo"]}>Veja também</h2>
          <ScrollHorizontal produtos={produtos}></ScrollHorizontal>
        </section>
      </>
    );
  }
  return <NotFound setSelecionado={setSelecionado}></NotFound>;
}
