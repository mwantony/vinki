import Axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import styles from "./PaginaProduto.module.scss";
import NotFound from "components/NotFound";
import classNames from "classnames";
import { ReactComponent as Cart } from "../../assets/svg/cartComprar.svg";
import { ReactComponent as Cesta } from "../../assets/svg/cesta.svg";
import { ReactComponent as Share } from "../../assets/svg/share.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/fichatecnica.svg";
import ScrollHorizontal from "components/ScrollHorizontal";
import { atualiza, atualizaCarrinho } from "routes";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import { Collapse, Button } from "react-bootstrap";
import { IMaskInput } from "react-imask";
import PopupFrete from "./PopupFrete";
import { Carousel } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function PaginaProduto({
  setSelecionado,
  carrinhoLocalParsed,
  nome,
}: any) {
  const { idProduto } = useParams();
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [promocao, setPromocao] = useState("");
  const [precoAnterior, setPrecoAnterior] = useState("");
  const [link, setLink] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");
  const [link5, setLink5] = useState("");
  const [set, setSet] = useState(0);
  const linkParaCompartilhar = String(window.location.href);
  const [produtos, setProdutos] = useState([{ foto: "" }]);
  const [cepInput, setCepInput] = useState("");
  const [peso, setPeso] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [garantia, setGarantia] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const valida = (valor: any) => {
    return valor.length === 9 ? false : true;
  };
  Axios.get(`${process.env.REACT_APP_API_URL}/produto/${idProduto}`).then(
    (res) => {
      const produto = res.data;
      if (produto.titulo) {
        setTitulo(produto.titulo);
        setCategoria(produto.categoria);
        setPromocao(produto.promocao);
        setPrecoAnterior(produto.precoAnterior);
        setLink(produto.link);
        setLink2(produto.link2);
        setLink3(produto.link3);
        setLink4(produto.link4);
        setLink5(produto.link5);
        setId(produto.idprodutos);
        setPeso(produto.peso);
        setFornecedor(produto.fornecedor);
        setHeight(produto.height);
        setLength(produto.length);
        setWidth(produto.width);
        setDescricao(produto.descricao);
        setGarantia(produto.garantia);
      } else {
        return;
      }
    }
  );
  if (set === 0) {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom`).then((res) => {
      setProdutos(res.data);
      setSet(1);
    });
  }
  const navigate = useNavigate();
  const [abriFrete, setAbrirFrete] = useState(false);
  const [aparecerLoading, setAparecerLoading] = useState(true);
  if (titulo) {
    return (
      <>
        <section className={styles["produto"]}>
          <div className={styles["produto__inf"]}>
            <div className={styles["produto__im"]}>
              <Carousel indicators={false} data-bs-theme="dark">
                <Carousel.Item className={styles["produto__im1"]}>
                    <img
                    className={styles["produto__imagem"]}
                    src={link}
                    alt={"Foto"}
                  />
                </Carousel.Item>
                {link2 ? (
                  <Carousel.Item className={styles["produto__im1"]}>
                    <img
                      className={styles["produto__imagem"]}
                      src={link2}
                      alt={"Foto"}
                    />
                  </Carousel.Item>
                ) : (
                  ""
                )}
                {link3 ? (
                  <Carousel.Item className={styles["produto__im1"]}>
                    <img
                      className={styles["produto__imagem"]}
                      src={link3}
                      alt={"Foto"}
                    />
                  </Carousel.Item>
                ) : (
                  ""
                )}
                {link4 ? (
                  <Carousel.Item className={styles["produto__im1"]}>
                    <img
                      className={styles["produto__imagem"]}
                      src={link4}
                      alt={"Foto"}
                    />
                  </Carousel.Item>
                ) : (
                  ""
                )}
                {link5 ? (
                  <Carousel.Item className={styles["produto__im1"]}>
                    <img
                      className={styles["produto__imagem"]}
                      src={link5}
                      alt={"Foto"}
                    />
                  </Carousel.Item>
                ) : (
                  ""
                )}
              </Carousel>
            </div>
            <div>
              <div className={styles["produto__informacoes"]}>
                <div>
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
                      <span
                        className={styles["produto__paragrafo--precoAnterior"]}
                      >
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
                    Em até 12x de R$&nbsp;
                    {Number(Number(promocao) / 12)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>
                <div className={styles["produto__botoes"]}>
                  <button
                    className={classNames({
                      [styles["produto__botao"]]: true,
                      [styles["produto__botao--adicionar"]]: true,
                    })}
                    onClick={() => {
                      if (nome !== "") {
                        carrinhoLocalParsed.push({
                          link: linkParaCompartilhar,
                          titulo: titulo,
                          categoria: categoria,
                          promocao: promocao,
                          linkImagem: link,
                          idprodutos: id,
                          height: height,
                          width: width,
                          length: length,
                          fornecedor: fornecedor,
                          peso: peso,
                        });
                        atualizaCarrinho();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Adicionar
                    <Cart className={styles["produto__content"]}></Cart>
                  </button>
                  <button
                    className={classNames({
                      [styles["produto__botao"]]: true,
                      [styles["produto__botao--comprar"]]: true,
                    })}
                    onClick={() => {
                      if (nome !== "") {
                        carrinhoLocalParsed.push({
                          link: linkParaCompartilhar,
                          titulo: titulo,
                          categoria: categoria,
                          promocao: promocao,
                          linkImagem: link,
                          idprodutos: id,
                          height: height,
                          width: width,
                          length: length,
                          fornecedor: fornecedor,
                          peso: peso,
                        });
                        navigate("/carrinho");
                        atualizaCarrinho();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Comprar
                    <Cesta className={styles["produto__content"]}></Cesta>
                  </button>
                </div>
              </div>
              <div className={styles["produto__calcular--div"]}>
                <IMaskInput
                  mask="00000-000"
                  placeholder="Insira o CEP"
                  className={styles["produto__input"]}
                  type="text"
                  onChange={(event: any) => {
                    if (event.target.value.length === 9) {
                      setCepInput(event.target.value);
                    } else {
                      setCepInput("");
                    }
                  }}
                  name="cep"
                ></IMaskInput>
                <button
                  onClick={() => setAbrirFrete(true)}
                  disabled={valida(cepInput)}
                  className={styles["produto__button"]}
                >
                  Calcular
                </button>
              </div>
              <PopupFrete
                height={height}
                length={length}
                promocao={promocao}
                width={width}
                valorProduto={Number(promocao)}
                fornecedor={fornecedor}
                abrirFrete={abriFrete}
                cep={cepInput}
                peso={peso}
                setAbrirFrete={setAbrirFrete}
              ></PopupFrete>
            </div>
          </div>
          <div>
            <Button
              className={classNames({
                [styles["produto__botaocollapse"]]: true,
                [styles["produto__botaocollapse--ativo"]]: isCollapsed,
              })}
              onClick={toggleCollapse}
              variant="#3c3c3c"
            >
              <p>Ficha técnica</p>
              <KeyboardArrowDownIcon
                className={classNames({
                  [styles["produto__fichatecnica"]]: true,
                  [styles["produto__fichatecnica--ativo"]]: isCollapsed,
                })}
              ></KeyboardArrowDownIcon>
            </Button>
            <Collapse className={styles["produto__collapse"]} in={isCollapsed}>
              <div className={styles["produto__collapse--conteudo"]}>
                <div className={styles["produto__collapse--div"]}>
                  <h2>Nome:</h2>
                  <p>{titulo}</p>
                </div>
                <div className={styles["produto__collapse--div"]}>
                  <h2>Descrição:</h2>
                  <p>{descricao}</p>
                </div>
                <div className={styles["produto__collapse--div"]}>
                  <h2>Dimensões:</h2>
                  <p>Largura: {Number(width).toFixed(2).replace(".", ",")}cm</p>
                  <p>Altura: {Number(height).toFixed(2).replace(".", ",")}cm</p>
                  <p>
                    Comprimento: {Number(length).toFixed(2).replace(".", ",")}cm
                  </p>
                </div>
                <div className={styles["produto__collapse--div"]}>
                  <h2>Peso:</h2>
                  <p>
                    {Number(peso) >= 1
                      ? `${Number(peso).toFixed(1).replace(".", ",")}kg`
                      : `${String(peso).replace("0.", "")}g`}
                  </p>
                </div>
                <div className={styles["produto__collapse--div"]}>
                  <h2>Garantia:</h2>
                  <p>{garantia} meses</p>
                </div>
              </div>
            </Collapse>
          </div>
          <h2 className={styles["produto__subtitulo"]}>Veja também</h2>
          <ScrollHorizontal
            produtos={produtos}
            id={"vejaTambem"}
          ></ScrollHorizontal>
        </section>
      </>
    );
  }
  return aparecerLoading === true ? (
    <Loading
      aparecerLoading={aparecerLoading}
      setAparecerLoading={setAparecerLoading}
      ehLogin={false}
    ></Loading>
  ) : (
    <NotFound setSelecionado={setSelecionado}></NotFound>
  );
}
