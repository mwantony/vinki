import styles from "./Carrinho.module.scss";
import { ReactComponent as CarrinhoSvg } from "../../assets/svg/carrinho.svg";
import { ReactComponent as SadFace } from "../../assets/svg/sadface.svg";
import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Axios from "axios";
import FinalizarCompra from "pages/FinalizarCompra";
import Notificacao from "components/Notificacao";
import { isTemplateSpan } from "typescript";
import Loading from "components/Loading";
initMercadoPago("YOUR_PUBLIC_KEY");
Axios.defaults.headers.common["Authorization"] =
  "Bearer APP_USR-5257004078028291-071317-32f7663e901c0dfc178122e42e6d8a3a-1184731359";
interface Props {
  produtos: any;
  nome: any;
  setCarrinho1: any;
  setCarrinhoItems: any;
  carrinhoItems: any;
  id: any;
  cep: any;
}
export default function Carrinho({
  produtos,
  setCarrinho1,
  nome,
  setCarrinhoItems,
  carrinhoItems,
  id,
  cep,
}: Props) {
  console.log(produtos);
  const [parent, enableAnimations] = useAutoAnimate();

  const removerItem = (link: any, ind: any) => {
    const novoArray = produtos.filter((item: any, index: any) => index !== ind);
    setCarrinho1(novoArray);
    setCarrinhoItems(carrinhoItems - 1);
    setTimeout(() => {}, 1000);
    localStorage.setItem("carrinho", JSON.stringify(novoArray));
    window.location.reload();
  };
  const navigate = useNavigate();
  const [redirecionar, setRedirecionar] = useState("");
  const [pode, setPode] = useState(true);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);
  const [idReferencia, setIdReferencia] = useState(uuidv4());
  const [aparecerLoading, setAparecerLoading] = useState(true)
  const [items, setItems] = produtos.map((item: any) => {
    return item.titulo;
  });
  let itemsValor = 0;
  let height = 0;
  let width = 0;
  let length = 0;
  let peso = 0;
  let fornecedor = "";
  const [freteValor, setFreteValor] = useState(0)
  const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTYiLCJqdGkiOiIzNGQ3ZmJkZjdiOGQ2MjU2ZDU2YzIxODhmOGYwODEzMTM1YmY4ZDYyMWE4NzNlYmRlMWFhNjg2MDk0ZDU5NDYyODJiNDViNTk5ZGJjODYzOCIsImlhdCI6MTY5MDQyNTk1Ny4wODE2NTcsIm5iZiI6MTY5MDQyNTk1Ny4wODE2NiwiZXhwIjoxNzIyMDQ4MzU3LjA2ODQxNCwic3ViIjoiOTliZTRiNjItNWZmYy00Y2FhLTk5NGQtYTc1YWViOTVlYzM3Iiwic2NvcGVzIjpbImNhcnQtcmVhZCIsImNhcnQtd3JpdGUiLCJjb21wYW5pZXMtcmVhZCIsImNvbXBhbmllcy13cml0ZSIsImNvdXBvbnMtcmVhZCIsImNvdXBvbnMtd3JpdGUiLCJub3RpZmljYXRpb25zLXJlYWQiLCJvcmRlcnMtcmVhZCIsInByb2R1Y3RzLXJlYWQiLCJwcm9kdWN0cy1kZXN0cm95IiwicHJvZHVjdHMtd3JpdGUiLCJwdXJjaGFzZXMtcmVhZCIsInNoaXBwaW5nLWNhbGN1bGF0ZSIsInNoaXBwaW5nLWNhbmNlbCIsInNoaXBwaW5nLWNoZWNrb3V0Iiwic2hpcHBpbmctY29tcGFuaWVzIiwic2hpcHBpbmctZ2VuZXJhdGUiLCJzaGlwcGluZy1wcmV2aWV3Iiwic2hpcHBpbmctcHJpbnQiLCJzaGlwcGluZy1zaGFyZSIsInNoaXBwaW5nLXRyYWNraW5nIiwiZWNvbW1lcmNlLXNoaXBwaW5nIiwidHJhbnNhY3Rpb25zLXJlYWQiLCJ1c2Vycy1yZWFkIiwidXNlcnMtd3JpdGUiLCJ3ZWJob29rcy1yZWFkIiwid2ViaG9va3Mtd3JpdGUiLCJ3ZWJob29rcy11cGRhdGUiLCJ3ZWJob29rcy1kZWxldGUiLCJ0ZGVhbGVyLXdlYmhvb2siXX0.it0wbEAPHa3wezpRsuWX4W4ejebDzsSIxSf0iGKwZvAR36Q5oETV-3luongKWf-_3wWuqbOxFLMmZrdIBXmb0vh-KrbLEN09EWwIiDgU0RNFEG3a4CjCnbBVoTVi-fftXcwVXXxO3xLCz3H-HxZQ2xQSA-q-WAtk0tyX7o-Rf1wPhAY23xyoOoECkHBXnQr_JCCvfq5jIPIo3j_32TXbYA2aT1Rbj7aoenmn161YMN168G49cHTN88x6B1riOk7cTXboEXKkCNGmLDXLfysQr1wtW3aEyx-4RSiEewnFD7WXlk4zvSulFxDyUs4re12XlH2TKjhWF1cji4KBB9lcKLlNtiw9BwQj61NXZAOWYDsd2YmsufZRd8bvdVS54xe7EOYbhQZNZPu4vfgYpMnxVAuOoBdAyFaWtSP1UqeBmUPOvXtldx--jgounJ4-4a9bvSlONkoODXcl77hnxC1YeCe2Hi9UbB9LVlHH8XRNBNgUeqt88C7ESHA7uD2J5uM4h3tO0Buh9eEDVOlqqiMb3VBGY4NKGm0Tv_5Dt0bF_ryDM9lLBr1uDMsclMq3HjCZYu1H8s15iSzGCDQxNGxBuvrZAxCA8P2H6jdMbxUCFyW2aYjdImpw8XeaIx9WZDTx3LiO6Z84b9s6y1bAno0eMY03TLfYonZ6UwCTz7XryO4`; // Replace with your actual access token
  let fornecedores: any = []
  let itensUnicos = new Set(fornecedores)
  const verFornecedor = () => {
    switch (fornecedor) {
      case "protear":
        return "85816-050";
      case "voltaire":
        return "89930-000";
      case "shopmix":
        return "89930-000";
      default:
        return "85816-050";
    }
  };
  console.log(produtos)
  produtos.map((item: any) => {
    width = width + Number(item.width);
    height = height + Number(item.height);
    length = length + Number(item.length);
    peso = peso + Number(item.peso);
    fornecedor = item.fornecedor;
    fornecedores = [...fornecedores, item.fornecedor]
    itensUnicos = new Set(fornecedores)
    console.log(itensUnicos)
    return (itemsValor = itemsValor += Number(item.promocao));
  });
  const data = {
    from: {
      postal_code: verFornecedor(), // bota esses cep
    },
    to: {
      postal_code: cep,
    },
    products: [
      {
        id: "x",
        width: Number(width),
        height: Number(height),
        length: Number(length),
        weight: Number(peso),
        quantity: 1,
        products_value: Number(itemsValor).toFixed(2),
      },
    ],
    options: {
      receipt: false,
      own_hand: false,
    },
    services: "1",
  };
  const apiUrl =
    "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate";
  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }).then((data) => {
    console.log(data.price);
    setFreteValor(Number(data.price) * itensUnicos.size)
  })
  useEffect(() => {
    if (nome === "") {
      navigate("/login");
    }
    setTimeout(() => {

      if (pode) {
        if (produtos.length !== 0) {
          Axios.post("https://api.mercadopago.com/checkout/preferences", {
            items: [
              {
                title: idReferencia,
                quantity: itemsValor + Number(freteValor),
                currency_id: "BRL",
                unit_price: 1,
                id: "12345678",
              },
            ],
        
          }).then((resposta: any) => {
            setRedirecionar(resposta.data.init_point);
          });
        }
        setPode(false);
      }
    }, 2000)
  }, [freteValor, idReferencia, items, itemsValor, navigate, nome, pode, produtos.length]);
  const [finalizar, setFinalizar] = useState(false);
  
  if(!aparecerLoading) {
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
            {cep === "" ? (
              <button
                className={classNames({
                  [styles["carrinho__botaolista"]]: true,
                  [styles["carrinho__botaolista--pagamento"]]: true,
                })}
                onClick={() => {
                  navigate("/endereco");
                }}
              >
                Endereço
              </button>
            ) : (
              ""
            )}
            {produtos.length !== 0 && cep !== "" ? (
              <button
                className={classNames({
                  [styles["carrinho__botaolista"]]: true,
                  [styles["carrinho__botaolista--pagamento"]]: true,
                })}
                onClick={() => {
                  setFinalizar(true);
                }}
              >
                Ir para o pagamento
              </button>
            ) : (
              ""
            )}
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
        <FinalizarCompra
          setMostrarNotificacao={setMostrarNotificacao}
          idReferencia={idReferencia}
          frete={freteValor}
          setFrete={setFreteValor}
          redirecionar={redirecionar}
          id={id}
          total={itemsValor}
          produtos={produtos}
          finalizar={finalizar}
          setFinalizar={setFinalizar}
        ></FinalizarCompra>
        <Notificacao
          mostrarNotificacao={mostrarNotificacao}
          setMostrarNotificacao={setMostrarNotificacao}
          msg={"Pedido efetuado"}
        ></Notificacao>
      </>
    );

  } else {
    return <Loading aparecerLoading={aparecerLoading} ehLogin={false} setAparecerLoading={setAparecerLoading}></Loading>

  }
}
